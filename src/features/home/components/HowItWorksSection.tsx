'use client';

import { motion } from 'framer-motion';
import { Container, Heading, Card } from '@/components/ui';
import { UserPlus, Upload, Zap, BookOpen, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up and set up your profile in minutes to get started',
  },
  {
    number: 2,
    icon: Upload,
    title: 'Upload Resume',
    description: 'Share your resume and let AI analyze your qualifications',
  },
  {
    number: 3,
    icon: Zap,
    title: 'Get AI Analysis',
    description: 'Receive personalized career recommendations based on your profile',
  },
  {
    number: 4,
    icon: BookOpen,
    title: 'Start Learning',
    description: 'Follow your customized learning roadmap and grow your skills',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorksSection() {
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
            How It Works
          </Heading>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Four simple steps to start your AI-guided career journey
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <motion.div variants={itemVariants}>
                  <Card className="h-full space-y-4 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg font-bold text-primary">
                        {String(step.number).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="inline-flex p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-base text-muted">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>

                {/* Arrow for desktop - connects steps */}
                {!isLast && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-primary/40"
                    >
                      <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                    </motion.div>
                  </div>
                )}

                {/* Vertical line for mobile */}
                {!isLast && (
                  <div className="lg:hidden h-6 w-0.5 bg-gradient-to-b from-primary to-transparent ml-6 mt-2 mb-4" />
                )}
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
