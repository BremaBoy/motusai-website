const finalCtaStyles = `
  .final-cta {
    width: min(910px, calc(100vw - 40px));
    min-height: 325px;
    margin: 0 auto 138px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #fff;
  }

  .final-cta h2 {
    margin: 0 0 32px;
    font-size: 31px;
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: -.045em;
  }

  .final-cta .black-button {
    min-height: 36px;
    padding: 0 19px;
    border-radius: 999px;
    background: #111;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

  @media (max-width: 460px) {
    .final-cta h2 { font-size: 27px; }
  }
`;

export function FinalCta() {
  return (
    <>
      <style href="final-cta-styles" precedence="default">{finalCtaStyles}</style>
      <section className="final-cta">
        <h2>Join hundreds of millions of<br />users and try ChatGPT today.</h2>
        <a className="black-button" href="#top">Try ChatGPT ↗</a>
      </section>
    </>
  );
}
