'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Badge, Button, Input, Container, Heading } from '@/components/ui';
import { Search, BookOpen, Clock, Calendar, User, ArrowRight, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/features/home/components';

export interface Article {
  id: string;
  title: string;
  summary: string;
  category: 'Career Advice' | 'Resume Tips' | 'AI & Tech' | 'Interview Prep';
  readingTime: string;
  author: string;
  date: string;
  gradient: string;
  isFeatured?: boolean;
}

export const blogArticles: Article[] = [
  {
    id: '1',
    title: 'How Generative AI is Changing Tech Hiring Cycles in 2026',
    summary: 'Explore how large language models are altering technical assessments, resume scanning pipelines, and what skill sets developers need to prioritize to remain highly competitive.',
    category: 'AI & Tech',
    readingTime: '5 min read',
    author: 'Marcus Sterling',
    date: 'July 14, 2026',
    gradient: 'from-blue-600 to-indigo-600',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Mastering the ATS Check: Keywords and Layout Strategies',
    summary: 'A step-by-step audit guide on how to structure your tech resume to pass standardized parser filters and capture hiring managers attention.',
    category: 'Resume Tips',
    readingTime: '4 min read',
    author: 'Priya Sharma',
    date: 'July 10, 2026',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: '3',
    title: 'Transitioning from Graphic Design to UX Research: A Real Story',
    summary: 'Read about Elenas vocational transition journey, the specific portfolio layouts she developed, and how she mapped her design transfer skills.',
    category: 'Career Advice',
    readingTime: '6 min read',
    author: 'Elena Rodriguez',
    date: 'July 05, 2026',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    id: '4',
    title: 'The STAR Framework: Cracking Behavioral Screener Calls',
    summary: 'How to map your project history into structural STAR matrices that highlight leadership, debugging skills, and collaborative traits.',
    category: 'Interview Prep',
    readingTime: '5 min read',
    author: 'Dr. Evelyn Carter',
    date: 'June 28, 2026',
    gradient: 'from-emerald-400 to-teal-600',
  },
  {
    id: '5',
    title: 'Why Cloud DevOps is the Fastest Growing Tech Pathway',
    summary: 'An overview of hosting infrastructures, VPC networking demand, and why DevOps architects carry premium industry valuations.',
    category: 'AI & Tech',
    readingTime: '8 min read',
    author: 'Marcus Thompson',
    date: 'June 22, 2026',
    gradient: 'from-cyan-400 to-blue-600',
  },
  {
    id: '6',
    title: 'Top 5 React 19 Features Front-End Developers Must Learn',
    summary: 'A quick summary of React Server Actions, standard useTransition updates, document metadata tags support, and React Compiler integration.',
    category: 'AI & Tech',
    readingTime: '4 min read',
    author: 'Sarah Jenkins',
    date: 'June 18, 2026',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: '7',
    title: 'Navigating Salary Negotiations: Benchmark and Metrics',
    summary: 'How to research median local rates, structure counter-proposals, and navigate compensation packages during HR calls.',
    category: 'Career Advice',
    readingTime: '6 min read',
    author: 'David Chen',
    date: 'June 12, 2026',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: '8',
    title: 'Crafting Your First Git Portfolio: Readme and Code Style',
    summary: 'A comprehensive checklist on preparing pristine GitHub repositories, structuring markdown folders, and writing clean commit logs.',
    category: 'Resume Tips',
    readingTime: '3 min read',
    author: 'Alex Thompson',
    date: 'June 05, 2026',
    gradient: 'from-sky-400 to-indigo-400',
  },
  {
    id: '9',
    title: 'Mock Interviews: Overcoming Live Coding Anxiety',
    summary: 'Tips on verbalizing your logical choices, whiteboard sketching techniques, and handling event loop failures under pressure.',
    category: 'Interview Prep',
    readingTime: '5 min read',
    author: 'Priya Sharma',
    date: 'May 28, 2026',
    gradient: 'from-rose-500 to-red-700',
  },
  {
    id: '10',
    title: 'Building REST vs. GraphQL APIs: Performance Comparison',
    summary: 'Understand the architectural differences between API contracts, data over-fetching constraints, and database integration structures.',
    category: 'AI & Tech',
    readingTime: '7 min read',
    author: 'Liam O\'Connor',
    date: 'May 20, 2026',
    gradient: 'from-indigo-400 to-violet-500',
  }
];

// 1. Blog Hero
export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900/10 dark:to-slate-950/20 py-12 md:py-16 border-b border-slate-100 dark:border-slate-800/40">
      <Container className="relative z-10 text-center max-w-3xl space-y-4">
        <div className="flex justify-center">
          <Badge variant="primary" className="px-4 py-1 text-xs">Knowledge Base</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
          CareerPilot AI Blog
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Stay informed with the latest updates on tech hiring, resume tips, AI development, and interview preparation strategies.
        </p>
      </Container>
    </section>
  );
}

// 2. Featured Article
export function BlogFeatured({ article }: { article: Article }) {
  return (
    <section className="py-10">
      <Card className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 md:p-10 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950/20 shadow-md hover:border-primary/25 transition-all duration-300 rounded-[2.5rem] overflow-hidden group">
        {/* Cover Graphic Panel (5 cols) */}
        <div className="lg:col-span-5 relative h-56 sm:h-72 lg:h-full w-full rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center overflow-hidden shadow-inner shrink-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
          <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-20`} />
          <BookOpen className="w-16 h-16 text-white/40 drop-shadow-md group-hover:scale-105 transition-transform duration-350" />
        </div>

        {/* Text Area (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between py-2 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted font-bold">
              <Badge variant="primary" className="px-2.5 py-0.5 text-[10px] font-bold">
                {article.category}
              </Badge>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
              {article.title}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-muted">
              {article.summary}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-150/40 dark:border-slate-800/60 mt-4">
            {/* Author details */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-650 dark:text-slate-350">
              <div className="p-1 rounded-full bg-slate-100 dark:bg-slate-800">
                <User className="w-4 h-4 text-slate-500" />
              </div>
              <span>By <strong>{article.author}</strong></span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
            </div>

            {/* Link */}
            <button className="text-xs sm:text-sm font-bold text-primary hover:gap-2 transition-all flex items-center gap-1 cursor-not-allowed">
              Read Article
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
}

// 3. Blog Grid
interface BlogGridProps {
  search: string;
  category: string;
  onSearchChange: (val: string) => void;
  onCategoryChange: (val: string) => void;
}

const CATEGORIES = ['All', 'Career Advice', 'Resume Tips', 'AI & Tech', 'Interview Prep'];
const TOPICS = ['Figma', 'React 19', 'AWS', 'System Design', 'Framer Motion', 'ATS Optimizations', 'Resume Checking', 'Vercel Deployment'];

export function BlogGridSection({ search, category, onSearchChange, onCategoryChange }: BlogGridProps) {
  const filtered = blogArticles.filter((art) => {
    if (art.isFeatured) return false; // exclude featured one from list
    if (category && category !== 'All' && art.category !== category) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        art.title.toLowerCase().includes(q) ||
        art.summary.toLowerCase().includes(q) ||
        art.author.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <section className="py-8 border-t border-slate-100 dark:border-slate-800/60">
      {/* Search & Category Filter Row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-8">
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted">
            <Search className="w-4.5 h-4.5" />
          </div>
          <Input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 h-10 text-sm border-slate-200 focus:border-primary rounded-xl w-full"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap border ${
                  active
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-900/50 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Grid: 9 Blog Cards (8 columns) */}
        <div className="lg:col-span-8">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filtered.map((art) => (
                <Card
                  key={art.id}
                  className="p-5 border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-950/20 shadow-sm hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group rounded-2xl"
                >
                  <div className="space-y-4">
                    {/* Visual Card Cover Header */}
                    <div className={`w-full h-36 rounded-xl bg-gradient-to-br ${art.gradient} relative flex items-center justify-center shadow-inner overflow-hidden`}>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
                      <BookOpen className="w-10 h-10 text-white/30 drop-shadow-md group-hover:scale-105 transition-transform" />
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-muted font-bold">
                      <Badge variant="primary" className="px-2 py-0.5 text-[9px] font-bold">
                        {art.category}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {art.readingTime}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {art.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted line-clamp-3">
                        {art.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100/50 dark:border-slate-800/40 flex items-center justify-between">
                    <span className="text-[10px] text-muted font-semibold">
                      {art.date}
                    </span>
                    <button className="text-xs font-bold text-primary hover:gap-1.5 transition-all flex items-center gap-1 cursor-not-allowed" disabled>
                      Read More
                      <span>→</span>
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-slate-100 dark:border-slate-805 p-6 rounded-2xl text-muted text-sm max-w-md mx-auto">
              No articles found matching search criteria. Try resetting tabs.
            </div>
          )}
        </div>

        {/* Sidebar widgets: 4 columns */}
        <div className="lg:col-span-4 space-y-6">
          {/* Popular topics */}
          <Card className="p-6 border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-950/20 shadow-sm space-y-4 rounded-2xl">
            <h4 className="font-bold text-foreground text-sm sm:text-base">Popular Topics</h4>
            <div className="flex flex-wrap gap-1.5">
              {TOPICS.map((topic, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 text-slate-650 dark:text-slate-350 cursor-pointer hover:border-primary/20 transition-all"
                >
                  #{topic}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// 4. Blog Newsletter CTA
export function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <Card className="p-8 sm:p-12 border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-slate-950 dark:via-slate-900/40 dark:to-blue-950/10 rounded-[2rem] shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <Heading level={3} className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
            Subscribe to our newsletter
          </Heading>
          <p className="text-sm sm:text-base text-muted">
            Get weekly technical review summaries, ATS parsing criteria, and modern portfolio strategies directly in your inbox.
          </p>
        </div>

        <form onSubmit={handleSub} className="w-full md:w-auto shrink-0 max-w-md flex flex-col gap-2.5">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                className="pl-9 h-11 text-sm border-slate-200 rounded-xl"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              className="h-11 px-5 rounded-xl font-bold bg-[var(--primary)] text-white hover:bg-[rgba(79,70,229,0.9)] flex items-center justify-center gap-1 shadow-sm text-sm"
            >
              Subscribe
            </Button>
          </div>

          <AnimatePresence>
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="flex items-center gap-1.5 text-xs text-[var(--error)] bg-red-50 dark:bg-red-950/20 px-3 py-1.5 rounded-lg border border-red-100 dark:border-red-950/30">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Invalid email format.</span>
              </motion.div>
            )}
            {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="flex items-center gap-1.5 text-xs text-[var(--success)] bg-green-50 dark:bg-green-950/20 px-3 py-1.5 rounded-lg border border-green-100 dark:border-green-950/30">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Subscribed successfully!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Card>
    </section>
  );
}

// 5. Main Blog Page Content wrapper
export function BlogPageContent() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const featured = blogArticles.find((art) => art.isFeatured) || blogArticles[0];

  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col justify-between">
      <div className="flex-1">
        {/* Blog Hero */}
        <BlogHero />

        <Container className="py-12 space-y-12">
          {/* Featured Article */}
          <BlogFeatured article={featured} />

          {/* Grid Section */}
          <BlogGridSection
            search={search}
            category={category}
            onSearchChange={setSearch}
            onCategoryChange={setCategory}
          />

          {/* Newsletter Subscribe */}
          <BlogNewsletter />
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
