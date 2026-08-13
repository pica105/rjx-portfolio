import { motion } from 'framer-motion';
import { Moon, Sun, Github } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useDictionary } from '@/hooks/useDictionary';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { scrollTo, cn } from '@/lib/utils';
import { TELEGRAM_URL, GITHUB_PROFILE_URL } from '@/lib/constants';
import { PillButton } from '@/components/shared/PillButton';
import { SocialButton } from '@/components/shared/SocialButton';
import { LanguageToggle } from '@/components/shared/LanguageToggle';

const NAV_SECTIONS = ['home', 'capabilities', 'works'];

export function Header() {
  const t = useDictionary();
  const theme = useAppStore((s) => s.theme);
  const toggleTheme = useAppStore((s) => s.toggleTheme);
  const activeSection = useScrollSpy(NAV_SECTIONS);

  const navLink = (id: string, label: string) => (
    <button
      key={id}
      type="button"
      onClick={() => scrollTo(id)}
      className={cn(
        'relative text-sm font-medium transition-colors duration-200',
        activeSection === id
          ? 'text-[var(--accent-cyan)]'
          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
      )}
    >
      {label}
      <span
        className={cn(
          'ease-out-expo absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300',
          activeSection === id && 'scale-x-100',
          'bg-[linear-gradient(90deg,#ffffff,#8b8b93)]'
        )}
      />
    </button>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-[var(--border)] backdrop-blur-md"
      style={{ backgroundColor: 'color-mix(in srgb, var(--background) 70%, transparent)' }}
    >
      <div className="mx-auto grid h-16 max-w-[80rem] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-[4.5rem] md:px-8">
        {/* Wordmark */}
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="group col-start-1 flex items-center gap-1.5 justify-self-start"
          aria-label="rjx home"
        >
          <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">rjx</span>
          <span className="animate-blink text-xl font-bold text-[var(--accent-cyan)]">▮</span>
        </button>

        {/* Nav (tablet + desktop) */}
        <nav
          className="col-start-2 hidden items-center gap-8 justify-self-center md:flex"
          aria-label="Primary"
        >
          {NAV_SECTIONS.filter((s) => s !== 'home').map((id) =>
            navLink(id, t.nav[id as keyof typeof t.nav])
          )}
        </nav>

        {/* Right cluster */}
        <div className="col-start-3 flex items-center justify-self-end gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.a11y.toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--border-strong)]"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <LanguageToggle />
          <div className="hidden md:block">
            <PillButton
              variant="primary"
              size="sm"
              href={TELEGRAM_URL}
              className="whitespace-nowrap"
            >
              {t.nav.contact}
            </PillButton>
          </div>
          <SocialButton href={GITHUB_PROFILE_URL} label="GitHub" className="h-8 w-8">
            <Github size={16} />
          </SocialButton>
        </div>
      </div>
    </motion.header>
  );
}
