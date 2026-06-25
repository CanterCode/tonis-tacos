'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
  secondary: 'border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white focus-visible:ring-secondary',
  ghost:     'text-muted hover:text-secondary underline-offset-4 hover:underline focus-visible:ring-secondary',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  external,
  children,
  className = '',
  ariaLabel,
  type = 'button',
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={base} aria-label={ariaLabel}>{children}</a>;
    }
    return <Link href={href} className={base} aria-label={ariaLabel}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={base} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
