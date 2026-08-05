/**
 * Global fixed background layer: a dual-layer masked grid plus six drifting
 * gradient "puddles". Rendered once in App behind all content so every
 * section shares the same rich backdrop. Puddles are transform+opacity only
 * (GPU-composited) — the blur filter is applied once, not animated.
 */
export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Dual-layer grid, faded toward the edges */}
      <div className="bg-grid bg-grid-mask absolute inset-0 opacity-70" />

      {/* Gradient puddles */}
      <div className="animate-drift-1 absolute -left-32 top-10 h-[28rem] w-[28rem] bg-puddle-cyan opacity-25 blur-3xl" />
      <div className="animate-drift-2 absolute -right-32 top-1/4 h-[32rem] w-[32rem] bg-puddle-magenta opacity-20 blur-3xl" />
      <div className="animate-drift-3 absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] bg-puddle-violet opacity-20 blur-3xl" />
      <div className="animate-drift-4 absolute bottom-1/3 right-1/3 h-72 w-72 bg-puddle-cyan opacity-15 blur-2xl" />
      <div className="animate-drift-5 absolute left-[15%] top-[62%] h-64 w-64 bg-puddle-magenta opacity-15 blur-2xl" />
      <div className="animate-drift-1 absolute left-2/3 top-[12%] h-56 w-56 bg-puddle-amber opacity-15 blur-2xl" />
    </div>
  );
}
