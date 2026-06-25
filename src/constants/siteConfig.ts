import type { BusinessHours } from '@/types';

export const SITE_CONFIG = {
  name:         "Toni's Tacos",
  tagline:      'Good tacos. Great vibes.',
  address:      '408 W 8th St, Dallas, TX 75208',
  neighborhood: 'Bishop Arts District',
  phone:        '(469) 555-0174',
  phoneTel:     'tel:+14695550174',
  emailGeneral: 'inquiries@tonistacos.com',
  emailJobs:    'jobs@tonistacos.com',
  mapsUrl:      'https://www.google.com/maps/search/408+W+8th+St+Dallas+TX+75208',
  socials: {
    instagram: { handle: '@tonistacos', url: '#' },
    facebook:  { handle: '/tonistacos',  url: '#' },
    tiktok:    { handle: '@tonistacos', url: '#' },
  },
} as const;

export const HOURS: BusinessHours[] = [
  { days: 'Monday – Thursday', hours: '11:00am – 9:00pm' },
  { days: 'Friday',            hours: '11:00am – 10:00pm' },
  { days: 'Saturday',          hours: '11:00am – 10:00pm' },
  { days: 'Sunday',            hours: '11:00am – 8:00pm'  },
];
