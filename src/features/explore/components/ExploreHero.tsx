'use client';

import { motion } from 'framer-motion';
import { Container, Badge } from '@/components/ui';
import { Compass, Sparkles, TrendingUp, Briefcase } from 'lucide-react';
import Link from 'next/link';

export function ExploreHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-slate-950 dark:via-slate-900/10 dark:to-slate-950/20 border-b border-slate-100 dark:border-slate-800/40 py-12 md:py-16">
      {/* Floating Animated Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 z-0">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-[10%] text-primary"
        >
          <Compass className="w-8 h-8" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-10 left-[20%] text-secondary"
        >
          <Briefcase className="w-7 h-7" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-12 right-[15%] text-accent"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="absolute bottom-12 right-[25%] text-primary"
        >
          <TrendingUp className="w-8 h-8" />
        </motion.div>
      </div>

      <Container className="relative z-10 space-y-4 md:space-y-6">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs font-semibold uppercase tracking-[0.16em] text-muted flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-foreground">Explore</span>
        </nav>

        <div className="max-w-3xl space-y-3.5">
          <Badge variant="primary" className="px-4 py-1 text-xs">
            Career Directory
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
            Explore Career Paths
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
            Discover career opportunities, compare skills and average salaries, and find the right vocational path with personalized AI guidance.
          </p>
        </div>
      </Container>
    </section>
  );
}
