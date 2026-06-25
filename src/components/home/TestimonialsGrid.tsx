'use client';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import StarRating from '@/components/ui/StarRating';
import SectionHeader from '@/components/ui/SectionHeader';
import { testimonials } from '@/data/testimonialsData';

export default function TestimonialsGrid() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="What People Are Saying" />
        <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-3 pb-4 md:pb-0 snap-x md:snap-none">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="min-w-[280px] md:min-w-0 snap-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full flex flex-col">
                <StarRating />
                <p className="mt-4 text-muted italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-semibold text-charcoal text-sm">— {t.author}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
