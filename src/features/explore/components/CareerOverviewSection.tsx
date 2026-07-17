'use client';

import { motion } from 'framer-motion';
import { Card, Heading } from '@/components/ui';
import { CheckCircle2, ClipboardList, Zap, ArrowRight } from 'lucide-react';
import { type CareerDetails } from '../data/careerDetails';

interface CareerOverviewSectionProps {
  career: CareerDetails;
}

export function CareerOverviewSection({ career }: CareerOverviewSectionProps) {
  return (
    <section className="py-12 bg-white dark:bg-slate-950/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Full Description & Why Choose (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Detailed Paragraph */}
          <div className="space-y-4">
            <Heading level={3} className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Overview
            </Heading>
            <p className="text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-350">
              {career.fullDescription}
            </p>
          </div>

          {/* Why Choose list */}
          <div className="space-y-4">
            <Heading level={4} className="text-lg font-bold text-foreground flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent shrink-0" />
              Why Choose This Career Path?
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {career.whyChoose.map((point, index) => (
                <Card key={index} className="p-4 border border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/10 shadow-sm flex items-start gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {point}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Responsibilities & Tasks (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-950/20 shadow-sm space-y-6">
            {/* Responsibilities */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                <ClipboardList className="w-5 h-5 text-primary shrink-0" />
                Key Responsibilities
              </h3>
              <ul className="space-y-3">
                {career.responsibilities.map((resp, i) => (
                  <li key={i} className="flex gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Daily Tasks */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                <ArrowRight className="w-5 h-5 text-secondary shrink-0" />
                A Typical Day Includes
              </h3>
              <ul className="space-y-3">
                {career.dailyTasks.map((task, i) => (
                  <li key={i} className="flex gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                    <span className="text-secondary font-bold mt-0.5">→</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
