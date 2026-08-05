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
    projects: [
      {
        slug: 'amber-terminal',
        name: 'Amber Terminal',
        category: 'Landing',
        year: '2026',
        description:
          'A developer landing page with a warm evening aesthetic — amber CRT glow, coffee stains, and a command-palette powered by Framer Motion.',
        tags: ['React 19', 'TypeScript', 'Motion'],
        image: '/images/project-amber-terminal.svg',
        url: 'http://localhost:5174',
        proofType: 'screenshot' as const,
      },
      {
        slug: 'aurum-noir',
        name: 'Aurum Noir',
        category: 'Brand',
        year: '2026',
        description:
          'A black-and-gold luxury landing for an independent watch house — limited editions of 200, scroll-choreographed storytelling.',
        tags: ['React 19', 'Design System', 'Lenis'],
        image: '/images/project-aurum-noir.svg',
        url: 'http://localhost:5175',
        proofType: 'screenshot' as const,
      },
      {
        slug: 'meridian',
        name: 'Meridian',
        category: 'Product',
        year: '2026',
        description:
          'A financial OS for freelancers — invoices, taxes, expenses and cash-flow forecasts in one living spreadsheet.',
        tags: ['React 19', 'shadcn/ui', 'GSAP'],
        image: '/images/project-meridian.svg',
        url: 'http://localhost:5176',
        proofType: 'screenshot' as const,
      },
      {
        slug: 'uimailbot',
        name: 'UIMailBot',
        category: 'Bot',
        year: '2025',
        description:
          'A hosted Telegram bot handling mail-style workflows in chat — deployed, live, and running in production.',
        tags: ['Telegram API', 'Node.js', 'Deployed'],
        image: '/images/project-uimailbot.svg',
        url: 'https://t.me/uimailbot',
        proofType: 'architecture' as const,
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
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleTheme: 'Toggle theme',
  },
};

export type Dictionary = typeof en;
