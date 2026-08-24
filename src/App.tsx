import { FormEvent, useEffect, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowRight, Check, ChevronDown, Command, FileText, FolderOpen, Globe2, Menu, Mic, MousePointer2, ShieldCheck, TerminalSquare, X } from 'lucide-react';

const productScreen = '/product/motus-beta.png';
const productOrb = '/product/motus-orb.png';
const appIcon = '/product/motus-app-icon.png';

const faqs = [
  ['What is Motus?', 'Motus is a desktop operator for macOS. Tell it what outcome you need and it can work across files, the browser, documents, and terminal to get there.'],
  ['Can I see what it is doing?', 'Yes. Motus keeps its current action visible and returns with a clear record of what changed.'],
  ['When can I download it?', 'We are opening access in small groups. Join the waitlist and we will send you a download invitation when your place is ready.'],
  ['Does joining the waitlist cost anything?', 'No. Joining is free and does not ask for payment details.'],
];

function Link({ href, className = '', children, onClick }: { href: string; className?: string; children: ReactNode; onClick?: () => void }) {
  return <a href={href} className={className} onClick={onClick}>{children}</a>;
}

function Logo() {
  return <Link href="#top" className="brand"><img src={appIcon} alt="" /><span>motus</span></Link>;
}

function RevealMotion() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('revealed'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return null;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-nav">
    <Logo />
    <nav className="desktop-links" aria-label="Main navigation"><Link href="#product">Product</Link><Link href="#how">How it works</Link><Link href="#details">Details</Link></nav>
    <Link href="#waitlist" className="nav-button">Join waitlist <ArrowRight size={13} /></Link>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <div className={`mobile-menu ${open ? 'open' : ''}`}><Link href="#product" onClick={close}>Product</Link><Link href="#how" onClick={close}>How it works</Link><Link href="#details" onClick={close}>Details</Link><Link href="#waitlist" onClick={close}>Join waitlist</Link></div>
  </header>;
}

function Hero() {
  return <section className="hero" id="top">
    <Nav />
    <div className="hero-sky" aria-hidden="true"><span /><span /><img src={productOrb} alt="" /></div>
    <div className="hero-copy" data-reveal>
      <span className="tiny-label">A DESKTOP OPERATOR FOR MAC</span>
      <h1>Say what you need.<br /><em>Motus gets it moving.</em></h1>
      <p>One quiet place to start work across your apps, files, browser, and terminal.</p>
      <div className="hero-actions"><Link href="#waitlist" className="button button-dark">Download for Mac <ArrowDown size={14} /></Link><Link href="#product" className="button button-ghost">See the app</Link></div>
      <small>Download invitations are currently sent through the waitlist.</small>
    </div>
    <div className="hero-edge left" /><div className="hero-edge right" />
  </section>;
}

function Product() {
  return <section className="product-section" id="product">
    <div className="section-intro" data-reveal><span className="index">01 / PRODUCT</span><h2>The app stays small.<br />The work does not.</h2><p>Motus lives close to the work, without asking you to move your day into another dashboard.</p></div>
    <div className="real-product" data-reveal>
      <div className="product-note"><span>REAL PRODUCT SCREEN</span><p>The current Motus beta access experience, captured directly from the shipped macOS app.</p></div>
      <div className="screen-stage"><div className="screen-window"><div className="window-dots"><i /><i /><i /></div><img src={productScreen} alt="The real Motus beta app access screen" /></div><div className="screen-caption"><span>Motus beta</span><span>macOS · current build</span></div></div>
    </div>
  </section>;
}

const steps = [
  { number: '01', icon: Mic, title: 'Ask naturally.', body: 'Use your voice or type the result you want. No command language to learn.' },
  { number: '02', icon: MousePointer2, title: 'Watch it work.', body: 'Motus moves through the right apps and keeps the active step in view.' },
  { number: '03', icon: Check, title: 'Get the result.', body: 'It returns with what changed, what completed, and what still needs you.' },
];

function HowItWorks() {
  return <section className="how-section" id="how">
    <div className="how-heading" data-reveal><span className="index light">02 / HOW IT WORKS</span><h2>From a sentence<br />to a finished task.</h2></div>
    <div className="steps-grid">{steps.map(({ number, icon: Icon, title, body }) => <article key={number} data-reveal><div className="step-top"><span>{number}</span><Icon size={18} /></div><h3>{title}</h3><p>{body}</p></article>)}</div>
    <div className="command-demo" data-reveal>
      <div className="command-copy"><span className="eyebrow">ONE REQUEST</span><blockquote>“Find the launch notes, turn the decisions into a brief, and save it beside the original.”</blockquote><div className="command-meta"><span><Command size={13} /> Spoken or typed</span><span>3 apps used</span></div></div>
      <div className="activity-card"><div className="activity-head"><span><i /> Motus is working</span><small>00:18</small></div><div className="activity-row done"><span><FolderOpen />Find launch notes</span><Check /></div><div className="activity-row done"><span><FileText />Extract decisions</span><Check /></div><div className="activity-row active"><span><Globe2 />Create team brief</span><i /></div><div className="activity-result"><ShieldCheck /><span><b>Result will be verified</b>Before Motus marks it done</span></div></div>
    </div>
  </section>;
}

function Details() {
  return <section className="details-section" id="details">
    <div className="details-heading" data-reveal><span className="index">03 / DETAILS</span><h2>Built around the Mac<br />you already use.</h2></div>
    <div className="detail-grid">
      <article className="detail-wide" data-reveal><div><span className="eyebrow">WORKS ACROSS APPS</span><h3>Context travels with the task.</h3><p>Move from a folder to the browser to a document without restating what you mean at every step.</p></div><div className="app-rail"><span><FolderOpen />Files</span><span><Globe2 />Browser</span><span><TerminalSquare />Terminal</span><span><FileText />Documents</span></div></article>
      <article className="detail-card orb-card" data-reveal><img src={productOrb} alt="Motus app onboarding artwork" /><div><span>VOICE FIRST</span><h3>Start with the thought.</h3><p>Speak while the idea is fresh. Motus turns it into a workable outcome.</p></div></article>
      <article className="detail-card plain-card" data-reveal><div className="verification-mark"><ShieldCheck /></div><div><span>VISIBLE BY DEFAULT</span><h3>No mystery spinner.</h3><p>See the current action and the evidence behind a completed result.</p></div></article>
    </div>
  </section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="faq-section"><div className="faq-title" data-reveal><span className="index">04 / QUESTIONS</span><h2>The useful details.</h2></div><div className="faq-list" data-reveal>{faqs.map(([question, answer], index) => <div className="faq-row" key={question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><ChevronDown className={open === index ? 'rotated' : ''} /></button><div className={`faq-answer ${open === index ? 'open' : ''}`}><p>{answer}</p></div></div>)}</div></section>;
}

function Waitlist() {
  const [joined, setJoined] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setJoined(true); };
  return <section className="waitlist" id="waitlist"><div className="waitlist-orb"><img src={productOrb} alt="" /></div><div className="waitlist-copy" data-reveal><span className="eyebrow">EARLY ACCESS</span><h2>Your Mac is<br />one invite away.</h2><p>Join the waitlist for the Motus download. We are inviting people in small groups while the beta takes shape.</p>{joined ? <div className="joined-message"><Check /><div><b>You’re on the list.</b><span>We’ll email you when your download is ready.</span></div></div> : <form onSubmit={submit}><label htmlFor="waitlist-email">Email address</label><div className="email-field"><input id="waitlist-email" type="email" placeholder="you@email.com" required /><button type="submit">Join waitlist <ArrowRight size={14} /></button></div><small>No spam. Just your access update.</small></form>}</div></section>;
}

function Footer() {
  return <footer className="footer"><Logo /><div><Link href="#product">Product</Link><Link href="#how">How it works</Link><Link href="#details">Details</Link><Link href="#waitlist">Waitlist</Link></div><span>© 2026 Motus AI</span></footer>;
}

export default function App() {
  return <main><RevealMotion /><Hero /><Product /><HowItWorks /><Details /><FAQ /><Waitlist /><Footer /></main>;
}
