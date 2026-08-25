import { FormEvent, useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowRight, BookOpen, Check, ChevronDown, Code2, FileSearch, FileText, FolderOpen, Globe2, Image, Menu, MessageSquare, Mic, MousePointer2, PenLine, Play, Search, ShieldCheck, Sparkles, X } from 'lucide-react';

const workspace = '/product/motus-prompt-capture.png';
const heroTaskVideo = '/product/motus-hero.mp4';
const beta = '/product/motus-beta.png';
const orb = '/product/motus-orb.png';
const icon = '/product/motus-app-icon.png';
const faqs = [
  ['What is Motus?', 'Motus is a desktop operator for macOS. Tell it what outcome you need and it can work across files, the browser, documents, and terminal to get there.'],
  ['Can I see what it is doing?', 'Yes. Motus keeps its current action visible and returns with a clear record of what changed.'],
  ['When can I download it?', 'We are opening access in small groups. Join the waitlist and we will send you a download invitation when your place is ready.'],
  ['Does joining the waitlist cost anything?', 'No. Joining is free and does not ask for payment details.'],
];

function Link({ href, className = '', children, onClick }: { href: string; className?: string; children: ReactNode; onClick?: () => void }) { return <a href={href} className={className} onClick={onClick}>{children}</a>; }
function Logo() { return <Link href="#top" className="brand"><img src={icon} alt="" /><span>motus</span></Link>; }
function RevealMotion() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { items.forEach((item) => item.classList.add('revealed')); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    items.forEach((item) => observer.observe(item)); return () => observer.disconnect();
  }, []); return null;
}
function Nav() {
  const [open, setOpen] = useState(false);
  return <><header className="site-nav"><Logo /><nav className="nav-links"><Link href="#product">Product</Link><Link href="#features">Features</Link><Link href="#how">How it works</Link><Link href="#details">Details</Link></nav><Link href="#waitlist" className="pill pill-dark nav-cta">Get early access</Link><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></header><div className={`mobile-nav ${open ? 'open' : ''}`}>{['product', 'features', 'how', 'details', 'waitlist'].map((item) => <Link key={item} href={`#${item}`} onClick={() => setOpen(false)}>{item === 'how' ? 'How it works' : item.charAt(0).toUpperCase() + item.slice(1)}</Link>)}</div></>;
}
function HeroTaskVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => {
      video.defaultMuted = true;
      video.muted = true;
      video.controls = false;
      void video.play().catch(() => undefined);
    };
    play();
    video.addEventListener('loadeddata', play);
    video.addEventListener('canplay', play);
    const resume = () => { if (!document.hidden) play(); };
    document.addEventListener('visibilitychange', resume);
    return () => {
      video.removeEventListener('loadeddata', play);
      video.removeEventListener('canplay', play);
      document.removeEventListener('visibilitychange', resume);
    };
  }, []);
  return <video ref={videoRef} autoPlay muted loop playsInline preload="auto" controls={false} disablePictureInPicture disableRemotePlayback controlsList="nodownload nofullscreen noplaybackrate noremoteplayback" tabIndex={-1} aria-label="Motus executing a real task on macOS" onContextMenu={(event) => event.preventDefault()}><source src={heroTaskVideo} type="video/mp4" /></video>;
}
function Hero() {
  return <section className="hero" id="top"><Nav /><div className="announcement">Now accepting a new group of early-access users <ArrowRight /></div><div className="hero-copy" data-reveal><span className="kicker">Meet Motus</span><h1>Your work,<br /><span>already in motion.</span></h1><p>A quiet desktop operator that turns a sentence into finished work across your Mac.</p><Link href="#waitlist" className="pill pill-dark">Join the waitlist <ArrowRight /></Link></div><figure className="hero-product" data-reveal><div className="product-chrome"><span><i /><i /><i /></span><small>MOTUS · LIVE TASK</small><em>5 SEC LOOP</em></div><div className="hero-media"><HeroTaskVideo /></div><figcaption><span>Real task, captured on macOS.</span><span>Calculator · result complete</span></figcaption></figure></section>;
}
function Product() {
  return <section className="product-section" id="product">
    <div className="intro-row" data-reveal><span className="section-label">01 / THE DESKTOP OS</span><div><h2>Build your day around outcomes.</h2><p>Not tabs. Not dashboards. Motus stays close to the work and brings the right tools together only when you need them.</p></div></div>
    <div className="trust-row" data-reveal><span>One starting point for</span><b>FILES</b><b>BROWSER</b><b>DOCUMENTS</b><b>TERMINAL</b><b>VOICE</b></div>
    <div className="workflow-stories">
      <article className="workflow-story" data-reveal>
        <div className="workflow-copy"><small>01 · START</small><span className="story-number">01</span><h3>Say it how you mean it.</h3><p>Use voice or text. No command syntax, setup ritual, or prompt handbook required.</p><div className="story-note"><MessageSquare /><span><b>Real prompt</b>Captured directly from the current Motus app.</span></div></div>
        <figure className="workflow-media prompt-media"><div className="media-bar"><span><i /><i /><i /></span><small>MOTUS · NEW CONVERSATION</small><em>LIVE APP</em></div><div className="media-screen"><img src={workspace} alt="Motus workspace with a launch-brief prompt ready to send" /></div><figcaption><span>Natural language in</span><span>No prompt handbook required</span></figcaption></figure>
      </article>
      <article className="workflow-story workflow-story-reverse" data-reveal>
        <div className="workflow-copy"><small>02 · FOLLOW</small><span className="story-number">02</span><h3>Watch the task move.</h3><p>Motus keeps the active step visible while your request moves across the right tools.</p><div className="story-note"><Play /><span><b>Product film</b>A real voice interaction, captured on macOS.</span></div></div>
        <figure className="workflow-media motion-media"><div className="media-bar"><span><i /><i /><i /></span><small>MOTUS · NATIVE VOICE</small><em>PLAYING</em></div><div className="media-screen"><video autoPlay muted loop playsInline poster="/product/motus-native-voice-demo-poster.jpg"><source src="/product/motus-native-voice-demo.mp4" type="video/mp4" /></video><div className="privacy-veil" aria-hidden="true"><span className="active-dot">Working across the desktop</span></div></div><figcaption><span>Voice becomes visible action</span><span>Current macOS build</span></figcaption></figure>
      </article>
      <article className="workflow-story" data-reveal>
        <div className="workflow-copy"><small>03 · FINISH</small><span className="story-number">03</span><h3>Leave with the result.</h3><p>Get a clear record of what changed, what completed, and what still needs your judgment.</p><div className="story-note"><Check /><span><b>Outcome ready</b>Review the work without reconstructing the process.</span></div></div>
        <figure className="workflow-media result-media"><div className="result-backdrop"><img src={workspace} alt="Motus workspace behind a completed result" /></div><div className="result-sheet"><div className="result-check"><Check /></div><small>TASK COMPLETE</small><h4>Launch brief ready.</h4><p>Key decisions organized, owners flagged, and the brief is ready to review.</p><div className="result-file"><FileText /><span><b>Launch brief</b><small>Draft · ready to review</small></span><ArrowRight /></div></div><figcaption><span>One request</span><span>A usable result</span></figcaption></figure>
      </article>
    </div>
  </section>;
}
const capabilities = [
  { icon: MessageSquare, title: 'Chat naturally', text: 'Type what you need in plain language and keep the work moving in one conversation.', focus: 'composer', tag: 'New conversation' },
  { icon: Search, title: 'Search across work', text: 'Find past conversations and return to useful context without starting over.', focus: 'sidebar', tag: 'Search & chats' },
  { icon: FolderOpen, title: 'Organize projects', text: 'Keep related conversations, source material, and outcomes together by project.', focus: 'sidebar', tag: 'Projects' },
  { icon: BookOpen, title: 'Build a library', text: 'Collect reusable material so knowledge stays available for the next task.', focus: 'sidebar', tag: 'Library' },
  { icon: Globe2, title: 'Research the web', text: 'Search the web and turn findings into a concise, usable response.', focus: 'modes', tag: 'Deep research' },
  { icon: Image, title: 'Create images', text: 'Move from a written idea to a visual starting point from the same workspace.', focus: 'modes', tag: 'Create an image' },
  { icon: PenLine, title: 'Write and refine', text: 'Draft, rewrite, summarize, and shape documents through natural conversation.', focus: 'modes', tag: 'Smart writing' },
  { icon: Code2, title: 'Work with code', text: 'Ask for implementation help, investigate problems, and develop technical work.', focus: 'modes', tag: 'AI coding' },
];

function Features() {
  return <section className="features-section" id="features"><div className="features-heading" data-reveal><span className="section-label">02 / EVERYTHING IN ONE PLACE</span><div><h2>What Motus can do.</h2><p>Motus is the working layer between an idea and an outcome. Start by typing or speaking, choose a focused mode when it helps, and keep the context in the same conversation.</p></div></div><div className="capability-grid">{capabilities.map(({ icon: Icon, title, text, focus, tag }, index) => <article className="capability-card" data-reveal key={title}><div className={`capability-shot focus-${focus}`}><img src={workspace} alt={`Motus workspace showing ${title.toLowerCase()}`} /><span className="shot-focus"><Icon />{tag}</span></div><div className="capability-copy"><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    <div className="chat-story" data-reveal><div className="chat-story-copy"><span className="section-label">WHILE CHATTING WITH MOTUS</span><h3>From what you type<br />to what comes back.</h3><p>A conversation is more than a reply. Motus can understand the request, work through the components, and return a result you can inspect and use.</p><div className="chat-legend"><span><i /> Your request</span><span><i /> Motus working</span><span><i /> Finished response</span></div></div><div className="chat-sequence"><div className="chat-panel request-panel"><div className="panel-label"><span>01</span>TYPE A REQUEST</div><div className="prompt-box"><p>Prepare a launch brief from my research, organize the supporting files, and tell me what is missing.</p><div><span>＋</span><small>Search Web</small><Mic /><b><ArrowRight /></b></div></div></div><div className="chat-panel working-panel"><div className="panel-label"><span>02</span>WATCH THE COMPONENTS</div><div className="action-list"><p><FileSearch /><span><b>Reviewing research</b><small>6 sources found</small></span><Check /></p><p><FolderOpen /><span><b>Organizing files</b><small>Launch / Supporting</small></span><Check /></p><p className="active"><PenLine /><span><b>Writing launch brief</b><small>Drafting overview…</small></span><i /></p></div></div><div className="chat-panel response-panel"><div className="panel-label"><span>03</span>USE THE RESPONSE</div><div className="response-card"><div className="response-mark"><Check /></div><small>Task completed</small><h4>Your launch brief is ready.</h4><p>I organized six source files, drafted the brief, and flagged two missing launch dates for your review.</p><div><FileText /><span><b>Launch brief</b><small>Draft · ready to review</small></span><ArrowRight /></div></div></div></div></div>
  </section>;
}
const chapters = [{ time: 0, icon: Mic, title: 'Ask naturally', text: 'Start with your voice or keyboard.' }, { time: 4.2, icon: MousePointer2, title: 'Motus acts', text: 'The right tools move into place.' }, { time: 11.3, icon: Check, title: 'Review the result', text: 'Stay in control from start to finish.' }];
function HowItWorks() {
  const video = useRef<HTMLVideoElement>(null); const [active, setActive] = useState(0);
  const select = (index: number) => { setActive(index); if (video.current) { video.current.currentTime = chapters[index].time; void video.current.play().catch(() => undefined); } };
  return <section className="how-section" id="how"><div className="intro-row" data-reveal><span className="section-label">02 / HOW IT WORKS</span><div><h2>Workflow with less friction.</h2><p>One request becomes a visible sequence of useful actions.</p></div></div><div className="chapter-grid" data-reveal>{chapters.map(({ icon: Icon, title, text }, i) => <button key={title} className={active === i ? 'active' : ''} onClick={() => select(i)}><span>0{i + 1}</span><Icon /><b>{title}</b><small>{text}</small></button>)}</div><div className="film" data-reveal><div className="film-copy"><span className="section-label light">REAL PRODUCT · MACOS</span><h3>See Motus<br />take the floor.</h3><p>A natural voice request becomes visible action, right on the Mac.</p><button onClick={() => video.current?.play()}><Play /> Play demo</button></div><div className="film-screen"><div className="film-bar"><i /><i /><i /><span>MOTUS · NATIVE VOICE</span></div><video ref={video} autoPlay muted loop playsInline poster="/product/motus-native-voice-demo-poster.jpg" onTimeUpdate={(e) => { const t = e.currentTarget.currentTime; setActive(t >= 11.3 ? 2 : t >= 4.2 ? 1 : 0); }}><source src="/product/motus-native-voice-demo.mp4" type="video/mp4" /></video></div></div></section>;
}
function Details() {
  return <section className="details-section" id="details"><div className="intro-row" data-reveal><span className="section-label">03 / BUILT FOR THE MAC</span><div><h2>Small surface. Serious range.</h2><p>Motus fits into the way you already work, with visibility and control built in.</p></div></div><div className="detail-grid"><article className="detail-card image-detail" data-reveal><div className="detail-copy"><Sparkles /><span>REAL WORKSPACE</span><h3>A calm place to begin.</h3></div><img src={workspace} alt="Motus desktop workspace" /></article><article className="detail-card access-detail" data-reveal><div className="detail-copy"><ShieldCheck /><span>EARLY ACCESS</span><h3>Join now. Download when your invite lands.</h3><p>The beta opens in small groups so every release gets real feedback.</p></div><img src={beta} alt="Motus early access screen" /></article><article className="detail-card principle-detail" data-reveal><div className="principle-top"><Code2 /><span>BUILT-IN PRINCIPLES</span></div><div className="principles"><p><b>Visible by default</b><span>See the current action and the evidence behind a finished task.</span></p><p><b>Mac-native rhythm</b><span>Made for the desktop you already know.</span></p><p><b>You stay in control</b><span>Motus asks when judgment or permission is needed.</span></p></div></article></div></section>;
}
function FAQ() { const [open, setOpen] = useState(0); return <section className="faq-section"><div data-reveal><span className="section-label">04 / COMMON QUESTIONS</span><h2>The useful details.</h2></div><div className="faq-list" data-reveal>{faqs.map(([q, a], i) => <div className="faq-item" key={q}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{q}</span><ChevronDown className={open === i ? 'rotated' : ''} /></button><div className={`answer ${open === i ? 'open' : ''}`}><p>{a}</p></div></div>)}</div></section>; }
function Waitlist() { const [joined, setJoined] = useState(false); const submit = (e: FormEvent) => { e.preventDefault(); setJoined(true); }; return <section className="waitlist" id="waitlist" data-reveal><div className="waitlist-art"><img src={orb} alt="" /></div><div className="waitlist-copy"><span className="section-label light">EARLY ACCESS</span><h2>Put your work<br />in motion.</h2><p>Join the waitlist for the Motus download. We’re inviting people in small groups while the beta takes shape.</p>{joined ? <div className="joined"><Check /><span><b>You’re on the list.</b><small>We’ll email you when your download is ready.</small></span></div> : <form onSubmit={submit}><input aria-label="Email address" type="email" placeholder="Email address" required /><button className="pill pill-light">Join waitlist <ArrowRight /></button></form>}</div></section>; }
function Footer() { return <footer><div className="footer-top"><Logo /><p>One quiet place to start work across your apps, files, browser, and terminal.</p><Link href="#top" className="pill">Back to top ↑</Link></div><div className="footer-bottom"><span>© 2026 Motus AI</span><div><Link href="#product">Product</Link><Link href="#how">How it works</Link><Link href="#details">Details</Link></div><span>Made for macOS</span></div></footer>; }
export default function App() { return <main><RevealMotion /><Hero /><Product /><Features /><HowItWorks /><Details /><FAQ /><Waitlist /><Footer /></main>; }
