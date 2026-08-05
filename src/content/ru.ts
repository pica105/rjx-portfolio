import type { Dictionary } from './en';
import { PROJECT_URLS } from '@/lib/config';

export const ru: Dictionary = {
  nav: {
    capabilities: 'Возможности',
    works: 'Работы',
    contact: 'Написать',
  },
  hero: {
    eyebrow: 'Соло-студия разработки',
    headline: 'Один человек. Полный стек. Ноль трения.',
    subheadline:
      'Помогаю амбициозным командам выпускать цифровые продукты, бренд-системы и инфраструктуру, которая всё это держит — от идеи до продакшена.',
    ctaPrimary: 'Написать',
    ctaSecondary: 'Смотреть работы',
    scroll: 'Листай',
  },
  capabilities: {
    eyebrow: 'Возможности',
    title: 'Что я делаю лучше всего',
    subtitle: 'Единая точка входа для всего вашего стека — без передачи задач и задержек.',
    cards: [
      {
        title: 'Лендинги',
        description:
          'Конверсионные страницы с богатой анимацией, которые рассказывают вашу историю и ведут к действию. Под производительность и SEO.',
        icon: 'Rocket',
      },
      {
        title: 'Сайты и мини-приложения',
        description:
          'Полноценные веб-приложения и Telegram mini-apps с данными в реальном времени, авторизацией и платежами.',
        icon: 'Layout',
      },
      {
        title: 'Telegram-боты',
        description:
          'Автоматизация, уведомления и разговорные интерфейсы, интегрированные с вашим стеком.',
        icon: 'Bot',
      },
      {
        title: 'Микросервисы и API',
        description:
          'Масштабируемая бэкенд-архитектура, REST и GraphQL API, дизайн баз данных, который растёт вместе с вами.',
        icon: 'Server',
      },
      {
        title: 'Автоматизация и интеграции',
        description:
          'Связываю разрозненные инструменты в единые конвейеры: Zapier, n8n или кастомные вебхуки.',
        icon: 'Workflow',
      },
      {
        title: 'Оптимизация',
        description:
          'Core Web Vitals, размер бандла, стратегии кеширования — скорость это фича, а не послесловие.',
        icon: 'Gauge',
      },
      {
        title: 'Продуктовый дизайн',
        description:
          'UI/UX-системы, дизайн-токены и библиотеки компонентов, которые держат продукт консистентным в масштабе.',
        icon: 'Palette',
      },
    ],
  },
  works: {
    eyebrow: 'Портфолио',
    title: 'Избранные работы',
    subtitle: 'Проекты, выпущенные от начала до конца. У каждого своя история.',
    projects: [
      {
        slug: 'amber-terminal',
        name: 'Amber Terminal',
        category: 'Лендинг',
        year: '2026',
        description:
          'Лендинг разработчика в тёплой вечерней эстетике — янтарное свечение CRT, пятна от кофе и командная палитра на Framer Motion.',
        tags: ['React 19', 'TypeScript', 'Motion'],
        image: '/images/project-amber-terminal.svg',
        url: PROJECT_URLS.amber,
        proofType: 'screenshot' as const,
      },
      {
        slug: 'aurum-noir',
        name: 'Aurum Noir',
        category: 'Бренд',
        year: '2026',
        description:
          'Люксовый чёрно-золотой лендинг независимой часовой мануфактуры — лимитированные серии по 200 экземпляров.',
        tags: ['React 19', 'Дизайн-система', 'Lenis'],
        image: '/images/project-aurum-noir.svg',
        url: PROJECT_URLS.aurum,
        proofType: 'screenshot' as const,
      },
      {
        slug: 'meridian',
        name: 'Meridian',
        category: 'Продукт',
        year: '2026',
        description:
          'Финансовая ОС для фрилансеров — инвойсы, налоги, расходы и прогноз cash flow в одной живой таблице.',
        tags: ['React 19', 'shadcn/ui', 'GSAP'],
        image: '/images/project-meridian.svg',
        url: PROJECT_URLS.meridian,
        proofType: 'screenshot' as const,
      },
      {
        slug: 'uimailbot',
        name: 'UIMailBot',
        category: 'Бот',
        year: '2025',
        description:
          'Развёрнутый Telegram-бот для почтовых сценариев прямо в чате — запущен и работает в продакшене.',
        tags: ['Telegram API', 'Node.js', 'Задеплоен'],
        image: '/images/project-uimailbot.svg',
        url: PROJECT_URLS.uimailbot,
        proofType: 'architecture' as const,
      },
    ],
  },
  cta: {
    eyebrow: 'Давайте обсудим',
    title: 'Есть проект на примете?',
    subtitle: 'Я читаю каждое сообщение. Без ботов и посредников — прямая инженерия.',
    button: 'Начать разговор',
  },
  footer: {
    copyright: '© 2025 RJX. Сделано с точностью.',
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
    skipToContent: 'К содержанию',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    toggleTheme: 'Переключить тему',
  },
};
