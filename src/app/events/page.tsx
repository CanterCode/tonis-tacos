import type { Metadata } from 'next';
import EventsGrid from '@/components/events/EventsGrid';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { weeklySpecials, liveMusicNights } from '@/data/eventsData';
import { SITE_CONFIG } from '@/constants/siteConfig';

export const metadata: Metadata = {
  title: 'Events & Specials',
  description: 'Daily specials, Taco Tuesday, live music Fridays and Saturdays, and more.',
};

export default function EventsPage() {
  return (
    <div className="pt-20">
      <div className="bg-charcoal text-cream py-16 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">Events & Specials</h1>
        <p className="text-cream/70 text-lg">Something good going on every single day of the week.</p>
      </div>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Weekly Specials */}
            <div>
              <SectionHeader title="Weekly Specials" subtitle="Seven days, seven reasons to come in." align="left" />
              <EventsGrid specials={weeklySpecials} />
            </div>

            {/* Right: Live Music */}
            <div className="lg:sticky lg:top-24">
              <SectionHeader title="Live Music at Toni's" align="left" />
              <p className="text-muted leading-relaxed mb-8">
                Every weekend, Toni&apos;s fills with live music that matches the energy of Bishop Arts — laid-back, soulful, and always something different. We feature emerging local musicians and love showcasing the DFW talent community.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                {liveMusicNights.map(n => (
                  <Card key={n.night}>
                    <div className="text-3xl mb-3">🎵</div>
                    <h3 className="font-heading text-xl font-bold text-charcoal mb-1">{n.night}</h3>
                    <p className="text-secondary font-semibold mb-2">{n.time}</p>
                    <p className="text-muted text-sm">{n.vibe}</p>
                  </Card>
                ))}
              </div>
              <div className="bg-cream rounded-2xl p-6 border border-primary/10">
                <p className="text-sm text-muted leading-relaxed">
                  Follow us at{' '}
                  <a href={SITE_CONFIG.socials.instagram.url} className="text-primary font-semibold hover:underline">
                    {SITE_CONFIG.socials.instagram.handle}
                  </a>{' '}
                  for lineup announcements, set times, and event updates.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
