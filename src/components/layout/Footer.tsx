import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, AtSign } from 'lucide-react';
import { SITE_CONFIG, HOURS } from '@/constants/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Image src="/logo.svg" alt="Toni's Tacos" width={130} height={32} className="mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed mb-4">{SITE_CONFIG.tagline}</p>
            <p className="text-xs text-cream/50">Woman-owned · Bishop Arts District · Est. 2019</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-widest mb-4">Explore</h3>
            <ul className="flex flex-col gap-2">
              {[['/', 'Home'], ['/menu', 'Menu'], ['/events', 'Events & Specials'], ['/gallery', 'Gallery'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-secondary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-widest mb-4">Hours</h3>
            <ul className="flex flex-col gap-2">
              {HOURS.map(({ days, hours }) => (
                <li key={days} className="text-sm">
                  <span className="text-cream/60">{days}</span><br />
                  <span className="text-cream">{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-widest mb-4">Find Us</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 text-sm">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a href={SITE_CONFIG.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">{SITE_CONFIG.address}</a>
              </li>
              <li className="flex gap-2 text-sm">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a href={SITE_CONFIG.phoneTel} className="hover:text-secondary transition-colors">{SITE_CONFIG.phone}</a>
              </li>
              <li className="flex gap-2 text-sm">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a href={`mailto:${SITE_CONFIG.emailGeneral}`} className="hover:text-secondary transition-colors">{SITE_CONFIG.emailGeneral}</a>
              </li>
              <li className="flex gap-2 text-sm">
                <AtSign className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a href={SITE_CONFIG.socials.instagram.url} className="hover:text-secondary transition-colors">{SITE_CONFIG.socials.instagram.handle}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Toni&apos;s Tacos. All rights reserved.</p>
          <p>Bishop Arts District · Dallas, TX</p>
        </div>
      </div>
    </footer>
  );
}
