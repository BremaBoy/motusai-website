import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowRight, Check, CheckCircle2, ChevronDown, FileText, FolderOpen, Globe2, Layers3, Menu, Mic, MousePointer2, Play, Search, ShieldCheck, Sparkles, TerminalSquare, X } from 'lucide-react';

const outcomes = [
  { title: 'Prepare the launch handoff', prompt: 'Find the latest launch assets, organize them, and create a brief for the team.', steps: ['Scanning launch files', 'Comparing latest versions', 'Building the handoff brief'], evidence: '12 files organized · brief ready' },
  { title: 'Turn the meeting into action', prompt: 'Read today’s notes, extract every decision, and make a clean action plan.', steps: ['Reading meeting notes', 'Extracting decisions', 'Assigning next actions'], evidence: '7 actions found · owners matched' },
  { title: 'Check the release', prompt: 'Open the deployment, run the checks, and tell me exactly what needs attention.', steps: ['Opening deployment', 'Running release checks', 'Verifying the live state'], evidence: '18 checks passed · release verified' },
];

const workflows = [
  { label: 'Files', icon: FolderOpen, title: 'A workspace that cleans itself up.', copy: 'Motus finds the right versions, understands the surrounding context, and leaves a useful structure behind.', result: '42 files reviewed', detail: '12 selected · 3 duplicates isolated' },
  { label: 'Research', icon: Globe2, title: 'Research that ends in a decision.', copy: 'It reads across tabs and documents, keeps the source trail intact, and turns scattered context into a clear brief.', result: '8 sources connected', detail: '4 decisions · citations preserved' },
  { label: 'Terminal', icon: TerminalSquare, title: 'Commands with a definition of done.', copy: 'Motus runs the work, reads the output, checks the resulting state, and only then reports success.', result: '18 checks passed', detail: '0 regressions · output verified' },
];

const faqs = [
  ['What is Motus?', 'Motus is a desktop agent for your Mac. Give it an outcome and it plans, acts across your apps, and verifies the result.'],
  ['How is this different from chat?', 'Chat explains the steps. Motus carries them out on your computer and returns with evidence of what changed.'],
  ['Can I see what it is doing?', 'Yes. The active plan, current action, touched files, and verification checks stay visible throughout the task.'],
  ['Does it work with my existing apps?', 'Yes. Motus is designed to move between the files, browser, documents, terminal, and desktop tools you already use.'],
  ['What happens when a check fails?', 'Motus stops, shows the failed check, and tells you what it could and could not establish. It does not quietly pretend the task worked.'],
];

function Link({ href, children, className = '', onClick }: { href: string; children: ReactNode; className?: string; onClick?: () => void }) {
  return <a href={href} className={className} onClick={onClick}>{children}</a>;
}

function Mark() {
  return <span className="motus-mark" aria-hidden="true"><i /><i /><i /></span>;
}

function MotionExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targetSelector = [
      '.hero-copy > *', '.desktop-window', '.float-chip', '.section-label',
      '.intro-grid > *', '.principle-row > *', '.flow-heading > *', '.flow-board',
      '.workflow-heading > *', '.workflow-tabs', '.workflow-card', '.command-copy > *',
      '.voice-canvas', '.trust-heading > *', '.trust-card', '.pricing-copy > *',
      '.price-panel', '.faq-heading > *', '.faq-item', '.final-copy > *', '.final-cta footer',
    ].join(',');
    const targets = Array.from(document.querySelectorAll<HTMLElement>(targetSelector));
    targets.forEach((target, index) => {
      target.classList.add('motion-target');
      target.style.setProperty('--motion-delay', `${(index % 4) * 90}ms`);
      if (index % 3 === 1) target.classList.add('motion-from-right');
      if (index % 3 === 2) target.classList.add('motion-from-left');
    });

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
    sections.forEach((section, index) => {
      section.classList.add('section-shell');
      section.style.setProperty('--section-order', String(index));
    });
    root.classList.add('motion-ready');

    if (reduced) {
      targets.forEach((target) => target.classList.add('is-visible'));
      sections.forEach((section) => section.classList.add('section-active'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });
    targets.forEach((target) => revealObserver.observe(target));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('section-active', entry.isIntersecting));
    }, { threshold: 0.12, rootMargin: '-10% 0px -12% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));

    let frame = 0;
    const updateScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        root.style.setProperty('--scroll-progress', `${max > 0 ? window.scrollY / max : 0}`);
        root.style.setProperty('--scroll-y', `${window.scrollY}px`);
        frame = 0;
      });
    };
    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('pointermove', updatePointer, { passive: true });
    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('pointermove', updatePointer);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove('motion-ready');
    };
  }, []);

  return <><div className="scroll-progress" aria-hidden="true"><i /></div><div className="motion-ambient" aria-hidden="true"><i /><i /><i /></div></>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <nav className="nav-shell" aria-label="Main navigation">
    <div className="nav-inner">
      <Link href="#top" className="wordmark"><Mark /><span>motus</span></Link>
      <div className="nav-links"><Link href="#system">System</Link><Link href="#workflows">Workflows</Link><Link href="#trust">Trust</Link><Link href="#pricing">Pricing</Link></div>
      <Link href="#access" className="pill pill-light">Get early access <ArrowRight size={14} /></Link>
      <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <div className={`mobile-nav ${open ? 'open' : ''}`}><Link href="#system" onClick={close}>System</Link><Link href="#workflows" onClick={close}>Workflows</Link><Link href="#trust" onClick={close}>Trust</Link><Link href="#pricing" onClick={close}>Pricing</Link><Link href="#access" onClick={close}>Get early access</Link></div>
  </nav>;
}

function ProductWindow({ active, next }: { active: number; next: () => void }) {
  const item = outcomes[active];
  return <div className="product-scene">
    <div className="aurora aurora-one" /><div className="aurora aurora-two" /><div className="landscape landscape-back" /><div className="landscape landscape-front" />
    <div className="desktop-window" data-testid="product-window">
      <aside className="desktop-sidebar">
        <div className="sidebar-brand"><Mark /><span>motus</span></div><div className="side-search"><Search size={13} /> Search</div><div className="side-label">Workspace</div>
        <button className="side-item active"><Sparkles size={14} /> Active task</button><button className="side-item"><Layers3 size={14} /> Automations</button><button className="side-item"><FolderOpen size={14} /> Evidence</button>
        <div className="side-label push">Connected</div><div className="connection"><i /> Desktop</div><div className="connection"><i /> Browser</div><div className="connection"><i /> Terminal</div>
      </aside>
      <div className="desktop-main">
        <header className="desktop-header"><span>Active outcome</span><div><span className="status-live"><i /> working locally</span><button aria-label="More options">•••</button></div></header>
        <div className="desktop-content" key={item.title}><div className="task-meta"><span>OUTCOME 0{active + 1}</span><span>00:18 elapsed</span></div><h3>{item.title}</h3><p>{item.prompt}</p>
          <div className="step-stack">{item.steps.map((step, index) => <div className="work-step" key={step}><span className={`step-icon ${index === 2 ? 'moving' : ''}`}>{index < 2 ? <Check size={13} /> : <Sparkles size={13} />}</span><span>{step}</span><small>{index < 2 ? 'done' : 'in progress'}</small></div>)}</div>
          <div className="evidence-note"><CheckCircle2 size={16} /><div><strong>Evidence prepared</strong><span>{item.evidence}</span></div></div>
        </div>
        <div className="command-bar"><button aria-label="Use voice"><Mic size={15} /></button><span>Ask Motus to adjust the outcome…</span><button className="send-button" onClick={next} aria-label="Try another outcome"><ArrowRight size={15} /></button></div>
      </div>
    </div>
    <div className="float-chip chip-left"><span><FileText size={13} /></span><div><b>handoff.md</b><small>created now</small></div><Check size={13} /></div>
    <div className="float-chip chip-right"><span><ShieldCheck size={13} /></span><div><b>Verification</b><small>3 checks passed</small></div><i /></div>
  </div>;
}

function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive((value) => (value + 1) % outcomes.length), 6500); return () => window.clearInterval(timer); }, []);
  return <section className="hero" id="top"><Nav /><div className="hero-glow" />
    <div className="hero-copy"><div className="label-chip"><span /> Desktop intelligence for macOS</div><h1><span>Your Mac can</span><br /><em>finish the thought.</em></h1><p>Tell Motus what you want to be true. It plans the work, moves across your apps, and comes back with proof.</p><div className="hero-actions"><Link href="#access" className="pill pill-light">Get early access <ArrowRight size={15} /></Link><Link href="#system" className="text-link"><Play size={13} fill="currentColor" /> See the system</Link></div></div>
    <ProductWindow active={active} next={() => setActive((value) => (value + 1) % outcomes.length)} /><div className="hero-foot"><span>Built for the work between apps.</span><Link href="#system">Explore Motus <ArrowDown size={14} /></Link></div>
  </section>;
}

function MotionTicker() {
  const items = ['PLAN VISIBLY', 'ACT NATIVELY', 'VERIFY HONESTLY', 'WORK ACROSS APPS', 'RETURN WITH EVIDENCE'];
  return <div className="motion-ticker" aria-label="Motus principles"><div>{[...items, ...items].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}</div></div>;
}

function Intro() {
  return <section className="intro" id="system"><div className="section-label"><span>01</span> The idea</div><div className="intro-grid"><h2>An interface for outcomes,<br />not another place to type.</h2><div className="intro-copy"><p>Most work breaks at the handoff. A file becomes a tab. A tab becomes a note. A note becomes a task you still have to finish.</p><p>Motus carries the context through that messy middle—and stays until the result is real.</p></div></div><div className="principle-row"><div><span>01</span><h3>Plan visibly</h3><p>See the route before Motus takes it.</p></div><div><span>02</span><h3>Act natively</h3><p>Use the tools already on your Mac.</p></div><div><span>03</span><h3>Verify honestly</h3><p>Get evidence, not a confident guess.</p></div></div></section>;
}

function SystemFlow() {
  return <section className="system-flow"><div className="flow-heading"><div><span className="eyebrow">ONE CONTINUOUS LOOP</span><h2>From sentence<br />to changed state.</h2></div><p>Motus translates natural language into a visible plan, uses the right surfaces, and checks the final state against your original outcome.</p></div><div className="flow-board"><div className="flow-noise" /><div className="flow-node intent"><span>YOUR INTENT</span><strong>“Prepare the launch handoff.”</strong></div><div className="flow-line line-one" /><div className="flow-core"><div className="core-orbit"><Mark /></div><span>MOTUS CORE</span><strong>plan · act · verify</strong></div><div className="flow-line line-two" /><div className="flow-node proof"><span>EVIDENCE</span><strong>12 files + brief + checks</strong></div><div className="surface surface-files"><FolderOpen size={15} /> Files</div><div className="surface surface-web"><Globe2 size={15} /> Browser</div><div className="surface surface-terminal"><TerminalSquare size={15} /> Terminal</div><div className="pointer"><MousePointer2 size={17} /><span>Motus is working here</span></div></div></section>;
}

function Workflows() {
  const [active, setActive] = useState(0); const item = workflows[active]; const Icon = item.icon;
  return <section className="workflows" id="workflows"><div className="section-label light"><span>02</span> Connected work</div><div className="workflow-heading"><h2>One agent.<br /><em>Every surface.</em></h2><p>Switching tools should not mean rebuilding context. Motus moves through the work as one continuous system.</p></div><div className="workflow-tabs">{workflows.map((workflow, index) => { const TabIcon = workflow.icon; return <button key={workflow.label} className={active === index ? 'active' : ''} onClick={() => setActive(index)}><TabIcon size={15} />{workflow.label}</button>; })}</div><div className="workflow-card" data-testid="workflow-card"><div className="workflow-copy" key={`copy-${item.label}`}><span className="micro-label">{item.label.toUpperCase()} / CONNECTED</span><h3>{item.title}</h3><p>{item.copy}</p><div className="workflow-proof"><CheckCircle2 size={16} /><span><b>{item.result}</b>{item.detail}</span></div></div><div className={`workflow-visual visual-${active}`} key={`visual-${item.label}`}><div className="visual-top"><span><Icon size={14} /> {item.label}</span><span>motus / live</span></div><div className="visual-card primary-card"><span>Current outcome</span><strong>{outcomes[active].title}</strong><small>{outcomes[active].evidence}</small></div><div className="visual-card small-card"><Check size={14} /><span>Result verified</span></div><div className="visual-grid">{Array.from({ length: 15 }, (_, index) => <i className={index % 5 === active || index === 13 ? 'active' : ''} key={index} />)}</div></div></div></section>;
}

function CommandSection() {
  const [listening, setListening] = useState(false);
  return <section className="command-section"><div className="command-copy"><span className="eyebrow">VOICE + DESKTOP</span><h2>The fastest interface<br />is still a sentence.</h2><p>Start from the notch, a keyboard shortcut, or your voice. Motus keeps the interaction small while the work expands behind it.</p></div><div className="voice-canvas"><div className="voice-halo" /><button className={`voice-orb ${listening ? 'listening' : ''}`} onClick={() => { setListening(true); window.setTimeout(() => setListening(false), 2600); }} aria-label="Try voice mode"><Mic size={28} /></button><div className="voice-status"><span>{listening ? 'LISTENING' : 'READY'}</span><strong>{listening ? 'Say the outcome…' : 'Press to speak'}</strong></div><div className="waveform" aria-hidden="true">{Array.from({ length: 24 }, (_, index) => <i key={index} />)}</div><div className="spoken-outcome"><span>OUTCOME</span><p>“Pull the decisions from today’s notes and turn them into a brief I can send.”</p><small>Notes → Document · 3 verification checks</small></div></div></section>;
}

function Trust() {
  return <section className="trust" id="trust"><div className="section-label"><span>03</span> Trust by design</div><div className="trust-heading"><h2>Power should come<br />with a paper trail.</h2><p>Motus makes action legible. The plan, the current step, what changed, and how it was checked remain part of the interface.</p></div><div className="trust-grid"><article className="trust-card trace"><div className="card-number">01 / TRACE</div><h3>See the route.</h3><p>Every outcome becomes a sequence you can read, pause, and adjust.</p><div className="trace-list"><span className="done"><Check /> Read source notes</span><span className="done"><Check /> Extract decisions</span><span><Sparkles /> Create team brief</span></div></article><article className="trust-card verify"><div className="card-number">02 / VERIFY</div><h3>Know what changed.</h3><p>Checks are attached to the result, so “done” means more than “the command ran.”</p><div className="verify-seal"><ShieldCheck /><span><b>Verified</b>3 of 3 checks passed</span></div></article><article className="trust-card boundaries"><div className="card-number">03 / BOUNDARIES</div><h3>Stay in control.</h3><p>Clear permissions and visible surfaces keep the agent grounded in your intent.</p><div className="permission-row"><span>Files</span><i className="on" /><span>Browser</span><i className="on" /><span>Terminal</span><i /></div></article></div></section>;
}

function Pricing() {
  return <section className="pricing" id="pricing"><div className="pricing-copy"><span className="eyebrow">EARLY ACCESS</span><h2>Put your Mac<br /><em>in motion.</em></h2><p>Join the first group building a calmer relationship with complicated work.</p></div><div className="price-panel"><div className="price-top"><span>Motus for Mac</span><span className="beta">FOUNDING ACCESS</span></div><div className="price-value"><strong>$20</strong><span>/ month</span></div><p>The complete desktop agent: plan, act, and verify across your work.</p><div className="includes"><span><Check /> Native Mac agent</span><span><Check /> Browser, files, and terminal</span><span><Check /> Voice outcomes</span><span><Check /> Verification evidence</span></div><Link href="#access" className="price-button">Request access <ArrowRight size={15} /></Link><small>Cancel anytime · Early members keep their launch rate</small></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="faq-section"><div className="faq-heading"><span className="eyebrow">FAQ</span><h2>Questions that<br />come up most.</h2><p>Everything you need to understand how Motus works before it starts working for you.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><ChevronDown size={17} /></button><div className={open === index ? 'answer open' : 'answer'}><p>{answer}</p></div></div>)}</div></section>;
}

function FinalCTA() {
  return <section className="final-cta" id="access"><div className="final-glow" /><div className="final-landscape" /><div className="final-copy"><Mark /><h2>Give the outcome.<br />Get back the evidence.</h2><p>Motus is coming to your Mac.</p><button onClick={() => window.alert('You’re early. Motus access is opening soon.')}>Get early access <ArrowRight size={15} /></button></div><footer><div className="wordmark"><Mark /><span>motus</span></div><div><Link href="#system">System</Link><Link href="#workflows">Workflows</Link><Link href="#trust">Trust</Link><Link href="#pricing">Pricing</Link></div><span>© 2026 Motus AI</span></footer></section>;
}

export default function App() { return <main className="motion-page"><MotionExperience /><Hero /><MotionTicker /><Intro /><SystemFlow /><Workflows /><CommandSection /><Trust /><Pricing /><FAQ /><FinalCTA /></main>; }
