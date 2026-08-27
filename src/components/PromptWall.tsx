import { promptCards } from '../data/content';

const promptWallStyles = `
  .prompt-wall {
    position: relative;
    z-index: 0;
    height: 330px;
    margin: 0 -150px;
    padding-top: 66px;
    overflow: hidden;
    background: var(--page-surface);
  }

  .prompt-wall::after {
    content: '';
    position: absolute;
    z-index: 3;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(90deg, var(--page-surface) 0, rgba(244,242,237,.86) 4%, transparent 12%, transparent 88%, rgba(244,242,237,.86) 96%, var(--page-surface) 100%),
      linear-gradient(180deg, transparent 58%, rgba(244,242,237,.16) 72%, var(--page-surface) 100%);
  }

  .prompt-row {
    position: relative;
    z-index: 1;
    width: 100%;
    margin-bottom: 9px;
    overflow: hidden;
  }

  .prompt-track {
    width: max-content;
    display: flex;
    flex: none;
    animation: prompt-marquee-left 104s linear infinite;
    will-change: transform;
  }

  .prompt-row-2 .prompt-track {
    transform: translate3d(-50%, 0, 0);
    animation-name: prompt-marquee-right;
    animation-duration: 118s;
    animation-delay: -33s;
  }

  .prompt-row-3 .prompt-track {
    animation-duration: 112s;
    animation-delay: -61s;
  }

  .prompt-row-4 .prompt-track {
    transform: translate3d(-50%, 0, 0);
    animation-name: prompt-marquee-right;
    animation-duration: 126s;
    animation-delay: -79s;
  }

  .prompt-set {
    display: flex;
    flex: none;
    align-items: center;
    gap: 8px;
    padding-right: 8px;
  }

  .prompt-item {
    display: flex;
    flex: none;
    align-items: center;
    gap: 8px;
  }

  .prompt-category-badge {
    width: 36px;
    height: 36px;
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    border: 1px solid #dededb;
    border-radius: 50%;
    background: rgba(255,255,255,.92);
    box-shadow: 0 2px 8px rgba(30,34,40,.05);
    font-size: 15px;
  }

  .prompt-item a {
    width: max-content;
    max-width: min(520px, 72vw);
    height: 38px;
    padding: 0 18px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid #dededb;
    border-radius: 999px;
    color: #28282b;
    background: rgba(255,255,255,.94);
    font-size: 11px;
    line-height: 1;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-shadow: 0 2px 10px rgba(27,31,38,.035);
    transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease;
  }

  .prompt-item a:hover {
    border-color: #c7c7c3;
    box-shadow: 0 6px 18px rgba(27,31,38,.08);
    transform: translateY(-1px);
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

  @keyframes prompt-marquee-left {
    from { transform: translate3d(0, 0, 0); }
    to { transform: translate3d(-50%, 0, 0); }
  }

  @keyframes prompt-marquee-right {
    from { transform: translate3d(-50%, 0, 0); }
    to { transform: translate3d(0, 0, 0); }
  }

  @media (max-width: 760px) {
    .prompt-wall {
      height: 312px;
      margin: 0 -14px;
      padding-top: 58px;
    }

    .prompt-wall::after {
      background:
        linear-gradient(90deg, var(--page-surface) 0, transparent 9%, transparent 91%, var(--page-surface) 100%),
        linear-gradient(180deg, transparent 58%, rgba(244,242,237,.16) 72%, var(--page-surface) 100%);
    }

    .prompt-category-badge {
      width: 32px;
      height: 32px;
      font-size: 13px;
    }

    .prompt-item a {
      max-width: 330px;
      height: 35px;
      padding: 0 15px;
      font-size: 10px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .prompt-track { animation: none; transform: translate3d(0, 0, 0); }
  }
`;

const promptRows = Array.from({ length: 4 }, (_, rowIndex) =>
  promptCards.filter((_, promptIndex) => promptIndex % 4 === rowIndex),
);

export function PromptWall() {
  return (
    <>
      <style href="prompt-wall-styles" precedence="default">{promptWallStyles}</style>
      <section className="prompt-wall" aria-label="Example Motus commands">
        <nav className="prompt-wall-sr" aria-label="Example Motus command links">
          {promptCards.map((prompt) => <a href="#top" key={prompt.text}>{prompt.text}</a>)}
        </nav>

        {promptRows.map((row, rowIndex) => (
          <div className={`prompt-row prompt-row-${rowIndex + 1}`} aria-hidden="true" key={rowIndex}>
            <div className="prompt-track">
              {[0, 1].map((copyIndex) => (
                <div className="prompt-set" key={copyIndex}>
                  {row.map((prompt, promptIndex) => {
                    const previousPrompt = row[(promptIndex - 1 + row.length) % row.length];
                    const showBadge = promptIndex === 0 || previousPrompt.category !== prompt.category;

                    return (
                      <div className="prompt-item" key={`${copyIndex}-${prompt.text}`}>
                        {showBadge && (
                          <span className="prompt-category-badge" title={prompt.category}>{prompt.icon}</span>
                        )}
                        <a href="#top" tabIndex={-1} title={prompt.text}>{prompt.text}</a>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
