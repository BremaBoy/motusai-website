import { Check } from 'lucide-react';

const planStyles = `
  .plan {
    min-height: 525px;
    padding: 40px 30px 30px;
    background: #fff;
    display: flex;
    flex-direction: column;
  }

  .plan h3 { margin: 0 0 30px; font-size: 20px; font-weight: 400; }
  .plan ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 22px; }
  .plan li { display: grid; grid-template-columns: 18px 1fr; gap: 12px; font-size: 12px; line-height: 1.45; }
  .plan li svg { width: 16px; height: 16px; stroke-width: 1.7; }
  .price { margin: auto 0 0; display: flex; align-items: baseline; gap: 9px; }
  .price b { font-size: 20px; font-weight: 400; }
  .price span { font-size: 12px; }
  .plan-actions { margin-top: 52px; display: flex; align-items: center; gap: 20px; font-size: 12px; }

  .plan .black-button {
    min-height: 36px;
    padding: 0 19px;
    border-radius: 999px;
    background: #111;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

  @media (max-width: 760px) {
    .plan { min-height: 500px; }
  }
`;

interface PlanProps {
  name: string;
  items: string[];
  price: string;
  plusPlan?: boolean;
}

export function Plan({ name, items, price, plusPlan = false }: PlanProps) {
  return (
    <>
      <style href="plan-styles" precedence="default">{planStyles}</style>
      <article className="plan">
        <h3>{name}</h3>
        <ul>{items.map((item) => <li key={item}><Check />{item}</li>)}</ul>
        <p className="price"><b>{price}</b><span>/ month</span></p>
        <div className="plan-actions">
          <a className="black-button" href="#top">Start now ↗</a>
          {plusPlan && <a href="#limits">Limits apply ›</a>}
        </div>
      </article>
    </>
  );
}
