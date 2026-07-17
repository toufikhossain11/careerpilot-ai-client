'use client';

import { Card, Heading } from '@/components/ui';
import { Star } from 'lucide-react';
import { type Review } from '../data/careerDetails';

interface StudentReviewsProps {
  reviews: Review[];
}

export function StudentReviews({ reviews }: StudentReviewsProps) {
  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <div className="space-y-8">
        <div className="space-y-2">
          <Heading level={3} className="text-xl sm:text-2xl font-bold text-foreground">
            Student & Career Switcher Reviews
          </Heading>
          <p className="text-sm text-muted max-w-xl">
            Hear from students and professionals who followed this career path and transitioned using our learning structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <Card
              key={index}
              className="p-6 border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-950/20 shadow-sm hover:border-slate-200/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'fill-current' : 'text-slate-200 dark:text-slate-800'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm leading-6 text-slate-650 dark:text-slate-350 italic">
                  &ldquo;{review.review}&rdquo;
                </p>
              </div>

              {/* User profile row */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100/50 dark:border-slate-800/40">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br text-white font-bold text-sm shrink-0 ${review.gradient}`}>
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm leading-none mb-1">
                    {review.name}
                  </h4>
                  <span className="text-[10px] text-muted font-semibold tracking-wide uppercase">
                    {review.position}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
