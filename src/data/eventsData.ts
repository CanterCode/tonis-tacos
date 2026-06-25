import type { DailySpecial, LiveMusicNight } from '@/types';

export const weeklySpecials: DailySpecial[] = [
  { day: 'Monday', specialName: 'Margarita Monday', description: '$2 off all margaritas, all day. Start your week right.', time: 'All Day', emoji: '🍹' },
  { day: 'Tuesday', specialName: 'Taco Tuesday', description: '$2 street tacos all day — Classic Street, Veggie, or Spicy Chicken. No limit.', time: 'All Day', emoji: '🌮' },
  { day: 'Wednesday', specialName: 'Queso Wednesday', description: 'Half off Queso Fundido + complimentary chips. Midweek deserves melted cheese.', time: 'All Day', emoji: '🧀' },
  { day: 'Thursday', specialName: 'Thirsty Thursday', description: '$1 off all draft beers and bottled/canned beer. All. Day.', time: 'All Day', emoji: '🍺' },
  { day: 'Friday', specialName: 'Fish Taco Friday', description: 'Rotating featured fish taco — ask your server. Plus live music tonight.', time: '+ Live Music 7–9pm', emoji: '🎸' },
  { day: 'Saturday', specialName: 'Live Music Saturday', description: 'Join us for live music this afternoon — Latin rhythms, Tejano, and occasionally jazz. The perfect way to spend a Saturday.', time: '12:00pm – 3:00pm', emoji: '🎵' },
  { day: 'Sunday', specialName: 'Familia Sunday', description: 'Kids eat free (12 & under) with any adult entrée. Because family comes first.', time: 'All Day', emoji: '👨‍👩‍👧' },
];

export const liveMusicNights: LiveMusicNight[] = [
  { night: 'Friday Nights', time: '7:00pm – 9:00pm', vibe: 'Acoustic, indie, folk — laid-back evening vibes' },
  { night: 'Saturday Afternoons', time: '12:00pm – 3:00pm', vibe: 'Latin rhythms, Tejano, occasionally jazz' },
];
