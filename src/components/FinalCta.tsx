const finalCtaStyles = `
  .final-cta {
    position: relative;
    width: calc(100vw - 40px);
    min-height: 480px;
    margin: 0 auto 110px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid #d9d9d5;
    border-radius: 24px;
    background:
      radial-gradient(ellipse at 50% 115%, rgba(183, 183, 178, .72) 0%, rgba(220, 220, 216, .5) 31%, transparent 63%),
      radial-gradient(circle at 50% 72%, rgba(65, 65, 61, .08) 0 1px, transparent 1.6px) 0 0 / 14px 14px,
      linear-gradient(180deg, #f7f7f5 0%, #e9e9e6 100%);
  }

  .final-cta h2 {
    max-width: 820px;
    margin: 0 0 22px;
    font-size: clamp(46px, 5.6vw, 72px);
    font-weight: 500;
    line-height: 1;
    letter-spacing: -.06em;
  }

  .final-cta p { max-width: 560px; margin: 0 0 34px; color: #5e5e59; font-size: 15px; line-height: 1.6; }

  .final-cta .black-button {
    min-height: 46px;
    padding: 0 24px;
    border-radius: 999px;
    background: #111;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    box-shadow: 0 8px 24px rgba(24, 24, 22, .14);
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
      <section className="final-cta" id="waitlist" aria-labelledby="final-cta-title">
        <h2 id="final-cta-title">Your Mac can do more than wait for clicks.</h2>
        <p>Give Motus a goal and stay focused on what matters. Join the beta to be among the first to put your Mac to work.</p>
        <a className="black-button" href="mailto:hello@motus.ai?subject=Motus%20beta%20access">Join the beta ↗</a>
      </section>
    </>
  );
}
