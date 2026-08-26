import { CapabilitiesSection } from './components/CapabilitiesSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MajorUpdateSection } from './components/MajorUpdateSection';
import { PricingSection } from './components/PricingSection';
import { ShowcasesSection } from './components/ShowcasesSection';

const appStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  :root {
    font-family: Inter, Arial, sans-serif;
    color: #111;
    background: #f7f7f7;
    --page-surface: #f7f7f7;
    --hero-handoff: var(--page-surface);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; min-width: 320px; background: var(--page-surface); }
  button, a { color: inherit; }
  a { text-decoration: none; }
  button { font: inherit; cursor: pointer; }
  img { display: block; max-width: 100%; }
  main { overflow: hidden; }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }
`;

export default function App() {
  return (
    <main>
      <style href="app-styles" precedence="default">{appStyles}</style>
      <Header />
      <Hero />
      <ShowcasesSection />
      <CapabilitiesSection />
      <MajorUpdateSection />
      <PricingSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
