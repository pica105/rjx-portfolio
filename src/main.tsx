import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import App from './App';
import type { LenisLike } from './lib/lenis';
import './index.css';

const LENIS_CDN = 'https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.mjs';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </BrowserRouter>
  </React.StrictMode>
);

// Lenis smooth-scroll (amber-terminal pattern). Loaded from CDN in the
// background — the app mounts immediately and scrolls natively until (or
// unless) Lenis arrives. Never blocks first paint on a network request.
import(/* @vite-ignore */ LENIS_CDN)
  .then(({ default: Lenis }: { default: new (opts: Record<string, unknown>) => LenisLike }) => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (finePointer && !reducedMotion) {
      const lenis = new Lenis({
        smoothWheel: true,
        lerp: 0.1,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
      (window as Window & { __lenis?: LenisLike }).__lenis = lenis;
    }
  })
  .catch(() => {
    // Lenis unavailable (e.g. offline) — native scrolling stays active.
  });
