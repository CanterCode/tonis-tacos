interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, align = 'center', light = false }: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const titleColor = light ? 'text-cream' : 'text-charcoal';
  const subtitleColor = light ? 'text-cream/80' : 'text-muted';
  const accentColor = light ? 'bg-secondary' : 'bg-primary';
  const accentAlign = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`${textAlign} mb-10`}>
      <div className={`w-12 h-1 ${accentColor} rounded-full mb-4 ${accentAlign}`} />
      <h2 className={`font-heading text-3xl md:text-4xl font-bold ${titleColor}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-lg ${subtitleColor} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  );
}
