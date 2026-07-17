'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Badge, Button } from '@/components/ui';
import { Star, DollarSign, MapPin, Clock, Bookmark, BookmarkCheck, Sparkles, TrendingUp } from 'lucide-react';
import { type CareerDetails } from '../data/careerDetails';

interface CareerDetailsHeroProps {
  career: CareerDetails;
}

const floatVariants = {
  float1: {
    y: [0, -8, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const },
  },
  float2: {
    y: [0, 8, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.3 },
  },
};

export function CareerDetailsHero({ career }: CareerDetailsHeroProps) {
  const [isSaved, setIsSaved] = useState(false);

  const formatSalary = (salary: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(salary);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900/10 dark:to-slate-950/20 border-b border-slate-100 dark:border-slate-800/40 py-12 lg:py-20">
      {/* Visual background blurred shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* 1. Breadcrumb */}
        <nav className="text-xs font-semibold uppercase tracking-[0.16em] text-muted flex flex-wrap items-center gap-2 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>&gt;</span>
          <Link href="/explore" className="hover:text-primary transition-colors">Explore Careers</Link>
          <span>&gt;</span>
          <span className="text-foreground">{career.title}</span>
        </nav>

        {/* 2. Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Stats and Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="primary" className="px-3.5 py-1 text-xs font-bold">
                {career.category}
              </Badge>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground bg-white dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                <span>{career.rating.toFixed(1)} Rating</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              {career.title}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-muted max-w-xl">
              {career.description}
            </p>

            {/* Quick stats tags */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm text-muted font-medium">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Avg: <strong className="text-foreground">{formatSalary(career.averageSalary)}/yr</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{career.experienceLevel} Level</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{career.location} ({career.workType})</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                className="rounded-xl font-bold px-6 py-4 bg-[var(--primary)] text-white hover:bg-[rgba(79,70,229,0.9)] shadow-md flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                onClick={() => {
                  const el = document.getElementById('learning-roadmap');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Learning
              </Button>
              <Button
                variant={isSaved ? 'primary' : 'outline'}
                size="lg"
                className={`rounded-xl font-bold px-6 py-4 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer ${
                  isSaved
                    ? 'bg-primary text-white border-primary hover:bg-primary/95'
                    : 'border-slate-200 dark:border-slate-800 text-foreground hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
                onClick={() => setIsSaved(!isSaved)}
              >
                {isSaved ? (
                  <>
                    <BookmarkCheck className="w-5 h-5 fill-current" />
                    Saved
                  </>
                ) : (
                  <>
                    <Bookmark className="w-5 h-5" />
                    Save Career
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Right Side: Visual Gradient Panel & Floating Cards */}
          <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[400px] flex items-center justify-center">
            {/* Base Career Cover Banner */}
            <div className={`w-full h-[280px] rounded-[2rem] bg-gradient-to-br ${career.gradient} shadow-2xl relative overflow-hidden flex items-center justify-center p-8 group`}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
              <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-350">
                <Sparkles className="w-10 h-10" />
              </div>
            </div>

            {/* Floating Card 1: Salary Metric */}
            <motion.div
              variants={floatVariants}
              animate="float1"
              className="absolute top-4 left-4 w-48 bg-slate-900/95 dark:bg-slate-950/95 border border-white/10 rounded-2xl p-4 shadow-xl z-20 backdrop-blur-md text-white"
            >
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Average Salary</span>
              <span className="text-xl sm:text-2xl font-extrabold text-white block">{formatSalary(career.averageSalary)}</span>
              <span className="text-[10px] text-green-400 font-medium flex items-center gap-1 mt-1">
                <TrendingUp className="w-3.5 h-3.5" />
                Industry Top Tier
              </span>
            </motion.div>

            {/* Floating Card 2: AI Match Score */}
            <motion.div
              variants={floatVariants}
              animate="float2"
              className="absolute bottom-4 right-4 w-48 bg-slate-900/95 dark:bg-slate-950/95 border border-white/10 rounded-2xl p-4 shadow-xl z-20 backdrop-blur-md text-white"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1 rounded bg-indigo-500/20 text-indigo-400 shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">AI Match Score</span>
              </div>
              <span className="text-xl sm:text-2xl font-extrabold text-white block">{career.aiMatchScore}%</span>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden mt-1.5">
                <div className="bg-indigo-500 h-full" style={{ width: `${career.aiMatchScore}%` }} />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
