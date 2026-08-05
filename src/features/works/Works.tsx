import { useDictionary } from '@/hooks/useDictionary';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { WorkCard } from '@/features/works/WorkCard';

export function Works() {
  const t = useDictionary();

  return (
    <section id="works" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[80rem]">
        <div className="text-center">
          <SectionReveal>
            <Eyebrow>{t.works.eyebrow}</Eyebrow>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
              {t.works.title}
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--text-secondary)]">
              {t.works.subtitle}
            </p>
          </SectionReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.works.projects.map((project, index) => (
            <SectionReveal key={project.slug} delay={index * 0.12} direction="up" distance={40}>
              <WorkCard project={project} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
