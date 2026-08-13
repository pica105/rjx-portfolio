import type { LucideIcon } from 'lucide-react';
import { Rocket, Layout, Bot, Server, Workflow, Gauge, Palette } from 'lucide-react';
import { useDictionary } from '@/hooks/useDictionary';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { SectionReveal } from '@/components/shared/SectionReveal';

const ICONS: Record<string, LucideIcon> = {
  Rocket,
  Layout,
  Bot,
  Server,
  Workflow,
  Gauge,
  Palette,
};

export function Capabilities() {
  const t = useDictionary();

  return (
    <section
      id="capabilities"
      className="relative px-5 py-24 md:px-8 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[80rem]">
        <div className="text-center">
          <SectionReveal>
            <Eyebrow>{t.capabilities.eyebrow}</Eyebrow>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
              {t.capabilities.title}
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--text-secondary)]">
              {t.capabilities.subtitle}
            </p>
          </SectionReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.capabilities.cards.map((card, index) => {
            const Icon = ICONS[card.icon] ?? Rocket;
            const isLast = index === t.capabilities.cards.length - 1;
            return (
              <SectionReveal
                key={card.title}
                delay={index * 0.1}
                direction="up"
                distance={30}
                className={isLast ? 'lg:col-start-2' : undefined}
              >
                <article className="ease-out-expo h-full cursor-default rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_40px_rgba(255,255,255,0.08)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-raised)]">
                    <Icon size={20} className="text-[var(--accent-cyan)]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {card.description}
                  </p>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
