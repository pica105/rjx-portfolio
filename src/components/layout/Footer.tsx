import { Github } from 'lucide-react';
import { useDictionary } from '@/hooks/useDictionary';
import { TelegramIcon, SocialButton } from '@/components/shared/SocialButton';
import { TELEGRAM_URL, GITHUB_PROFILE_URL } from '@/lib/constants';

export function Footer() {
  const t = useDictionary();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-[var(--text-muted)]">{t.footer.copyright}</p>
        <div className="flex flex-row items-center gap-3">
          <SocialButton href={GITHUB_PROFILE_URL} label="GitHub" className="h-10 w-10">
            <Github size={18} />
          </SocialButton>
          <SocialButton href={TELEGRAM_URL} label="Telegram" className="h-10 w-10">
            <TelegramIcon size={18} />
          </SocialButton>
        </div>
      </div>
    </footer>
  );
}
