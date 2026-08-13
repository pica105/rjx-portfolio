import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';
import { useDictionary } from '@/hooks/useDictionary';

type Phase = 'typing' | 'compressing' | 'scanline' | 'done';

const CURSOR = '▮';

export function TerminalBoot() {
  const t = useDictionary();
  const lines = useMemo(() => t.terminal.lines, [t]);
  const setHasBooted = useAppStore((s) => s.setHasBooted);
  const prefersReduced = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('typing');
  const skippedRef = useRef(false);

  const finishBoot = () => {
    sessionStorage.setItem('rjx-booted', 'true');
    setHasBooted(true);
  };

  // Reduced motion: skip animation immediately
  useEffect(() => {
    if (prefersReduced) {
      finishBoot();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReduced]);

  const skip = () => {
    if (skippedRef.current) return;
    skippedRef.current = true;
    finishBoot();
  };

  // Global skip listeners
  useEffect(() => {
    const onKey = () => skip();
    const onClick = () => skip();
    window.addEventListener('keydown', onKey);
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('click', onClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Typing driver
  useEffect(() => {
    if (phase !== 'typing' || prefersReduced) return;
    const line = lines[lineIndex];
    if (!line) {
      // All lines typed — pause then begin CRT shutdown
      const t1 = window.setTimeout(() => setPhase('compressing'), 400);
      return () => window.clearTimeout(t1);
    }
    if (charIndex < line.length) {
      const delay = 18 + Math.random() * 10 + (Math.random() > 0.5 ? 6 : -6);
      const t = window.setTimeout(() => setCharIndex((c) => c + 1), delay);
      return () => window.clearTimeout(t);
    }
    // Line finished — pause then next line
    const isLast = lineIndex === lines.length - 1;
    const pause = isLast ? 400 : 300 + Math.random() * 200;
    const t = window.setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, pause);
    return () => window.clearTimeout(t);
  }, [phase, prefersReduced, lineIndex, charIndex, lines]);

  // CRT shutdown sequence
  useEffect(() => {
    if (phase === 'compressing') {
      const t = window.setTimeout(() => setPhase('scanline'), 300);
      return () => window.clearTimeout(t);
    }
    if (phase === 'scanline') {
      const t = window.setTimeout(() => setPhase('done'), 400);
      return () => window.clearTimeout(t);
    }
    if (phase === 'done') {
      const t = window.setTimeout(() => {
        if (!skippedRef.current) finishBoot();
      }, 300);
      return () => window.clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <motion.div
      onClick={skip}
      role="presentation"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0a0a0a] px-8 py-12 md:px-12 md:py-16"
      initial={false}
      animate={
        phase === 'compressing'
          ? { scaleY: 0.01, opacity: 1 }
          : phase === 'scanline'
            ? { scaleY: 1, height: 2 }
            : {}
      }
      transition={{
        scaleY: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{ transformOrigin: 'center' }}
    >
      {phase === 'scanline' ? (
        <motion.div
          className="h-[2px] w-full"
          style={{
            background: 'linear-gradient(90deg, #ffffff, #8b8b93)',
            boxShadow: '0 0 12px rgba(255,255,255,0.25)',
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      ) : (
        <div className="w-full max-w-[48rem] font-mono text-sm leading-6 text-[#e4e4e7] md:text-base">
          {lines.slice(0, lineIndex).map((line, i) => (
            <div key={i} className="whitespace-pre-wrap break-words">
              {line}
            </div>
          ))}
          {phase === 'typing' && (
            <div className="whitespace-pre-wrap break-words">
              {lines[lineIndex] ? lines[lineIndex].slice(0, charIndex) : ''}
              <span className="animate-blink-fast">{CURSOR}</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
