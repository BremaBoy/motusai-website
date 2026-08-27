type FeaturedVideo = {
  eyebrow: string;
  title: string;
  text: string;
  video?: string;
  poster?: string;
  motion?: 'open-mail' | 'terminal-build' | 'trash-app';
  tone: 'rose' | 'aqua' | 'mint';
};

const featuredVideos: FeaturedVideo[] = [
  {
    eyebrow: 'Notch voice control',
    title: 'Say it. Motus opens it.',
    text: 'Say “Open Mail.” The notch stays visible while Motus listens, understands, and opens the app for you.',
    motion: 'open-mail',
    tone: 'rose',
  },
  {
    eyebrow: 'Terminal control',
    title: 'Say it. Motus runs it.',
    text: 'Ask Motus to run the project build. It opens Terminal, enters the command, and stays visible until the build passes.',
    motion: 'terminal-build',
    tone: 'aqua',
  },
  {
    eyebrow: 'App management',
    title: 'Clean up without hunting.',
    text: 'Tell Motus to remove Focus Timer. It moves the app safely to Trash, opens the bin, and shows you exactly where it went.',
    motion: 'trash-app',
    tone: 'mint',
  },
];

function OpenMailMotion() {
  return (
    <div className="open-mail-motion" role="img" aria-label="Motus voice control listening to Open Mail and opening the Mail app">
      <div className="motion-menu-bar" aria-hidden="true">
        <div className="motion-menu-left">
          <span className="motion-apple">●</span>
          <strong>Motus</strong>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
        </div>
        <div className="motion-menu-right">
          <span>⌁</span>
          <span>◒</span>
          <span>10:42</span>
        </div>
      </div>

      <div className="motion-desktop" aria-hidden="true">
        <div className="motion-wallpaper-glow" />
        <div className="motion-mail-window">
          <div className="motion-window-bar">
            <div className="motion-traffic-lights"><i /><i /><i /></div>
            <span>Inbox</span>
            <div className="motion-window-actions"><i /><i /></div>
          </div>
          <div className="motion-mail-body">
            <aside>
              <div className="motion-mailbox-title">Mailboxes</div>
              <div className="motion-mailbox active"><span>▣</span> Inbox <b>12</b></div>
              <div className="motion-mailbox"><span>☆</span> Flagged</div>
              <div className="motion-mailbox"><span>⌁</span> Drafts</div>
              <div className="motion-mailbox"><span>⌁</span> Sent</div>
            </aside>
            <div className="motion-message-list">
              <div className="motion-search">Search</div>
              <div className="motion-message selected"><strong>Motus</strong><span>Your day, ready to move</span><small>10:42</small></div>
              <div className="motion-message"><strong>Studio team</strong><span>Project notes and next steps</span></div>
              <div className="motion-message"><strong>Alex</strong><span>Tomorrow's schedule</span></div>
            </div>
            <div className="motion-message-view">
              <span className="motion-message-label">TODAY</span>
              <h4>Your day, ready to move</h4>
              <p>Everything you asked for is in one place.</p>
              <div className="motion-mail-lines"><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="motion-notch-expanded" aria-hidden="true">
        <div className="motion-notch-camera">n</div>
        <div className="motion-notch-state motion-notch-ready">
          <div className="motion-notch-brand"><span>Motus AI</span><i />Motus</div>
          <small>Press ⌃⌥M or click to start</small>
          <em>Ready</em>
        </div>
        <div className="motion-notch-state motion-notch-listening">
          <span>Listening…</span>
          <div className="motion-waveform"><i /><i /><i /><i /><i /></div>
          <b className="motion-stop"><i /></b>
        </div>
        <div className="motion-notch-state motion-notch-heard">
          <img src="/app-icons/mail.png" alt="" />
          <div><small>Voice command</small><strong>“Open Mail”</strong></div>
          <span>Heard</span>
        </div>
        <div className="motion-notch-state motion-notch-opening">
          <img src="/app-icons/mail.png" alt="" />
          <div><small>Motus is working</small><strong>Opening Mail…</strong></div>
          <i className="motion-loader" />
        </div>
      </div>

      <div className="motion-notch-compact" aria-hidden="true">
        <img src="/app-icons/mail.png" alt="" />
        <span>Mail opened</span>
        <div className="motion-mini-wave"><i /><i /><i /></div>
        <b>✓</b>
      </div>
    </div>
  );
}

function TerminalBuildMotion() {
  return (
    <div className="terminal-motion" role="img" aria-label="Motus voice control running a project build in Terminal">
      <div className="motion-menu-bar" aria-hidden="true">
        <div className="motion-menu-left">
          <span className="motion-apple">●</span>
          <strong>Terminal</strong>
          <span>Shell</span>
          <span>Edit</span>
          <span>View</span>
        </div>
        <div className="motion-menu-right"><span>⌁</span><span>◒</span><span>10:44</span></div>
      </div>

      <div className="terminal-desktop" aria-hidden="true">
        <div className="terminal-orb terminal-orb-one" />
        <div className="terminal-orb terminal-orb-two" />
        <div className="terminal-window">
          <div className="terminal-window-bar">
            <div className="motion-traffic-lights"><i /><i /><i /></div>
            <span>motus-web — zsh</span>
            <i className="terminal-tab">＋</i>
          </div>
          <div className="terminal-screen">
            <div className="terminal-path">motus-web <span>main</span></div>
            <div className="terminal-command"><b>❯</b><span className="terminal-typed-command">npm run build</span><i /></div>
            <div className="terminal-output terminal-output-one">&gt; motus-web@1.0.0 build</div>
            <div className="terminal-output terminal-output-two">&gt; tsc --noEmit &amp;&amp; vite build</div>
            <div className="terminal-output terminal-output-three"><span>✓</span> 1685 modules transformed.</div>
            <div className="terminal-output terminal-output-four"><span>✓</span> built in 1.55s</div>
            <div className="terminal-result"><i>✓</i><div><strong>Build passed</strong><small>Ready to ship</small></div></div>
          </div>
        </div>
      </div>

      <div className="motion-notch-expanded terminal-notch-expanded" aria-hidden="true">
        <div className="motion-notch-camera">n</div>
        <div className="motion-notch-state motion-notch-ready">
          <div className="motion-notch-brand"><span>Motus AI</span><i />Motus</div>
          <small>Press ⌃⌥M or click to start</small>
          <em>Ready</em>
        </div>
        <div className="motion-notch-state motion-notch-listening">
          <span>Listening…</span>
          <div className="motion-waveform"><i /><i /><i /><i /><i /></div>
          <b className="motion-stop"><i /></b>
        </div>
        <div className="motion-notch-state terminal-notch-command">
          <img src="/app-icons/terminal.png" alt="" />
          <div><small>Voice command</small><strong>“Run the project build”</strong></div>
          <span>Heard</span>
        </div>
        <div className="motion-notch-state terminal-notch-running">
          <img src="/app-icons/terminal.png" alt="" />
          <div><small>Terminal</small><strong>Running npm run build…</strong></div>
          <i className="motion-loader" />
        </div>
      </div>

      <div className="motion-notch-compact terminal-notch-compact" aria-hidden="true">
        <img src="/app-icons/terminal.png" alt="" />
        <span>Build passed</span>
        <div className="motion-mini-wave"><i /><i /><i /></div>
        <b>✓</b>
      </div>
    </div>
  );
}

function FocusTimerIcon({ small = false }: { small?: boolean }) {
  return <span className={`focus-timer-icon${small ? ' focus-timer-icon-small' : ''}`}><i /><b>25</b></span>;
}

function TrashAppMotion() {
  return (
    <div className="trash-motion" role="img" aria-label="Motus voice control moving the Focus Timer app to Trash and opening Trash">
      <div className="motion-menu-bar" aria-hidden="true">
        <div className="motion-menu-left">
          <span className="motion-apple">●</span>
          <strong>Finder</strong>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
        </div>
        <div className="motion-menu-right"><span>⌁</span><span>◒</span><span>10:46</span></div>
      </div>

      <div className="trash-desktop" aria-hidden="true">
        <div className="trash-finder-window">
          <div className="trash-window-bar">
            <div className="trash-toolbar-side">
              <div className="motion-traffic-lights"><i /><i /><i /></div>
            </div>
            <div className="trash-toolbar-main">
              <div className="trash-nav-arrows"><i>‹</i><i>›</i></div>
              <span className="trash-window-title trash-title-apps">Applications</span>
              <span className="trash-window-title trash-title-bin">Trash</span>
              <div className="trash-toolbar-actions">
                <span className="trash-toolbar-group trash-view-grid"><i /><i /><i /><i /></span>
                <span className="trash-toolbar-lines"><i /><i /><i /></span>
                <span className="trash-toolbar-columns"><i /><i /><i /></span>
                <span className="trash-toolbar-gallery"><i /></span>
                <span className="trash-toolbar-separator" />
                <span className="trash-toolbar-arrange"><i /><i /><i /><i /></span>
                <span className="trash-toolbar-share">⇧</span>
                <span className="trash-toolbar-tag">◇</span>
                <span className="trash-toolbar-more">•••</span>
                <span className="trash-toolbar-search" />
              </div>
              <button className="trash-empty-button" type="button">Empty</button>
            </div>
          </div>
          <div className="trash-finder-body">
            <aside>
              <div className="trash-side-label">Favorites</div>
              <div className="trash-side-row"><i className="trash-side-icon trash-recents-icon">◷</i><span>Recents</span></div>
              <div className="trash-side-row trash-apps-row"><i className="trash-side-icon trash-app-icon">A</i><span>Applications</span></div>
              <div className="trash-side-row"><i className="trash-side-icon">▱</i><span>Documents</span></div>
              <div className="trash-side-row"><i className="trash-side-icon">▭</i><span>Desktop</span></div>
              <div className="trash-side-row"><i className="trash-side-icon">↓</i><span>Downloads</span></div>
              <div className="trash-side-label trash-locations-label">iCloud</div>
              <div className="trash-side-row"><i className="trash-side-icon">☁</i><span>iCloud Drive</span></div>
              <div className="trash-side-row"><i className="trash-side-icon">⌘</i><span>Shared</span></div>
              <div className="trash-side-label trash-tags-label">Tags</div>
              <div className="trash-side-row"><i className="trash-tag-dot trash-tag-red" /><span>Learning</span></div>
              <div className="trash-side-row"><i className="trash-tag-dot trash-tag-yellow" /><span>Projects</span></div>
              <div className="trash-side-row trash-bin-row"><img src="/app-icons/trash-full-dark.png" alt="" /><span>Trash</span></div>
            </aside>

            <div className="trash-applications-view">
              <div className="finder-app-grid">
                <div className="finder-app focus-app-source"><FocusTimerIcon /><span>Focus Timer</span></div>
                <div className="finder-app"><img src="/app-icons/safari.png" alt="" /><span>Safari</span></div>
                <div className="finder-app"><img src="/app-icons/app-store.png" alt="" /><span>App Store</span></div>
                <div className="finder-app"><img src="/app-icons/terminal.png" alt="" /><span>Terminal</span></div>
                <div className="finder-app"><img src="/app-icons/calculator.png" alt="" /><span>Calculator</span></div>
                <div className="finder-app"><img src="/app-icons/contacts.png" alt="" /><span>Contacts</span></div>
                <div className="finder-app"><img src="/app-icons/notes.png" alt="" /><span>Notes</span></div>
                <div className="finder-app"><img src="/app-icons/photos.png" alt="" /><span>Photos</span></div>
                <div className="finder-app"><img src="/app-icons/freeform.png" alt="" /><span>Freeform</span></div>
                <div className="finder-app"><img src="/app-icons/music.png" alt="" /><span>Music</span></div>
                <div className="finder-app"><img src="/app-icons/shortcuts.png" alt="" /><span>Shortcuts</span></div>
                <div className="finder-app"><img src="/app-icons/reminders.png" alt="" /><span>Reminders</span></div>
              </div>
            </div>

            <div className="trash-bin-view">
              <div className="trashed-focus-app"><FocusTimerIcon /><span>Focus Timer</span><small>Moved just now</small></div>
              <div className="trash-status-bar">1 item <span>•</span> 1.8 MB</div>
            </div>
          </div>
        </div>
        <div className="trash-dock">
          <img src="/app-icons/safari.png" alt="" />
          <img src="/app-icons/mail.png" alt="" />
          <img src="/app-icons/messages.png" alt="" />
          <span className="trash-dock-divider" />
          <span className="motion-trash-can">
            <img className="trash-icon-empty" src="/app-icons/trash-empty-dark.png" alt="" />
            <img className="trash-icon-full" src="/app-icons/trash-full-dark.png" alt="" />
          </span>
        </div>
      </div>

      <div className="motion-notch-expanded trash-notch-expanded" aria-hidden="true">
        <div className="motion-notch-camera">n</div>
        <div className="motion-notch-state motion-notch-ready">
          <div className="motion-notch-brand"><span>Motus AI</span><i />Motus</div>
          <small>Press ⌃⌥M or click to start</small>
          <em>Ready</em>
        </div>
        <div className="motion-notch-state motion-notch-listening">
          <span>Listening…</span>
          <div className="motion-waveform"><i /><i /><i /><i /><i /></div>
          <b className="motion-stop"><i /></b>
        </div>
        <div className="motion-notch-state trash-notch-command">
          <FocusTimerIcon small />
          <div><small>Voice command</small><strong>“Move Focus Timer to Trash”</strong></div>
          <span>Heard</span>
        </div>
        <div className="motion-notch-state trash-notch-moving">
          <FocusTimerIcon small />
          <div><small>Finder</small><strong>Moving app to Trash…</strong></div>
          <i className="motion-loader" />
        </div>
      </div>

      <div className="motion-notch-compact trash-notch-compact" aria-hidden="true">
        <FocusTimerIcon small />
        <span>Moved to Trash</span>
        <div className="motion-mini-wave"><i /><i /><i /></div>
        <b>✓</b>
      </div>
    </div>
  );
}

const featuredVideosStyles = `
  .featured-videos {
    padding: 126px 20px 132px;
    background: #fbfbfa;
  }

  .featured-videos-inner { width: min(1480px, 100%); margin: 0 auto; }

  .featured-videos-heading {
    max-width: 760px;
    margin: 0 auto 62px;
    text-align: center;
  }

  .featured-videos-heading > span {
    color: #367fbe;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .featured-videos-heading h2 {
    margin: 24px 0 0;
    font-size: clamp(42px, 5vw, 62px);
    font-weight: 400;
    line-height: 1.03;
    letter-spacing: -.058em;
  }

  .featured-video-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }

  .featured-video-card {
    min-width: 0;
    overflow: hidden;
    border: 1px solid #e1e1de;
    border-radius: 14px;
    background: #fff;
    transition: transform .35s ease, box-shadow .35s ease;
  }

  .featured-video-card:hover { transform: translateY(-6px); box-shadow: 0 22px 48px rgba(38, 45, 58, .1); }

  .featured-video-stage {
    position: relative;
    min-height: 430px;
    padding: 30px 24px 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .featured-video-stage::before {
    content: '';
    position: absolute;
    inset: -45% -65%;
    pointer-events: none;
    background: linear-gradient(105deg, transparent 38%, rgba(255, 255, 255, .42) 50%, transparent 62%);
    transform: translateX(-38%);
    animation: featured-ambient-sweep 9s ease-in-out infinite;
  }

  .featured-video-stage[data-tone='rose'] { background: radial-gradient(circle at 78% 8%, #fff3ee, transparent 34%), linear-gradient(145deg, #efc9df, #f4d7c9 58%, #c9a1b8); }
  .featured-video-stage[data-tone='aqua'] { background: radial-gradient(circle at 20% 8%, #f4ffff, transparent 34%), linear-gradient(145deg, #b9e6e7, #d7f1eb 58%, #8fc7c8); }
  .featured-video-stage[data-tone='mint'] { background: radial-gradient(circle at 78% 8%, #f5fff7, transparent 34%), linear-gradient(145deg, #ccebd4, #e2f1d8 58%, #9ec8a9); }

  .featured-video-kicker {
    position: relative;
    z-index: 1;
    color: rgba(17, 17, 17, .58);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .11em;
    text-transform: uppercase;
  }

  .featured-video-stage h3 {
    position: relative;
    z-index: 1;
    margin: 15px 0 24px;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.05;
    letter-spacing: -.045em;
  }

  .featured-video-stage video {
    position: relative;
    z-index: 1;
    width: calc(100% + 16px);
    height: 290px;
    margin: auto -8px 0;
    border: 1px solid rgba(255, 255, 255, .75);
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
    background: #fff;
    box-shadow: 0 22px 50px rgba(36, 47, 59, .18);
    object-fit: cover;
    object-position: top center;
  }

  .open-mail-motion, .terminal-motion, .trash-motion {
    --motion-cycle: 14s;
    position: relative;
    z-index: 1;
    width: calc(100% + 16px);
    height: 290px;
    margin: auto -8px 0;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .75);
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
    background: #eef1f5;
    box-shadow: 0 22px 50px rgba(36, 47, 59, .18);
    color: #18191d;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
  }

  .motion-menu-bar {
    position: absolute;
    z-index: 4;
    inset: 0 0 auto;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    color: rgba(255,255,255,.92);
    background: linear-gradient(90deg, #504d45, #3e4039 72%, #504d45);
    font-size: 6px;
    letter-spacing: -.01em;
  }

  .motion-menu-left, .motion-menu-right { display: flex; align-items: center; gap: 9px; }
  .motion-menu-left strong { font-size: 6.5px; }
  .motion-apple { font-size: 5px; }
  .motion-menu-right { gap: 7px; }

  .motion-desktop { position: absolute; inset: 22px 0 0; overflow: hidden; background: linear-gradient(160deg, #f4e8df, #d9d7e6 48%, #aec7ca); }
  .motion-wallpaper-glow { position: absolute; width: 180px; height: 180px; right: -38px; top: -62px; border-radius: 50%; background: rgba(255,255,255,.48); filter: blur(24px); }

  .motion-mail-window {
    position: absolute;
    inset: 30px 16px 11px;
    overflow: hidden;
    border: 1px solid rgba(30,34,42,.14);
    border-radius: 8px;
    background: rgba(250,250,251,.96);
    box-shadow: 0 18px 38px rgba(25,30,38,.24);
    opacity: 0;
    transform: translateY(70px) scale(.9);
    transform-origin: 50% 100%;
    animation: mail-window-open var(--motion-cycle) cubic-bezier(.2,.72,.22,1) infinite;
  }

  .motion-window-bar { height: 22px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 0 8px; border-bottom: 1px solid #e3e4e7; background: rgba(246,246,248,.96); color: #565a62; font-size: 6px; font-weight: 600; }
  .motion-traffic-lights { display: flex; gap: 4px; }
  .motion-traffic-lights i { width: 5px; height: 5px; border-radius: 50%; background: #ff5f57; }
  .motion-traffic-lights i:nth-child(2) { background: #febc2e; }
  .motion-traffic-lights i:nth-child(3) { background: #28c840; }
  .motion-window-actions { justify-self: end; display: flex; gap: 5px; }
  .motion-window-actions i { width: 12px; height: 7px; border: 1px solid #bec1c7; border-radius: 2px; }

  .motion-mail-body { height: calc(100% - 22px); display: grid; grid-template-columns: 23% 34% 43%; }
  .motion-mail-body aside { padding: 10px 7px; border-right: 1px solid #e3e4e7; background: #f0f0f3; color: #686c73; font-size: 5.5px; }
  .motion-mailbox-title { margin: 0 5px 8px; color: #8a8d93; font-size: 4.5px; font-weight: 700; text-transform: uppercase; }
  .motion-mailbox { display: flex; align-items: center; gap: 5px; padding: 4px 5px; border-radius: 3px; }
  .motion-mailbox b { margin-left: auto; font-weight: 500; }
  .motion-mailbox.active { color: #fff; background: #3b83e5; }
  .motion-message-list { border-right: 1px solid #e3e4e7; background: #fafafa; }
  .motion-search { margin: 7px; padding: 4px 7px; border-radius: 4px; color: #9a9ca2; background: #eceef1; font-size: 5px; }
  .motion-message { position: relative; display: flex; flex-direction: column; gap: 3px; min-height: 36px; padding: 7px; border-top: 1px solid #eaebed; color: #72757c; font-size: 5px; }
  .motion-message strong { color: #2f3238; font-size: 5.5px; }
  .motion-message small { position: absolute; right: 6px; top: 7px; color: #9b9ea4; font-size: 4.5px; }
  .motion-message.selected { background: #e1e7f0; }
  .motion-message-view { padding: 17px 13px; background: #fff; }
  .motion-message-label { color: #9fa2a8; font-size: 4px; letter-spacing: .12em; }
  .motion-message-view h4 { margin: 7px 0 5px; font-size: 8px; letter-spacing: -.025em; }
  .motion-message-view p { margin: 0; color: #74777d; font-size: 5px; }
  .motion-mail-lines { display: grid; gap: 5px; margin-top: 16px; }
  .motion-mail-lines i { width: 86%; height: 3px; border-radius: 2px; background: #eceef0; }
  .motion-mail-lines i:nth-child(2) { width: 100%; }
  .motion-mail-lines i:nth-child(3) { width: 62%; }

  .motion-notch-expanded {
    position: absolute;
    z-index: 8;
    top: 0;
    left: 50%;
    width: min(84%, 320px);
    height: 94px;
    overflow: hidden;
    border-radius: 0 0 13px 13px;
    color: #f5f5f5;
    background: #050505;
    box-shadow: 0 12px 22px rgba(0,0,0,.28);
    opacity: 0;
    transform: translateX(-50%) translateY(-8px) scale(.82);
    transform-origin: 50% 0;
    animation: notch-expanded-shell var(--motion-cycle) cubic-bezier(.22,.72,.22,1) infinite;
  }

  .motion-notch-camera { position: absolute; top: 7px; left: 50%; width: 10px; height: 7px; border-radius: 3px; color: #8a8c95; background: #151519; font-size: 4px; text-align: center; line-height: 7px; transform: translateX(-50%); }
  .motion-notch-state { position: absolute; inset: 21px 12px 10px; display: flex; align-items: center; opacity: 0; }
  .motion-notch-brand { display: flex; align-items: center; gap: 4px; color: #8f9095; font-size: 6px; }
  .motion-notch-brand span { color: #f4f4f5; font-size: 7px; font-weight: 600; }
  .motion-notch-brand i { width: 2px; height: 2px; border-radius: 50%; background: #686970; }
  .motion-notch-ready { display: block; animation: notch-ready-state var(--motion-cycle) ease infinite; }
  .motion-notch-ready small { display: block; margin-top: 5px; color: #86878c; font-size: 5.5px; }
  .motion-notch-ready em { position: absolute; right: 0; top: 0; padding: 4px 7px; border-radius: 10px; color: #85868b; background: #161619; font-size: 5px; font-style: normal; }
  .motion-notch-listening { animation: notch-listening-state var(--motion-cycle) ease infinite; }
  .motion-notch-listening > span { color: #a4a5aa; font-size: 7px; }
  .motion-waveform, .motion-mini-wave { display: flex; align-items: center; gap: 2px; margin-left: auto; }
  .motion-waveform i { width: 2px; height: 8px; border-radius: 2px; background: #e6e6e8; animation: waveform-pulse .72s ease-in-out infinite alternate; }
  .motion-waveform i:nth-child(2) { height: 13px; animation-delay: -.4s; }
  .motion-waveform i:nth-child(3) { height: 6px; animation-delay: -.2s; }
  .motion-waveform i:nth-child(4) { height: 11px; animation-delay: -.55s; }
  .motion-waveform i:nth-child(5) { height: 5px; animation-delay: -.3s; }
  .motion-stop { width: 17px; height: 17px; margin-left: 8px; display: grid; place-items: center; border-radius: 5px; background: #f1f2f3; }
  .motion-stop i { width: 6px; height: 6px; border-radius: 2px; background: #3a3b3e; }
  .motion-notch-heard, .motion-notch-opening { gap: 8px; animation: notch-heard-state var(--motion-cycle) ease infinite; }
  .motion-notch-heard img, .motion-notch-opening img { width: 25px; height: 25px; object-fit: contain; }
  .motion-notch-heard > div, .motion-notch-opening > div { display: flex; flex-direction: column; gap: 2px; }
  .motion-notch-heard small, .motion-notch-opening small { color: #85868b; font-size: 5px; }
  .motion-notch-heard strong, .motion-notch-opening strong { color: #f5f5f6; font-size: 7px; font-weight: 550; }
  .motion-notch-heard > span { margin-left: auto; padding: 3px 6px; border-radius: 8px; color: #b5e3c4; background: #12321e; font-size: 5px; }
  .motion-notch-opening { animation-name: notch-opening-state; }
  .motion-loader { width: 13px; height: 13px; margin-left: auto; border: 1.5px solid #383940; border-top-color: #f2f2f4; border-radius: 50%; animation: motion-spin .8s linear infinite; }

  .motion-notch-compact {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 50%;
    width: min(62%, 235px);
    height: 28px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 9px;
    border-radius: 0 0 9px 9px;
    color: #f3f3f4;
    background: #050505;
    box-shadow: 0 8px 16px rgba(0,0,0,.2);
    opacity: 0;
    transform: translateX(-50%) translateY(-5px) scale(.82);
    transform-origin: 50% 0;
    animation: notch-compact-shell var(--motion-cycle) cubic-bezier(.22,.72,.22,1) infinite;
  }
  .motion-notch-compact img { width: 15px; height: 15px; object-fit: contain; }
  .motion-notch-compact span { font-size: 6.5px; }
  .motion-notch-compact b { width: 12px; height: 12px; margin-left: 2px; display: grid; place-items: center; border-radius: 50%; color: #bfe9ca; background: #143821; font-size: 6px; }
  .motion-mini-wave { margin-left: auto; }
  .motion-mini-wave i { width: 1.5px; height: 5px; border-radius: 2px; background: #8d8f95; }
  .motion-mini-wave i:nth-child(2) { height: 8px; }

  @keyframes notch-expanded-shell {
    0%, 3% { opacity: 0; transform: translateX(-50%) translateY(-8px) scale(.82); }
    8%, 70% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
    76%, 100% { opacity: 0; transform: translateX(-50%) translateY(-3px) scale(.88); }
  }
  @keyframes notch-ready-state { 0%, 5% { opacity: 0; } 9%, 20% { opacity: 1; } 24%, 100% { opacity: 0; } }
  @keyframes notch-listening-state { 0%, 21% { opacity: 0; } 25%, 39% { opacity: 1; } 44%, 100% { opacity: 0; } }
  @keyframes notch-heard-state { 0%, 41% { opacity: 0; transform: translateY(5px); } 46%, 55% { opacity: 1; transform: translateY(0); } 60%, 100% { opacity: 0; transform: translateY(-4px); } }
  @keyframes notch-opening-state { 0%, 57% { opacity: 0; transform: translateY(5px); } 62%, 70% { opacity: 1; transform: translateY(0); } 75%, 100% { opacity: 0; transform: translateY(-4px); } }
  @keyframes notch-compact-shell { 0%, 71% { opacity: 0; transform: translateX(-50%) translateY(-5px) scale(.82); } 77%, 93% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); } 100% { opacity: 0; transform: translateX(-50%) translateY(-4px) scale(.9); } }
  @keyframes mail-window-open { 0%, 57% { opacity: 0; transform: translateY(70px) scale(.9); } 66%, 94% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; transform: translateY(4px) scale(.99); } }
  @keyframes waveform-pulse { from { transform: scaleY(.5); opacity: .7; } to { transform: scaleY(1.15); opacity: 1; } }
  @keyframes motion-spin { to { transform: rotate(360deg); } }

  .terminal-motion { background: #10131b; }
  .terminal-desktop { position: absolute; inset: 22px 0 0; overflow: hidden; background: linear-gradient(145deg, #102838, #141a2c 54%, #241829); }
  .terminal-orb { position: absolute; border-radius: 50%; filter: blur(26px); opacity: .78; }
  .terminal-orb-one { width: 170px; height: 170px; right: -48px; top: -58px; background: #176f7e; }
  .terminal-orb-two { width: 150px; height: 150px; left: -54px; bottom: -64px; background: #703e6d; }
  .terminal-window {
    position: absolute;
    inset: 34px 16px 13px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 8px;
    background: rgba(10,12,17,.95);
    box-shadow: 0 18px 38px rgba(0,0,0,.4);
    opacity: 0;
    transform: translateY(52px) scale(.92);
    animation: terminal-window-open var(--motion-cycle) cubic-bezier(.2,.72,.22,1) infinite;
  }
  .terminal-window-bar { height: 22px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 0 8px; border-bottom: 1px solid rgba(255,255,255,.08); color: #a3a8b3; background: rgba(32,34,42,.98); font-size: 5.5px; }
  .terminal-tab { justify-self: end; color: #8e929b; font-style: normal; font-size: 8px; }
  .terminal-screen { position: relative; height: calc(100% - 22px); padding: 13px 14px; color: #cbd1db; font-family: "SFMono-Regular", Consolas, monospace; font-size: 6px; line-height: 1.6; }
  .terminal-path { margin-bottom: 4px; color: #f4f5f6; font-weight: 600; }
  .terminal-path span { margin-left: 4px; color: #70d6b1; }
  .terminal-command { display: flex; align-items: center; gap: 6px; color: #f4f5f6; white-space: nowrap; }
  .terminal-command b { color: #74d5b3; font-size: 7px; }
  .terminal-typed-command { display: block; max-width: 0; overflow: hidden; animation: terminal-command-type var(--motion-cycle) steps(17, end) infinite; }
  .terminal-command > i { width: 4px; height: 9px; background: #d9dde4; animation: terminal-cursor-blink .7s steps(1) infinite; }
  .terminal-output { margin-top: 5px; color: #9ba2ae; opacity: 0; transform: translateY(3px); }
  .terminal-output span { color: #73d4ad; }
  .terminal-output-one { animation: terminal-line-one var(--motion-cycle) ease infinite; }
  .terminal-output-two { animation: terminal-line-two var(--motion-cycle) ease infinite; }
  .terminal-output-three { animation: terminal-line-three var(--motion-cycle) ease infinite; }
  .terminal-output-four { animation: terminal-line-four var(--motion-cycle) ease infinite; }
  .terminal-result { position: absolute; right: 13px; bottom: 12px; display: flex; align-items: center; gap: 6px; padding: 6px 8px; border: 1px solid rgba(118,221,177,.22); border-radius: 6px; color: #f2f5f4; background: rgba(24,61,47,.82); opacity: 0; transform: translateY(6px) scale(.96); animation: terminal-result-in var(--motion-cycle) ease infinite; }
  .terminal-result > i { width: 16px; height: 16px; display: grid; place-items: center; border-radius: 50%; color: #123427; background: #79ddb4; font-size: 7px; font-style: normal; font-weight: 800; }
  .terminal-result > div { display: flex; flex-direction: column; gap: 1px; }
  .terminal-result strong { font-size: 6px; }
  .terminal-result small { color: #95b5a8; font-size: 4.5px; }

  .terminal-notch-command, .terminal-notch-running, .trash-notch-command, .trash-notch-moving { gap: 8px; }
  .terminal-notch-command, .trash-notch-command { animation: notch-heard-state var(--motion-cycle) ease infinite; }
  .terminal-notch-running, .trash-notch-moving { animation: notch-opening-state var(--motion-cycle) ease infinite; }
  .terminal-notch-command img, .terminal-notch-running img { width: 25px; height: 25px; object-fit: contain; }
  .terminal-notch-command > div, .terminal-notch-running > div, .trash-notch-command > div, .trash-notch-moving > div { display: flex; flex-direction: column; gap: 2px; }
  .terminal-notch-command small, .terminal-notch-running small, .trash-notch-command small, .trash-notch-moving small { color: #85868b; font-size: 5px; }
  .terminal-notch-command strong, .terminal-notch-running strong, .trash-notch-command strong, .trash-notch-moving strong { color: #f5f5f6; font-size: 7px; font-weight: 550; }
  .terminal-notch-command > span, .trash-notch-command > span { margin-left: auto; padding: 3px 6px; border-radius: 8px; color: #b5e3c4; background: #12321e; font-size: 5px; }
  .terminal-notch-running .motion-loader, .trash-notch-moving .motion-loader { margin-left: auto; }

  @keyframes terminal-window-open { 0%, 40% { opacity: 0; transform: translateY(52px) scale(.92); } 48%, 94% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; transform: translateY(4px) scale(.99); } }
  @keyframes terminal-command-type { 0%, 48% { max-width: 0; } 59%, 100% { max-width: 110px; } }
  @keyframes terminal-cursor-blink { 50% { opacity: 0; } }
  @keyframes terminal-line-one { 0%, 59% { opacity: 0; transform: translateY(3px); } 63%, 100% { opacity: 1; transform: translateY(0); } }
  @keyframes terminal-line-two { 0%, 63% { opacity: 0; transform: translateY(3px); } 67%, 100% { opacity: 1; transform: translateY(0); } }
  @keyframes terminal-line-three { 0%, 69% { opacity: 0; transform: translateY(3px); } 73%, 100% { opacity: 1; transform: translateY(0); } }
  @keyframes terminal-line-four { 0%, 74% { opacity: 0; transform: translateY(3px); } 78%, 100% { opacity: 1; transform: translateY(0); } }
  @keyframes terminal-result-in { 0%, 78% { opacity: 0; transform: translateY(6px) scale(.96); } 83%, 94% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; transform: translateY(-2px) scale(.98); } }

  .trash-motion { background: #19201d; }
  .trash-desktop { position: absolute; inset: 22px 0 0; overflow: hidden; background: radial-gradient(circle at 30% 20%, rgba(61,85,72,.9), transparent 46%), linear-gradient(145deg, #26332c, #15201a 62%, #0d1511); }
  .trash-finder-window { position: absolute; inset: 28px 8px 29px; overflow: hidden; border: 1px solid rgba(255,255,255,.24); border-radius: 8px; background: #1f2020; box-shadow: 0 18px 38px rgba(0,0,0,.5); }
  .trash-window-bar { height: 34px; display: grid; grid-template-columns: 27% 73%; border-bottom: 1px solid #111; color: #d8d8da; font-size: 5.5px; font-weight: 600; }
  .trash-toolbar-side { display: flex; align-items: center; padding: 0 8px; border-right: 1px solid #161717; background: #484b4b; }
  .trash-toolbar-main { position: relative; display: flex; align-items: center; gap: 7px; min-width: 0; padding: 0 8px; background: #202121; }
  .trash-nav-arrows { display: flex; gap: 7px; color: #8b8d8d; font-size: 14px; font-weight: 300; line-height: 1; }
  .trash-nav-arrows i { font-style: normal; }
  .trash-window-title { position: absolute; left: 42px; font-size: 7.5px; font-weight: 700; letter-spacing: -.02em; }
  .trash-title-bin { opacity: 0; animation: trash-title-bin-in var(--motion-cycle) ease infinite; }
  .trash-title-apps { animation: trash-title-apps-out var(--motion-cycle) ease infinite; }
  .trash-toolbar-actions { margin-left: auto; display: flex; align-items: center; gap: 5px; color: #919393; animation: trash-toolbar-actions-out var(--motion-cycle) ease infinite; }
  .trash-toolbar-group { width: 18px; height: 18px; display: grid; place-content: center; border-radius: 5px; background: #303131; }
  .trash-view-grid { grid-template-columns: repeat(2, 3px); gap: 2px; }
  .trash-view-grid i { width: 3px; height: 3px; border: 1px solid #d0d1d2; border-radius: 1px; }
  .trash-toolbar-lines { width: 12px; display: grid; gap: 2px; }
  .trash-toolbar-lines i { height: 1px; border-radius: 1px; background: #989a9a; }
  .trash-toolbar-columns { width: 13px; height: 9px; display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid #8f9191; border-radius: 2px; }
  .trash-toolbar-columns i + i { border-left: 1px solid #8f9191; }
  .trash-toolbar-gallery { width: 12px; height: 9px; display: grid; place-items: end center; border: 1px solid #8f9191; border-radius: 2px; }
  .trash-toolbar-gallery i { width: 8px; height: 2px; border-top: 1px solid #8f9191; }
  .trash-toolbar-separator { width: 1px; height: 14px; background: #323434; }
  .trash-toolbar-arrange { width: 12px; display: grid; grid-template-columns: repeat(2, 3px); gap: 2px; }
  .trash-toolbar-arrange i { width: 3px; height: 3px; border: 1px solid #898b8b; border-radius: 1px; }
  .trash-toolbar-share, .trash-toolbar-tag, .trash-toolbar-more { font-size: 8px; line-height: 1; }
  .trash-toolbar-tag { font-size: 13px; transform: rotate(-45deg); }
  .trash-toolbar-more { width: 13px; height: 13px; display: grid; place-items: center; border: 1px solid #858787; border-radius: 50%; font-size: 5px; letter-spacing: -1px; }
  .trash-toolbar-search { width: 10px; height: 10px; border: 1px solid #a2a4a4; border-radius: 50%; }
  .trash-toolbar-search::after { content: ''; position: absolute; width: 4px; height: 1px; margin: 9px 0 0 7px; background: #a2a4a4; transform: rotate(45deg); }
  .trash-empty-button { position: absolute; right: 8px; padding: 3px 7px; border: 0; border-radius: 5px; color: #fff; background: #1677ff; font: inherit; opacity: 0; animation: trash-empty-button-in var(--motion-cycle) ease infinite; }
  .trash-finder-body { height: calc(100% - 34px); display: grid; grid-template-columns: 27% 73%; }
  .trash-finder-body aside { padding: 7px 6px; overflow: hidden; border-right: 1px solid #161717; color: #dededf; background: #484b4b; font-size: 5px; }
  .trash-side-label { margin: 0 5px 3px; color: #858888; font-size: 4.2px; font-weight: 700; }
  .trash-locations-label { margin-top: 6px; }
  .trash-tags-label { margin-top: 6px; }
  .trash-side-row { display: flex; align-items: center; gap: 5px; height: 15px; padding: 0 5px; overflow: hidden; border-radius: 4px; white-space: nowrap; }
  .trash-side-icon { width: 8px; color: #00a7ff; font-size: 7px; font-style: normal; text-align: center; }
  .trash-recents-icon { font-size: 9px; }
  .trash-app-icon { font-size: 6px; font-weight: 700; }
  .trash-tag-dot { width: 6px; height: 6px; border-radius: 50%; }
  .trash-tag-red { background: #ff5d58; }
  .trash-tag-yellow { background: #ffd60a; }
  .trash-apps-row { color: #fff; background: #696c6c; animation: trash-app-row-out var(--motion-cycle) ease infinite; }
  .trash-bin-row { margin-top: 3px; animation: trash-bin-row-in var(--motion-cycle) ease infinite; }
  .trash-bin-row img { width: 11px; height: 11px; object-fit: contain; }
  .trash-applications-view, .trash-bin-view { grid-column: 2; grid-row: 1; position: relative; min-width: 0; background: #202121; }
  .trash-applications-view { animation: trash-apps-view-out var(--motion-cycle) ease infinite; }
  .trash-bin-view { opacity: 0; animation: trash-bin-view-in var(--motion-cycle) ease infinite; }
  .finder-app-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px 4px; padding: 11px 8px; }
  .finder-app { position: relative; display: flex; flex-direction: column; align-items: center; gap: 3px; min-width: 0; color: #e1e1e2; font-size: 4.3px; line-height: 1.08; text-align: center; }
  .finder-app img { width: 27px; height: 27px; object-fit: contain; }
  .focus-app-source { z-index: 6; animation: focus-app-to-trash var(--motion-cycle) cubic-bezier(.35,.02,.2,1) infinite; }
  .focus-timer-icon { position: relative; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 8px; color: #fff; background: linear-gradient(145deg, #6657df, #9a67df 48%, #ef8b76); box-shadow: 0 5px 10px rgba(84,66,154,.25), inset 0 1px rgba(255,255,255,.5); }
  .focus-timer-icon::before { content: ''; position: absolute; inset: 6px; border: 1.5px solid rgba(255,255,255,.78); border-radius: 50%; }
  .focus-timer-icon i { position: absolute; top: 9px; left: 50%; width: 1px; height: 7px; border-radius: 1px; background: #fff; transform: translateX(-50%) rotate(18deg); transform-origin: 50% 100%; }
  .focus-timer-icon b { position: absolute; bottom: 6px; font-size: 5px; font-weight: 650; }
  .focus-timer-icon-small { width: 25px; height: 25px; flex: 0 0 auto; border-radius: 7px; }
  .focus-timer-icon-small::before { inset: 5px; }
  .focus-timer-icon-small i { top: 7px; height: 6px; }
  .focus-timer-icon-small b { bottom: 4px; font-size: 4px; }
  .trashed-focus-app { width: 62px; margin: 18px 0 0 14px; display: flex; flex-direction: column; align-items: center; gap: 4px; color: #e3e3e4; font-size: 5px; opacity: 0; transform: translateY(8px) scale(.9); animation: trashed-app-in var(--motion-cycle) cubic-bezier(.2,.72,.22,1) infinite; }
  .trashed-focus-app small { color: #8f9192; font-size: 4px; }
  .trash-status-bar { position: absolute; inset: auto 0 0; height: 13px; display: flex; align-items: center; justify-content: center; gap: 4px; border-top: 1px solid #303232; color: #7f8182; background: #202121; font-size: 4px; }
  .trash-dock { position: absolute; z-index: 6; right: 7px; bottom: 2px; height: 34px; display: flex; align-items: center; gap: 2px; padding: 2px 4px; border: 1px solid rgba(255,255,255,.22); border-radius: 8px; background: rgba(50,58,53,.74); box-shadow: 0 5px 12px rgba(0,0,0,.28); backdrop-filter: blur(12px); }
  .trash-dock > img { width: 25px; height: 25px; object-fit: contain; }
  .trash-dock-divider { width: 1px; height: 24px; margin: 0 2px; background: rgba(255,255,255,.35); }
  .motion-trash-can { position: relative; width: 30px; height: 30px; display: block; }
  .motion-trash-can img { position: absolute; inset: -2px; width: 34px; height: 34px; object-fit: contain; filter: drop-shadow(0 3px 3px rgba(0,0,0,.32)); }
  .trash-icon-empty { animation: trash-empty-icon-out var(--motion-cycle) steps(1) infinite; }
  .trash-icon-full { opacity: 0; animation: trash-full-icon-in var(--motion-cycle) steps(1) infinite; }
  .trash-notch-compact { animation-name: trash-notch-compact-shell; }

  @keyframes focus-app-to-trash { 0%, 58% { opacity: 1; transform: translate(0,0) scale(1); } 65% { opacity: 1; transform: translate(86px,72px) scale(.55) rotate(7deg); } 70%, 100% { opacity: 0; transform: translate(205px,128px) scale(.18) rotate(14deg); } }
  @keyframes trash-apps-view-out { 0%, 68% { opacity: 1; } 69%, 100% { opacity: 0; } }
  @keyframes trash-bin-view-in { 0%, 68% { opacity: 0; } 69%, 100% { opacity: 1; } }
  @keyframes trashed-app-in { 0%, 70% { opacity: 0; transform: translateY(8px) scale(.9); } 74%, 99% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; } }
  @keyframes trash-title-apps-out { 0%, 68% { opacity: 1; } 69%, 100% { opacity: 0; } }
  @keyframes trash-title-bin-in { 0%, 68% { opacity: 0; } 69%, 100% { opacity: 1; } }
  @keyframes trash-app-row-out { 0%, 68% { color: #fff; background: #696c6c; } 69%, 100% { color: #dededf; background: transparent; } }
  @keyframes trash-bin-row-in { 0%, 68% { color: #dededf; background: transparent; } 69%, 100% { color: #fff; background: #696c6c; } }
  @keyframes trash-empty-icon-out { 0%, 68% { opacity: 1; } 69%, 100% { opacity: 0; } }
  @keyframes trash-full-icon-in { 0%, 68% { opacity: 0; } 69%, 100% { opacity: 1; } }
  @keyframes trash-empty-button-in { 0%, 68% { opacity: 0; } 69%, 100% { opacity: 1; } }
  @keyframes trash-toolbar-actions-out { 0%, 68% { opacity: 1; } 69%, 100% { opacity: 0; } }
  @keyframes trash-notch-compact-shell { 0%, 71% { opacity: 0; transform: translateX(-50%) translateY(-5px) scale(.82); } 77%, 97% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); } 100% { opacity: 0; transform: translateX(-50%) translateY(-4px) scale(.9); } }

  .featured-video-card > p {
    min-height: 104px;
    margin: 0;
    padding: 24px;
    color: #65656a;
    font-size: 14px;
    line-height: 1.55;
  }

  @keyframes featured-ambient-sweep {
    0%, 28% { transform: translateX(-38%); opacity: 0; }
    48% { opacity: .75; }
    70%, 100% { transform: translateX(38%); opacity: 0; }
  }

  @keyframes featured-card-reveal {
    from { opacity: 0; transform: translateY(56px) scale(.965); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @supports (animation-timeline: view()) {
    .featured-video-card {
      animation: featured-card-reveal linear both;
      animation-timeline: view();
      animation-range: entry 4% cover 30%;
    }

    .featured-video-card:nth-child(2) { animation-range: entry 8% cover 34%; }
    .featured-video-card:nth-child(3) { animation-range: entry 12% cover 38%; }
  }

  @media (max-width: 720px) {
    .featured-video-grid { grid-template-columns: 1fr; }
    .featured-video-stage { min-height: 520px; }
    .featured-video-stage video, .open-mail-motion, .terminal-motion, .trash-motion { height: 390px; }
    .motion-notch-expanded { width: min(82%, 380px); height: 116px; }
    .motion-notch-state { inset: 25px 16px 12px; }
    .motion-notch-brand, .motion-notch-listening > span { font-size: 9px; }
    .motion-notch-brand span, .motion-notch-heard strong, .motion-notch-opening strong { font-size: 10px; }
    .motion-notch-ready small, .motion-notch-heard small, .motion-notch-opening small { font-size: 7px; }
    .motion-notch-heard img, .motion-notch-opening img, .terminal-notch-command img, .terminal-notch-running img { width: 32px; height: 32px; }
    .terminal-notch-command strong, .terminal-notch-running strong, .trash-notch-command strong, .trash-notch-moving strong { font-size: 10px; }
    .terminal-notch-command small, .terminal-notch-running small, .trash-notch-command small, .trash-notch-moving small { font-size: 7px; }
    .focus-timer-icon-small { width: 32px; height: 32px; }
    .motion-notch-compact { height: 34px; }
    .motion-notch-compact span { font-size: 8px; }
    .featured-video-card > p { min-height: 0; }
  }

  @media (max-width: 520px) {
    .featured-videos { padding: 96px 16px; }
    .featured-videos-heading { margin-bottom: 46px; }
    .featured-video-stage { min-height: 390px; padding: 26px 20px 0; }
    .featured-video-stage video, .open-mail-motion, .terminal-motion, .trash-motion { height: 260px; }
    .motion-notch-expanded { width: 88%; height: 88px; }
    .motion-notch-state { inset: 20px 11px 9px; }
    .motion-notch-brand, .motion-notch-listening > span { font-size: 6px; }
    .motion-notch-brand span, .motion-notch-heard strong, .motion-notch-opening strong { font-size: 7px; }
    .motion-notch-ready small, .motion-notch-heard small, .motion-notch-opening small { font-size: 5px; }
    .motion-notch-heard img, .motion-notch-opening img, .terminal-notch-command img, .terminal-notch-running img { width: 23px; height: 23px; }
    .terminal-notch-command strong, .terminal-notch-running strong, .trash-notch-command strong, .trash-notch-moving strong { font-size: 7px; }
    .terminal-notch-command small, .terminal-notch-running small, .trash-notch-command small, .trash-notch-moving small { font-size: 5px; }
    .focus-timer-icon-small { width: 23px; height: 23px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .featured-video-card, .featured-video-stage::before { animation: none; }
    .featured-video-card { transition: none; }
    .motion-notch-expanded, .motion-notch-state, .motion-notch-compact, .motion-mail-window, .terminal-window, .trash-finder-window, .motion-waveform i, .motion-loader, .terminal-typed-command, .terminal-output, .terminal-result, .trash-applications-view, .trash-bin-view, .trashed-focus-app, .trash-window-title, .trash-side-row, .focus-app-source, .trash-toolbar-actions, .trash-empty-button, .trash-icon-empty, .trash-icon-full { animation: none; }
    .motion-notch-expanded { opacity: 0; }
    .motion-notch-compact, .motion-mail-window { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
    .motion-mail-window { transform: none; }
    .terminal-window, .trash-finder-window, .trash-bin-view, .trashed-focus-app, .terminal-output, .terminal-result { opacity: 1; transform: none; }
    .terminal-typed-command { max-width: 110px; }
    .trash-applications-view, .trash-title-apps { opacity: 0; }
    .trash-title-bin, .trash-empty-button, .trash-icon-full { opacity: 1; }
    .trash-toolbar-actions, .trash-icon-empty { opacity: 0; }
  }
`;

export function FeaturedVideosSection() {
  return (
    <>
      <style href="featured-videos-styles" precedence="default">{featuredVideosStyles}</style>
      <section className="featured-videos" id="featured-workflows" aria-labelledby="featured-videos-title">
        <div className="featured-videos-inner">
          <div className="featured-videos-heading">
            <span>Featured workflows</span>
            <h2 id="featured-videos-title">See how a request becomes momentum.</h2>
          </div>

          <div className="featured-video-grid">
            {featuredVideos.map((item) => (
              <article className="featured-video-card" key={item.title}>
                <div className="featured-video-stage" data-tone={item.tone}>
                  <span className="featured-video-kicker">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  {item.motion === 'open-mail' ? (
                    <OpenMailMotion />
                  ) : item.motion === 'terminal-build' ? (
                    <TerminalBuildMotion />
                  ) : item.motion === 'trash-app' ? (
                    <TrashAppMotion />
                  ) : (
                    <video autoPlay loop muted playsInline preload="metadata" poster={item.poster} aria-label={`${item.title} product demo`}>
                      <source src={item.video} type="video/mp4" />
                    </video>
                  )}
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
