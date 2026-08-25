import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const headerStyles = `
  .site-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 30;
    height: 82px;
    padding: 0 max(28px, calc((100vw - 1100px) / 2));
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, .16);
    color: #fff;
  }

  .motus-logo {
    width: max-content;
    display: inline-flex;
    align-items: center;
    gap: 11px;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -.03em;
  }

  .motus-logo img {
    width: 28px;
    height: 28px;
    border-radius: 8px;
  }

  .site-nav {
    display: flex;
    align-items: center;
    gap: 42px;
    color: rgba(255, 255, 255, .72);
    font-size: 13px;
  }

  .site-nav a, .mobile-nav a { transition: color .2s ease; }
  .site-nav a:hover { color: #fff; }
  .mobile-nav a:hover { color: #111; }

  .header-cta {
    justify-self: end;
    min-height: 44px;
    padding: 0 24px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #171717;
    font-size: 13px;
    font-weight: 600;
  }

  .menu-button, .mobile-nav { display: none; }

  .menu-button {
    justify-self: end;
    width: 38px;
    height: 38px;
    padding: 0;
    border: 0;
    background: transparent;
    color: #fff;
    place-items: center;
  }

  .menu-button svg { width: 20px; }

  @media (max-width: 760px) {
    .site-header {
      height: 68px;
      padding-inline: 18px;
      grid-template-columns: 1fr auto;
    }

    .site-nav, .site-header > .header-cta { display: none; }
    .menu-button { display: grid; }

    .mobile-nav {
      position: absolute;
      top: calc(100% + 8px);
      left: 14px;
      right: 14px;
      padding: 20px;
      border: 1px solid #e3e3e3;
      border-radius: 16px;
      flex-direction: column;
      gap: 18px;
      background: #fff;
      box-shadow: 0 20px 50px rgba(0, 0, 0, .12);
      color: #555;
      font-size: 14px;
    }

    .mobile-nav.open { display: flex; }
    .mobile-nav .header-cta {
      align-self: stretch;
      background: #171717;
      color: #fff;
    }
  }
`;

const navItems = [
  { label: 'Product', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#products' },
  { label: 'Details', href: '#pricing' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <style href="header-styles" precedence="default">{headerStyles}</style>
      <header className="site-header">
        <a className="motus-logo" href="#top" aria-label="Motus home">
          <img src="/product/motus-app-icon-64.png" width="64" height="64" alt="" />
          <span>motus</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
        </nav>

        <a className="header-cta" href="#pricing">Get early access</a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Mobile navigation">
          {navItems.map((item) => <a href={item.href} key={item.label} onClick={closeMenu}>{item.label}</a>)}
          <a className="header-cta" href="#pricing" onClick={closeMenu}>Get early access</a>
        </nav>
      </header>
    </>
  );
}
