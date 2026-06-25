'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import OrderModal from '@/components/modals/OrderModal';

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #1A1A1A 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold text-cream mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Tacos Made With Love.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-cream/80 mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Fresh, bold flavors in the heart of Bishop Arts.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button href="/menu" variant="secondary" size="lg" className="border-cream text-cream hover:bg-cream hover:text-primary">View Menu</Button>
            <Button variant="primary" size="lg" onClick={() => setModalOpen(true)}>Order Now</Button>
          </motion.div>
        </div>
      </section>
      <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
