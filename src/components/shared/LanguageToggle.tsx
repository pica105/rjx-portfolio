import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const language = useAppStore((s) => s.language);
  const toggleLanguage = useAppStore((s) => s.toggleLanguage);

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Russian' : 'Switch to English'}
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-raised)] text-[0.7rem] font-semibold tracking-wide text-[var(--text-secondary)] transition-colors hover:bg-[var(--border-strong)]'
      )}
    >
      {language === 'en' ? 'EN' : 'RU'}
    </button>
  );
}
