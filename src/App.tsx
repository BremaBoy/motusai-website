import { FeaturedVideosSection } from './components/FeaturedVideosSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExecutionSection } from './components/ExecutionSection';
import { PricingSection } from './components/PricingSection';
import { ProductPromisesSection } from './components/ProductPromisesSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ShowcasesSection } from './components/ShowcasesSection';
import { WorkAcrossAppsSection } from './components/WorkAcrossAppsSection';

const appStyles = `
  :root {
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
    color: #17151b;
    background: #f4f2ed;
    --page-surface: #f4f2ed;
    --hero-handoff: var(--page-surface);
    --ink: #17151b;
    --muted: #68656d;
    --line: rgba(23, 21, 27, .12);
    --blue: #5b67f1;
    --lavender: #a9a0ff;
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
  ::selection { background: #b8b1ff; color: #17151b; }

  :focus-visible {
    outline: 3px solid rgba(91, 103, 241, .5);
    outline-offset: 4px;
  }

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
      <WorkAcrossAppsSection />
      <ProductPromisesSection />
      <ExecutionSection />
      <FeaturedVideosSection />
      <RoadmapSection />
      <PricingSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
