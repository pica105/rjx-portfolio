import { useDictionary } from '@/hooks/useDictionary';
import { TELEGRAM_URL } from '@/lib/constants';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { PillButton } from '@/components/shared/PillButton';

export function ClosingCTA() {
  const t = useDictionary();

  return (
    <section className="relative px-5 py-32 md:px-8 md:py-40">
      <div className="relative z-10 mx-auto max-w-[80rem] text-center">
        <SectionReveal direction="up" distance={40}>
          <Eyebrow tone="accent" className="justify-center">
            {t.cta.eyebrow}
          </Eyebrow>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-7xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl text-[var(--text-secondary)] sm:text-2xl">
            {t.cta.subtitle}
          </p>
          <div className="mt-10 flex justify-center">
            <PillButton
              variant="primary"
              size="lg"
              withArrow
              arrowDirection="up-right"
              href={TELEGRAM_URL}
            >
              {t.cta.button}
            </PillButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
