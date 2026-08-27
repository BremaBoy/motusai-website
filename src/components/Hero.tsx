import { HeroBridge } from './HeroBridge';

const heroStyles = `
  .hero {
    position: relative;
    z-index: 1;
    height: 980px;
    padding: 0;
    overflow: visible;
    text-align: center;
    background: #100d17;
    color: #fff;
    isolation: isolate;
  }

  .hero-copy { position: relative; z-index: 3; padding: 136px 20px 0; }

  .hero-kicker {
    display: inline-flex;
    min-height: 30px;
    padding: 0 13px;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 999px;
    background: rgba(17, 14, 25, .34);
    color: rgba(255,255,255,.78);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    font-size: 11px;
  }

  .hero-kicker::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #b7adff; box-shadow: 0 0 16px #9d91ff; }

  .hero h1 {
    max-width: 970px;
    margin: 42px auto 22px;
    font-size: clamp(56px, 6vw, 82px);
    font-weight: 500;
    line-height: 1.05;
    letter-spacing: -.055em;
    text-shadow: 0 2px 28px rgba(0, 0, 0, .45);
  }

  .hero h1 em { color: #d6d0ff; font-family: Georgia, "Times New Roman", serif; font-weight: 400; }

  .hero p {
    max-width: 620px;
    margin: 0 auto;
    color: rgba(255,255,255,.72);
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: -.025em;
    text-shadow: 0 2px 20px rgba(0, 0, 0, .35);
  }

  .hero-actions {
    margin-top: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    font-size: 12px;
  }

  .hero .black-button {
    min-height: 44px;
    padding: 0 22px;
    border-radius: 999px;
    background: #fff;
    color: #141114;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    transition: transform .2s ease, box-shadow .2s ease;
  }

  .hero .black-button:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,.28); }
  .hero-secondary { color: rgba(255,255,255,.82); font-size: 13px; }
  .hero-secondary:hover { color: #fff; }

  @media (max-width: 760px) {
    .hero { height: 900px; padding: 0; }
    .hero-copy { padding: 112px 18px 0; }
    .hero h1 { margin-top: 34px; font-size: clamp(43px, 12vw, 62px); }
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
          <span className="hero-kicker">Native AI for macOS</span>
          <h1>Give your computer a goal.<br /><em>Motus gets it done.</em></h1>
          <p>Tell Motus what you want—not how to do it. It understands your Mac, chooses the right tools, and carries the task through.</p>
          <div className="hero-actions">
            <a className="black-button" href="#waitlist">Join the beta</a>
            <a className="hero-secondary" href="#how-it-works">See how it works ↓</a>
          </div>
        </div>
      </section>
    </>
  );
}
