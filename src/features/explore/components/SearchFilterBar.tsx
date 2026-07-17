'use client';

import React, { useState } from 'react';
import { Container, Button, Input } from '@/components/ui';
import { Search, Filter, RotateCcw } from 'lucide-react';

export interface FilterState {
  search: string;
  category: string;
  experience: string;
  salary: string;
  workType: string;
}

interface SearchFilterBarProps {
  filters: FilterState;
  onApplyFilters: (newFilters: FilterState) => void;
  onResetFilters: () => void;
}

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Full Stack', 'UI/UX', 'DevOps', 'AI', 'Cyber Security', 'Mobile'];
const EXPERIENCE_LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const SALARY_RANGES = ['All', 'Low', 'Medium', 'High'];
const WORK_TYPES = ['All', 'Remote', 'Hybrid', 'On-site'];

export function SearchFilterBar({ filters, onApplyFilters, onResetFilters }: SearchFilterBarProps) {
  // Local state for filters prior to hitting "Apply Filters"
  const [localSearch, setLocalSearch] = useState(filters.search);
  const [localCategory, setLocalCategory] = useState(filters.category);
  const [localExperience, setLocalExperience] = useState(filters.experience);
  const [localSalary, setLocalSalary] = useState(filters.salary);
  const [localWorkType, setLocalWorkType] = useState(filters.workType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApplyFilters({
      search: localSearch,
      category: localCategory,
      experience: localExperience,
      salary: localSalary,
      workType: localWorkType,
    });
  };

  const handleReset = () => {
    setLocalSearch('');
    setLocalCategory('All');
    setLocalExperience('All');
    setLocalSalary('All');
    setLocalWorkType('All');
    onResetFilters();
  };

  return (
    <div className="w-full lg:sticky lg:top-[65px] z-35 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 shadow-sm py-5 transition-all">
      <Container>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            {/* Search Input (5 Columns on Desktop) */}
            <div className="lg:col-span-4 relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
                <Search className="h-4.5 w-4.5" />
              </div>
              <Input
                type="text"
                placeholder="Search careers..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="pl-10 h-11 text-sm bg-slate-50/50 focus:bg-white border-slate-200 focus:border-primary transition-all rounded-xl w-full"
              />
            </div>

            {/* Filter Selects Grid (6 Columns on Desktop) */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {/* Category */}
              <div className="flex flex-col">
                <select
                  value={localCategory}
                  onChange={(e) => setLocalCategory(e.target.value)}
                  className="h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm bg-slate-50/50 dark:bg-slate-900/50 text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/10 transition duration-200"
                  aria-label="Filter by Category"
                >
                  <option value="" disabled>Category</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'All' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div className="flex flex-col">
                <select
                  value={localExperience}
                  onChange={(e) => setLocalExperience(e.target.value)}
                  className="h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm bg-slate-50/50 dark:bg-slate-900/50 text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/10 transition duration-200"
                  aria-label="Filter by Experience Level"
                >
                  <option value="" disabled>Experience</option>
                  {EXPERIENCE_LEVELS.map((exp) => (
                    <option key={exp} value={exp}>
                      {exp === 'All' ? 'All Levels' : exp}
                    </option>
                  ))}
                </select>
              </div>

              {/* Salary */}
              <div className="flex flex-col">
                <select
                  value={localSalary}
                  onChange={(e) => setLocalSalary(e.target.value)}
                  className="h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm bg-slate-50/50 dark:bg-slate-900/50 text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/10 transition duration-200"
                  aria-label="Filter by Salary Range"
                >
                  <option value="" disabled>Salary</option>
                  {SALARY_RANGES.map((sal) => (
                    <option key={sal} value={sal}>
                      {sal === 'All' ? 'All Salaries' : `${sal} Salary`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Work Type */}
              <div className="flex flex-col">
                <select
                  value={localWorkType}
                  onChange={(e) => setLocalWorkType(e.target.value)}
                  className="h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm bg-slate-50/50 dark:bg-slate-900/50 text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/10 transition duration-200"
                  aria-label="Filter by Work Type"
                >
                  <option value="" disabled>Work Type</option>
                  {WORK_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type === 'All' ? 'All Work Types' : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Buttons (2 Columns on Desktop) */}
            <div className="lg:col-span-2 flex gap-2">
              <Button
                type="submit"
                variant="primary"
                className="flex-1 h-11 text-xs sm:text-sm rounded-xl font-bold bg-[var(--primary)] text-white hover:bg-[rgba(79,70,229,0.9)] transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <Filter className="w-3.5 h-3.5" />
                Apply
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="h-11 w-11 p-0 rounded-xl border border-slate-200 dark:border-slate-800 text-muted hover:text-foreground hover:bg-slate-100/50 dark:hover:bg-slate-900/50 flex items-center justify-center shrink-0"
                title="Reset Filters"
                aria-label="Reset Filters"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}
