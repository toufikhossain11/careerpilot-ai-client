'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, Button, Heading } from '@/components/ui';
import { ArrowRight, Compass } from 'lucide-react';

export function CareerCTA() {
  return (
    <section className="py-12">
      <Card className="relative p-8 sm:p-12 md:p-16 border border-slate-800 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white rounded-[2rem] shadow-xl overflow-hidden text-center">
        {/* Background Visual glow shapes */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-6 flex flex-col items-center">
          <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Ready to Start This Career?
          </Heading>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Begin following the curated roadmap, benchmark your skills gaps, and jumpstart your career training with structured modular paths.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-xl font-bold px-6 py-4 bg-secondary text-white hover:bg-secondary/90 shadow-md flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer w-full sm:w-auto"
              onClick={() => {
                const el = document.getElementById('learning-roadmap');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Learning
            </Button>
            <Link href="/explore" className="w-full sm:w-auto flex">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl font-bold px-6 py-4 border-white/20 bg-white/5 text-white hover:bg-white/10 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer w-full sm:w-auto"
              >
                <Compass className="w-5 h-5" />
                Explore More Careers
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
}
