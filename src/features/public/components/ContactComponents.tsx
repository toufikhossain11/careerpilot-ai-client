'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Card, Badge, Button, Heading, Input } from '@/components/ui';
import { Mail, Phone, MapPin, Clock, Send, AlertCircle, CheckCircle2, ChevronDown, Compass } from 'lucide-react';
import Link from 'next/link';

// 1. Contact Hero
export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900/10 dark:to-slate-950/20 py-12 md:py-16 border-b border-slate-100 dark:border-slate-800/40">
      <Container className="relative z-10 space-y-4">
        {/* Breadcrumb */}
        <nav className="text-xs font-semibold uppercase tracking-[0.16em] text-muted flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-foreground">Contact</span>
        </nav>
        <div className="max-w-2xl space-y-3">
          <Badge variant="primary" className="px-4 py-1 text-xs">Get In Touch</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
            Contact Our Team
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Have questions about features, pricing, or custom paths? Reach out and we will respond in under 24 hours.
          </p>
        </div>
      </Container>
    </section>
  );
}

// 2. Contact Cards
export function ContactCards() {
  const cards = [
    { icon: Mail, label: 'Email Support', val: 'support@careerpilot.ai', desc: 'Direct message client queries.' },
    { icon: Phone, label: 'Phone Line', val: '+1 (555) 019-2834', desc: 'Mon-Fri from 9am to 6pm EST.' },
    { icon: MapPin, label: 'Office HQ', val: '100 Pine St, San Francisco', desc: 'CA 94111, United States.' },
    { icon: Clock, label: 'Working Hours', val: '9:00 AM - 6:00 PM EST', desc: 'Online chat response active.' },
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-950/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <Card key={i} className="p-6 border border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 rounded-2xl">
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 text-primary w-fit shadow-sm">
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted font-semibold uppercase tracking-wider">{c.label}</span>
                <h4 className="font-bold text-foreground text-sm sm:text-base truncate">{c.val}</h4>
                <p className="text-xs text-muted">{c.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

// 3. Contact Form
export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error');
      setErrorMsg('Please fill in all the required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setErrorMsg('');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Form Body (7 columns) */}
        <div className="lg:col-span-7 space-y-6">
          <Heading level={3} className="text-xl sm:text-2xl font-bold text-foreground">
            Send Us a Message
          </Heading>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Your Name</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-11 rounded-xl"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Email Address</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-11 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted uppercase tracking-wider">Subject</label>
              <Input
                type="text"
                placeholder="How can we help you?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="h-11 rounded-xl"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted uppercase tracking-wider">Message</label>
              <textarea
                placeholder="Describe your issue or query here..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-[1rem] p-4 text-base outline-none transition duration-200 ease-out placeholder:text-[var(--muted)] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-foreground focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10"
              />
            </div>

            <AnimatePresence mode="wait">
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2 text-sm text-[var(--error)] bg-red-50 dark:bg-red-950/20 px-4 py-2.5 rounded-xl border border-red-100 dark:border-red-950/30"
                >
                  <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2 text-sm text-[var(--success)] bg-green-50 dark:bg-green-950/20 px-4 py-2.5 rounded-xl border border-green-100 dark:border-green-950/30"
                >
                  <CheckCircle2 className="w-4.5 h-4.5 shrink-0" />
                  <span>Message sent successfully! We will get back to you shortly.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              variant="primary"
              className="h-11 px-6 rounded-xl font-bold bg-[var(--primary)] text-white hover:bg-[rgba(79,70,229,0.9)] flex items-center justify-center gap-2 shadow-sm text-sm"
            >
              <Send className="w-4 h-4 shrink-0" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Sidebar Info (5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/10 shadow-sm space-y-4 rounded-2xl">
            <h4 className="font-bold text-foreground text-sm sm:text-base">Support Channels</h4>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              We monitor queries through active logging routes. If you are a premium student, please initiate chat queries directly in the client dashboard.
            </p>
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-650 dark:text-slate-350">
              <p>• Dedicated Discord Channel invitation within portal</p>
              <p>• Rapid tickets turnaround inside client workspace</p>
              <p>• Direct technical scheduling slots with AI advisors</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// 4. Office Location
export function OfficeLocation() {
  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <div className="space-y-6">
        <div className="space-y-2">
          <Heading level={3} className="text-xl sm:text-2xl font-bold text-foreground">
            Office Location
          </Heading>
          <p className="text-sm text-muted max-w-xl">
            Visit our physical office headquarters in California. Meetings are available by appointment only.
          </p>
        </div>

        {/* Map Illustration Panel */}
        <div className="w-full h-80 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 bg-gradient-to-br from-slate-100 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/10 shadow-inner relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="flex flex-col items-center gap-3 relative z-10 text-slate-400 dark:text-slate-700">
            <MapPin className="w-12 h-12 text-primary stroke-[1.5] animate-bounce" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted">San Francisco, California HQ Map</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. FAQ Preview
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-slate-100 dark:border-slate-800/60 last:border-none">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 text-left font-semibold text-foreground text-sm sm:text-base group hover:text-primary transition-colors focus-visible:outline-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-slate-100/50 dark:bg-slate-800/40 text-muted group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary bg-primary/10' : ''}`}>
          <ChevronDown className="h-4.5 w-4.5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-xs sm:text-sm leading-6 text-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const previewFaqs = [
    {
      question: 'How does CareerPilot AI work?',
      answer: 'CareerPilot AI uses advanced Gemini AI models to analyze your unique professional profile, resume, and aspirations. Based on this analysis, it generates tailored career recommendations, calculates your skill gaps, designs custom learning roadmaps, and conducts interactive mock interview preparation.',
    },
    {
      question: 'Is Resume Analysis free?',
      answer: 'Yes! Every new user gets 3 free resume analyses per month. This includes a complete ATS score check, keyword suggestions, formatting critique, and section-by-section improvements. Premium plans offer unlimited scans and direct resume rebuilding.',
    },
    {
      question: 'Which AI model powers the platform?',
      answer: 'CareerPilot AI is powered by the latest Gemini 2.5 Flash and Pro models, which offer state-of-the-art context window capabilities, fast generation speeds, and highly accurate structured JSON reasoning.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Security is our top priority. We do not store your raw resume files or personal contact details. All data is processed using encrypted transit protocols and only shared with the Gemini API to perform your analysis.',
    },
  ];

  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Header (4 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <Badge variant="primary" className="px-3.5 py-1 text-xs">Help Desk</Badge>
          <Heading level={3} className="text-xl sm:text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </Heading>
          <p className="text-sm text-muted leading-relaxed">
            Need help? Here are the most common questions from our users. You can explore our complete FAQ lists.
          </p>
          <div className="pt-2">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all">
              Go to Homepage FAQs
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* List (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800/60 p-6 sm:p-8 rounded-[2rem] shadow-sm">
          <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {previewFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
