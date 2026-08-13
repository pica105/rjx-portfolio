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
  /** GitHub repo URL — Amber Terminal */
  readonly VITE_PROJECT_GITHUB_AMBER: string;
  /** GitHub repo URL — Aurum Noir */
  readonly VITE_PROJECT_GITHUB_AURUM: string;
  /** GitHub repo URL — Meridian */
  readonly VITE_PROJECT_GITHUB_MERIDIAN: string;
  /** GitHub repo URL — UIMailBot */
  readonly VITE_PROJECT_GITHUB_UIMAILBOT: string;
  /** GitHub repo URL — Work Parser */
  readonly VITE_PROJECT_GITHUB_WORKPARSER: string;
  /** GitHub repo URL — Vika AI Bot */
  readonly VITE_PROJECT_GITHUB_VIKA: string;
  /** "Get in touch" Telegram link */
  readonly VITE_TELEGRAM_URL: string;
  /** GitHub profile link */
  readonly VITE_GITHUB_PROFILE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
