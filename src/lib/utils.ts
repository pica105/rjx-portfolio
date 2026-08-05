import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { scrollTo as lenisScrollTo } from './lenis';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Smooth-scroll to a section — routed through Lenis when available. */
export function scrollTo(id: string) {
  lenisScrollTo(id);
}
