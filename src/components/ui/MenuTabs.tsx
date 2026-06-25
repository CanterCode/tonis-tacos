'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { MenuSection, HappyHourItem } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';

type Tab = 'food' | 'drinks' | 'happyhour';

interface MenuTabsProps {
  foodSections: MenuSection[];
  drinkSections: MenuSection[];
  happyHourItems: HappyHourItem[];
}

function priceStr(price: number | string) {
  if (typeof price === 'number') return `$${price % 1 === 0 ? price : price.toFixed(2)}`;
  return price;
}

function MenuItemCard({ item }: { item: MenuSection['items'][0] }) {
  return (
    <div className="flex justify-between items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-sm transition-shadow">
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-charcoal">{item.name}</span>
          {item.badge && <Badge>{item.badge}</Badge>}
        </div>
        {item.description && <p className="text-muted text-sm mt-1 leading-relaxed">{item.description}</p>}
      </div>
      <span className="font-heading text-primary font-bold text-lg flex-shrink-0">{priceStr(item.price)}</span>
    </div>
  );
}

function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <div className="mb-12">
      <SectionHeader title={section.title} subtitle={section.subtitle} align="left" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {section.items.map(item => <MenuItemCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default function MenuTabs({ foodSections, drinkSections, happyHourItems }: MenuTabsProps) {
  const [tab, setTab] = useState<Tab>('food');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'food', label: 'Food' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'happyhour', label: 'Happy Hour' },
  ];

  return (
    <div>
      {/* Tab bar */}
      <div className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm" role="tablist" aria-label="Menu sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
          {tabs.map(t => (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={tab === t.id ? 0 : -1}
              onClick={() => setTab(t.id)}
              className={`py-4 text-sm font-semibold border-b-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                tab === t.id ? 'border-primary text-primary' : 'border-transparent text-muted hover:text-charcoal'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Panels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {tab === 'food' && foodSections.map(s => <MenuSectionBlock key={s.id} section={s} />)}
            {tab === 'drinks' && drinkSections.map(s => <MenuSectionBlock key={s.id} section={s} />)}
            {tab === 'happyhour' && (
              <div>
                {/* Banner */}
                <div className="bg-primary text-white rounded-2xl p-8 mb-12 text-center">
                  <h2 className="font-heading text-3xl font-bold mb-2">Happy Hour</h2>
                  <p className="text-white/90 text-lg font-medium mb-3">Monday – Friday · 3:00pm – 6:00pm</p>
                  <p className="text-white/75 italic">&ldquo;Come unwind. Happy hour is our way of saying thanks for making Bishop Arts home.&rdquo;</p>
                </div>

                {/* Drinks */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">🍹</span>
                    <h3 className="font-heading text-2xl font-bold text-charcoal">Drinks</h3>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {happyHourItems.filter(i => i.category === 'drinks').map((item, i) => (
                      <div key={i} className="relative bg-gradient-to-br from-primary/5 to-secondary/10 border border-secondary/20 rounded-2xl p-6 flex items-center justify-between gap-4 hover:shadow-md transition-shadow">
                        <p className="font-semibold text-charcoal text-base">{item.name}</p>
                        <div className="flex flex-col items-end flex-shrink-0">
                          <span className="text-muted text-xs line-through">{item.regular}</span>
                          <span className="font-heading text-2xl font-bold text-secondary leading-tight">{item.happyHour}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Food */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">🌮</span>
                    <h3 className="font-heading text-2xl font-bold text-charcoal">Food</h3>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {happyHourItems.filter(i => i.category === 'food').map((item, i) => (
                      <div key={i} className="relative bg-gradient-to-br from-cream to-accent/10 border border-accent/20 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                        <p className="font-semibold text-charcoal text-base">{item.name}</p>
                        <div className="flex items-end gap-3 mt-auto">
                          <span className="text-muted text-xs line-through">{item.regular}</span>
                          <span className="font-heading text-2xl font-bold text-primary leading-tight">{item.happyHour}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
