'use client';

import { Card } from '@/components/ui';

export function SkeletonCard() {
  return (
    <Card className="h-full flex flex-col justify-between p-5 border border-slate-100 dark:border-slate-800/80 shadow-sm animate-pulse bg-white dark:bg-slate-950/20">
      <div className="space-y-4">
        {/* Top visual block representing the Image */}
        <div className="w-full h-36 rounded-xl bg-slate-100 dark:bg-slate-800" />

        {/* Category Badge & Bookmark row */}
        <div className="flex items-center justify-between">
          <div className="w-20 h-5 rounded-full bg-slate-100 dark:bg-slate-800" />
          <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800" />
        </div>

        {/* Title */}
        <div className="w-3/4 h-5 rounded-lg bg-slate-100 dark:bg-slate-800" />

        {/* Description */}
        <div className="space-y-2">
          <div className="w-full h-3.5 rounded bg-slate-100 dark:bg-slate-800" />
          <div className="w-5/6 h-3.5 rounded bg-slate-100 dark:bg-slate-800" />
        </div>

        {/* Stats Grid (Salary, Rating, etc.) */}
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100/50 dark:border-slate-800/40">
          <div className="space-y-1.5">
            <div className="w-10 h-3 rounded bg-slate-100 dark:bg-slate-800" />
            <div className="w-16 h-4 rounded bg-slate-100 dark:bg-slate-800" />
          </div>
          <div className="space-y-1.5">
            <div className="w-10 h-3 rounded bg-slate-100 dark:bg-slate-800" />
            <div className="w-12 h-4 rounded bg-slate-100 dark:bg-slate-800" />
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          <div className="w-12 h-5 rounded-md bg-slate-100 dark:bg-slate-800" />
          <div className="w-14 h-5 rounded-md bg-slate-100 dark:bg-slate-800" />
          <div className="w-10 h-5 rounded-md bg-slate-100 dark:bg-slate-800" />
        </div>
      </div>

      {/* Button */}
      <div className="mt-5 pt-4 border-t border-slate-100/50 dark:border-slate-800/40">
        <div className="w-full h-10 rounded-xl bg-slate-100 dark:bg-slate-800" />
      </div>
    </Card>
  );
}

interface SkeletonGridProps {
  count?: number;
}

export function SkeletonGrid({ count = 8 }: SkeletonGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(count)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
