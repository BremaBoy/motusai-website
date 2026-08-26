import { promptCards } from '../data/content';

const promptWallStyles = `
  .prompt-wall {
    position: relative;
    z-index: 0;
    height: 400px;
    margin: 0 -150px;
    padding-top: 110px;
    overflow: hidden;
    background: var(--page-surface);
  }

  .prompt-row {
    width: 100%;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .prompt-track {
    width: max-content;
    display: flex;
    flex: none;
    transform: translate3d(-50%, 0, 0);
    animation: prompt-marquee-right 120s linear infinite;
    will-change: transform;
  }

  .prompt-row-2 .prompt-track {
    animation-duration: 138s;
    animation-delay: -26s;
  }

  .prompt-row-3 .prompt-track {
    animation-duration: 128s;
    animation-delay: -57s;
  }

  .prompt-set {
    display: flex;
    flex: none;
    gap: 10px;
    padding-right: 10px;
  }

  .prompt-set a {
    width: 380px;
    min-height: 72px;
    padding: 21px 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    font-size: 12px;
    line-height: 1.35;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0, 0, 0, .02);
  }

  .prompt-wall-sr {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @keyframes prompt-marquee-right {
    from { transform: translate3d(-50%, 0, 0); }
    to { transform: translate3d(0, 0, 0); }
  }

  @media (max-width: 760px) {
    .prompt-wall {
      height: 370px;
      margin: 0;
      padding-top: 90px;
    }

    .prompt-set a {
      width: 280px;
      padding: 18px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .prompt-track { animation: none; }
  }
`;

const promptRows = [0, 4, 8].map((offset) => [
  ...promptCards.slice(offset),
  ...promptCards.slice(0, offset),
]);

export function PromptWall() {
  return (
    <>
      <style href="prompt-wall-styles" precedence="default">{promptWallStyles}</style>
      <section className="prompt-wall" aria-label="Example prompts">
        <nav className="prompt-wall-sr" aria-label="Example prompt links">
          {promptCards.map((prompt) => <a href="#top" key={prompt}>{prompt}</a>)}
        </nav>

        {promptRows.map((row, rowIndex) => (
          <div className={`prompt-row prompt-row-${rowIndex + 1}`} aria-hidden="true" key={rowIndex}>
            <div className="prompt-track">
              {[0, 1].map((copyIndex) => (
                <div className="prompt-set" key={copyIndex}>
                  {row.map((prompt) => (
                    <a href="#top" tabIndex={-1} key={`${copyIndex}-${prompt}`}>{prompt}</a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
