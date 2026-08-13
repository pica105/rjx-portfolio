import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useDictionary } from '@/hooks/useDictionary';
import { scrollTo } from '@/lib/utils';
import { TELEGRAM_URL } from '@/lib/constants';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { PillButton } from '@/components/shared/PillButton';

const EASE = [0.215, 0.61, 0.355, 1] as const;

export function Hero() {
  const t = useDictionary();
  const hasBooted = useAppStore((s) => s.hasBooted);
  const [scrolled, setScrolled] = useState(false);

  // Hide the "SCROLL" indicator as soon as the user starts scrolling.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 8) setScrolled(true);
    };
    const onIntent = () => setScrolled(true);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onIntent, { passive: true });
    window.addEventListener('touchmove', onIntent, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onIntent);
      window.removeEventListener('touchmove', onIntent);
    };
  }, []);

  const words = t.hero.headline.split(' ');

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-center px-5 pb-20 pt-32 md:px-8 md:pb-24 md:pt-40"
    >
      <div className="relative z-10 mx-auto w-full max-w-[56rem] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasBooted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
        >
          <Eyebrow tone="accent" className="mb-6">
            {t.hero.eyebrow}
          </Eyebrow>
        </motion.div>

        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block overflow-hidden align-top"
              initial={{ opacity: 0 }}
              animate={hasBooted ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.7, ease: EASE }}
            >
              <motion.span
                className="inline-block"
                initial={{ y: 40, opacity: 0 }}
                animate={hasBooted ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.7, ease: EASE }}
              >
                {word}
              </motion.span>
              {i < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={hasBooted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-[1.6] text-[var(--text-secondary)] sm:text-xl"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasBooted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <PillButton
            variant="primary"
            size="lg"
            withArrow
            arrowDirection="right"
            href={TELEGRAM_URL}
          >
            {t.hero.ctaPrimary}
          </PillButton>
          <PillButton variant="outline" size="lg" onClick={() => scrollTo('works')}>
            {t.hero.ctaSecondary}
          </PillButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={hasBooted ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-[var(--text-muted)]"
        >
          {t.hero.scroll}
        </motion.span>
        <motion.div
          animate={hasBooted ? { y: [0, 8, 0] } : { y: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[var(--text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
