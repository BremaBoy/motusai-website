import type { ReactNode } from 'react';
import type { ShowcaseContent } from '../data/content';

const showcaseStyles = `
  .showcase { padding: 56px 20px 70px; text-align: center; background: var(--page-surface); }
  .showcase-leading { padding-top: 355px; }

  .showcase h2 {
    margin: 0;
    font-size: 31px;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -.045em;
  }

  .showcase-leading h2 { font-size: 42px; }

  .showcase h2 span:last-child br { display: none; }
  .learn-link { display: inline-block; margin-top: 38px; font-size: 12px; }
  .showcase img { width: min(910px, calc(100vw - 40px)); margin: 64px auto 0; border-radius: 3px; }
  .showcase + .showcase { padding-top: 36px; }
  .showcase + .showcase img { margin-top: 58px; }

  @media (max-width: 760px) {
    .showcase { padding-inline: 14px; }
    .showcase-leading { padding-top: 140px; }
    .showcase h2 { font-size: 29px; }
    .showcase-leading h2 { font-size: 35px; }
    .showcase img { width: 100%; margin-top: 44px; }
  }

  @media (max-width: 460px) {
    .showcase h2 { font-size: 27px; }
    .showcase-leading h2 { font-size: 32px; }
  }
`;

interface ShowcaseProps extends ShowcaseContent {
  afterIntro?: ReactNode;
  leading?: boolean;
}

export function Showcase({ title, link, image, afterIntro, leading = false }: ShowcaseProps) {
  return (
    <>
      <style href="showcase-styles" precedence="default">{showcaseStyles}</style>
      <section className={`showcase${leading ? ' showcase-leading' : ''}`}>
        <h2>{title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h2>
        {link && <a className="learn-link" href="#features">{link}</a>}
        {afterIntro}
        <img src={image} alt="" />
      </section>
    </>
  );
}
