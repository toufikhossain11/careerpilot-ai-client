'use client';

import { useState, useEffect, useMemo } from 'react';
import { Container } from '@/components/ui';
import { Footer } from '@/features/home/components';
import {
  ExploreHero,
  SearchFilterBar,
  SortingBar,
  CareerGrid,
  SkeletonGrid,
  EmptyState,
  Pagination,
  type FilterState
} from '@/features/explore/components';
import { careersData, type Career } from '@/features/explore/data/careers';

const ITEMS_PER_PAGE = 8;

export default function ExplorePage() {
  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'All',
    experience: 'All',
    salary: 'All',
    workType: 'All',
  });

  // Sorting State
  const [sortBy, setSortBy] = useState<string>('newest');

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Loading Simulation State
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Trigger loading effect when filters/sorting/pagination changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [filters, sortBy, currentPage]);

  // Reset page when filters change
  const handleApplyFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      category: 'All',
      experience: 'All',
      salary: 'All',
      workType: 'All',
    });
    setSortBy('newest');
    setCurrentPage(1);
  };

  // Filter & Sort computation (memoized)
  const filteredAndSortedCareers = useMemo(() => {
    let result = [...careersData];

    // 1. Category Filter
    if (filters.category && filters.category !== 'All') {
      result = result.filter((c) => c.category === filters.category);
    }

    // 2. Experience Level Filter
    if (filters.experience && filters.experience !== 'All') {
      result = result.filter((c) => c.experienceLevel === filters.experience);
    }

    // 3. Work Type Filter
    if (filters.workType && filters.workType !== 'All') {
      result = result.filter((c) => c.workType === filters.workType);
    }

    // 4. Salary Range Filter
    if (filters.salary && filters.salary !== 'All') {
      if (filters.salary === 'Low') {
        result = result.filter((c) => c.averageSalary < 80000);
      } else if (filters.salary === 'Medium') {
        result = result.filter((c) => c.averageSalary >= 80000 && c.averageSalary <= 130000);
      } else if (filters.salary === 'High') {
        result = result.filter((c) => c.averageSalary > 130000);
      }
    }

    // 5. Search Text Filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(searchLower) ||
          c.description.toLowerCase().includes(searchLower) ||
          c.category.toLowerCase().includes(searchLower) ||
          c.requiredSkills.some((s) => s.toLowerCase().includes(searchLower))
      );
    }

    // 6. Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'salary-high':
          return b.averageSalary - a.averageSalary;
        case 'salary-low':
          return a.averageSalary - b.averageSalary;
        case 'popular':
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
        default:
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      }
    });

    return result;
  }, [filters, sortBy]);

  // Pagination computations
  const totalResults = filteredAndSortedCareers.length;
  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);

  const paginatedCareers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedCareers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedCareers, currentPage]);

  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col justify-between">
      <div className="flex-1">
        {/* Hero Section */}
        <ExploreHero />

        {/* Sticky Search & Filter Bar */}
        <SearchFilterBar
          filters={filters}
          onApplyFilters={handleApplyFilters}
          onResetFilters={handleResetFilters}
        />

        {/* Sorting and Count Bar */}
        <SortingBar
          totalResults={totalResults}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Main Content Area */}
        <Container className="py-10">
          {isLoading ? (
            <SkeletonGrid count={8} />
          ) : paginatedCareers.length > 0 ? (
            <div className="space-y-6">
              <CareerGrid careers={paginatedCareers} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          ) : (
            <EmptyState onReset={handleResetFilters} />
          )}
        </Container>
      </div>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}
