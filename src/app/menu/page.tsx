import type { Metadata } from 'next';
import MenuTabs from '@/components/ui/MenuTabs';
import { foodSections, drinkSections, happyHourItems } from '@/data/menuData';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Tacos, taco bowls, apps, cocktails, local craft beer, and happy hour specials.',
};

export default function MenuPage() {
  return (
    <div className="pt-20">
      <div className="bg-charcoal text-cream py-16 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">Our Menu</h1>
        <p className="text-cream/70 text-lg">Made fresh daily. Every tortilla, every salsa, every guac.</p>
      </div>
      <MenuTabs foodSections={foodSections} drinkSections={drinkSections} happyHourItems={happyHourItems} />
    </div>
  );
}
