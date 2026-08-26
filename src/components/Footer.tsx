import { Github, Instagram, Linkedin, MessageCircle, Music2, X, Youtube } from 'lucide-react';
import { footerGroups } from '../data/content';

const footerStyles = `
  footer {
    width: calc(100vw - 40px);
    margin: 0 auto;
    padding: 0 0 24px;
    background: #fbfbfa;
  }

  .footer-grid {
    min-height: 330px;
    padding: 58px 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
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

  .footer-group h4 { margin: 0; color: #8a8a87; font-weight: 400; }
  .footer-group h4.secondary { margin-top: 28px; }
  .footer-gap { height: 8px; }

  .footer-bottom {
    min-height: 72px;
    padding-top: 22px;
    border-top: 1px solid #dededb;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: end;
    font-size: 11px;
  }

  .footer-bottom button { padding: 10px 20px; border: 0; border-radius: 9px; background: #111; color: #fff; }
  .footer-bottom > div { justify-self: end; display: flex; gap: 22px; }
  .footer-bottom svg { width: 15px; height: 15px; stroke-width: 2; }

  @media (max-width: 760px) {
    footer { width: calc(100vw - 32px); }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 55px 30px; }
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
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.heading}>
              <h4>{group.heading}</h4>
              {group.links.map((item) => <a href="#top" key={item}>{item}</a>)}
              {group.secondary && <h4 className="secondary">{group.secondary}</h4>}
              {group.extra.map((item, index) => item
                ? <a href="#top" key={item + index}>{item}</a>
                : <span className="footer-gap" key={index} />)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>Motus © 2026</span>
          <button>Manage Cookies</button>
          <div><X /><Youtube /><Linkedin /><Github /><Instagram /><Music2 /><MessageCircle /></div>
        </div>
      </footer>
    </>
  );
}
