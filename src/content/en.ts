import { PROJECT_URLS, PROJECT_GITHUB_URLS } from '@/lib/config';

export const en = {
  nav: {
    capabilities: 'Capabilities',
    works: 'Works',
    contact: 'Get in Touch',
  },
  hero: {
    eyebrow: 'Solo Developer Studio',
    headline: 'One person. Full stack. Zero friction.',
    subheadline:
      'I partner with ambitious teams to ship digital products, brand systems, and the infrastructure that holds them together — from idea to production.',
    ctaPrimary: 'Get in Touch',
    ctaSecondary: 'View Work',
    scroll: 'Scroll',
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'What I do best',
    subtitle: 'A single point of entry for your entire stack — no handoffs, no delays.',
    cards: [
      {
        title: 'Landing Pages',
        description:
          'High-conversion, motion-rich pages that tell your story and drive action. Built for performance and SEO.',
        icon: 'Rocket',
      },
      {
        title: 'Websites & Mini-Apps',
        description:
          'Full-featured web apps and Telegram mini-apps with real-time data, auth, and payments.',
        icon: 'Layout',
      },
      {
        title: 'Telegram Bots',
        description:
          'Automation, notifications, and conversational interfaces that integrate with your existing stack.',
        icon: 'Bot',
      },
      {
        title: 'Microservices & APIs',
        description:
          'Scalable backend architecture, REST and GraphQL APIs, and database design that grows with you.',
        icon: 'Server',
      },
      {
        title: 'Automation & Integrations',
        description:
          'Connect disparate tools into cohesive pipelines. Zapier, n8n, or custom webhook solutions.',
        icon: 'Workflow',
      },
      {
        title: 'Optimization',
        description:
          'Core Web Vitals, bundle size, caching strategies — speed is a feature, not an afterthought.',
        icon: 'Gauge',
      },
      {
        title: 'Product Design',
        description:
          'UI/UX systems, design tokens, and component libraries that keep your product consistent at scale.',
        icon: 'Palette',
      },
    ],
  },
  works: {
    eyebrow: 'Portfolio',
    title: 'Selected Work',
    subtitle: 'Projects shipped end-to-end. Each one tells a different story.',
    openGithub: 'GitHub',
    openLive: 'Open',
    projects: [
      {
        slug: 'amber-terminal',
        name: 'Amber Terminal',
        description:
          'A personal developer landing page with a warm evening coding session aesthetic — amber-phosphor CRT terminal glow, coffee stains on a wooden desk, and the quiet hum of a late-night hacking session.',
        image: '/images/amber-terminal.png',
        url: PROJECT_URLS.amber,
        github: PROJECT_GITHUB_URLS.amber,
      },
      {
        slug: 'aurum-noir',
        name: 'Aurum Noir',
        description:
          'Landing page for AURUM NOIR — an independent watch house producing mechanical timepieces in limited editions of 200 pieces.',
        image: '/images/aurum-noir.png',
        url: PROJECT_URLS.aurum,
        github: PROJECT_GITHUB_URLS.aurum,
      },
      {
        slug: 'meridian',
        name: 'Meridian',
        description:
          'One—page landing page (SPA) of neobank for freelancers and the self-employed: invoices, taxes, expenses and cash flow forecast - in one "accounting" table with live animation.',
        image: '/images/meridian-kimi.png',
        url: PROJECT_URLS.meridian,
        github: PROJECT_GITHUB_URLS.meridian,
      },
      {
        slug: 'uimailbot',
        name: 'UIMailBot',
        description:
          'Read and manage Gmail and Yandex mailboxes from inside Telegram. The bot delivers new-mail notifications straight to the chat; the Mini App is a full inbox: list, categories, message view, mark-as-read — no extra apps.',
        image: '/images/uimailbot.png',
        url: PROJECT_URLS.uimailbot,
        github: PROJECT_GITHUB_URLS.uimailbot,
      },
      {
        slug: 'work-parser',
        name: 'Work Parser',
        description:
          'Monitors 28 Telegram channels with freelance orders. Keyword filtering and AI-powered auto-replies on Kwork with one-click confirmation.',
        image: '/images/work-parser.png',
        github: PROJECT_GITHUB_URLS.workParser,
      },
      {
        slug: 'vika-ai-bot',
        name: 'Vika AI Bot',
        description:
          'AI-powered Telegram bot that communicates like a teenage girl: slang, typos, multiple short messages, initiative messages.',
        image: '/images/vika-ai-bot.png',
        github: PROJECT_GITHUB_URLS.vika,
      },
      {
        slug: 'auto-tg',
        name: 'Auto TG',
        description:
          'A FunPay Cardinal plugin that automates operations on a digital goods marketplace — cuts manual work, speeds up deal processing, and automates routine buy/sell tasks. Refactored the code, improved deal logic, optimized database interactions, and increased stability.',
        image: '/images/auto-tg.png',
        github: PROJECT_GITHUB_URLS.autoTg,
      },
      {
        slug: 'ai-reshalka',
        name: 'AI Решалка',
        description:
          'A Russian-language Chrome MV3 extension that solves math problems from a selected screen region. Two modes — step-by-step solution and short answer, 20 free requests, $4.99/month premium, and secure authentication.',
        image: '/images/ai-reshalka.png',
        github: PROJECT_GITHUB_URLS.aiReshalka,
      },
      {
        slug: 'b2b-api-service-doublecheck',
        name: 'B2B API Service',
        description:
          'Async FastAPI bridge between Bitrix24 CRM and System 313. Replaced a 20-request legacy duplicate check with crm.duplicate.findbycomm, running LEAD and CONTACT lookups in parallel via asyncio.gather.',
        image: '/images/b2b-api-service-doublecheck.png',
        github: PROJECT_GITHUB_URLS.doubleCheck,
      },
      {
        slug: 'b2b-api-service-get_id_from_us_tg',
        name: 'Telegram ID Resolver',
        description:
          'FastAPI service that resolves a Bitrix24 contact Telegram username to a numeric user_id via Telethon MTProto, then writes it back to the CRM with post-write verification.',
        image: '/images/b2b-api-service-get_id_from_us_tg.png',
        github: PROJECT_GITHUB_URLS.getUsTg,
      },
    ],
  },
  cta: {
    eyebrow: "Let's Talk",
    title: 'Have a project in mind?',
    subtitle: 'I read every message. No bots, no middlemen — just direct engineering.',
    button: 'Start a conversation',
  },
  footer: {
    copyright: '© 2025 RJX. Built with precision.',
    links: {
      telegram: 'Telegram',
    },
  },
  terminal: {
    lines: [
      'guest@rjx:~$ ssh pica105@rjx.dev',
      'Connected. Welcome back.',
      'guest@rjx:~$ ./boot --env=production',
      '[ok] loading services............ done',
      '[ok] mounting frontend layer...... done',
      '[ok] linking telegram channel..... done',
      '[ok] calibrating gradients........ done',
      '[ok] warming up the grid.......... done',
      'guest@rjx:~$ launch rjx-portfolio',
    ],
  },
  a11y: {
    skipToContent: 'Skip to content',
    toggleTheme: 'Toggle theme',
  },
};

export type Dictionary = typeof en;
