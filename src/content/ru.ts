import type { Dictionary } from './en';
import { PROJECT_URLS, PROJECT_GITHUB_URLS } from '@/lib/config';

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
    openGithub: 'GitHub',
    openLive: 'Открыть',
    projects: [
      {
        slug: 'amber-terminal',
        name: 'Amber Terminal',
        description:
          'Персональная целевая страница для разработчиков с приятной вечерней эстетикой кодирования — янтарно-фосфорное свечение ЭЛТ-терминала, пятна от кофе на деревянном столе и тихий гул ночной хакерской сессии.',
        image: '/images/amber-terminal.png',
        url: PROJECT_URLS.amber,
        github: PROJECT_GITHUB_URLS.amber,
      },
      {
        slug: 'aurum-noir',
        name: 'Aurum Noir',
        description:
          'Целевая страница AURUM NOIR — независимого часового дома, выпускающего механические часы ограниченным тиражом в 200 экземпляров.',
        image: '/images/aurum-noir.png',
        url: PROJECT_URLS.aurum,
        github: PROJECT_GITHUB_URLS.aurum,
      },
      {
        slug: 'meridian',
        name: 'Meridian',
        description:
          'Одностраничный лендинг (SPA) необанка для фрилансеров и самозанятых: инвойсы, налоги, расходы и прогноз cash flow — в одной «бухгалтерской» таблице с живой анимацией.',
        image: '/images/meridian-kimi.png',
        url: PROJECT_URLS.meridian,
        github: PROJECT_GITHUB_URLS.meridian,
      },
      {
        slug: 'uimailbot',
        name: 'UIMailBot',
        description:
          'Читайте и управляйте почтовыми ящиками Gmail и Яндекса из Telegram. Бот доставляет уведомления о новых письмах прямо в чат; мини-приложение представляет собой полноценный почтовый ящик: список, категории, просмотр сообщений, пометка как прочитанных - никаких дополнительных приложений.',
        image: '/images/uimailbot.png',
        url: PROJECT_URLS.uimailbot,
        github: PROJECT_GITHUB_URLS.uimailbot,
      },
      {
        slug: 'work-parser',
        name: 'Work Parser',
        description:
          'Мониторинг 28 Telegram-каналов с фриланс-заказами. Фильтрация по ключевым словам, автоотклики на Kwork через ИИ с подтверждением в один клик.',
        image: '/images/work-parser.png',
        github: PROJECT_GITHUB_URLS.workParser,
      },
      {
        slug: 'vika-ai-bot',
        name: 'Vika AI Bot',
        description:
          'AI-бот для Telegram, который общается как девушка-подросток: сленг, опечатки, много коротких сообщений, инициативные сообщения.',
        image: '/images/vika-ai-bot.png',
        github: PROJECT_GITHUB_URLS.vika,
      },
      {
        slug: 'auto-tg',
        name: 'Auto TG',
        description:
          'Плагин для FunPay Cardinal, автоматизирующий операции на маркетплейсе цифровых товаров — сокращает ручные действия, ускоряет обработку сделок и автоматизирует типовые операции покупки и продажи. Провёл рефакторинг кода, улучшил логику сделок, оптимизировал работу с базой данных и повысил стабильность.',
        image: '/images/auto-tg.png',
        github: PROJECT_GITHUB_URLS.autoTg,
      },
      {
        slug: 'ai-reshalka',
        name: 'AI Решалка',
        description:
          'Русскоязычное Chrome MV3-расширение для решения математических задач по выделенному фрагменту экрана. Два режима — подробное пошаговое решение и короткий ответ, 20 бесплатных запросов, premium $4.99/мес и безопасная авторизация.',
        image: '/images/ai-reshalka.png',
        github: PROJECT_GITHUB_URLS.aiReshalka,
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
