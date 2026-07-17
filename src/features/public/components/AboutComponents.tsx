'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Card, Badge, Button, Heading } from '@/components/ui';
import { Sparkles, Brain, Award, Users, ShieldCheck, Heart, Eye, Target, Compass, Terminal, Shield, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

// 1. About Hero
export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900/10 dark:to-slate-950/20 py-16 md:py-24 border-b border-slate-100 dark:border-slate-800/40">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      <Container className="relative z-10 text-center max-w-4xl space-y-6">
        <div className="flex justify-center">
          <Badge variant="primary" className="px-4 py-1 text-xs">
            About Us
          </Badge>
        </div>
        <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Empowering Careers with AI Guidance
        </Heading>
        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
          We bridge the gap between education and employment, helping millions of professionals explore careers, optimize portfolios, and land dream roles.
        </p>

        {/* Visual Illustration Placeholder */}
        <div className="relative mt-12 w-full max-w-3xl mx-auto h-[240px] sm:h-[320px] rounded-[2rem] bg-gradient-to-br from-primary/10 via-indigo-50/30 to-secondary/10 dark:from-indigo-950/20 dark:to-slate-900 border border-slate-200/55 dark:border-slate-800 flex items-center justify-center overflow-hidden group shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3 text-slate-400 group-hover:text-primary transition-colors"
          >
            <Compass className="w-16 h-16 text-primary stroke-[1.5]" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted">CareerPilot AI Workspace</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// 2. Mission & Vision
export function MissionVision() {
  return (
    <section className="py-12 bg-white dark:bg-slate-950/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <Card className="p-8 border border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/10 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col gap-5 rounded-[2rem]">
          <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary w-fit shadow-sm">
            <Target className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <Heading level={3} className="text-xl sm:text-2xl font-bold text-foreground">
              Our Mission
            </Heading>
            <p className="text-sm sm:text-base leading-7 text-muted">
              To democratize career mentoring by providing state-of-the-art AI tooling that guides candidates along structured pathways, assesses skills, and supports job readiness for anyone, anywhere.
            </p>
          </div>
        </Card>

        {/* Vision Card */}
        <Card className="p-8 border border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/10 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col gap-5 rounded-[2rem]">
          <div className="inline-flex p-3 rounded-2xl bg-secondary/10 text-secondary w-fit shadow-sm">
            <Eye className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <Heading level={3} className="text-xl sm:text-2xl font-bold text-foreground">
              Our Vision
            </Heading>
            <p className="text-sm sm:text-base leading-7 text-muted">
              To build a world where structural career pivots are seamless, transparent, and guided by ethical algorithms, making job search anxiety a thing of the past for future generations.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

// 3. Our Values
const VALUES = [
  { icon: Sparkles, title: 'Innovation', desc: 'Deploying state of the art LLM modeling configurations to optimize career advice.' },
  { icon: BookOpen, title: 'Learning', desc: 'Fostering a growth mindset with curated roadmap steps for non-linear careers.' },
  { icon: ShieldCheck, title: 'Integrity', desc: 'Securing user resumes, profiles, and data using encrypted pipelines.' },
  { icon: Users, title: 'Community', desc: 'Building inclusive forums and pathways for candidates from all walks of life.' },
  { icon: Award, title: 'Growth', desc: 'Aligning skill milestones directly with active corporate hiring requirements.' },
  { icon: Heart, title: 'Accessibility', desc: 'Creating WCAG-compliant design tokens, dark mode settings, and keyboards support.' },
];

export function ValuesSection() {
  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <Heading level={2} className="text-2xl sm:text-3xl font-bold text-foreground">
            Our Values
          </Heading>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto">
            The core principles that shape our product, team, and guide our platform choices:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <Card
                key={idx}
                className="p-6 border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-950/20 shadow-sm hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 rounded-2xl"
              >
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 text-primary w-fit shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-foreground text-sm sm:text-base leading-tight">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-405 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 4. How CareerPilot AI Works
const TIMELINE = [
  { step: '01', title: 'Input Profile', desc: 'Specify your career history, level, and vocations aspirations in our portal.' },
  { step: '02', title: 'Resume Audit', desc: 'Scan your resume with AI to identify ATS scores, keywords, and structural bugs.' },
  { step: '03', title: 'Custom Roadmap', desc: 'Receive structured chronological milestones tailored to bridge your skill gaps.' },
  { step: '04', title: 'Mock Interviews', desc: 'Practice mock interview chats powered by Gemini to gain hiring confidence.' },
];

export function AboutTimeline() {
  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <Heading level={2} className="text-2xl sm:text-3xl font-bold text-foreground">
            How CareerPilot AI Works
          </Heading>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto">
            Our step-by-step methodology designed to transition your skills into job offers:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Horizontal line connector for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-0.5 bg-slate-200 dark:bg-slate-800 z-0" />

          {TIMELINE.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 relative z-10 group">
              <div className="h-16 w-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center font-bold text-base sm:text-lg text-primary shadow-sm group-hover:border-primary transition-colors">
                {item.step}
              </div>
              <div className="space-y-1 max-w-[200px]">
                <h4 className="font-bold text-foreground text-sm sm:text-base leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. Why Choose Us
const WHY_CHOOSE = [
  { title: 'AI Powered', desc: 'Utilizing state-of-the-art context window queries.' },
  { title: 'Personalized', desc: 'Recommendations adapt to your specific coding speed.' },
  { title: 'Career Focused', desc: 'Aligning roadmaps with real-time Indeed statistics.' },
  { title: 'Resume Analysis', desc: 'Providing formatting reviews, scores, and tags.' },
  { title: 'Learning Roadmap', desc: 'Step-by-step modules with estimated durations.' },
  { title: '24/7 AI Assistant', desc: 'A custom mentor in your corner for all decisions.' },
];

export function WhyChooseGrid() {
  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <Heading level={2} className="text-2xl sm:text-3xl font-bold text-foreground">
            Why Choose Us
          </Heading>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto">
            Discover why candidates trust CareerPilot to navigate their professional transitions:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, idx) => (
            <Card
              key={idx}
              className="p-5 border border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/10 shadow-sm flex items-start gap-4 hover:border-secondary/20 transition-colors rounded-xl"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/10 text-secondary shrink-0 mt-0.5 font-bold text-[10px]">
                ✓
              </span>
              <div>
                <h4 className="font-bold text-foreground text-xs sm:text-sm leading-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. Statistics
const STATS = [
  { number: '10K+', label: 'Active Users' },
  { number: '500+', label: 'Career Paths' },
  { number: '25K+', label: 'Resume Analyses' },
  { number: '95%', label: 'Success Rate' },
];

export function AboutStats() {
  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50/60 dark:bg-slate-900/10 p-6 sm:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800/80 shadow-sm text-center">
        {STATS.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-primary block tracking-tight">
              {stat.number}
            </span>
            <span className="text-xs sm:text-sm text-muted font-semibold uppercase tracking-wider block">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// 7. Team Section
const TEAM = [
  { name: 'Dr. Evelyn Carter', role: 'Founder & CEO', avatar: 'EC', grad: 'from-blue-500 to-indigo-600' },
  { name: 'Marcus Sterling', role: 'Head of AI Engineering', avatar: 'MS', grad: 'from-purple-500 to-pink-600' },
  { name: 'Priya Sharma', role: 'Director of Career Pathways', avatar: 'PS', grad: 'from-emerald-400 to-teal-600' },
  { name: 'Alex Thompson', role: 'Lead UX Architect', avatar: 'AT', grad: 'from-orange-400 to-red-500' },
];

export function TeamSection() {
  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <Heading level={2} className="text-2xl sm:text-3xl font-bold text-foreground">
            Meet Our Leadership Team
          </Heading>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto">
            Experienced engineers, career coaches, and product designers building the future of mentorship:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, idx) => (
            <Card
              key={idx}
              className="p-6 border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-950/20 shadow-sm flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-all duration-300 rounded-2xl"
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br text-white font-bold text-lg shrink-0 shadow-md ${member.grad}`}>
                {member.avatar}
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-foreground text-sm sm:text-base">
                  {member.name}
                </h4>
                <p className="text-xs text-muted font-medium">
                  {member.role}
                </p>
              </div>

              {/* Mock LinkedIn Link */}
              <button
                className="mt-2 text-xs font-semibold text-primary hover:text-primary/95 flex items-center gap-1 cursor-not-allowed"
                disabled
              >
                LinkedIn
                <span>→</span>
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8. About CTA
export function AboutCTA() {
  return (
    <section className="py-12">
      <Card className="relative p-8 sm:p-12 md:p-16 border border-slate-800 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white rounded-[2rem] shadow-xl overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-6 flex flex-col items-center">
          <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Start Your Career Journey Today
          </Heading>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Ready to explore career options or analyze your resume with AI? Sign up and access the client portal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Link href="/explore" className="rounded-xl font-bold px-6 py-3.5 bg-secondary text-white hover:bg-secondary/90 shadow-md text-center transition-colors text-sm sm:text-base">
              Explore Careers
            </Link>
            <button className="rounded-xl font-bold px-6 py-3.5 border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors text-center text-sm sm:text-base cursor-not-allowed" disabled>
              Try AI Assistant
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
}
