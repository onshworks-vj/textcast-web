export type Invitee = {
  slug: string;
  displayName: string;
  greeting: string;
  message: string;
  licenseEmail: string;
  licenseKey: string;
};

export const invitees: Invitee[] = [
  {
    slug: 'zes',
    displayName: 'VJ zes',
    greeting: 'VJ zes 님께',
    message:
      '가장 먼저 TextCast 를 열어드립니다.\n된다면 사용해 보시고, 좋은 말씀이든 쓴소리든 편히 피드백 부탁드리겠습니다.\n사랑합니다.',
    licenseEmail: 'zes@zes.kr',
    licenseKey: 'zes',
  },
  {
    slug: 'pulse',
    displayName: 'VJ pulse',
    greeting: 'VJ pulse 님께',
    message:
      '가장 먼저 TextCast 를 열어드립니다.\n된다면 사용해 보시고, 좋은 말씀이든 쓴소리든 편히 피드백 부탁드리겠습니다.\n사랑합니다.',
    licenseEmail: 'pulse@spvs.kr',
    licenseKey: 'pulse',
  },
  {
    slug: 'rocky',
    displayName: 'VJ rocky',
    greeting: 'VJ rocky 님께',
    message:
      '가장 먼저 TextCast 를 열어드립니다.\n된다면 사용해 보시고, 좋은 말씀이든 쓴소리든 편히 피드백 부탁드리겠습니다.\n사랑합니다.',
    licenseEmail: 'rocky@spvs.kr',
    licenseKey: 'rocky',
  },
  {
    slug: 'kkyu',
    displayName: 'VJ kkyu',
    greeting: 'VJ kkyu 님께',
    message: '씨바라 써봐라 만들었다 드디어',
    licenseEmail: 'kkyu@spvs.kr',
    licenseKey: 'kkyu',
  },
];

export function getInvitee(slug: string): Invitee | undefined {
  return invitees.find((i) => i.slug === slug);
}
