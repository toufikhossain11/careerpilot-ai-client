'use client';

import { motion } from 'framer-motion';
import { Button, Badge, Container } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: { y: -20, transition: { duration: 3, repeat: Infinity, repeatType: 'reverse' as const } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Gradient background blur effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge variant="primary">
                <span className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  AI Powered Career Platform
                </span>
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight"
            >
              Find Your Dream Career with AI Guidance
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-lg text-lg leading-8 text-muted"
            >
              Discover personalized career paths, get resume analysis, chat with an AI career assistant, and accelerate your professional growth with intelligent recommendations.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:gap-8 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary ring-2 ring-white"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">10K+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-accent">★</span>
                <span className="text-sm font-medium text-foreground">500+ Career Paths</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-success" />
                <span className="text-sm font-medium text-foreground">95% Satisfaction</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:gap-4 pt-4"
            >
              <Button
                variant="primary"
                size="lg"
                className="group"
              >
                Explore Careers
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
              >
                Try AI Assistant
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Cards */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Resume Score Card */}
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              className="absolute top-0 right-0 w-72 rounded-2xl bg-white shadow-card border border-border p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Resume Score</h3>
                <span className="text-xl font-bold text-primary">85%</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }} />
              </div>
              <p className="text-sm text-muted">Well structured resume</p>
            </motion.div>

            {/* AI Recommendation Card */}
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
              className="absolute top-32 left-0 w-72 rounded-2xl bg-white shadow-card border border-border p-6 space-y-3"
            >
              <h3 className="font-semibold text-foreground">AI Recommendation</h3>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Senior Frontend Engineer</p>
                <p className="text-xs text-muted">Based on your skills & experience</p>
              </div>
              <button className="w-full px-3 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors">
                View Details
              </button>
            </motion.div>

            {/* Interview Success Card */}
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1 }}
              className="absolute bottom-32 right-8 w-72 rounded-2xl bg-white shadow-card border border-border p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Interview Prep</h3>
                <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">Ready</span>
              </div>
              <p className="text-sm text-muted">Complete 8 more lessons to master</p>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full ${i < 3 ? 'bg-accent' : 'bg-border'}`}
                    style={{ width: '20%' }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Learning Progress Card */}
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.5 }}
              className="absolute bottom-0 left-12 w-72 rounded-2xl bg-white shadow-card border border-border p-6 space-y-4"
            >
              <h3 className="font-semibold text-foreground">Learning Progress</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-muted mb-1">React Mastery</p>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '72%' }} />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted mb-1">TypeScript Basics</p>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
