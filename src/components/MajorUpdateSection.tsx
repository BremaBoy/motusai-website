const majorUpdateStyles = `
  .major-update {
    padding: 140px 20px;
    overflow: hidden;
    background: #0d1018;
    color: #fff;
  }

  .major-update-inner {
    width: min(1120px, 100%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 88px;
    align-items: center;
  }

  .major-update-copy > span {
    color: #aebcff;
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
    color: rgba(255, 255, 255, .66);
    font-size: 15px;
    line-height: 1.7;
  }

  .update-points {
    margin-top: 38px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .update-points div {
    min-height: 110px;
    padding: 18px;
    border: 1px solid rgba(255, 255, 255, .13);
    background: rgba(255, 255, 255, .04);
  }

  .update-points b { display: block; margin-bottom: 8px; font-size: 12px; font-weight: 500; }
  .update-points span { color: rgba(255, 255, 255, .5); font-size: 11px; line-height: 1.45; }

  .major-update-visual {
    position: relative;
    padding: 58px 0 58px 58px;
  }

  .major-update-visual::before {
    content: '';
    position: absolute;
    inset: 0 -18vw 0 0;
    background:
      radial-gradient(circle at 20% 18%, rgba(130, 156, 255, .88), transparent 30%),
      radial-gradient(circle at 88% 72%, rgba(238, 146, 112, .7), transparent 34%),
      linear-gradient(135deg, #273a8c, #6e5d9c 50%, #35203a);
  }

  .major-update-visual img {
    position: relative;
    z-index: 1;
    width: min(840px, 74vw);
    max-width: none;
    border: 1px solid rgba(255, 255, 255, .5);
    border-radius: 6px;
    box-shadow: 0 38px 100px rgba(0, 0, 0, .42);
  }

  @media (max-width: 900px) {
    .major-update { padding: 100px 16px; }
    .major-update-inner { grid-template-columns: 1fr; gap: 60px; }
    .major-update-visual { padding: 30px; }
    .major-update-visual::before { inset: 0; }
    .major-update-visual img { width: 100%; max-width: 100%; }
  }

  @media (max-width: 520px) {
    .update-points { grid-template-columns: 1fr; }
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
