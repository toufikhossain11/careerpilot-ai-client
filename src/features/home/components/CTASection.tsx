'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Heading, Card, Badge } from '@/components/ui';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Brain,
  CheckCircle,
  FileCheck2,
} from 'lucide-react';

const floatingCardVariants = {
  animate1: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
  animate2: {
    y: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay: 0.5,
    },
  },
};


export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-45 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.06),transparent_60%)]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Left Column: CTA Texts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 lg:space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold bg-white/10 text-secondary border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shape Your Future Today</span>
            </div>

            <Heading level={2} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Ready to Build Your Dream Career?
            </Heading>

            <p className="max-w-xl text-lg md:text-xl text-slate-300 leading-relaxed">
              Start exploring career paths, analyze your resume with AI, and receive personalized recommendations to accelerate your professional growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/explore"
                className="rounded-xl font-bold px-6 py-4 flex items-center justify-center gap-2 bg-secondary text-white hover:bg-secondary/90 shadow-md group transition-colors"
              >
                Explore Careers
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/ai-assistant"
                className="rounded-xl font-bold px-6 py-4 flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors"
              >
                Try AI Assistant
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Code-Based AI Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative w-full h-[400px] flex items-center justify-center"
          >
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl opacity-50" />

            {/* Floating Card 1: ATS Scoring */}
            <motion.div
              variants={floatingCardVariants}
              animate="animate1"
              className="absolute top-10 left-4 sm:left-12 w-64 bg-slate-900/95 border border-white/10 rounded-2xl p-5 shadow-2xl z-20 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Resume Analysis</h4>
                  <p className="text-[10px] text-slate-400">ATS Optimization Check</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-extrabold text-white">92</span>
                <span className="text-xs text-green-400 font-semibold">/100 (Excellent)</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden mb-2">
                <div className="bg-green-500 h-full w-[92%]" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-green-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5 fill-current text-green-500/20" />
                <span>Standardized ATS formatting verified</span>
              </div>
            </motion.div>

            {/* Floating Card 2: AI Career Recommendation */}
            <motion.div
              variants={floatingCardVariants}
              animate="animate2"
              className="absolute bottom-10 right-4 sm:right-12 w-64 bg-slate-900/95 border border-white/10 rounded-2xl p-5 shadow-2xl z-10 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20 text-indigo-400">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">AI Recommendation</h4>
                  <p className="text-[10px] text-slate-400">Dynamic Matching</p>
                </div>
              </div>
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                    <span>Cloud Architect</span>
                    <span className="font-semibold text-indigo-400">98% Match</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[98%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                    <span>DevOps Engineer</span>
                    <span className="font-semibold text-secondary">85% Match</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-cyan-500 h-full w-[85%]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Connection Line or Dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)] blur-lg rounded-full" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}