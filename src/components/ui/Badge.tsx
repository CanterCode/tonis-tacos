interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'today' | 'gf';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-secondary/10 text-secondary border border-secondary/20',
    today: 'bg-primary text-white',
    gf: 'bg-green-100 text-green-700 border border-green-200',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
