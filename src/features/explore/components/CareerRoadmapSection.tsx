'use client';

import { motion } from 'framer-motion';
import { Badge, Card, Heading } from '@/components/ui';
import {
  BookOpen,
  Terminal,
  Cpu,
  MessageSquareCode,
  Send,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { type CareerDetails } from '../data/careerDetails';

interface CareerRoadmapSectionProps {
  career: CareerDetails;
}

const stepIcons = [BookOpen, Terminal, Cpu, MessageSquareCode, Send];
const stepGradients = [
  'from-blue-500 to-indigo-500',
  'from-purple-500 to-pink-500',
  'from-violet-500 to-purple-600',
  'from-amber-400 to-orange-500',
  'from-emerald-400 to-teal-600',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function CareerRoadmapSection({ career }: CareerRoadmapSectionProps) {
  return (
    <section id="learning-roadmap" className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <div className="space-y-12">
        {/* Required Skills Segment */}
        <div className="space-y-4">
          <Heading level={3} className="text-xl sm:text-2xl font-bold text-foreground">
            Required Skills
          </Heading>
          <p className="text-sm text-muted max-w-xl">
            A mix of core technical skills and essential soft skills required to succeed in this career path:
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {career.requiredSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="primary"
                className="px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide capitalize bg-primary/5 hover:bg-primary/10 border border-primary/10 shadow-sm"
              >
                {skill}
              </Badge>
            ))}
            {/* Standard Soft Skills added dynamically */}
            <Badge variant="accent" className="px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide bg-green-500/10 border border-green-500/10">
              Communication
            </Badge>
            <Badge variant="accent" className="px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide bg-green-500/10 border border-green-500/10">
              Problem Solving
            </Badge>
          </div>
        </div>

        {/* Vertical Timeline Roadmap */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Heading level={3} className="text-xl sm:text-2xl font-bold text-foreground">
              Learning Roadmap
            </Heading>
            <p className="text-sm text-muted max-w-xl">
              Follow this structured, timeline-based learning roadmap to build your skills, prepare for interviews, and land a job.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative border-l border-slate-200 dark:border-slate-800 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-10 py-4"
          >
            {career.roadmap.map((step, index) => {
              const StepIcon = stepIcons[index] || BookOpen;
              const gradient = stepGradients[index] || 'from-primary to-secondary';

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline Node Dot */}
                  <span className="absolute -left-[39px] sm:-left-[49px] top-1.5 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 group-hover:border-primary transition-colors z-10">
                    <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${gradient} group-hover:scale-125 transition-transform`} />
                  </span>

                  {/* Step Card Content */}
                  <Card className="p-6 border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-950/20 shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      {/* Left: Icon and Title */}
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-sm shrink-0`}>
                          <StepIcon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold uppercase text-primary tracking-wider">
                            Step {index + 1}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                            {step.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Right: Duration pill */}
                      <div className="flex items-center gap-1.5 text-xs text-muted font-bold bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850 px-2.5 py-1 rounded-lg self-start shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{step.duration}</span>
                      </div>
                    </div>

                    {/* Key Topics List inside the Step */}
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Skills & Focus Areas
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {step.topics.map((topic, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 rounded-md bg-slate-50/60 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-850 px-2 py-0.5 text-xs text-slate-600 dark:text-slate-450 font-medium"
                          >
                            <CheckCircle2 className="w-3 h-3 text-success shrink-0" />
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
