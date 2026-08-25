import { HeroBridge } from './HeroBridge';

const heroStyles = `
  .hero {
    position: relative;
    z-index: 1;
    height: 930px;
    padding: 0;
    overflow: visible;
    text-align: center;
    background: #100d17;
    color: #fff;
    isolation: isolate;
  }

  .hero-copy { position: relative; z-index: 3; padding-top: 92px; }
  .hero-copy > span { font-size: 12px; }

  .hero h1 {
    margin: 80px 0 18px;
    font-size: 70px;
    font-weight: 500;
    line-height: 1.05;
    letter-spacing: -.055em;
    text-shadow: 0 2px 28px rgba(0, 0, 0, .45);
  }

  .hero p {
    margin: 0;
    font-size: 17px;
    line-height: 1.35;
    letter-spacing: -.025em;
    text-shadow: 0 2px 20px rgba(0, 0, 0, .35);
  }

  .hero-actions {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    font-size: 12px;
  }

  .hero .black-button {
    min-height: 36px;
    padding: 0 19px;
    border-radius: 999px;
    background: #fff;
    color: #141114;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

  @media (max-width: 760px) {
    .hero { height: 875px; padding: 0; }
    .hero-copy { padding: 70px 20px 0; }
    .hero h1 { font-size: 38px; }
    .hero p br { display: none; }
  }

  @media (max-width: 460px) {
    .hero h1 { font-size: 33px; }
    .hero p { font-size: 15px; }
    .hero-actions { flex-direction: column; gap: 16px; }
  }
`;

export function Hero() {
  return (
    <>
      <style href="hero-styles" precedence="default">{heroStyles}</style>
      <section className="hero" id="top">
        <HeroBridge />
        <div className="hero-copy">
          <h1>Say what you need.<br /><em>Motus gets it moving</em></h1>
          <div className="hero-actions">
            <a className="black-button" href="#download">Download for Mac</a>
            <a href="#waitlist">Join waitlist</a>
          </div>
        </div>
      </section>
    </>
  );
}
