import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface PillButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  arrowDirection?: 'right' | 'up-right';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const sizeStyles: Record<NonNullable<PillButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const variantStyles: Record<PillButtonProps['variant'], string> = {
  primary: 'bg-[linear-gradient(135deg,#00e5c7,#ff2ea6)] text-[#0a0a0b] font-semibold',
  secondary:
    'bg-[var(--surface-raised)] text-[var(--text-primary)] border border-[var(--border-strong)]',
  outline: 'bg-transparent text-[var(--text-primary)] border border-[var(--border-strong)]',
  ghost: 'bg-transparent text-[var(--text-secondary)]',
};

export function PillButton({
  variant,
  size = 'md',
  withArrow = false,
  arrowDirection = 'right',
  href,
  onClick,
  children,
  className,
}: PillButtonProps) {
  const isExternal = href?.startsWith('http');
  const ArrowIcon = arrowDirection === 'up-right' ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span className="inline-flex items-center gap-2">{children}</span>
      {withArrow && (
        <motion.span
          whileHover={
            arrowDirection === 'right'
              ? { x: 3, y: 0 }
              : { x: 2, y: -2 }
          }
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          className={cn(
            'grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm',
            variant === 'primary'
              ? 'bg-[rgba(10,10,11,0.2)] text-[#0a0a0b]'
              : 'bg-[var(--text-primary)] text-[var(--background)]'
          )}
        >
          <ArrowIcon size={16} />
        </motion.span>
      )}
    </>
  );

  const classes = cn(
    'ease-out-expo inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2',
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
