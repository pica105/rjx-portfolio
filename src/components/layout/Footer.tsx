import { useDictionary } from '@/hooks/useDictionary';
import { AnimatedLink } from '@/components/shared/AnimatedLink';
import { TELEGRAM_URL } from '@/lib/constants';

export function Footer() {
  const t = useDictionary();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-[var(--text-muted)]">{t.footer.copyright}</p>
        <div className="flex flex-row gap-4">
          <AnimatedLink href={TELEGRAM_URL}>{t.footer.links.telegram}</AnimatedLink>
        </div>
      </div>
    </footer>
  );
}
