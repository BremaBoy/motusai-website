import { promptCards } from '../data/content';

const promptWallStyles = `
  .prompt-wall {
    position: relative;
    z-index: 0;
    height: 365px;
    margin: 0 -150px;
    padding-top: 80px;
    display: grid;
    grid-template-columns: repeat(4, minmax(290px, 1fr));
    grid-auto-rows: 72px;
    gap: 10px;
    background: linear-gradient(
      180deg,
      var(--hero-handoff) 0%,
      #e5e4e6 25%,
      var(--page-surface) 62%,
      var(--page-surface) 100%
    );
  }

  .prompt-wall a {
    padding: 21px 28px;
    background: #fff;
    font-size: 12px;
    line-height: 1.35;
    box-shadow: 0 1px 0 rgba(0, 0, 0, .02);
  }

  @media (max-width: 760px) {
    .prompt-wall {
      height: auto;
      margin: 0;
      padding: 48px 14px 80px;
      grid-template-columns: 1fr 1fr;
    }
    .prompt-wall a { padding: 18px; }
  }

  @media (max-width: 460px) {
    .prompt-wall { grid-template-columns: 1fr; }
    .prompt-wall a:nth-child(n+7) { display: none; }
  }
`;

export function PromptWall() {
  return (
    <>
      <style href="prompt-wall-styles" precedence="default">{promptWallStyles}</style>
      <section className="prompt-wall" aria-label="Example prompts">
        {promptCards.map((prompt) => <a href="#top" key={prompt}>{prompt}</a>)}
      </section>
    </>
  );
}
