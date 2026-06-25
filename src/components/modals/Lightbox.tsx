'use client';
import { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import type { GalleryImage } from '@/types';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, true);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const image = images[currentIndex];
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.9)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div ref={ref} className="relative max-w-4xl w-full mx-4">
        <button onClick={onClose} className="absolute -top-12 right-0 text-white p-2 hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded" aria-label="Close lightbox">
          <X className="w-6 h-6" />
        </button>
        <button onClick={onPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white p-2 hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded" aria-label="Previous image">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <img
          src={`/gallery/${image.filename}`}
          alt={image.alt}
          className="w-full rounded-xl max-h-[80vh] object-contain"
        />
        {image.caption && <p className="text-white text-center mt-4 text-sm">{image.caption}</p>}
        <button onClick={onNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white p-2 hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded" aria-label="Next image">
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
