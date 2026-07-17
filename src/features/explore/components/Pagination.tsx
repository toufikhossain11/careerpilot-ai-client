'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <nav className="flex items-center justify-center gap-1.5 py-8" aria-label="Pagination">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="h-10 w-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-900/50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent transition duration-200"
        aria-label="Previous Page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        const isActive = currentPage === pageNumber;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`h-10 px-4 rounded-xl text-sm font-semibold transition duration-200 ${
              isActive
                ? 'bg-primary text-white shadow-md shadow-primary/10'
                : 'border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-900/50 hover:text-foreground'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="h-10 w-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-900/50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent transition duration-200"
        aria-label="Next Page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}
