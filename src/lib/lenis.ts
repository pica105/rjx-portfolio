/**
 * Lenis smooth-scroll helpers. The Lenis instance is created asynchronously
 * in main.tsx (CDN dynamic import, amber-terminal pattern) and stored on
 * `window.__lenis`. Everything here degrades gracefully to native scrolling
 * when Lenis is unavailable.
 */

/** Minimal surface of the Lenis v1 API we rely on. */
export interface LenisLike {
  raf: (time: number) => void;
  stop: () => void;
  start: () => void;
  isStopped: boolean;
  scrollTo: (
    target: HTMLElement | number,
    opts?: {
      offset?: number;
      duration?: number;
      onComplete?: () => void;
    }
  ) => void;
}

type LenisWindow = Window & { __lenis?: LenisLike };

function getLenis(): LenisLike | undefined {
  return (window as LenisWindow).__lenis;
}

/** Smooth-scroll to a section by id, offset for the fixed header. */
export function scrollTo(id: string, onComplete?: () => void): void {
  const el = document.getElementById(id);
  if (!el) return;
  const l = getLenis();
  if (l) {
    // Lenis v1 bails out of scrollTo() early when stopped — resume it first
    // so navigation works even when a scroll lock (mobile menu) is active.
    if (l.isStopped) l.start();
    l.scrollTo(el, { offset: -64, duration: 1.5, onComplete });
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onComplete?.();
  }
}

let lockCount = 0;

/** Lock page scroll (mobile menu, modals). */
export function stopScroll(): void {
  const l = getLenis();
  if (!l) return;
  lockCount++;
  if (lockCount === 1) l.stop();
}

export function startScroll(): void {
  const l = getLenis();
  if (!l) return;
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) l.start();
}
