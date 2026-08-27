import { Bot, Brain, CalendarClock, Compass, FolderSearch, Globe2 } from 'lucide-react';

const roadmap = [
  { icon: Bot, title: 'More autonomous work', text: 'Handle unfamiliar workflows from a simple outcome: book this, fix this, organize this.' },
  { icon: CalendarClock, title: 'Long-running & scheduled tasks', text: 'Let Motus work in the background or run a recurring job when it is due.' },
  { icon: Globe2, title: 'Deeper browser agent', text: 'Richer navigation, forms, tabs, downloads, and multi-page web workflows.' },
  { icon: FolderSearch, title: 'Deeper file understanding', text: 'Work across documents, PDFs, spreadsheets, images, archives, and large directories.' },
  { icon: Brain, title: 'Useful memory', text: 'Remember relevant context across tasks while keeping control in your hands.' },
  { icon: Compass, title: 'More integrations', text: 'Extend Motus into email, Slack, GitHub, Google Drive, Notion, and other services.' },
];

const styles = `
  .roadmap { padding: 0 20px 132px; background: var(--page-surface); }
  .roadmap-inner { width: min(1220px, 100%); margin: 0 auto; padding-top: 116px; border-top: 1px solid var(--line); }
  .roadmap-header { display: grid; grid-template-columns: 1fr .8fr; gap: 90px; align-items: end; }
  .roadmap h2 { margin: 25px 0 0; font-size: clamp(48px, 5.7vw, 76px); font-weight: 500; line-height: 1; letter-spacing: -.06em; }
  .roadmap-header p { margin: 0; color: var(--muted); font-size: 16px; line-height: 1.65; }
  .roadmap-note { margin-top: 24px; display: inline-flex; padding: 8px 11px; border: 1px solid #dcd8ff; border-radius: 999px; background: #efedff; color: #5e54cf; font-size: 10px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; }
  .roadmap-grid { margin-top: 68px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .roadmap-card { min-height: 235px; padding: 28px; border: 1px solid var(--line); border-radius: 15px; background: rgba(255,255,255,.48); }
  .roadmap-icon { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 11px; background: #e9e6ff; color: #5e54cf; }
  .roadmap-icon svg { width: 18px; stroke-width: 1.7; }
  .roadmap-card h3 { margin: 54px 0 12px; font-size: 18px; font-weight: 600; letter-spacing: -.03em; }
  .roadmap-card p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.55; }

  @media (max-width: 820px) {
    .roadmap-header { grid-template-columns: 1fr; gap: 25px; }
    .roadmap-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 560px) {
    .roadmap { padding: 0 16px 100px; }
    .roadmap-inner { padding-top: 90px; }
    .roadmap-grid { grid-template-columns: 1fr; }
  }
`;

export function RoadmapSection() {
  return (
    <>
      <style href="roadmap-styles" precedence="default">{styles}</style>
      <section className="roadmap" id="roadmap" aria-labelledby="roadmap-title">
        <div className="roadmap-inner">
          <header className="roadmap-header">
            <div>
              <span className="section-label">What’s next</span>
              <h2 id="roadmap-title">Motus is learning to go further.</h2>
            </div>
            <div>
              <p>These capabilities are on the roadmap. We’re showing the direction clearly without pretending future work has already shipped.</p>
              <span className="roadmap-note">In development</span>
            </div>
          </header>
          <div className="roadmap-grid">
            {roadmap.map(({ icon: Icon, title, text }) => (
              <article className="roadmap-card" key={title}>
                <span className="roadmap-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
