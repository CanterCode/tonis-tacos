'use client';
import type { DailySpecial } from '@/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const DAY_INDEX: Record<string, number> = {
  Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6,
};

export default function EventsGrid({ specials }: { specials: DailySpecial[] }) {
  const todayIndex = new Date().getDay();

  return (
    <div className="flex flex-col gap-4">
      {specials.map(s => {
        const isToday = DAY_INDEX[s.day] === todayIndex;
        return (
          <div key={s.day} className={`relative ${isToday ? 'ring-2 ring-primary rounded-2xl' : ''}`}>
            {isToday && (
              <div className="absolute -top-3 right-4 z-10">
                <Badge variant="today">Today</Badge>
              </div>
            )}
            <Card hover={false} className={`flex items-start gap-5 ${isToday ? 'bg-primary/5' : ''}`}>
              <div className="text-4xl flex-shrink-0 mt-1">{s.emoji}</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-0.5">{s.day}</p>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-1">{s.specialName}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
              {s.time && (
                <p className="text-xs text-secondary font-semibold flex-shrink-0 mt-1 text-right">{s.time}</p>
              )}
            </Card>
          </div>
        );
      })}
    </div>
  );
}
