'use client';

import { motion } from 'framer-motion';
import { Container, Heading, Card } from '@/components/ui';
import {
  Zap,
  Lightbulb,
  MessageCircle,
  Map,
  TrendingUp,
  Target,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI Resume Analyzer',
    description:
      'Get instant feedback on your resume with AI-powered analysis and actionable suggestions to improve your chances.',
  },
  {
    icon: Lightbulb,
    title: 'Career Recommendation Engine',
    description:
      'Discover career paths perfectly aligned with your skills, experience, and interests through intelligent matching.',
  },
  {
    icon: MessageCircle,
    title: 'AI Career Chat',
    description:
      'Chat with our AI career assistant 24/7 to get personalized guidance on career decisions and strategies.',
  },
  {
    icon: Map,
    title: 'Learning Roadmap',
    description:
      'Follow structured learning paths tailored to your career goals with curated resources and milestones.',
  },
  {
    icon: TrendingUp,
    title: 'Skill Gap Analysis',
    description:
      'Identify missing skills and get personalized recommendations to bridge the gap to your target role.',
  },
  {
    icon: Target,
    title: 'Interview Preparation',
    description:
      'Prepare for interviews with AI-powered practice questions, feedback, and expert tips for your target companies.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function AIFeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--background)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16"
        >
          <Heading level={2} className="text-3xl sm:text-4xl">
            Powerful AI Features for Your Career
          </Heading>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Everything you need to accelerate your career journey with intelligent AI assistance
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full space-y-4 hover:border-primary/50 hover:shadow-soft transition-all duration-300 group cursor-pointer">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-base leading-6 text-muted">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all opacity-0 group-hover:opacity-100">
                      Learn more
                      <span className="ml-1">→</span>
                    </button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
