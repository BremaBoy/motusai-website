const finalCtaStyles = `
  .final-cta {
    position: relative;
    width: calc(100vw - 40px);
    min-height: 420px;
    margin: 0 auto 118px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 18px;
    background:
      radial-gradient(ellipse at 50% 108%, rgba(72, 137, 244, .95) 0%, rgba(120, 190, 248, .58) 26%, transparent 57%),
      radial-gradient(circle at 50% 72%, rgba(255, 255, 255, .85) 0 1px, transparent 1.6px) 0 0 / 14px 14px,
      linear-gradient(180deg, #f1f9fd 0%, #e9f5fb 100%);
  }

  .final-cta h2 {
    margin: 0 0 32px;
    font-size: clamp(38px, 4.6vw, 56px);
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: -.045em;
  }

  .final-cta .black-button {
    min-height: 42px;
    padding: 0 21px;
    border-radius: 10px;
    background: #111;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    box-shadow: 0 8px 24px rgba(27, 70, 127, .18);
  }

  @media (max-width: 460px) {
    .final-cta { width: calc(100vw - 32px); min-height: 380px; margin-bottom: 90px; }
    .final-cta h2 { font-size: 27px; }
  }
`;

export function FinalCta() {
  return (
    <>
      <style href="final-cta-styles" precedence="default">{finalCtaStyles}</style>
      <section className="final-cta">
        <h2>Your chat can do more.<br />Start moving with Motus today.</h2>
        <a className="black-button" href="#top">Download for Mac ↗</a>
      </section>
    </>
  );
}
