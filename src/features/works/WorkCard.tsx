import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useDictionary } from '@/hooks/useDictionary';
import type { Project } from '@/types';

interface WorkCardProps {
  project: Project;
  expanded: boolean;
  onToggle: (slug: string) => void;
}

export function WorkCard({ project, expanded, onToggle }: WorkCardProps) {
  const t = useDictionary();

  // Escape collapses the action view
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onToggle(project.slug);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [expanded, onToggle, project.slug]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-label={
        expanded
          ? `${project.name} — actions`
          : `${project.name} — view actions`
      }
      onClick={() => onToggle(project.slug)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle(project.slug);
        }
      }}
      className="group relative min-h-[20rem] cursor-pointer overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-400 ease-out-expo hover:-translate-y-2 hover:scale-[1.01] hover:border-[var(--border-strong)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]"
    >
      <AnimatePresence initial={false}>
        {!expanded && (
          <motion.div
            key="preview"
            className="absolute inset-0 flex flex-col justify-end p-6"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background image */}
            <img
              src={project.image}
              alt=""
              loading="lazy"
              width={800}
              height={600}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity duration-500 group-hover:opacity-95"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--surface)_8%,transparent_90%)]" />

            {/* Bottom content */}
            <div className="relative z-10">
              <h3 className="mb-2 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
                {project.name}
              </h3>
              <p className="line-clamp-2 max-w-md text-sm text-[var(--text-secondary)]">
                {project.description}
              </p>
            </div>
          </motion.div>
        )}

        {expanded && (
          <motion.div
            key="actions"
            className="absolute inset-0 z-10"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid h-full w-full grid-cols-2 gap-3 p-6">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} — GitHub`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(project.slug);
                }}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-raised)] text-[var(--text-primary)] transition-colors duration-200 hover:border-[var(--accent-cyan)] hover:bg-[var(--border-strong)]"
              >
                <Github size={40} />
                <span className="text-sm font-medium">{t.works.openGithub}</span>
              </motion.a>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} — open site`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(project.slug);
                }}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-raised)] text-[var(--text-primary)] transition-colors duration-200 hover:border-[var(--accent-cyan)] hover:bg-[var(--border-strong)]"
              >
                <ExternalLink size={40} />
                <span className="text-sm font-medium">{t.works.openLive}</span>
              </motion.a>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggle(project.slug);
              }}
              aria-label="Close actions"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]/80 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
