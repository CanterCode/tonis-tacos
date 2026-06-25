export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string;
  badge?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export interface DailySpecial {
  day: string;
  specialName: string;
  description: string;
  time?: string;
  emoji?: string;
}

export interface LiveMusicNight {
  night: string;
  time: string;
  vibe: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export interface GalleryImage {
  filename: string;
  alt: string;
  caption?: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface HappyHourItem {
  name: string;
  regular: string;
  happyHour: string;
}
