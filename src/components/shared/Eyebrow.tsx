import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface EyebrowProps {
  children: ReactNode;
  tone?: 'default' | 'light' | 'accent';
  className?: string;
}

const toneStyles = {
  default: { dot: 'bg-[var(--text-secondary)]', text: 'text-[var(--text-secondary)]' },
  light: { dot: 'bg-[rgba(255,255,255,0.6)]', text: 'text-[rgba(255,255,255,0.7)]' },
  accent: { dot: 'bg-[var(--accent-cyan)]', text: 'text-[var(--text-secondary)]' },
};

export function Eyebrow({ children, tone = 'default', className }: EyebrowProps) {
  const styles = toneStyles[tone];
  return (
    <span className={cn('inline-flex items-center gap-2 text-sm font-medium', styles.text, className)}>
      <span className={cn('h-1.5 w-1.5 rounded-full', styles.dot)} />
      {children}
    </span>
  );
}
