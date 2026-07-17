'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { Search, Compass, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800/80 rounded-[2rem] shadow-sm max-w-xl mx-auto my-8"
    >
      {/* Visual Illustration Placeholder */}
      <div className="relative mb-6 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 rounded-full border-2 border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center"
        >
          <Compass className="w-8 h-8 text-slate-300" />
        </motion.div>
        <motion.div
          animate={{ x: [0, 5, -5, 0], y: [0, -5, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-1 -right-1 bg-primary/10 p-2.5 rounded-xl text-primary shadow-sm border border-primary/15"
        >
          <Search className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Texts */}
      <h3 className="text-xl font-bold text-foreground mb-2">No Career Found</h3>
      <p className="text-sm sm:text-base text-muted leading-relaxed max-w-md mb-6">
        We couldn&apos;t find any career paths matching your current filter criteria. Try changing your filters or search keywords.
      </p>

      {/* Action */}
      <Button
        variant="primary"
        onClick={onReset}
        className="rounded-xl font-semibold px-5 py-3 shadow-md bg-[var(--primary)] text-white hover:bg-[rgba(79,70,229,0.9)] transition-all flex items-center gap-2 text-sm"
      >
        <RotateCcw className="w-4 h-4" />
        Reset Filters
      </Button>
    </motion.div>
  );
}
