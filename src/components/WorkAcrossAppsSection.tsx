type WorkTool = {
  label: string;
  icon: string;
};

const workTools: WorkTool[] = [
  { label: 'Mail', icon: '/app-icons/mail.png' },
  { label: 'Messages', icon: '/app-icons/messages.png' },
  { label: 'Safari', icon: '/app-icons/safari.png' },
  { label: 'Notes', icon: '/app-icons/notes.png' },
  { label: 'Photos', icon: '/app-icons/photos.png' },
  { label: 'FaceTime', icon: '/app-icons/facetime.png' },
  { label: 'Music', icon: '/app-icons/music.png' },
  { label: 'Freeform', icon: '/app-icons/freeform.png' },
  { label: 'Preview', icon: '/app-icons/preview.png' },
  { label: 'Calculator', icon: '/app-icons/calculator.png' },
  { label: 'Shortcuts', icon: '/app-icons/shortcuts.png' },
  { label: 'Reminders', icon: '/app-icons/reminders.png' },
  { label: 'Contacts', icon: '/app-icons/contacts.png' },
  { label: 'Maps', icon: '/app-icons/maps.png' },
  { label: 'App Store', icon: '/app-icons/app-store.png' },
  { label: 'Weather', icon: '/app-icons/weather.png' },
  { label: 'Podcasts', icon: '/app-icons/podcasts.png' },
  { label: 'Terminal', icon: '/app-icons/terminal.png' },
];

const workAcrossAppsStyles = `
  .work-across-apps {
    padding: 0 20px;
    background: var(--page-surface);
  }

  .work-across-apps-inner {
    width: 100%;
    margin: 24px auto 0;
    padding: 116px 54px 110px;
    text-align: center;
    border-radius: 26px;
    background: #fff;
  }

  .work-across-apps h2 {
    max-width: 840px;
    margin: 0 auto;
    font-size: clamp(46px, 5.4vw, 70px);
    font-weight: 400;
    line-height: 1.02;
    letter-spacing: -.06em;
  }

  .work-tool-grid {
    position: relative;
    max-width: 780px;
    margin: 64px auto 66px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
    perspective: 1200px;
    transform: perspective(1200px) rotateX(16deg);
    transform-origin: center top;
    transform-style: preserve-3d;
  }

  .work-tool {
    aspect-ratio: 1.42;
    display: grid;
    place-items: center;
    transform-style: preserve-3d;
    transition: transform .35s ease, filter .35s ease;
    animation: work-tool-float 7s ease-in-out infinite;
  }

  .work-tool:nth-child(3n + 1) { animation-delay: -1.2s; }
  .work-tool:nth-child(3n + 2) { animation-delay: -3.6s; }
  .work-tool:nth-child(3n) { animation-delay: -5.1s; }
  .work-tool:nth-child(even) { animation-duration: 8.4s; }
  .work-tool:hover { z-index: 3; transform: translate3d(0, -8px, 16px) scale(1.035); filter: saturate(1.08); }

  .work-tool img {
    width: 72%;
    height: 72%;
    object-fit: contain;
    filter: drop-shadow(0 12px 13px rgba(28, 34, 45, .16));
    transform: translateZ(10px);
  }

  .work-across-apps-copy {
    max-width: 730px;
    margin: 0 auto;
    color: #55555a;
    font-size: 17px;
    line-height: 1.6;
  }

  @keyframes work-tool-float {
    0%, 100% { transform: translate3d(0, 0, 0); }
    50% { transform: translate3d(0, -5px, 10px); }
  }

  @keyframes work-grid-reveal {
    from { opacity: 0; transform: perspective(1200px) rotateX(24deg) translateY(28px) scale(.96); }
    to { opacity: 1; transform: perspective(1200px) rotateX(16deg) translateY(0) scale(1); }
  }

  @supports (animation-timeline: view()) {
    .work-tool-grid {
      animation: work-grid-reveal linear both;
      animation-timeline: view();
      animation-range: entry 4% cover 34%;
    }
  }

  @media (max-width: 760px) {
    .work-across-apps { padding-inline: 16px; }
    .work-across-apps-inner { padding: 82px 20px 78px; }
    .work-across-apps h2 { font-size: clamp(38px, 11vw, 52px); }
    .work-tool-grid {
      margin: 48px auto 48px;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      transform: perspective(900px) rotateX(12deg);
      transform-origin: center top;
    }
    .work-tool img { width: 74%; height: 74%; }
    .work-across-apps-copy { font-size: 15px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .work-tool-grid, .work-tool { animation: none; }
  }
`;

export function WorkAcrossAppsSection() {
  return (
    <>
      <style href="work-across-apps-styles" precedence="default">{workAcrossAppsStyles}</style>
      <section className="work-across-apps" aria-labelledby="work-across-apps-title">
        <div className="work-across-apps-inner">
          <span className="section-label">Across your Mac</span>
          <h2 id="work-across-apps-title">Work that moves with you.</h2>

          <div className="work-tool-grid" aria-label="Tools Motus can work across">
            {workTools.map(({ label, icon }) => (
              <div className="work-tool" title={label} key={label}>
                <img src={icon} alt={label} loading="lazy" />
              </div>
            ))}
          </div>

          <p className="work-across-apps-copy">
            From Safari to Finder, Notes to Terminal, Motus can combine the tools already on your Mac into one continuous workflow—without losing the request or the context behind it.
          </p>
        </div>
      </section>
    </>
  );
}
