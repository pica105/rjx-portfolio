import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { SkipLink } from '@/components/layout/SkipLink';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GridBackground } from '@/components/layout/GridBackground';
import { TerminalBoot } from '@/features/terminal/TerminalBoot';
import { Hero } from '@/features/hero/Hero';
import { Capabilities } from '@/features/capabilities/Capabilities';
import { Works } from '@/features/works/Works';
import { ClosingCTA } from '@/features/cta/ClosingCTA';

function App() {
  const theme = useAppStore((s) => s.theme);
  const hasBooted = useAppStore((s) => s.hasBooted);
  const setHasBooted = useAppStore((s) => s.setHasBooted);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const booted = sessionStorage.getItem('rjx-booted');
    if (booted) setHasBooted(true);
  }, [setHasBooted]);

  return (
    <>
      <GridBackground />

      <SkipLink />

      {!hasBooted && <TerminalBoot />}

      <Header />

      <main id="main">
        <Hero />
        <Capabilities />
        <Works />
        <ClosingCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;
