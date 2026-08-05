import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'dark' | 'light';
export type Language = 'en' | 'ru';

interface AppState {
  theme: Theme;
  language: Language;
  hasBooted: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  setHasBooted: (v: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      language: 'en',
      hasBooted: false,
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.setAttribute('data-theme', theme);
      },
      toggleTheme: () => {
        const next = get().theme === 'dark' ? 'light' : 'dark';
        get().setTheme(next);
      },
      setLanguage: (language) => set({ language }),
      toggleLanguage: () => set((s) => ({ language: s.language === 'en' ? 'ru' : 'en' })),
      setHasBooted: (hasBooted) => set({ hasBooted }),
    }),
    {
      name: 'rjx-app-storage',
      partialize: (state) => ({ theme: state.theme, language: state.language }),
    }
  )
);
