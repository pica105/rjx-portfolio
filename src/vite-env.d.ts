/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Project card URL — Amber Terminal */
  readonly VITE_PROJECT_URL_AMBER: string;
  /** Project card URL — Aurum Noir */
  readonly VITE_PROJECT_URL_AURUM: string;
  /** Project card URL — Meridian */
  readonly VITE_PROJECT_URL_MERIDIAN: string;
  /** Project card URL — UIMailBot (Telegram) */
  readonly VITE_PROJECT_URL_UIMAILBOT: string;
  /** "Get in touch" Telegram link */
  readonly VITE_TELEGRAM_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
