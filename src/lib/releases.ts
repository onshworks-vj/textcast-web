export type ReleaseInfo = {
  version: string;
  macUrl: string;
  winUrl: string;
  releasesUrl: string;
};

const REPO = 'onshworks-vj/textcast-releases';
const RELEASES_URL = `https://github.com/${REPO}/releases`;

const FALLBACK: ReleaseInfo = {
  version: 'v0.1.3',
  macUrl: `${RELEASES_URL}/download/v0.1.3/TextCast-0.1.3-universal.dmg`,
  winUrl: `${RELEASES_URL}/download/v0.1.0/TextCast.Setup.0.1.0.exe`,
  releasesUrl: RELEASES_URL,
};

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = (await res.json()) as {
      tag_name: string;
      assets: { name: string; browser_download_url: string }[];
    };
    const macAsset = data.assets.find((a) => a.name.endsWith('.dmg'));
    const winAsset = data.assets.find((a) => a.name.endsWith('.exe'));
    return {
      version: data.tag_name,
      macUrl: macAsset?.browser_download_url ?? FALLBACK.macUrl,
      winUrl: winAsset?.browser_download_url ?? FALLBACK.winUrl,
      releasesUrl: RELEASES_URL,
    };
  } catch (err) {
    console.warn('[releases] Failed to fetch latest release, using fallback:', (err as Error).message);
    return FALLBACK;
  }
}
