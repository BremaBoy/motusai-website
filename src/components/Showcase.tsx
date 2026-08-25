import type { ShowcaseContent } from '../data/content';

const showcaseStyles = `
  .showcase { padding: 56px 20px 70px; text-align: center; background: #f7f7f7; }

  .showcase h2 {
    margin: 0;
    font-size: 31px;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -.045em;
  }

  .showcase h2 span:last-child br { display: none; }
  .learn-link { display: inline-block; margin-top: 38px; font-size: 12px; }
  .showcase img { width: min(910px, calc(100vw - 40px)); margin: 64px auto 0; border-radius: 3px; }
  .showcase + .showcase { padding-top: 36px; }
  .showcase + .showcase img { margin-top: 58px; }

  @media (max-width: 760px) {
    .showcase { padding-inline: 14px; }
    .showcase h2 { font-size: 29px; }
    .showcase img { width: 100%; margin-top: 44px; }
  }

  @media (max-width: 460px) {
    .showcase h2 { font-size: 27px; }
  }
`;

export function Showcase({ title, link, image }: ShowcaseContent) {
  return (
    <>
      <style href="showcase-styles" precedence="default">{showcaseStyles}</style>
      <section className="showcase">
        <h2>{title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h2>
        {link && <a className="learn-link" href="#features">{link}</a>}
        <img src={image} alt="" />
      </section>
    </>
  );
}
