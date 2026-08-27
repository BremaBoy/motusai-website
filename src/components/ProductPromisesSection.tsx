import { CheckCircle2, Code2, Eye, Files, MessagesSquare, MousePointer2 } from 'lucide-react';

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

  .promise-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }

  .promise-card {
    min-height: 350px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: rgba(255,255,255,.4);
    transition: background .25s ease, transform .25s ease;
  }

  .promise-card:hover { position: relative; z-index: 1; background: #fff; transform: translateY(-4px); box-shadow: 0 22px 70px rgba(26, 20, 48, .08); }
  .promise-top { display: flex; align-items: center; justify-content: space-between; color: #7a7681; font-size: 11px; }
  .promise-icon { width: 42px; height: 42px; display: grid; place-items: center; border: 1px solid var(--line); border-radius: 12px; background: #fff; color: #5549d8; }
  .promise-icon svg { width: 19px; height: 19px; stroke-width: 1.7; }
  .promise-card h3 { margin: auto 0 15px; font-size: 24px; font-weight: 500; line-height: 1.1; letter-spacing: -.04em; }
  .promise-card p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.55; }
  .promise-example { margin-top: 25px; color: #46414d; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; line-height: 1.5; }

  @media (max-width: 900px) {
    .product-promises-header { grid-template-columns: 1fr; gap: 26px; }
    .promise-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 620px) {
    .product-promises { padding: 110px 16px 96px; }
    .product-promises h2 { font-size: 44px; }
    .promise-grid { grid-template-columns: 1fr; }
    .promise-card { min-height: 300px; }
  }
`;

export function ProductPromisesSection() {
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

          <div className="promise-grid">
            {promises.map(({ number, icon: Icon, title, text, example }) => (
              <article className="promise-card" key={number}>
                <div className="promise-top"><span>{number}</span><span className="promise-icon"><Icon /></span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="promise-example">{example}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
