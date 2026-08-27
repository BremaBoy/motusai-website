import { Check, ChevronRight, RotateCcw } from 'lucide-react';

const executionLayers = [
  ['01', 'Native system APIs', 'Fastest, most direct'],
  ['02', 'App capabilities', 'Structured app actions'],
  ['03', 'Apple Events', 'Scriptable workflows'],
  ['04', 'Accessibility APIs', 'UI-aware interaction'],
  ['05', 'Targeted vision', 'Only when needed'],
  ['06', 'Keyboard & mouse', 'Universal fallback'],
];

const verifySteps = ['Observe', 'Plan', 'Act', 'Verify'];

const styles = `
  .execution {
    padding: 0 20px 132px;
    background: var(--page-surface);
    color: #f8f7fb;
  }

  .execution-inner {
    width: min(1400px, 100%);
    margin: 0 auto;
    padding: 96px clamp(28px, 5vw, 80px);
    overflow: hidden;
    border-radius: 28px;
    background:
      radial-gradient(circle at 10% 12%, rgba(110, 88, 245, .26), transparent 32%),
      radial-gradient(circle at 92% 84%, rgba(220, 99, 75, .2), transparent 35%),
      #15121d;
  }

  .execution-header { max-width: 920px; }
  .execution .section-label { color: #c0b9ff; }
  .execution h2 { margin: 26px 0 22px; font-size: clamp(47px, 5.7vw, 76px); font-weight: 500; line-height: 1; letter-spacing: -.06em; }
  .execution-header p { max-width: 660px; margin: 0; color: rgba(255,255,255,.58); font-size: 16px; line-height: 1.65; }

  .execution-grid { margin-top: 78px; display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .execution-panel { min-height: 610px; padding: 34px; border: 1px solid rgba(255,255,255,.1); border-radius: 18px; background: rgba(255,255,255,.045); }
  .execution-panel-head { margin-bottom: 42px; display: flex; justify-content: space-between; align-items: center; }
  .execution-panel-head span { color: rgba(255,255,255,.44); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
  .execution-panel-head b { padding: 7px 10px; border: 1px solid rgba(255,255,255,.12); border-radius: 999px; color: #c8c3d4; font-size: 10px; font-weight: 500; }
  .execution-panel h3 { max-width: 420px; margin: 0 0 40px; font-size: clamp(28px, 3vw, 39px); font-weight: 500; line-height: 1.08; letter-spacing: -.045em; }

  .execution-layers { display: grid; }
  .execution-layer { min-height: 61px; display: grid; grid-template-columns: 35px 1fr auto; gap: 14px; align-items: center; border-top: 1px solid rgba(255,255,255,.1); }
  .execution-layer:last-child { border-bottom: 1px solid rgba(255,255,255,.1); }
  .execution-layer span:first-child { color: rgba(255,255,255,.32); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px; }
  .execution-layer strong { font-size: 13px; font-weight: 500; }
  .execution-layer small { color: rgba(255,255,255,.42); font-size: 10px; }

  .verify-loop { position: relative; height: 360px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-content: center; }
  .verify-step { min-height: 98px; padding: 18px; border: 1px solid rgba(255,255,255,.11); border-radius: 12px; background: rgba(255,255,255,.05); display: flex; flex-direction: column; justify-content: space-between; }
  .verify-step span { color: rgba(255,255,255,.34); font-size: 10px; }
  .verify-step strong { font-size: 15px; font-weight: 500; }
  .verify-result { grid-column: 1 / -1; min-height: 76px; padding: 18px 20px; display: flex; align-items: center; gap: 13px; border: 1px solid rgba(130, 232, 180, .22); border-radius: 12px; background: rgba(74, 185, 125, .1); color: #bef1d2; }
  .verify-result svg { width: 18px; }
  .verify-result div { display: grid; gap: 3px; }
  .verify-result strong { font-size: 13px; font-weight: 600; }
  .verify-result small { color: rgba(208,255,227,.58); font-size: 10px; }
  .verify-retry { margin-top: 25px; display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,.45); font-size: 11px; }
  .verify-retry svg, .execution-layer svg { width: 14px; height: 14px; }

  @media (max-width: 840px) {
    .execution-grid { grid-template-columns: 1fr; }
    .execution-panel { min-height: 0; }
  }

  @media (max-width: 560px) {
    .execution { padding: 0 10px 100px; }
    .execution-inner { padding: 72px 18px; border-radius: 22px; }
    .execution-panel { padding: 24px 20px; }
    .execution-layer { grid-template-columns: 28px 1fr; }
    .execution-layer small { display: none; }
  }
`;

export function ExecutionSection() {
  return (
    <>
      <style href="execution-styles" precedence="default">{styles}</style>
      <section className="execution" id="how-it-works" aria-labelledby="execution-title">
        <div className="execution-inner">
          <header className="execution-header">
            <span className="section-label">Built native, all the way down</span>
            <h2 id="execution-title">The most reliable path wins.</h2>
            <p>Motus does not treat every app as a wall of pixels. It uses a capability hierarchy, starting with the deepest native integration available and stepping down only when necessary.</p>
          </header>

          <div className="execution-grid">
            <article className="execution-panel">
              <div className="execution-panel-head"><span>Execution hierarchy</span><b>Native first</b></div>
              <h3>Use the API when possible. Use the screen when necessary.</h3>
              <div className="execution-layers">
                {executionLayers.map(([number, label, detail], index) => (
                  <div className="execution-layer" key={number}>
                    <span>{number}</span><strong>{label}</strong><small>{detail} {index < executionLayers.length - 1 && <ChevronRight />}</small>
                  </div>
                ))}
              </div>
            </article>

            <article className="execution-panel">
              <div className="execution-panel-head"><span>Task verification</span><b>Closed loop</b></div>
              <h3>Motus checks the result before moving on.</h3>
              <div className="verify-loop">
                {verifySteps.map((step, index) => <div className="verify-step" key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}
                <div className="verify-result"><Check /><div><strong>Result confirmed</strong><small>Continue to the next step</small></div></div>
              </div>
              <div className="verify-retry"><RotateCcw /> If something fails, Motus diagnoses the problem and can try a safer path.</div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
