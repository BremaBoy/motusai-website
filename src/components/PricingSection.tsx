import { freePlanItems, plusPlanItems } from '../data/content';
import { Plan } from './Plan';

const pricingStyles = `
  .pricing { padding: 0 20px 112px; text-align: center; background: #f7f7f7; }
  .pricing h2 { margin: 0; font-size: 32px; font-weight: 400; letter-spacing: -.045em; }
  .pricing-link { display: inline-block; margin: 36px 0 48px; font-size: 12px; }

  .plans {
    width: min(910px, calc(100vw - 40px));
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    text-align: left;
  }

  @media (max-width: 760px) {
    .plans { grid-template-columns: 1fr; }
  }

  @media (max-width: 460px) {
    .pricing h2 { font-size: 27px; }
  }
`;

export function PricingSection() {
  return (
    <>
      <style href="pricing-styles" precedence="default">{pricingStyles}</style>
      <section className="pricing" id="pricing">
        <h2>Get started with ChatGPT today</h2>
        <a className="pricing-link" href="#pricing">View pricing plans ›</a>
        <div className="plans">
          <Plan name="Free" items={freePlanItems} price="$0" />
          <Plan name="Plus" items={plusPlanItems} price="$20" plusPlan />
        </div>
      </section>
    </>
  );
}
