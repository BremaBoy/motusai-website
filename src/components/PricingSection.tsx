import { Plan } from './Plan';

const plans = [
  {
    name: 'Free',
    description: 'For trying Motus on your own Mac.',
    price: '$0',
    creditNote: '25 tasks each month · No credit card required',
    items: ['Basic computer control', 'Voice interaction', 'Filesystem access', 'Basic web tasks', 'Desktop mascot', 'Basic screen understanding'],
  },
  {
    name: 'Pro',
    description: 'For people who use Motus every day.',
    price: '$12',
    creditNote: '500 task credits each month',
    badge: 'Most popular',
    highlight: true,
    items: ['Full computer control', 'Dynamic Voice Notch', 'Filesystem intelligence', 'Web research', 'Coding assistance', 'Multi-step tasks', 'Task verification', 'Priority execution'],
  },
  {
    name: 'Power',
    description: 'For heavier, more complex workloads.',
    price: '$25',
    creditNote: '1,500 task credits each month',
    items: ['Everything in Pro', 'Longer autonomous tasks*', 'Higher usage limits', 'Larger coding tasks', 'More complex research', 'Priority processing', 'Advanced automation*', 'More scheduled jobs*'],
  },
];

const pricingStyles = `
  .pricing {
    padding: 132px 20px;
    text-align: center;
    background: #eeece7;
  }

  .pricing h2 {
    margin: 0;
    font-size: clamp(44px, 5.2vw, 68px);
    font-weight: 400;
    line-height: 1.04;
    letter-spacing: -.055em;
  }

  .pricing-intro { max-width: 590px; margin: 24px auto 58px; color: var(--muted); font-size: 15px; line-height: 1.6; }

  .plans {
    width: min(1180px, 100%);
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    text-align: left;
  }

  @media (max-width: 760px) {
    .pricing { padding: 96px 16px; }
    .plans { grid-template-columns: 1fr; max-width: 560px; }
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
        <span className="section-label">Simple, bounded usage</span>
        <h2>Start small. Give Motus more when you need it.</h2>
        <p className="pricing-intro">Credits keep usage transparent and sustainable. Simple actions use less; longer research and coding work use more.</p>
        <div className="plans">
          {plans.map((plan) => <Plan {...plan} key={plan.name} />)}
        </div>
        <p id="limits" style={{ color: '#77737b', fontSize: 11, marginTop: 28 }}>* Roadmap capability. Availability and limits may change before launch. Extra credit packs will be available when needed.</p>
      </section>
    </>
  );
}
