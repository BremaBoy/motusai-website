import { freePlanItems, plusPlanItems } from '../data/content';
import { Plan } from './Plan';

const pricingStyles = `
  .pricing {
    padding: 128px 20px;
    text-align: center;
    background: #fbfbfa;
  }

  .pricing h2 {
    margin: 0;
    font-size: clamp(38px, 4.6vw, 58px);
    font-weight: 400;
    line-height: 1.04;
    letter-spacing: -.055em;
  }

  .pricing-link {
    display: inline-flex;
    min-height: 38px;
    margin: 30px 0 54px;
    padding: 0 18px;
    align-items: center;
    border: 1px solid #dededb;
    border-radius: 999px;
    background: #fff;
    font-size: 12px;
  }

  .plans {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    text-align: left;
  }

  @media (max-width: 760px) {
    .pricing { padding: 96px 16px; }
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
        <h2>Choose how you want Motus<br />to work with you.</h2>
        <a className="pricing-link" href="#pricing">Compare plans ›</a>
        <div className="plans">
          <Plan name="Starter" items={freePlanItems} price="$0" />
          <Plan name="Plus" items={plusPlanItems} price="$20" plusPlan />
        </div>
      </section>
    </>
  );
}
