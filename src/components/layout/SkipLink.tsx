import { useDictionary } from '@/hooks/useDictionary';

export function SkipLink() {
  const t = useDictionary();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--surface-raised)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--text-primary)] focus:shadow-lg"
    >
      {t.a11y.skipToContent}
    </a>
  );
}
