type Capability = {
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  media: string;
  poster?: string;
  type: 'image' | 'video';
  tone: 'blue' | 'pearl' | 'violet' | 'sunset';
};

const capabilities: Capability[] = [
  {
    eyebrow: 'Voice-first',
    title: 'Talk to your Mac like a person.',
    text: 'Use your voice from anywhere on macOS. The dynamic notch keeps listening, thinking, execution, and speaking states visible without pulling you out of your work.',
    points: ['Global activation', 'Live interruption', 'Hands-free execution'],
    media: '/product/motus-native-voice-demo.mp4',
    poster: '/product/motus-native-voice-demo-poster.jpg',
    type: 'video',
    tone: 'blue',
  },
  {
    eyebrow: 'Filesystem intelligence',
    title: 'Find the file. Understand it. Act on it.',
    text: 'Motus works with files and folders directly. It can search, create, rename, move, copy, organize, and reveal the content you need—using meaning, not only filenames.',
    points: ['Native file operations', 'Content-aware search', 'Safe organization'],
    media: '/product/motus-workspace.png',
    type: 'image',
    tone: 'pearl',
  },
  {
    eyebrow: 'Coding',
    title: 'From “it’s broken” to passing tests.',
    text: 'For developer work, Motus goes beneath the editor. It can inspect project files, run shell commands, read errors and logs, make changes, and verify the fix.',
    points: ['Diagnose from real output', 'Edit project files directly', 'Build and test the result'],
    media: '/product/motus-real-calculator-5s.mp4',
    poster: '/product/motus-real-calculator-poster.png',
    type: 'video',
    tone: 'violet',
  },
  {
    eyebrow: 'Screen understanding',
    title: 'Native context, with vision on demand.',
    text: 'Motus reads the accessibility structure of the active app first—windows, controls, labels, links, and focus—then uses targeted vision when native context is not enough.',
    points: ['Active-app awareness', 'UI hierarchy and positions', 'Targeted visual perception'],
    media: '/product/motus-prompt-capture.png',
    type: 'image',
    tone: 'sunset',
  },
];

const capabilitiesStyles = `
  .capabilities {
    padding: 132px 20px;
    background: var(--page-surface);
  }

  .capabilities-intro {
    width: min(900px, 100%);
    margin: 0 auto 64px;
    text-align: center;
  }

  .capability-eyebrow,
  .capabilities-intro > span {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: #536ee8;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .11em;
    text-transform: uppercase;
  }

  .capability-eyebrow::before,
  .capabilities-intro > span::before {
    content: '';
    width: 15px;
    height: 4px;
    border-radius: 1px;
    background: linear-gradient(90deg, #8da9ff, #4a5de4);
  }

  .capabilities-intro h2 {
    max-width: 860px;
    margin: 26px auto 24px;
    font-size: clamp(44px, 5.4vw, 72px);
    font-weight: 400;
    line-height: 1.02;
    letter-spacing: -.06em;
  }

  .capabilities-intro p {
    max-width: 650px;
    margin: 0 auto;
    color: #5b5b61;
    font-size: 16px;
    line-height: 1.6;
  }

  .capability-list {
    width: min(1400px, calc(100% - 80px));
    margin: 0 auto;
    background: transparent;
  }

  .capability-row {
    min-height: 610px;
    padding: 48px 0;
    display: grid;
    grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
    gap: 74px;
    align-items: center;
  }

  .capability-row.reverse {
    grid-template-columns: minmax(0, 1.18fr) minmax(0, .82fr);
  }

  .capability-row.reverse .capability-copy { order: 2; }
  .capability-row.reverse .capability-media { order: 1; }

  .capability-copy h3 {
    margin: 22px 0 24px;
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 400;
    line-height: 1.04;
    letter-spacing: -.055em;
  }

  .capability-copy > p {
    margin: 0;
    color: #5c5c62;
    font-size: 15px;
    line-height: 1.68;
  }

  .capability-copy ul {
    margin: 34px 0 0;
    padding: 0;
    display: grid;
    gap: 14px;
    list-style: none;
    font-size: 14px;
  }

  .capability-copy li { display: flex; align-items: center; gap: 13px; }
  .capability-copy li::before { content: '→'; font-size: 17px; }

  .capability-media {
    min-height: 520px;
    padding: 36px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 22px;
  }

  .capability-media[data-tone='blue'] {
    background: radial-gradient(circle at 20% 14%, #e5f4ec 0%, transparent 34%), linear-gradient(140deg, #8fc8bd, #c7dfd2 50%, #557b78);
  }

  .capability-media[data-tone='pearl'] {
    background: radial-gradient(circle at 82% 12%, rgba(255, 255, 255, .9), transparent 31%), linear-gradient(135deg, #d5dbeb, #f0e9e4 50%, #a9b8d3);
  }

  .capability-media[data-tone='violet'] {
    background: radial-gradient(circle at 80% 18%, #ffe6cb 0%, transparent 34%), linear-gradient(135deg, #c88f78, #e8bea0 54%, #7e5d58);
  }

  .capability-media[data-tone='sunset'] {
    background: radial-gradient(circle at 18% 20%, #ffd4b3 0%, transparent 34%), linear-gradient(135deg, #e7b7d8, #f3d8bc 52%, #8ba8e8);
  }

  .capability-media img,
  .capability-media video {
    width: 100%;
    max-height: 500px;
    border: 1px solid rgba(255, 255, 255, .55);
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 32px 80px rgba(17, 22, 50, .24);
    object-fit: cover;
  }

  .capability-media video { aspect-ratio: 16 / 10; }

  @media (max-width: 820px) {
    .capabilities { padding: 96px 16px 0; }
    .capabilities-intro { margin-bottom: 48px; }
    .capability-list { width: 100%; }
    .capability-row,
    .capability-row.reverse {
      min-height: 0;
      padding: 40px 20px 64px;
      grid-template-columns: 1fr;
      gap: 42px;
    }
    .capability-row.reverse .capability-copy,
    .capability-row.reverse .capability-media { order: initial; }
    .capability-media { min-height: 0; padding: 20px; }
    .capability-media img,
    .capability-media video { max-height: none; }
  }
`;

export function CapabilitiesSection() {
  return (
    <>
      <style href="capabilities-styles" precedence="default">{capabilitiesStyles}</style>
      <section className="capabilities" id="features">
        <div className="capabilities-intro">
          <span>Made for real work</span>
          <h2>One request. Every tool it needs.</h2>
          <p>Motus combines natural conversation with direct access to the Mac beneath it—so a request can move through files, apps, code, and the web without losing the goal.</p>
        </div>

        <div className="capability-list">
          {capabilities.map((item, index) => (
            <article className={`capability-row${index % 2 ? ' reverse' : ''}`} key={item.title}>
              <div className="capability-copy">
                <span className="capability-eyebrow">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>

              <div className="capability-media" data-tone={item.tone}>
                {item.type === 'video' ? (
                  <video autoPlay loop muted playsInline preload="metadata" poster={item.poster} aria-label={`${item.title} product demo`}>
                    <source src={item.media} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.media} loading="lazy" alt={`${item.title} in Motus`} />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
