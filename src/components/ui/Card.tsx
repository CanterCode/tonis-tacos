import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 ${hover ? 'transition-transform duration-200 hover:-translate-y-1 hover:shadow-md' : ''} ${className}`}>
      {children}
    </div>
  );
}
