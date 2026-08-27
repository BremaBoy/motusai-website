import { Github, Linkedin, X } from 'lucide-react';

const footerGroups = [
  { heading: 'Product', links: [['What Motus can do', '#product'], ['How it works', '#how-it-works'], ['Features', '#features'], ['Pricing', '#pricing']] },
  { heading: 'Use cases', links: [['Mac control', '#features'], ['Files', '#features'], ['Web research', '#features'], ['Coding', '#features']] },
  { heading: 'Explore', links: [['Roadmap', '#roadmap'], ['Voice Notch', '#features'], ['Task verification', '#how-it-works'], ['Join the beta', '#waitlist']] },
  { heading: 'Company', links: [['Contact', 'mailto:hello@motus.ai'], ['Privacy', '#top'], ['Terms', '#top'], ['Security', '#top']] },
];

const footerStyles = `
  footer {
    width: calc(100vw - 40px);
    margin: 0 auto;
    padding: 0 0 24px;
    background: var(--page-surface);
  }

  .footer-grid {
    min-height: 320px;
    padding: 58px 0;
    display: grid;
    grid-template-columns: 1.25fr repeat(4, 1fr);
    gap: 42px;
  }

  .footer-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    font-size: 12px;
    line-height: 1.35;
  }

  .footer-group h4 { margin: 0 0 5px; color: #8a8a87; font-weight: 400; }
  .footer-group a:hover { text-decoration: underline; text-underline-offset: 3px; }

  .footer-brand { max-width: 210px; }
  .footer-brand a { display: inline-flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 650; }
  .footer-brand img { width: 32px; height: 32px; border-radius: 9px; }
  .footer-brand p { margin: 22px 0 0; color: #77737b; font-size: 12px; line-height: 1.55; }

  .footer-bottom {
    min-height: 72px;
    padding-top: 22px;
    border-top: 1px solid #dededb;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: end;
    font-size: 11px;
  }

  .footer-bottom > div { justify-self: end; display: flex; gap: 22px; }
  .footer-bottom svg { width: 15px; height: 15px; stroke-width: 2; }

  @media (max-width: 760px) {
    footer { width: calc(100vw - 32px); }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 55px 30px; }
    .footer-brand { grid-column: 1 / -1; }
    .footer-bottom { grid-template-columns: 1fr auto; }
    .footer-bottom > div { grid-column: 1 / -1; justify-self: start; margin-top: 32px; }
  }

  @media (max-width: 460px) {
    .footer-grid { grid-template-columns: 1fr; }
    .footer-bottom { display: flex; flex-wrap: wrap; gap: 18px; }
    .footer-bottom > div { width: 100%; gap: 16px; }
  }
`;

export function Footer() {
  return (
    <>
      <style href="footer-styles" precedence="default">{footerStyles}</style>
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top"><img src="/product/motus-app-icon-64.png" alt="" /><span>motus</span></a>
            <p>Give your computer a goal. Motus gets it done.</p>
          </div>
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.heading}>
              <h4>{group.heading}</h4>
              {group.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Motus AI. Built for macOS.</span>
          <a href="#top">Back to top ↑</a>
          <div><X aria-label="X" /><Linkedin aria-label="LinkedIn" /><Github aria-label="GitHub" /></div>
        </div>
      </footer>
    </>
  );
}
