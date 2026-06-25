'use client';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">Thanks for reaching out!</h3>
        <p className="text-muted">We&apos;ll get back to you within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Name <span className="text-primary">*</span></label>
          <input
            id="name" type="text" required value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email <span className="text-primary">*</span></label>
          <input
            id="email" type="email" required value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">Phone <span className="text-muted text-xs">(optional)</span></label>
        <input
          id="phone" type="tel" value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="(555) 555-5555"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message <span className="text-primary">*</span></label>
        <textarea
          id="message" rows={5} required value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
          placeholder="What's on your mind?"
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full">Send Message</Button>
    </form>
  );
}
