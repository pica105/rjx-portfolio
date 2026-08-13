import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';

interface WorkCardProps {
  project: Project;
}

export function WorkCard({ project }: WorkCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.name} — open project site`}
      className="group relative flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-400 ease-out-expo hover:-translate-y-2 hover:scale-[1.01] hover:border-[var(--border-strong)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)]"
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

      {/* Top meta row */}
      <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
          {project.category} — {project.year}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-raised)] transition-colors duration-200 group-hover:bg-[var(--accent-cyan)]">
          <ArrowUpRight size={16} className="text-[var(--text-secondary)] transition-colors duration-200 group-hover:text-[#0a0a0b]" />
        </span>
      </div>

      {/* Bottom content */}
      <div className="relative z-10">
        <h3 className="mb-2 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
          {project.name}
        </h3>
        <p className="mb-4 line-clamp-2 max-w-md text-sm text-[var(--text-secondary)]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
