import { Check } from 'lucide-react';

const planStyles = `
  .plan {
    position: relative;
    min-height: 590px;
    padding: 34px;
    border: 1px solid #e3e3e0;
    border-radius: 18px;
    background: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 0 rgba(17, 17, 17, .02);
  }

  .plan.highlight { border-color: #8176ee; background: #17141e; color: #fff; box-shadow: 0 24px 70px rgba(39, 29, 78, .18); }
  .plan-badge { position: absolute; top: 18px; right: 18px; padding: 7px 10px; border-radius: 999px; background: #e9e5ff; color: #574cc7; font-size: 9px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }

  .plan h3 { margin: 0 0 10px; font-size: 20px; font-weight: 600; }
  .plan-description { min-height: 42px; margin: 0 0 28px; color: #75717a; font-size: 12px; line-height: 1.5; }
  .plan.highlight .plan-description { color: rgba(255,255,255,.52); }
  .plan ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 15px; }
  .plan li { display: grid; grid-template-columns: 18px 1fr; gap: 10px; font-size: 12px; line-height: 1.45; }
  .plan li svg { width: 16px; height: 16px; stroke-width: 1.7; }
  .price { margin: auto 0 0; display: flex; align-items: baseline; gap: 9px; }
  .price b { font-size: 32px; font-weight: 500; letter-spacing: -.04em; }
  .price span { font-size: 12px; }
  .plan-actions { margin-top: 28px; display: flex; align-items: center; gap: 20px; font-size: 12px; }

  .plan .black-button {
    width: 100%;
    min-height: 44px;
    padding: 0 19px;
    border-radius: 999px;
    background: #111;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    transition: transform .2s ease, background .2s ease;
  }

  .plan .black-button:hover { transform: translateY(-1px); background: #2a2a2a; }
  .plan.highlight .black-button { background: #fff; color: #17141e; }
  .credit-note { margin: 16px 0 0; color: #8a868e; font-size: 10px; line-height: 1.5; }
  .plan.highlight .credit-note { color: rgba(255,255,255,.42); }

  @media (max-width: 760px) {
    .plan { min-height: 500px; }
  }
`;

interface PlanProps {
  name: string;
  description: string;
  items: string[];
  price: string;
  creditNote: string;
  highlight?: boolean;
  badge?: string;
}

export function Plan({ name, description, items, price, creditNote, highlight = false, badge }: PlanProps) {
  return (
    <>
      <style href="plan-styles" precedence="default">{planStyles}</style>
      <article className={`plan${highlight ? ' highlight' : ''}`}>
        {badge && <span className="plan-badge">{badge}</span>}
        <h3>{name}</h3>
        <p className="plan-description">{description}</p>
        <ul>{items.map((item) => <li key={item}><Check />{item}</li>)}</ul>
        <p className="price"><b>{price}</b><span>/ month</span></p>
        <p className="credit-note">{creditNote}</p>
        <div className="plan-actions">
          <a className="black-button" href="#waitlist">Join the beta ↗</a>
        </div>
      </article>
    </>
  );
}
