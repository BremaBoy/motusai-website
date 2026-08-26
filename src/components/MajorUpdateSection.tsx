const majorUpdateStyles = `
  .major-update {
    padding: 0 20px 128px;
    overflow: hidden;
    background: #fbfbfa;
    color: #111;
  }

  .major-update-inner {
    width: 100%;
    margin: 0 auto;
    padding: 110px 54px;
    display: grid;
    grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr);
    gap: 88px;
    align-items: center;
    background: #fff;
  }

  .major-update-copy > span {
    color: #367fbe;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .major-update h2 {
    margin: 25px 0 26px;
    font-size: clamp(42px, 5vw, 66px);
    font-weight: 400;
    line-height: 1.02;
    letter-spacing: -.06em;
  }

  .major-update-copy > p {
    margin: 0;
    color: #68686c;
    font-size: 15px;
    line-height: 1.7;
  }

  .update-points {
    margin-top: 38px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    border-top: 1px solid #e7e7e4;
  }

  .update-points div {
    min-height: 72px;
    padding: 16px 0;
    display: grid;
    grid-template-columns: 112px 1fr;
    gap: 16px;
    align-items: start;
    border-bottom: 1px solid #e7e7e4;
  }

  .update-points b { display: block; font-size: 12px; font-weight: 500; }
  .update-points span { color: #77777b; font-size: 11px; line-height: 1.45; }

  .major-update-visual {
    position: relative;
    padding: 58px 0 58px 58px;
  }

  .major-update-visual::before {
    content: '';
    position: absolute;
    inset: 0 -18vw 0 0;
    background:
      radial-gradient(circle at 18% 16%, rgba(255, 255, 255, .96), transparent 31%),
      radial-gradient(circle at 84% 78%, rgba(91, 143, 243, .48), transparent 34%),
      linear-gradient(145deg, #edf7fb, #d9ecf5 48%, #94b8ee);
    border-radius: 14px;
  }

  .major-update-visual img {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 840px;
    border: 1px solid rgba(255, 255, 255, .8);
    border-radius: 8px;
    box-shadow: 0 32px 80px rgba(49, 72, 112, .22);
  }

  @media (max-width: 900px) {
    .major-update { padding: 0 16px 96px; }
    .major-update-inner { padding: 84px 28px; grid-template-columns: 1fr; gap: 60px; }
    .major-update-visual { padding: 30px; }
    .major-update-visual::before { inset: 0; }
    .major-update-visual img { width: 100%; max-width: 100%; }
  }

  @media (max-width: 520px) {
    .update-points div { grid-template-columns: 1fr; gap: 7px; }
  }
`;

export function MajorUpdateSection() {
  return (
    <>
      <style href="major-update-styles" precedence="default">{majorUpdateStyles}</style>
      <section className="major-update" aria-labelledby="major-update-title">
        <div className="major-update-inner">
          <div className="major-update-copy">
            <span>Major update · August 2026</span>
            <h2 id="major-update-title">Motus now keeps the work behind the work.</h2>
            <p>Longer projects feel lighter. Motus can hold onto the decisions, working notes, and useful context that matter—so returning to a task feels like continuing, not starting again.</p>
            <div className="update-points">
              <div><b>Project memory</b><span>Keep important context close across longer threads.</span></div>
              <div><b>Prompt capture</b><span>Turn rough notes into a focused, reusable request.</span></div>
              <div><b>Faster return</b><span>Come back to work with the next step already visible.</span></div>
            </div>
          </div>

          <div className="major-update-visual">
            <img src="/product/motus-prompt-capture.png" loading="lazy" alt="Motus prompt capture and project memory interface" />
          </div>
        </div>
      </section>
    </>
  );
}
