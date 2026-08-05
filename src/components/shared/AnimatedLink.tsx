import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  offset?: number;
}

export function AnimatedLink({ href, children, className, offset = 4 }: AnimatedLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('inline-block text-sm text-[var(--text-secondary)]', className)}
    >
      <motion.span
        className="inline-block"
        initial={{ opacity: 0.65, x: 0 }}
        whileHover={{ x: offset, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      >
        {children}
      </motion.span>
    </a>
  );
}
