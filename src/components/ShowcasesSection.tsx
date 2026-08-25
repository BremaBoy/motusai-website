import { showcases } from '../data/content';
import { Showcase } from './Showcase';

export function ShowcasesSection() {
  return (
    <div id="products">
      {showcases.map((item) => <Showcase key={item.title} {...item} />)}
    </div>
  );
}
