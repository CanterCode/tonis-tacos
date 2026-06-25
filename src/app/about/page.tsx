import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'About',
  description: "Meet Toni Reyes — the story behind Toni's Tacos and Bishop Arts' favorite taco spot.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero / Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/gallery/Gemini_Generated_Image_5psx6m5psx6m5psx.png"
                alt="Toni Reyes, Founder of Toni's Tacos"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeader title="Meet Toni." align="left" />
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  Antonia &ldquo;Toni&rdquo; Reyes grew up in her grandmother&apos;s kitchen in San Antonio, where Sunday mornings meant hand-pressed tortillas and slow-cooked meats that filled the house with something close to magic. Food wasn&apos;t a hobby in the Reyes household — it was a language. A way of saying <em>I love you</em> and <em>you belong here</em> without saying a word.
                </p>
                <p>
                  After earning a culinary degree and spending several years cooking in restaurants across Texas, Toni took a leap in 2015 and launched a food truck out of deep East Dallas. The truck — painted red and orange, naturally — became a neighborhood fixture almost immediately. People lined up not just for the tacos, but for the experience: the music she&apos;d play through a little Bluetooth speaker, the way she remembered your order, the genuine joy she had behind the service window.
                </p>
                <p>
                  Four years later, in 2019, Toni signed the lease on 408 W 8th Street in the Bishop Arts District and opened the doors to a brick-and-mortar home. The neighborhood embraced her immediately, and Toni has returned that love ever since — sourcing from local farms and DFW breweries, hosting emerging local musicians every weekend, and keeping her prices honest so the whole community can pull up a chair.
                </p>
                <p>
                  Toni is in the kitchen most days. Her philosophy hasn&apos;t changed since that food truck: everything made fresh, nothing from a can, and always enough salsa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-primary-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: 'Est. 2019', desc: 'Serving Bishop Arts for 6+ years' },
              { stat: '100% Woman-Owned', desc: 'Toni runs the kitchen and the business' },
              { stat: 'Made Fresh Daily', desc: 'Every tortilla, salsa, and guac from scratch' },
              { stat: 'Local First', desc: 'DFW craft beers, local farm sourcing' },
            ].map(({ stat, desc }) => (
              <div key={stat} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="font-heading text-xl font-bold text-cream mb-2">{stat}</p>
                <p className="text-cream/60 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-8" />
          <blockquote className="font-heading text-2xl md:text-3xl italic text-charcoal leading-relaxed">
            &ldquo;At Toni&apos;s, we believe tacos are better when shared. Whether you&apos;re a regular or it&apos;s your first time, you&apos;re part of the family now.&rdquo;
          </blockquote>
          <p className="mt-6 text-muted font-medium">— Toni Reyes</p>
        </div>
      </section>
    </div>
  );
}
