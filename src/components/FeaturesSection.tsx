import { features } from '../data/content';
import { FeatureRow } from './FeatureRow';

const featuresStyles = `
  .features { padding: 38px 20px 92px; background: #f7f7f7; }

  .features > h2 {
    margin: 0 0 40px;
    text-align: center;
    font-size: 31px;
    font-weight: 400;
    letter-spacing: -.045em;
  }

  @media (max-width: 460px) {
    .features > h2 { font-size: 27px; }
  }
`;

export function FeaturesSection() {
  return (
    <>
      <style href="features-styles" precedence="default">{featuresStyles}</style>
      <section className="features" id="features">
        <h2>Explore more features in ChatGPT</h2>
        {features.map((item) => <FeatureRow key={item.title} {...item} />)}
      </section>
    </>
  );
}
