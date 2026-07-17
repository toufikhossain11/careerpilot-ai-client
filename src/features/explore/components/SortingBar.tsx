'use client';

import { Container } from '@/components/ui';
import { ArrowUpDown } from 'lucide-react';

interface SortingBarProps {
  totalResults: number;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export function SortingBar({ totalResults, sortBy, onSortChange }: SortingBarProps) {
  return (
    <div className="w-full bg-[var(--background)] py-4 border-b border-slate-100/50 dark:border-slate-800/40">
      <Container className="flex items-center justify-between gap-4">
        {/* Results Count */}
        <p className="text-xs sm:text-sm text-muted font-medium">
          Showing <span className="text-foreground font-semibold">{totalResults}</span> {totalResults === 1 ? 'career path' : 'career paths'}
        </p>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <label htmlFor="sort-dropdown" className="text-xs font-semibold text-muted uppercase tracking-[0.08em] flex items-center gap-1.5 cursor-pointer">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sort by:</span>
          </label>
          <select
            id="sort-dropdown"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-800 text-xs sm:text-sm bg-white dark:bg-slate-900 text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/10 transition duration-200 cursor-pointer"
          >
            <option value="newest">Newest</option>
            <option value="salary-high">Highest Salary</option>
            <option value="salary-low">Lowest Salary</option>
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>
      </Container>
    </div>
  );
}
