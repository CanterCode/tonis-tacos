import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import TestimonialsGrid from '@/components/home/TestimonialsGrid';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { weeklySpecials } from '@/data/eventsData';
import { SITE_CONFIG, HOURS } from '@/constants/siteConfig';

export const metadata: Metadata = {
  title: "Toni's Tacos — Fresh Tacos in Bishop Arts, Dallas",
  description: 'Fresh, bold tacos in the heart of Bishop Arts, Dallas. Woman-owned and made from scratch daily.',
};

const FEATURED_SPECIALS = ['Tuesday', 'Friday', 'Saturday'];

export default function HomePage() {
  const featured = weeklySpecials.filter(s => FEATURED_SPECIALS.includes(s.day));

  return (
    <>
      <HeroSection />

      {/* Why Toni's */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Why Toni's?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '🌮', title: 'Made Fresh Daily', body: 'From hand-pressed tortillas to house-made salsas, everything on your plate starts from scratch.' },
              { emoji: '🏡', title: 'Local at Heart', body: 'Born and raised in Bishop Arts. We know our neighbors by name.' },
              { emoji: '👩‍🍳', title: 'Woman-Owned', body: 'Toni is in the kitchen most days, personally overseeing every recipe.' },
            ].map(({ emoji, title, body }) => (
              <Card key={title} className="text-center">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specials Preview */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Something Special Every Day" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featured.map(s => (
              <Card key={s.day}>
                <div className="text-3xl mb-3">{s.emoji}</div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">{s.day}</p>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-2">{s.specialName}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.description}</p>
                {s.time && <p className="mt-3 text-xs text-secondary font-medium">{s.time}</p>}
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/events" className="text-primary font-semibold hover:underline">See All Events →</Link>
          </div>
        </div>
      </section>

      <TestimonialsGrid />

      {/* Location CTA */}
      <section className="py-20 px-4 bg-primary-dark">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Find Us in Bishop Arts" light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-cream">
              <p className="text-lg mb-2">{SITE_CONFIG.address}</p>
              <p className="text-cream/70 text-sm mb-6">{SITE_CONFIG.neighborhood}, Dallas, TX</p>
              <ul className="mb-8 space-y-1">
                {HOURS.map(({ days, hours }) => (
                  <li key={days} className="text-sm">
                    <span className="text-cream/60">{days}:</span> <span className="text-cream">{hours}</span>
                  </li>
                ))}
              </ul>
              <Button href={SITE_CONFIG.mapsUrl} external variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-primary-dark">
                Get Directions
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white/10 rounded-3xl p-12 flex flex-col items-center gap-4 border border-white/20">
                <MapPin className="w-16 h-16 text-secondary" />
                <p className="text-cream font-heading text-xl font-bold text-center">408 W 8th St</p>
                <p className="text-cream/70 text-sm text-center">Dallas, TX 75208</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
