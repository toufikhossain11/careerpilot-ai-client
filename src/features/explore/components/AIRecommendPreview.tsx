'use client';

import { Card, Button, Badge } from '@/components/ui';
import { Sparkles, Brain, ArrowRight } from 'lucide-react';

export function AIRecommendPreview() {
  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <Card className="relative p-8 sm:p-10 border border-indigo-100 dark:border-indigo-950 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900/10 dark:to-indigo-950/10 shadow-md rounded-[2rem] overflow-hidden">
        {/* Subtle decorative sparkles backgrounds */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-2xl text-center md:text-left flex flex-col items-center md:items-start">
            <Badge variant="primary" className="px-3.5 py-1 text-xs font-bold bg-primary/10 border border-primary/25 text-primary flex items-center gap-1.5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              AI Recommendation
            </Badge>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Unlock Personalized AI Mentor Analysis
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-muted">
              Based on your specific history, learning pace, and existing skills, our recommendation engine can map out exactly where your gaps lie. Get a customized evaluation of how this role fits your career trajectory, along with targeted resources to master missing skill milestones.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto flex justify-center">
            <Button
              variant="primary"
              className="rounded-xl font-bold px-6 py-4 shadow-md bg-[var(--primary)] text-white hover:bg-[rgba(79,70,229,0.9)] transition-all flex items-center gap-2 text-sm cursor-not-allowed group w-full md:w-auto justify-center"
              disabled
            >
              <Brain className="w-4 h-4 shrink-0" />
              Get Personalized Recommendation
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
