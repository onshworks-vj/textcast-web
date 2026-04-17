export type Lang = 'ko' | 'en';

export const strings = {
  ko: {
    nav: {
      features: '기능',
      demo: '데모',
      download: '다운로드',
      faq: 'FAQ',
      langSwitch: 'EN',
      langSwitchHref: '/',
    },
    hero: {
      badge: 'Beta v0.1.0',
      title: '가사와 텍스트를,\n영상 위로 실시간 송출',
      subtitle:
        'VJ·공연·예배·라이브 스트리밍을 위한 텍스트 송출 도구. 복사-붙여넣기 한 번이면 프리뷰, 애니메이션, 출력까지 한 번에.',
      primary: '다운로드',
      secondary: '기능 보기',
      support: 'macOS 11+  ·  Windows 10+ (64-bit)',
    },
    platforms: {
      mac: 'macOS 용 Syphon 출력',
      win: 'Windows 용 Spout 출력',
      hint: '레졸룸 · OBS · TouchDesigner · MadMapper 등 주요 VJ/스트리밍 툴과 바로 연결됩니다.',
    },
    features: {
      title: '핵심 기능',
      subtitle: '준비 시간은 줄이고, 무대에 집중하세요.',
      comingSoon: 'Coming Soon',
      items: [
        {
          title: '실시간 텍스트 송출',
          desc: '대기열에 쌓아둔 문장을 한 번의 클릭으로 즉시 송출합니다. 공연 중 줄바꿈, 순서 변경, 메모까지 그대로 반영됩니다.',
          comingSoon: false,
        },
        {
          title: '곡 모드 · 가사 청크',
          desc: '가사를 곡 단위로 등록하고 원하는 줄 수로 자동 분할. 우클릭 한 번이면 청크 크기도 즉석에서 조정됩니다.',
          comingSoon: true,
        },
        {
          title: '15종 애니메이션',
          desc: '페이드 · 슬라이드 · 줌 · 블러. 글자/단어/줄 단위, 방향, 등장·퇴장 타이밍까지 모두 컨트롤할 수 있습니다.',
          comingSoon: false,
        },
        {
          title: '타이포그래피 & 스타일',
          desc: '내장 폰트, 시스템 폰트, 직접 업로드한 폰트 지원. 색상, 자간, 줄 높이, 그림자, 외곽선까지 세밀하게 조정합니다.',
          comingSoon: false,
        },
        {
          title: '알파 · 크로마키 출력',
          desc: '투명 배경으로 영상 위에 바로 오버레이하거나, 블랙/그린 배경으로 크로마키 합성할 수 있습니다.',
          comingSoon: false,
        },
        {
          title: '성능 모드',
          desc: '균형 모드는 대기 중 리소스를 아끼고, 고성능 모드는 설정된 FPS를 항상 유지합니다. 라이브 환경에 맞춰 선택하세요.',
          comingSoon: false,
        },
      ],
    },
    demo: {
      title: '한 화면에서 모두 확인',
      desc: '좌측 입력, 중앙 프리뷰, 우측 대기열. 입력부터 송출까지의 흐름이 그대로 보이도록 설계했습니다.',
    },
    download: {
      title: '지금 다운로드',
      subtitle: '베타 기간 동안 모든 기능을 자유롭게 사용해 보세요.',
      version: '최신 버전',
      mac: 'macOS용 다운로드',
      win: 'Windows용 다운로드',
      note: '유니버설 빌드 (Apple Silicon · Intel) / Windows x64',
      checksum: 'GitHub Releases에서 다운로드',
    },
    pricing: {
      title: '가격',
      subtitle: '베타 기간 동안 무료. 정식 출시 후 일회성 구매 라이선스로 전환됩니다.',
      card: {
        tag: 'Beta',
        price: '무료',
        period: '베타 기간',
        features: [
          '모든 기능 사용 가능',
          '업데이트 자동 반영',
          '이메일 기반 라이선스 등록',
          '오프라인 24시간 유지',
        ],
        cta: '지금 시작하기',
      },
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          q: '어떤 VJ/스트리밍 소프트웨어와 호환되나요?',
          a: 'macOS에서는 Syphon, Windows에서는 Spout을 통해 텍스트를 송출합니다. Resolume, OBS Studio, TouchDesigner, MadMapper 등 Syphon/Spout을 지원하는 대부분의 툴에서 소스로 받을 수 있습니다.',
        },
        {
          q: '배경이 투명한 상태로 영상 위에 올릴 수 있나요?',
          a: '네. 출력 설정에서 알파 채널을 켜면 투명 배경으로 송출되어 영상 위에 바로 오버레이할 수 있습니다. 알파를 지원하지 않는 환경에서는 블랙 또는 그린 크로마키 배경을 선택할 수 있습니다.',
        },
        {
          q: '오프라인에서도 사용할 수 있나요?',
          a: '한 번 라이선스를 등록하면 최대 24시간 동안 오프라인 상태에서도 정상 동작합니다. 인터넷에 다시 연결되면 자동으로 갱신됩니다.',
        },
        {
          q: '커스텀 폰트를 쓸 수 있나요?',
          a: 'OTF/TTF 폰트를 직접 업로드해 사용할 수 있습니다. 시스템에 설치된 폰트도 그대로 불러올 수 있습니다.',
        },
        {
          q: '공연 중 CPU를 얼마나 쓰나요?',
          a: '대기 중에는 프레임을 낮춰 리소스를 아끼는 균형 모드가 기본입니다. 라이브에서 프레임 드롭이 허용되지 않는 상황이라면 고성능 모드로 설정 FPS를 항상 유지할 수 있습니다.',
        },
        {
          q: '피드백은 어디로 보내면 되나요?',
          a: '앱 내 설정 > 일반 > 피드백에서 바로 보낼 수 있습니다. 버그 리포트, 기능 제안 모두 환영합니다.',
        },
      ],
    },
    footer: {
      tagline: '무대를 위한 텍스트 송출 도구',
      rights: '© 2026 TextCast. All rights reserved.',
      links: {
        download: '다운로드',
        releases: '릴리즈 노트',
        contact: '문의',
      },
    },
  },
  en: {
    nav: {
      features: 'Features',
      demo: 'Demo',
      download: 'Download',
      faq: 'FAQ',
      langSwitch: 'KO',
      langSwitchHref: '/ko/',
    },
    hero: {
      badge: 'Beta v0.1.0',
      title: 'Broadcast lyrics and text,\nlive on screen.',
      subtitle:
        'A text broadcasting tool for VJs, live performances, worship, and streaming. From queue to preview, animation, and output — in one click.',
      primary: 'Download',
      secondary: 'See features',
      support: 'macOS 11+  ·  Windows 10+ (64-bit)',
    },
    platforms: {
      mac: 'Syphon output on macOS',
      win: 'Spout output on Windows',
      hint: 'Pulls straight into Resolume, OBS, TouchDesigner, MadMapper, and other major VJ and streaming tools.',
    },
    features: {
      title: 'What you get',
      subtitle: 'Less setup time. More stage time.',
      comingSoon: 'Coming Soon',
      items: [
        {
          title: 'Live text broadcasting',
          desc: 'Queue lines ahead of time, fire them with one click. Edit, reorder, add memos — all reflected live during the show.',
          comingSoon: false,
        },
        {
          title: 'Song mode · lyric chunks',
          desc: 'Register lyrics as songs and split them by the number of lines you want. Right-click any chunk to resize it on the fly.',
          comingSoon: true,
        },
        {
          title: '15 animation presets',
          desc: 'Fade, slide, zoom, blur. Control by character, word, or line — plus direction, entry/exit timing, and stagger.',
          comingSoon: false,
        },
        {
          title: 'Typography & style',
          desc: 'Built-in fonts, system fonts, or upload your own. Fine-tune color, letter spacing, line height, shadow, and stroke.',
          comingSoon: false,
        },
        {
          title: 'Alpha & chroma output',
          desc: 'Overlay directly onto video with a transparent background, or output on black / green for chroma keying.',
          comingSoon: false,
        },
        {
          title: 'Performance modes',
          desc: 'Balanced mode saves resources when idle. Performance mode locks the configured FPS for zero-drop live shows.',
          comingSoon: false,
        },
      ],
    },
    demo: {
      title: 'Everything on one screen',
      desc: 'Input on the left, preview in the middle, queue on the right. The flow from typing to broadcast is always in view.',
    },
    download: {
      title: 'Download now',
      subtitle: 'Use every feature free during the beta.',
      version: 'Latest release',
      mac: 'Download for macOS',
      win: 'Download for Windows',
      note: 'Universal build (Apple Silicon · Intel) / Windows x64',
      checksum: 'Download from GitHub Releases',
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Free during beta. One-time license purchase after launch.',
      card: {
        tag: 'Beta',
        price: 'Free',
        period: 'during beta',
        features: [
          'Every feature unlocked',
          'Automatic updates',
          'Email-based license',
          '24h offline grace period',
        ],
        cta: 'Get started',
      },
    },
    faq: {
      title: 'Frequently asked',
      items: [
        {
          q: 'Which VJ/streaming software is supported?',
          a: 'TextCast uses Syphon on macOS and Spout on Windows. Anything that accepts Syphon or Spout sources — Resolume, OBS Studio, TouchDesigner, MadMapper, and more — will pick it up.',
        },
        {
          q: 'Can I overlay on top of video with a transparent background?',
          a: 'Yes. Enable alpha channel in the output settings and TextCast broadcasts with a fully transparent background. For hosts that do not support alpha, you can choose black or green chroma key backgrounds instead.',
        },
        {
          q: 'Does it work offline?',
          a: 'Once registered, the license stays valid for up to 24 hours offline. It refreshes automatically the next time you connect.',
        },
        {
          q: 'Can I use custom fonts?',
          a: 'Yes — upload OTF/TTF files directly, or use any font installed on your system.',
        },
        {
          q: 'How heavy is it during a show?',
          a: 'Balanced mode lowers the frame rate while idle to save CPU/GPU. If you cannot afford any frame drops on stage, switch to Performance mode and the configured FPS is held at all times.',
        },
        {
          q: 'Where do I send feedback?',
          a: 'Open Settings → General → Feedback inside the app. Bug reports and feature requests are both welcome.',
        },
      ],
    },
    footer: {
      tagline: 'A text broadcasting tool built for the stage.',
      rights: '© 2026 TextCast. All rights reserved.',
      links: {
        download: 'Download',
        releases: 'Releases',
        contact: 'Contact',
      },
    },
  },
} as const;

export type Strings = (typeof strings)['ko'];
