import { PromptWall } from './PromptWall';

const promptIntroStyles = `
  .prompt-intro {
    padding: 355px 20px 0;
    text-align: center;
    background: var(--page-surface);
  }

  .prompt-intro h2 {
    margin: 0;
    font-size: 42px;
    font-weight: 400;
    line-height: 1.08;
    letter-spacing: -.05em;
  }

  @media (max-width: 760px) {
    .prompt-intro { padding: 140px 14px 0; }
    .prompt-intro h2 { font-size: 35px; }
  }

  @media (max-width: 460px) {
    .prompt-intro h2 { font-size: 32px; }
  }
`;

export function ShowcasesSection() {
  return (
    <>
      <style href="prompt-intro-styles" precedence="default">{promptIntroStyles}</style>
      <section className="prompt-intro" id="products">
        <h2>Writes, brainstorms, edits,<br />and explores ideas with you</h2>
        <PromptWall />
      </section>
    </>
  );
}
