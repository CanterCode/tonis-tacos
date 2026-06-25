'use client';
import { useState } from 'react';
import { Camera } from 'lucide-react';
import type { GalleryImage } from '@/types';
import Lightbox from '@/components/modals/Lightbox';

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <Camera className="w-16 h-16 text-muted mb-4" />
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-2">Photos coming soon!</h2>
        <p className="text-muted">
          Follow us on Instagram{' '}
          <a href="#" className="text-primary font-medium hover:underline">@tonistacos</a>
          {' '}to see the latest.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 px-4">
        {images.map((img, i) => (
          <button
            key={img.filename}
            onClick={() => setLightboxIndex(i)}
            className="w-full break-inside-avoid block overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`View photo: ${img.alt}`}
          >
            <img
              src={`/gallery/${encodeURIComponent(img.filename)}`}
              alt={img.alt}
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
        />
      )}
    </>
  );
}
