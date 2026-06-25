import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { galleryImages } from '@/data/galleryImages';

export const metadata: Metadata = {
  title: 'Gallery',
  description: "A look inside Toni's Tacos — the food, the space, the vibes.",
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <div className="bg-charcoal text-cream py-16 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">Gallery</h1>
        <p className="text-cream/70 text-lg">The food. The space. The vibes.</p>
      </div>
      <section className="py-16 max-w-7xl mx-auto">
        <GalleryGrid images={galleryImages} />
      </section>
    </div>
  );
}
