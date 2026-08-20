import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from 'react';
import logoSrc from './assets/motus-logo.jpeg';
import { ArrowDownRight, ArrowRight, Check, CheckCircle2, Clock3, FileText, FolderOpen, Globe2, Laptop, LockKeyhole, Menu, Mic, MousePointer2, Plus, Search, Sparkles, TerminalSquare, X } from 'lucide-react';

const heroDemos = [
  { label: 'Organize the launch folder', detail: 'Find the latest launch assets, group them by type, and move them into a clean folder.', steps: ['Scanning 42 files', 'Grouping by type', 'Creating launch-assets'] },
  { label: 'Turn notes into a brief', detail: 'Read the meeting notes, pull out decisions, and save a clear brief beside the original.', steps: ['Reading meeting notes', 'Extracting decisions', 'Saving launch-brief.md'] },
  { label: 'Check the deployment', detail: 'Open the dashboard, inspect the latest build, and tell me what needs attention.', steps: ['Opening deployment dashboard', 'Inspecting latest build', 'Checking for regressions'] },
];

const tasks = [
  { id: '01', app: 'FILES + WEB', title: 'Find the signal.', body: 'Locate every launch asset across your Mac, then build a clean handoff folder with the latest versions.', result: '12 files arranged · 3 duplicates set aside' },
  { id: '02', app: 'BROWSER + DOCS', title: 'Make it legible.', body: 'Read a long research thread, pull the decisions forward, and turn them into a document your team can use.', result: 'Brief saved · source links preserved' },
  { id: '03', app: 'TERMINAL + DESKTOP', title: 'Close the loop.', body: 'Run the check, inspect the output, and only call it done when the result matches what you asked for.', result: 'Command complete · output verified' },
];

const faqs = [
  ['What is Motus?', 'Motus is a desktop agent for your Mac. You tell it the outcome you want, and it carries out the work across apps, files, the web, terminal, and voice — then checks whether it actually succeeded.'],
  ['How is Motus different from a chat window?', 'A chat window gives you an answer. Motus takes action on your computer. It can work through the steps, use the tools already on your Mac, and return with evidence instead of a guess.'],
  ['Can I see what Motus is doing?', 'Yes. Motus keeps the work legible: the plan, the active step, the files it touched, and the checks it ran are visible while it works.'],
  ['What does “verify” mean?', 'Verification is the final pass. Motus checks the state of the app, file, page, or command output against the outcome you asked for. If it cannot establish success, it says so.'],
  ['Does Motus replace my apps?', 'No. Motus works with the apps, files, web, and terminal you already use. It is the layer that moves between them when a task does not fit inside one app.'],
  ['Where does my work happen?', 'Motus is designed around your desktop. Your Mac is the place where the work happens, and the interface makes the action and result visible to you.'],
];

function Anchor({ href, children, onClick, className = '', ...props }: { href: string; children: ReactNode; onClick?: () => void; className?: string } & AnchorHTMLAttributes<HTMLAnchorElement> & { 'data-testid'?: string }) {
  return <a {...props} data-testid={props['data-testid'] ?? `link-${href.replace('#', '')}`} href={href} onClick={onClick} className={className}>{children}</a>;
}

function Brand() {
  return <Anchor href="#top" className="brand" data-testid="link-brand">
    <span className="brand-mark"><img src={logoSrc} alt="" /></span>
    <span>motus</span>
  </Anchor>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <nav className="nav" aria-label="Main navigation">
    <div className="nav-inner">
      <Brand />
      <div className="nav-links">
        <Anchor href="#how-it-works">How it works</Anchor>
        <Anchor href="#capabilities">Capabilities</Anchor>
        <Anchor href="#architecture">Under the hood</Anchor>
        <Anchor href="#pricing">Pricing</Anchor>
      </div>
      <Anchor href="#start" className="nav-cta">Get Motus</Anchor>
      <button data-testid="button-mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} className="mobile-menu-btn" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
    <div className={`mobile-panel ${open ? 'open' : ''}`}>
      <Anchor href="#how-it-works" onClick={close}>How it works</Anchor>
      <Anchor href="#capabilities" onClick={close}>Capabilities</Anchor>
      <Anchor href="#architecture" onClick={close}>Under the hood</Anchor>
      <Anchor href="#pricing" onClick={close}>Pricing</Anchor>
      <Anchor href="#start" onClick={close}>Get Motus</Anchor>
    </div>
  </nav>;
}

function MacWindow({ demoIndex, onNext }: { demoIndex: number; onNext: () => void }) {
  const demo = heroDemos[demoIndex];
  return <div className="hero-stage">
    <div className="hero-radar" aria-hidden="true"><i /><i /><i /><i /></div>
    <div className="orbit" aria-hidden="true" />
    <div className="hero-float-card float-one"><span className="float-icon"><FolderOpen size={13} /></span><span><b>launch-assets</b><small>12 files found</small></span><CheckCircle2 size={14} /></div>
    <div className="hero-float-card float-two"><span className="float-icon peach"><TerminalSquare size={13} /></span><span><b>terminal</b><small>tests passing</small></span><span className="float-pulse" /></div>
    <div className="hero-float-card float-three"><span className="float-icon lilac"><Globe2 size={13} /></span><span><b>browser</b><small>context gathered</small></span><ArrowRight size={13} /></div>
    <div className="hero-pointer" aria-hidden="true"><MousePointer2 size={22} /><span>Motus is here</span></div>
    <div className="mac-window" data-testid="product-demo-window">
      <div className="window-bar"><i className="traffic" /><i className="traffic" /><i className="traffic" /><span className="window-title"><span className="window-app-dot" /> motus / active task</span><span className="window-time mono">09:41</span></div>
      <div className="window-body">
        <div className="window-topline"><span>active task</span><span className="online">working locally</span></div>
        <div className="prompt-box" data-testid="text-active-prompt"><span>YOUR OUTCOME</span>{demo.label}</div>
        <div className="agent-row"><span className="agent-orb"><Sparkles size={14} /></span><p><strong>Motus</strong> · {demo.detail}</p><span className="agent-live"><i /> live</span></div>
        <div className="progress-line" aria-label="Task progress"><span /></div>
        <div className="step-list">
          {demo.steps.map((step, index) => <div className={`step step-${index}`} key={step} data-testid={`status-demo-step-${index}`}><span><i>{index === 0 ? <Search size={11} /> : index === 1 ? <FileText size={11} /> : <Check size={11} />}</i>{step}</span><b>{index < 2 ? 'done' : 'working'}</b></div>)}
        </div>
        <div className="window-footer"><span><Clock3 size={12} /> 00:18 elapsed</span><button data-testid="button-next-demo" onClick={onNext} className="btn-quiet" style={{ padding: '9px 13px', fontSize: '.68rem' }}>Try another outcome <ArrowRight size={13} /></button></div>
      </div>
    </div>
    <p className="hero-caption">A calm interface for complicated work. Nothing disappears into a spinner.</p>
  </div>;
}

function Hero() {
  const [demoIndex, setDemoIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setDemoIndex((value) => (value + 1) % heroDemos.length), 5600);
    return () => window.clearInterval(timer);
  }, []);
  return <section className="hero" id="top">
    <div className="hero-grid-lines" aria-hidden="true" />
    <div className="hero-kicker mono"><span className="kicker-dot" /> live agent / macOS native</div>
    <div className="container hero-grid">
      <div className="hero-copy reveal">
        <div className="eyebrow mono">A desktop agent for your Mac</div>
        <h1><span className="line">Tell it.</span><span className="line serif"><em>Done.</em></span></h1>
        <p className="hero-sub">Motus uses your computer to carry out the work across apps, files, web, terminal, and voice — then checks whether it really succeeded.</p>
        <div className="hero-actions">
          <Anchor href="#start" className="btn-primary" data-testid="button-hero-start">Meet Motus <ArrowDownRight size={16} /></Anchor>
          <Anchor href="#how-it-works" className="btn-quiet" data-testid="button-hero-watch">See how it works</Anchor>
        </div>
        <div className="hero-proof"><span><Check size={12} /> Native control</span><span><Check size={12} /> Voice-first</span><span><Check size={12} /> Verifies work</span></div>
      </div>
      <MacWindow demoIndex={demoIndex} onNext={() => setDemoIndex((value) => (value + 1) % heroDemos.length)} />
    </div>
    <div className="scroll-cue mono"><span /> scroll to enter the loop</div>
  </section>;
}

function DemoStrip() {
  return <div className="demo-strip mono"><div className="container">
    <span><strong>01</strong> outcome</span><span><strong>02</strong> action</span><span><strong>03</strong> evidence</span><span><strong>motus / macOS</strong></span>
  </div></div>;
}

function Verification() {
  return <section className="section section-dark loop-section" id="how-it-works">
    <div className="container">
      <div className="section-heading reveal"><div className="eyebrow mono">The part that changes everything</div><h2>Work is not<br /><em>done</em> until it is checked.</h2><p>Motus does not stop at “I ran the command.” It follows the state of your Mac until the outcome is real — and shows you what it found.</p></div>
      <div className="loop-layout">
        <div className="loop-copy reveal delay-1">
          <div className="mono" style={{ color: '#b6a5ff' }}>The Motus loop</div>
          <h3>Intent in.<br /><em>Evidence out.</em></h3>
          <p>A single request becomes a visible, reversible sequence. You can see the path, interrupt it, or let Motus finish the last mile.</p>
          <div className="loop-numbers">
            <div className="loop-number"><b>01</b> Understand the outcome</div>
            <div className="loop-number"><b>02</b> Use the right surface</div>
            <div className="loop-number"><b>03</b> Verify the new state</div>
          </div>
        </div>
        <div className="verification-board reveal delay-2" data-testid="verification-board">
          <div className="board-header"><h4>launch-assets / verified work</h4><span>3 checks passed</span></div>
          <div className="board-main">
            <div className="board-pane"><h5>What changed</h5>
              <div className="file-row"><span className="file-icon">PNG</span><div><strong>hero@2x.png</strong><small>moved to /launch-assets</small></div></div>
              <div className="file-row"><span className="file-icon">PDF</span><div><strong>press-kit.pdf</strong><small>latest version selected</small></div></div>
              <div className="file-row"><span className="file-icon">MD</span><div><strong>handoff.md</strong><small>created from 4 sources</small></div></div>
            </div>
            <div className="board-pane"><h5>How we know</h5>
              <div className="check-list">
                <div className="check-item"><span className="check"><Check size={12} /></span><div><strong>Folder state matches</strong><small>3 expected files present</small></div></div>
                <div className="check-item"><span className="check"><Check size={12} /></span><div><strong>No duplicates left</strong><small>12 assets indexed</small></div></div>
                <div className="check-item"><span className="check"><Check size={12} /></span><div><strong>Links still resolve</strong><small>4 source paths checked</small></div></div>
              </div>
            </div>
          </div>
          <div className="verified-bar"><Check size={14} /> VERIFIED · the folder is ready to share</div>
        </div>
      </div>
    </div>
  </section>;
}

function Capabilities() {
  return <section className="section section-soft capabilities" id="capabilities">
    <div className="container">
      <div className="section-heading reveal"><div className="eyebrow mono">One agent. Many surfaces.</div><h2>Your Mac is the<br /><em>canvas.</em></h2><p>Motus moves through the places your work already lives. Native enough to feel quiet. Capable enough to connect the gaps.</p></div>
      <div className="cap-grid">
        <div className="cap-card large reveal delay-1"><div className="cap-icon"><Laptop size={18} /></div><h3>Across your desktop.</h3><p>Open, read, move, compose, run, and check — without asking you to translate the task into app-sized pieces.</p><div className="cap-art"><div className="terminal-lines"><span>$ motus --plan</span><br />→ inspect ~/Desktop/launch<br />→ read latest research thread<br />→ save brief to <b>~/Documents</b><br />→ verify file + links<br /><br /><span>✓ outcome established</span><br /><span>✓ 4 surfaces used</span><br /><span>✓ evidence attached</span><br /><br />$ <i className="terminal-cursor" /></div><div className="mini-apps"><div className="mini-app">FINDER<div className="mini-bar" />launch-assets</div><div className="mini-app">NOTES<div className="mini-bar" />research / 04</div><div className="mini-app">BROWSER<div className="mini-bar" />verified</div></div></div></div>
        <div className="cap-card short reveal delay-2"><div className="cap-icon"><Globe2 size={18} /></div><h3>Web, with a reason.</h3><p>Browse to gather context, not to make you babysit a tab.</p><div className="web-arc" /></div>
        <div className="cap-card short reveal delay-3"><div className="cap-icon"><Mic size={18} /></div><h3>Voice, when hands are busy.</h3><p>Say the outcome. Motus can pick up the thread from there.</p><div className="voice-wave" aria-hidden="true">{Array.from({ length: 8 }, (_, i) => <i key={i} />)}</div></div>
      </div>
    </div>
  </section>;
}

function Tasks() {
  const [active, setActive] = useState<string | null>(null);
  return <section className="section section-dark tasks-section" id="tasks">
    <div className="container">
      <div className="task-heading">
        <div className="section-heading reveal"><div className="eyebrow mono">Tell Motus what done means</div><h2>Real work,<br /><em>not demos.</em></h2></div>
        <p>Describe the thing you want to be true. Motus handles the in-between — then leaves a clear trail.</p>
      </div>
      <div className="task-grid">
        {tasks.map((task) => <article key={task.id} className={`task-card reveal ${active === task.id ? 'active' : ''}`} data-testid={`card-task-${task.id}`}>
          <div className="task-top"><span className="task-index">{task.id}</span><span className="task-app">{task.app}</span></div>
          <h3>{task.title}</h3><p>{task.body}</p>
          <div className="task-result" data-testid={`text-task-result-${task.id}`}>{active === task.id ? 'Motus is walking through this outcome now' : task.result}</div>
          <button data-testid={`button-activate-task-${task.id}`} className="task-button" onClick={() => setActive(active === task.id ? null : task.id)}>{active === task.id ? 'Pause this task' : 'Activate this task'} <ArrowRight size={13} style={{ verticalAlign: '-2px' }} /></button>
        </article>)}
      </div>
    </div>
  </section>;
}

function Architecture() {
  return <section className="architecture" id="architecture">
    <div className="container">
      <div className="section-heading reveal"><div className="eyebrow mono">Under the hood</div><h2>Calm on the<br /><em>surface.</em></h2><p>Motus is opinionated about the handoff between intention and action. The architecture stays out of your way until it has something useful to show.</p></div>
      <div className="arch-layout">
        <div className="arch-copy reveal delay-1"><h3>Built for the<br />long way around.</h3><p>The hard parts of work are usually the transitions: a file to a browser, a browser to a document, a command to a result. Motus is built to carry context across them.</p></div>
        <div className="arch-diagram reveal delay-2" data-testid="architecture-diagram"><span className="arch-tag mono">motus architecture</span><span className="arch-legend mono">local-first surfaces</span><div className="arch-node local"><strong>your Mac</strong><span>files / apps</span></div><div className="arch-node apps"><strong>connected surfaces</strong><span>web / terminal</span></div><div className="arch-node core"><strong>Motus agent</strong><span>plan · act · verify</span></div><div className="arch-node verify"><strong>evidence</strong><span>what changed</span></div><div className="arch-node sandbox"><strong>your intent</strong><span>the outcome</span></div><i className="connector one" /><i className="connector two" /><i className="connector three" /><i className="connector four" /></div>
      </div>
    </div>
  </section>;
}

function VoiceNotch() {
  const [listening, setListening] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleVoice = () => { setListening(true); window.setTimeout(() => setListening(false), 2400); };
  return <section className="voice-section" id="voice">
    <div className="container voice-layout">
      <div className="reveal"><div className="eyebrow mono">The fastest interface is a sentence</div><h2>Say the<br /><em>outcome.</em></h2><p>Motus can meet you in the notch, in your voice, or in the quiet corner of your desktop. The work starts wherever the thought arrives.</p><button data-testid="button-voice-simulation" className={`voice-btn ${listening ? 'listening' : ''}`} onClick={toggleVoice}><Mic size={16} />{listening ? 'Listening for the outcome…' : 'Try voice mode'}</button></div>
      <div className="notch-stage reveal delay-2">
        <div className={`notch ${open ? 'open' : ''}`} data-testid="notch-simulation">
          <div className="notch-head"><span><i className="notch-signal" /> motus</span><span>{listening ? 'listening' : 'ready'}</span></div>
          <div className="notch-message"><p>“Pull the decisions from today’s notes and put them in a brief I can send.”</p><small>planning · notes → document · 3 checks</small><br /><button data-testid="button-notch-action" className="notch-action" onClick={() => setOpen(false)}>Start outcome <ArrowRight size={12} style={{ verticalAlign: '-2px', marginLeft: 5 }} /></button></div>
          <button data-testid="button-expand-notch" aria-label={open ? 'Collapse Motus notch' : 'Expand Motus notch'} onClick={() => setOpen(!open)} style={{ position: 'absolute', inset: 0, width: '100%', border: 0, background: 'transparent' }} />
        </div>
        <div className="notch-hint">click to expand</div>
      </div>
    </div>
  </section>;
}

function Automation() {
  const [on, setOn] = useState(false);
  return <section className="section section-dark automation" id="automation">
    <div className="container">
      <div className="eyebrow mono">When the work repeats</div>
      <div className="automation-layout">
        <div className="automation-copy reveal"><h3>Turn a good<br />outcome into<br /><em>a rhythm.</em></h3><p>When a sequence earns a place in your week, Motus can hold onto the shape of it. Adjust the outcome as your work changes.</p></div>
        <div className="automation-demo reveal delay-2" data-testid="automation-demo"><div className="autom-header"><strong>Friday handoff</strong><button data-testid="button-automation-toggle" className={`autom-toggle ${on ? 'on' : ''}`} onClick={() => setOn(!on)} aria-label={on ? 'Disable automation' : 'Enable automation'}><i /></button></div><div className="autom-flow"><div className="autom-card"><h4>WHEN</h4><p>It is Friday at 3:00 PM</p><small>one outcome, every week</small></div><div className="autom-arrow"><ArrowRight /></div><div className={`autom-card ${on ? 'done' : ''}`}><h4>DO</h4><p>Gather this week’s launch notes and create a brief.</p><small>{on ? 'ready to run · verified shape' : 'preview the transformation'}</small></div></div><div className="autom-note"><b>{on ? 'ON' : 'OFF'}</b> · {on ? 'Motus will remember the shape, not just the clicks.' : 'Turn on to make this a repeatable outcome.'}</div></div>
      </div>
    </div>
  </section>;
}

function Comparison() {
  return <section className="compare" id="comparison">
    <div className="container">
      <div className="section-heading reveal"><div className="eyebrow mono">A different kind of assistant</div><h2>Less talking.<br /><em>More done.</em></h2><p>Motus is for the moment after you have said what you want — when the useful thing is for your computer to take it from there.</p></div>
      <div className="compare-table" data-testid="comparison-table">
        <div className="compare-row header"><div>the handoff</div><div>motus</div><div>chat</div></div>
        <div className="compare-row"><div><strong>Understands an outcome</strong></div><div><span><i className="dot-green" /> yes</span></div><div><span><i className="dot-dim" /> describes it</span></div></div>
        <div className="compare-row"><div><strong>Works across your Mac</strong></div><div><span><i className="dot-green" /> acts</span></div><div><span><i className="dot-dim" /> advises</span></div></div>
        <div className="compare-row"><div><strong>Shows what changed</strong></div><div><span><i className="dot-green" /> evidence</span></div><div><span><i className="dot-dim" /> answer</span></div></div>
        <div className="compare-row"><div><strong>Checks whether it worked</strong></div><div><span><i className="dot-green" /> verifies</span></div><div><span><i className="dot-dim" /> assumes</span></div></div>
      </div>
    </div>
  </section>;
}

function Privacy() {
  return <section className="section privacy" id="privacy">
    <div className="container privacy-layout">
      <div className="privacy-art reveal"><div className="privacy-orbit"><div className="privacy-lock"><LockKeyhole size={30} /></div></div><span className="privacy-caption">your desktop · your context · visible by design</span></div>
      <div className="privacy-copy reveal delay-1"><div className="eyebrow mono">A capable agent should feel trustworthy</div><h2>Power with<br /><em>boundaries.</em></h2><p>Motus is designed around a simple relationship: you name the outcome, it shows its work. No mystery layer between the request and the result.</p><div className="privacy-points"><div className="privacy-point"><Check size={17} /> See the active plan and its current step</div><div className="privacy-point"><Check size={17} /> Keep the work grounded in your desktop context</div><div className="privacy-point"><Check size={17} /> Get an honest result when verification cannot pass</div></div></div>
    </div>
  </section>;
}

function Pricing() {
  return <section className="pricing" id="pricing">
    <div className="container price-layout">
      <div className="price-copy reveal"><div className="eyebrow mono">The launch plan</div><h2>Your Mac,<br /><em>in motion.</em></h2><p>One focused plan for people who want to give their computer the outcome and get back the evidence.</p></div>
      <div className="price-card reveal delay-1" data-testid="pricing-card"><div className="price-card-top"><h3>Motus for Mac</h3><span className="price-badge">LAUNCH ACCESS</span></div><div className="price-number">$20 <span>/ month</span></div><p>Desktop agent access, with the full Motus loop: plan, act, and verify across your work.</p><div className="price-line"><span>Cancel when you want</span><span>Monthly</span></div><Anchor href="#start" className="price-button" data-testid="button-pricing-start">Get launch access <ArrowRight size={14} style={{ verticalAlign: '-2px', marginLeft: 5 }} /></Anchor></div>
    </div>
  </section>;
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="section faq" id="faq">
    <div className="container faq-layout">
      <div className="reveal"><div className="eyebrow mono">Questions, answered</div><h2>Before you<br /><em>begin.</em></h2><p className="faq-intro">The short version: tell Motus what you want done. It uses your Mac, and checks whether it worked.</p></div>
      <div className="faq-list reveal delay-1">
        {faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button data-testid={`button-faq-${index}`} className={`faq-question ${open === index ? 'open' : ''}`} onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span>{question}</span><Plus size={18} /></button><div className={`faq-answer ${open === index ? 'open' : ''}`} role="region">{answer}</div></div>)}
      </div>
    </div>
  </section>;
}

function FinalCTA() {
  return <section className="final-cta" id="start">
    <div className="container">
      <div className="mono">Tell Motus what you want to be true.</div>
      <h2>Make it<br /><span className="serif">move.</span></h2>
      <p>Your Mac can do more than wait for the next click.</p>
      <button data-testid="button-final-cta" className="btn-primary" onClick={() => window.alert('Motus launch access is coming to your Mac.')}>Get Motus <ArrowRight size={16} /></button>
      <footer className="footer"><span>© 2025 Motus</span><span className="footer-links"><Anchor href="#privacy">Privacy</Anchor><Anchor href="#faq">FAQ</Anchor><Anchor href="#top">Back to top</Anchor></span><span className="mono">made for the long way around</span></footer>
    </div>
  </section>;
}

function Home() {
  return <main className="motus-page"><div className="noise" /><Nav /><Hero /><DemoStrip /><Verification /><Capabilities /><Tasks /><Architecture /><VoiceNotch /><Automation /><Comparison /><Privacy /><Pricing /><FAQ /><FinalCTA /></main>;
}

function App() {
  return <Home />;
}

export default App;
