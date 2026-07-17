'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Heading, Badge, Button, Input } from '@/components/ui';
import { Mail, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter an email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Success simulation
    setStatus('success');
    setErrorMessage('');
    setEmail('');
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-[var(--background)]">
      {/* Background visual shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-slate-200/60 dark:border-slate-800/80 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/20 dark:from-slate-950 dark:via-slate-900/40 dark:to-blue-950/10 shadow-xl overflow-hidden"
        >
          {/* Subtle top decoration bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-secondary" />

          <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
            <Badge variant="primary" className="px-4 py-1 text-xs">
              Stay Updated
            </Badge>

            <Heading level={2} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Get Weekly AI Career Insights
            </Heading>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Subscribe to our newsletter for exclusive career roadmaps, job search strategies, resume optimization hacks, and updates on new AI features.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-lg mt-4 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
                    <Mail className="h-5 w-5" />
                  </div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    className={`pl-11 h-12 text-sm sm:text-base border ${
                      status === 'error'
                        ? 'border-[var(--error)] focus-visible:ring-[rgba(239,68,68,0.15)] focus-visible:border-[var(--error)]'
                        : 'border-slate-250 dark:border-slate-800'
                    }`}
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="h-12 px-6 rounded-xl text-sm sm:text-base font-semibold shadow-md bg-[var(--primary)] text-white hover:bg-[rgba(79,70,229,0.9)] transition-all group flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>

              {/* Status Notifications */}
              <AnimatePresence mode="wait">
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 text-sm text-[var(--error)] bg-red-50 dark:bg-red-950/20 px-4 py-2.5 rounded-xl border border-red-100 dark:border-red-950/30 text-left"
                  >
                    <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 text-sm text-[var(--success)] bg-green-50 dark:bg-green-950/20 px-4 py-2.5 rounded-xl border border-green-100 dark:border-green-950/30 text-left"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 shrink-0" />
                    <span>Success! You have been subscribed to our newsletter.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <p className="text-xs text-muted/80">
              No spam. Unsubscribe at any time. We protect your privacy.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
