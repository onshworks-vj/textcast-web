# textcast-web

[TextCast](https://onsight3.gumroad.com/l/TextCastbeta) 마케팅 사이트입니다. Astro로 빌드되는 정적 사이트로, 영문(`/`)·한국어(`/ko/`) 두 로케일과 비공개 초대 페이지(`/[invitee]`)를 포함합니다.

## Stack

- [Astro 6](https://astro.build) (정적 빌드)
- [Tailwind CSS 4](https://tailwindcss.com) (`@tailwindcss/vite`)
- TypeScript
- Node.js 22.12+

## 구조

```
src/
├── components/      # Hero, Features, Demo, Download, FAQ, Footer, Nav
├── data/            # invitees.ts — 비공개 초대 라이센스 데이터
├── i18n/            # strings.ts — ko/en 카피
├── layouts/         # Layout.astro
├── lib/             # releases.ts — GitHub Releases 최신 버전 자동 fetch
├── pages/
│   ├── index.astro          # /        (영문)
│   ├── ko/index.astro       # /ko/     (한국어)
│   ├── [invitee].astro      # /:slug   (비공개 초대)
│   └── 404.astro
└── styles/          # global.css
```

## 개발

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # ./dist/
npm run preview
```

## 라이센스 발급

베타 기간 동안 [Gumroad](https://onsight3.gumroad.com/l/TextCastbeta)에서 무료로 발급됩니다. 비공개 초대는 `src/data/invitees.ts`에 슬러그 단위로 등록되어 `/{slug}` 경로로 노출되며, 만료된 초대는 Supabase `licenses` 테이블의 `machine_id`/`status` 값을 조회해 빌드 후 클라이언트에서 자동 처리됩니다.
