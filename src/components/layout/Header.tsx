import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useDictionary } from '@/hooks/useDictionary';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { scrollTo } from '@/lib/utils';
import { stopScroll, startScroll } from '@/lib/lenis';
import { TELEGRAM_URL } from '@/lib/constants';
import { PillButton } from '@/components/shared/PillButton';
import { LanguageToggle } from '@/components/shared/LanguageToggle';
import { cn } from '@/lib/utils';

const NAV_SECTIONS = ['home', 'capabilities', 'works'];

export function Header() {
  const t = useDictionary();
  const theme = useAppStore((s) => s.theme);
  const toggleTheme = useAppStore((s) => s.toggleTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_SECTIONS);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (menuOpen) stopScroll();
    else startScroll();
    return () => {
      document.body.style.overflow = '';
      startScroll();
    };
  }, [menuOpen]);

  const navLink = (id: string, label: string) => (
    <button
      key={id}
      type="button"
      onClick={() => {
        setMenuOpen(false);
        scrollTo(id);
      }}
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
      <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        {/* Wordmark */}
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-1.5"
          aria-label="rjx home"
        >
          <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">rjx</span>
          <span className="animate-blink text-xl font-bold text-[var(--accent-cyan)]">▮</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_SECTIONS.filter((s) => s !== 'home').map((id) =>
            navLink(id, t.nav[id as keyof typeof t.nav])
          )}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
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
          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t.a11y.openMenu}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--border-strong)] lg:hidden"
          >
            <Menu size={16} />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-[var(--background)]/90 backdrop-blur-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                rjx
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={t.a11y.closeMenu}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-secondary)]"
              >
                <X size={16} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-8" aria-label="Mobile">
              {NAV_SECTIONS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    scrollTo(id);
                  }}
                  className={cn(
                    'text-2xl font-semibold transition-colors',
                    activeSection === id
                      ? 'text-[var(--accent-cyan)]'
                      : 'text-[var(--text-primary)] hover:text-[var(--accent-cyan)]'
                  )}
                >
                  {id === 'home' ? 'Home' : t.nav[id as keyof typeof t.nav]}
                </button>
              ))}
              <div className="mt-4">
                <PillButton
                  variant="primary"
                  size="lg"
                  href={TELEGRAM_URL}
                >
                  {t.nav.contact}
                </PillButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
