'use client';
import { useEffect, useRef } from 'react';
import { X, Phone } from 'lucide-react';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { SITE_CONFIG } from '@/constants/siteConfig';
import Button from '@/components/ui/Button';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="order-modal-title"
    >
      <div ref={ref} className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-muted hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <h2 id="order-modal-title" className="font-heading text-2xl font-bold text-charcoal">Ready to order?</h2>
        </div>
        <p className="text-muted mb-2">We&apos;d love to hear from you.</p>
        <p className="text-muted mb-6">To place a takeout order, please give us a call:</p>
        <p className="font-heading text-2xl font-bold text-primary mb-8">{SITE_CONFIG.phone}</p>
        <div className="flex gap-3">
          <Button href={SITE_CONFIG.phoneTel} variant="primary" className="flex-1">Call Now</Button>
          <Button onClick={onClose} variant="secondary" className="flex-1">Close</Button>
        </div>
      </div>
    </div>
  );
}
