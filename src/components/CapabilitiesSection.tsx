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
    eyebrow: 'Native voice',
    title: 'Speak naturally. Keep moving.',
    text: 'Talk through an idea, a calculation, or the next task. Motus listens in real time and keeps the conversation ready for action.',
    points: ['Live voice capture', 'Fast transcription', 'Hands-free follow-through'],
    media: '/product/motus-native-voice-demo.mp4',
    poster: '/product/motus-native-voice-demo-poster.jpg',
    type: 'video',
    tone: 'blue',
  },
  {
    eyebrow: 'Connected workspace',
    title: 'One place for every thread of work.',
    text: 'Move from a quick question to a longer project without losing the decisions, references, and context that got you there.',
    points: ['Persistent conversations', 'Project-ready context', 'A calmer workspace'],
    media: '/product/motus-workspace.png',
    type: 'image',
    tone: 'pearl',
  },
  {
    eyebrow: 'Real actions',
    title: 'Ask for the result—not the steps.',
    text: 'Motus can open the right tool, work through the task, and bring the useful result back into your conversation.',
    points: ['Tool-aware assistance', 'Visible progress', 'Results you can continue with'],
    media: '/product/motus-real-calculator-5s.mp4',
    poster: '/product/motus-real-calculator-poster.png',
    type: 'video',
    tone: 'violet',
  },
  {
    eyebrow: 'Clearer prompts',
    title: 'Turn a rough thought into a clear next move.',
    text: 'Start with fragments. Motus helps shape them into a focused request, then keeps the important context close by.',
    points: ['Prompt refinement', 'Reusable context', 'Less repetitive setup'],
    media: '/product/motus-prompt-capture.png',
    type: 'image',
    tone: 'sunset',
  },
];

const capabilitiesStyles = `
  .capabilities {
    padding: 128px 20px 0;
    background: #fbfbfa;
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
    background: #fff;
  }

  .capability-row {
    min-height: 610px;
    padding: 20px 54px 84px;
    display: grid;
    grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
    gap: 88px;
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
    min-height: 560px;
    padding: 36px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 14px;
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
    border-radius: 6px;
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
          <span>Motus in motion</span>
          <h2>Your chat, built for more than answers.</h2>
          <p>Move from speaking to planning, calculating, researching, and creating—without rebuilding the context every time.</p>
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
