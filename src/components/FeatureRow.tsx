import type { FeatureContent } from '../data/content';

const featureRowStyles = `
  .feature-row {
    width: min(910px, calc(100vw - 40px));
    min-height: 455px;
    margin: 0 auto 112px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #fff;
  }

  .feature-copy {
    padding: 58px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .feature-copy h3 {
    max-width: 360px;
    margin: 0 0 22px;
    font-size: 21px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -.035em;
  }

  .feature-copy p { max-width: 360px; margin: 0; font-size: 14px; line-height: 1.55; }
  .feature-copy > a { margin-top: 24px; text-decoration: underline; font-size: 14px; }

  .feature-row > img {
    width: 100%;
    height: 100%;
    min-height: 455px;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 760px) {
    .feature-row { grid-template-columns: 1fr; margin-bottom: 40px; }
    .feature-copy { min-height: 285px; padding: 36px; }
    .feature-row > img { min-height: 0; aspect-ratio: 1 / 1; }
  }

  @media (max-width: 460px) {
    .feature-copy { padding: 30px; }
    .feature-row > img { aspect-ratio: 1 / .9; }
  }
`;

export function FeatureRow({ title, text, image, link }: FeatureContent) {
  return (
    <>
      <style href="feature-row-styles" precedence="default">{featureRowStyles}</style>
      <article className="feature-row">
        <div className="feature-copy">
          <h3>{title}</h3>
          <p>{text}</p>
          {link && <a href="#top">{link}</a>}
        </div>
        <img src={image} alt="" />
      </article>
    </>
  );
}
