import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, Eye, Files, MessagesSquare, MousePointer2 } from 'lucide-react';

const promises = [
  {
    number: '01',
    icon: MessagesSquare,
    title: 'Tell Motus what you want',
    text: 'Speak or type naturally. Motus turns the outcome you describe into a clear course of action.',
    example: '“Prepare me for my meeting tomorrow.”',
  },
  {
    number: '02',
    icon: Eye,
    title: 'It understands your computer',
    text: 'Screen context, macOS Accessibility, and active-app awareness help Motus understand what is in front of you.',
    example: 'Windows, controls, labels, focus, and layout.',
  },
  {
    number: '03',
    icon: MousePointer2,
    title: 'It uses the right tool',
    text: 'Motus starts with native capabilities and only falls back to visual interaction when the task needs it.',
    example: 'Reliable by design—not just pixel clicking.',
  },
  {
    number: '04',
    icon: Files,
    title: 'It actually does the work',
    text: 'Motus moves across apps, files, the web, and Terminal to complete multi-step requests on your Mac.',
    example: 'Research → organize → write → deliver.',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'It checks its work',
    text: 'Actions are followed by verification, so Motus can confirm the result instead of assuming success.',
    example: 'Observe → act → verify.',
  },
  {
    number: '06',
    icon: Code2,
    title: 'Give it bigger jobs',
    text: 'Use Motus for focused research, code changes, file organization, and work that crosses several tools.',
    example: '“Find the bug, fix it, and run the tests.”',
  },
];

const promisePages = [promises.slice(0, 3), promises.slice(3, 6)];

const styles = `
  .product-promises {
    padding: 154px 20px 132px;
    background: var(--page-surface);
  }

  .product-promises-inner { width: min(1220px, 100%); margin: 0 auto; }

  .section-label {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #6258d6;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .section-label::before { content: ''; width: 18px; height: 5px; border-radius: 999px; background: linear-gradient(90deg, #b8afff, #6258d6); }

  .product-promises-header {
    margin-bottom: 68px;
    display: grid;
    grid-template-columns: 1.1fr .72fr;
    gap: 80px;
    align-items: end;
  }

  .product-promises h2 {
    max-width: 780px;
    margin: 24px 0 0;
    font-size: clamp(47px, 5.8vw, 78px);
    font-weight: 500;
    line-height: .98;
    letter-spacing: -.065em;
  }

  .product-promises-header p { margin: 0 0 3px; color: var(--muted); font-size: 16px; line-height: 1.65; }

  .promise-carousel {
    overflow: hidden;
    border: 1px solid var(--line);
    background: rgba(255,255,255,.26);
  }

  .promise-track {
    width: 200%;
    display: flex;
    transition: transform .9s cubic-bezier(.22, .8, .22, 1);
    will-change: transform;
  }

  .promise-page {
    width: 50%;
    flex: 0 0 50%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .promise-card {
    min-height: 410px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--line);
    background: rgba(255,255,255,.4);
    transition: background .25s ease, transform .25s ease;
  }

  .promise-card:last-child { border-right: 0; }

  .promise-card:hover { position: relative; z-index: 1; background: #fff; transform: translateY(-4px); box-shadow: 0 22px 70px rgba(26, 20, 48, .08); }
  .promise-top { display: flex; align-items: center; justify-content: space-between; color: #7a7681; font-size: 11px; }
  .promise-icon { width: 42px; height: 42px; display: grid; place-items: center; border: 1px solid var(--line); border-radius: 12px; background: #fff; color: #5549d8; }
  .promise-icon svg { width: 19px; height: 19px; stroke-width: 1.7; }
  .promise-card h3 { margin: auto 0 15px; font-size: 24px; font-weight: 500; line-height: 1.1; letter-spacing: -.04em; }
  .promise-card p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.55; }
  .promise-example { margin-top: 25px; color: #46414d; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; line-height: 1.5; }

  .promise-controls {
    margin-top: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .promise-buttons { display: flex; gap: 9px; }
  .promise-buttons button {
    width: 42px;
    height: 42px;
    padding: 0;
    display: grid;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: 50%;
    background: rgba(255,255,255,.72);
    transition: background .2s ease, transform .2s ease;
  }
  .promise-buttons button:hover { background: #fff; transform: translateY(-2px); }
  .promise-buttons svg { width: 16px; height: 16px; }

  .promise-progress { display: flex; align-items: center; gap: 10px; color: #77737e; font-size: 10px; letter-spacing: .08em; }
  .promise-progress-track { width: 76px; height: 2px; overflow: hidden; border-radius: 999px; background: rgba(23,21,27,.14); }
  .promise-progress-track i { display: block; width: 50%; height: 100%; border-radius: inherit; background: #6258d6; transition: transform .9s cubic-bezier(.22, .8, .22, 1); }

  @media (max-width: 900px) {
    .product-promises-header { grid-template-columns: 1fr; gap: 26px; }
  }

  @media (max-width: 620px) {
    .product-promises { padding: 110px 16px 96px; }
    .product-promises h2 { font-size: 44px; }
    .promise-page { grid-template-columns: 1fr; }
    .promise-card { min-height: 300px; }
    .promise-card { border-right: 0; border-bottom: 1px solid var(--line); }
    .promise-card:last-child { border-bottom: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .promise-track, .promise-progress-track i { transition: none; }
  }
`;

export function ProductPromisesSection() {
  const [activePage, setActivePage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActivePage((page) => (page + 1) % promisePages.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const previousPage = () => setActivePage((page) => (page - 1 + promisePages.length) % promisePages.length);
  const nextPage = () => setActivePage((page) => (page + 1) % promisePages.length);

  return (
    <>
      <style href="product-promises-styles" precedence="default">{styles}</style>
      <section className="product-promises" id="product" aria-labelledby="product-promises-title">
        <div className="product-promises-inner">
          <header className="product-promises-header">
            <div>
              <span className="section-label">Not another chatbot</span>
              <h2 id="product-promises-title">Your intent becomes action.</h2>
            </div>
            <p>Motus is an AI agent built for the Mac. It understands the goal, chooses a reliable path, carries out the work, and brings you the result.</p>
          </header>

          <div
            className="promise-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label="How Motus turns intent into action"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
            }}
          >
            <div className="promise-track" style={{ transform: `translate3d(-${activePage * 50}%, 0, 0)` }}>
              {promisePages.map((page, pageIndex) => (
                <div className="promise-page" aria-hidden={activePage !== pageIndex} key={pageIndex}>
                  {page.map(({ number, icon: Icon, title, text, example }) => (
                    <article className="promise-card" key={number}>
                      <div className="promise-top"><span>{number}</span><span className="promise-icon"><Icon /></span></div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                      <span className="promise-example">{example}</span>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="promise-controls">
            <div className="promise-buttons">
              <button type="button" onClick={previousPage} aria-label="Show previous Motus capabilities"><ArrowLeft /></button>
              <button type="button" onClick={nextPage} aria-label="Show next Motus capabilities"><ArrowRight /></button>
            </div>
            <div className="promise-progress" aria-live="polite">
              <span>0{activePage + 1}</span>
              <span className="promise-progress-track"><i style={{ transform: `translateX(${activePage * 100}%)` }} /></span>
              <span>0{promisePages.length}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
