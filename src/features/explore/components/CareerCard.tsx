'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Badge, Button } from '@/components/ui';
import Link from 'next/link';
import { Star, Clock, MapPin, DollarSign, Bookmark, BookmarkCheck } from 'lucide-react';
import { type Career } from '../data/careers';

interface CareerCardProps {
  career: Career;
}

export function CareerCard({ career }: CareerCardProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const Icon = career.icon;

  const formatSalary = (salary: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(salary);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex h-full w-full"
    >
      <Card className="flex flex-col justify-between w-full h-full p-5 hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-950/20 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm relative overflow-hidden group">
        <div className="space-y-4">
          {/* Header Image/Gradient & Icon Placeholder */}
          <div className={`w-full h-36 rounded-xl bg-gradient-to-br ${career.gradient} relative flex items-center justify-center shadow-inner overflow-hidden`}>
            {/* Visual background grids */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
            <Icon className="w-12 h-12 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-350" />

            {/* Popular Badge */}
            {career.isPopular && (
              <span className="absolute top-2 left-2 inline-flex items-center rounded-md bg-white/90 dark:bg-slate-900/90 px-2 py-0.5 text-[9px] font-extrabold uppercase text-primary tracking-wide shadow-sm">
                Popular
              </span>
            )}

            {/* Work Type Badge */}
            <span className="absolute bottom-2 right-2 inline-flex items-center rounded-md bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-white tracking-wide">
              {career.workType}
            </span>
          </div>

          {/* Row: Category Badge & Bookmark Icon */}
          <div className="flex items-center justify-between">
            <Badge variant="primary" className="px-2.5 py-0.5 text-[10px] font-bold">
              {career.category}
            </Badge>

            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-1.5 rounded-full border transition-all duration-200 ${
                bookmarked
                  ? 'border-primary/20 bg-primary/10 text-primary'
                  : 'border-slate-100 dark:border-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
              title={bookmarked ? 'Remove Bookmark' : 'Bookmark Career'}
              aria-label={bookmarked ? 'Remove Bookmark' : 'Bookmark Career'}
            >
              {bookmarked ? (
                <BookmarkCheck className="w-4 h-4 fill-current" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Title & Description */}
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight leading-tight group-hover:text-primary transition-colors">
              {career.title}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-muted line-clamp-2">
              {career.description}
            </p>
          </div>

          {/* Salary, Duration, Rating stats */}
          <div className="grid grid-cols-2 gap-3 pt-3.5 border-t border-slate-100/60 dark:border-slate-800/40 text-xs text-muted font-medium">
            <div className="space-y-1">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted/80">Avg Salary</span>
              <div className="flex items-center text-foreground font-bold text-sm sm:text-base">
                <DollarSign className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                <span>{formatSalary(career.averageSalary).replace('$', '')}</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted/80">Rating</span>
              <div className="flex items-center gap-1 text-foreground font-bold text-sm sm:text-base">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                <span>{career.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>

          {/* Location & Experience Level stats */}
          <div className="flex flex-col gap-1.5 pt-2 text-[11px] text-muted font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{career.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{career.duration} • {career.experienceLevel}</span>
            </div>
          </div>

          {/* Required Skills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {career.requiredSkills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 px-2 py-0.5 text-[10px] text-slate-600 dark:text-slate-400 font-medium"
              >
                {skill}
              </span>
            ))}
            {career.requiredSkills.length > 3 && (
              <span className="inline-flex items-center px-1.5 py-0.5 text-[9px] text-muted font-semibold">
                +{career.requiredSkills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <div className="mt-5 pt-4 border-t border-slate-100/60 dark:border-slate-800/40">
          <Link href={`/career/${career.id}`} className="w-full block">
            <Button
              variant="outline"
              className="w-full justify-center h-10 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-800 text-foreground hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-slate-350 dark:hover:border-slate-700 transition-all cursor-pointer"
            >
              View Details
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
