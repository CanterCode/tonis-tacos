import type { Metadata } from 'next';
import { MapPin, Phone, Mail, AtSign } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/contact/ContactForm';
import Button from '@/components/ui/Button';
import { SITE_CONFIG, HOURS } from '@/constants/siteConfig';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Find us in Bishop Arts, Dallas. Hours, directions, and contact info for Toni's Tacos.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-charcoal text-cream py-16 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">Get in Touch</h1>
        <p className="text-cream/70 text-lg">We&apos;d love to hear from you.</p>
      </div>

      {/* Contact Details + Hours */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeader title="Find Us" align="left" />
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-charcoal">{SITE_CONFIG.address}</p>
                    <Button href={SITE_CONFIG.mapsUrl} external variant="ghost" size="sm" className="pl-0 mt-1">Get Directions â†’</Button>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={SITE_CONFIG.phoneTel} className="text-charcoal hover:text-primary transition-colors">{SITE_CONFIG.phone}</a>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.emailGeneral}`} className="text-charcoal hover:text-primary transition-colors">{SITE_CONFIG.emailGeneral}</a>
                </li>
                <li className="flex gap-3 items-center">
                  <AtSign className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={SITE_CONFIG.socials.instagram.url} className="text-charcoal hover:text-primary transition-colors">{SITE_CONFIG.socials.instagram.handle}</a>
                </li>
              </ul>
            </div>
            <div>
              <SectionHeader title="Hours" align="left" />
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {HOURS.map(({ days, hours }) => (
                    <tr key={days}>
                      <td className="py-3 text-muted">{days}</td>
                      <td className="py-3 text-right font-medium text-charcoal">{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-light-gray">
        <div className="max-w-2xl mx-auto">
          <SectionHeader title=”Say Hello” subtitle=”Questions, feedback, catering inquiries — we're all ears.” />
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-primary rounded-r-2xl p-8 bg-cream">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">Join the Toni&apos;s Tacos Family</h2>
            <p className="text-muted leading-relaxed mb-4">
              We&apos;re always looking for passionate, hardworking people who love great food and their community. Whether you&apos;re an experienced cook, a front-of-house pro, or just ready to learn — we&apos;d love to hear from you.
            </p>
            <p className="text-charcoal mb-2">
              Send your resume and a brief intro to:{' '}
              <a href={`mailto:${SITE_CONFIG.emailJobs}`} className="text-primary font-semibold hover:underline">{SITE_CONFIG.emailJobs}</a>
            </p>
            <p className="text-muted text-sm">Current openings are posted on our Instagram. We hire based on attitude first, experience second.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
