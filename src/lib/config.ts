/**
 * Central app configuration, sourced from Vite env vars (see `.env.example`).
 *
 * Values are read at build time and inlined by Vite. Every key has a safe
 * fallback so the app still works if an env var is missing (e.g. fresh clone
 * without a `.env` file).
 *
 * NOTE: keep these as plain inline `import.meta.env.X || fallback` expressions
 * (static access, no helper function) — Vite replaces `import.meta.env.X` with
 * the string literal and esbuild then folds the `||` away, so the localhost
 * fallbacks never leak into production bundles.
 */

/** URLs for the portfolio project cards (opened in a new tab). */
export const PROJECT_URLS = {
  amber: import.meta.env.VITE_PROJECT_URL_AMBER || 'http://localhost:5174',
  aurum: import.meta.env.VITE_PROJECT_URL_AURUM || 'http://localhost:5175',
  meridian:
    import.meta.env.VITE_PROJECT_URL_MERIDIAN || 'http://localhost:5176',
  uimailbot:
    import.meta.env.VITE_PROJECT_URL_UIMAILBOT || 'https://t.me/uimailbot',
} as const;

/** GitHub repository URLs for the project cards (left "GitHub" button). */
export const PROJECT_GITHUB_URLS = {
  amber:
    import.meta.env.VITE_PROJECT_GITHUB_AMBER ||
    'https://github.com/pica105/amber-terminal',
  aurum:
    import.meta.env.VITE_PROJECT_GITHUB_AURUM ||
    'https://github.com/pica105/aurum-noir',
  meridian:
    import.meta.env.VITE_PROJECT_GITHUB_MERIDIAN ||
    'https://github.com/pica105/meridian-kimi',
  uimailbot:
    import.meta.env.VITE_PROJECT_GITHUB_UIMAILBOT ||
    'https://github.com/pica105/uimailbot',
} as const;

/** "Get in touch" Telegram link used across header / hero / CTA / footer. */
export const TELEGRAM_URL =
  import.meta.env.VITE_TELEGRAM_URL || 'https://t.me/pica105';

/** GitHub profile link (header + footer icon buttons). */
export const GITHUB_PROFILE_URL =
  import.meta.env.VITE_GITHUB_PROFILE_URL || 'https://github.com/pica105';
