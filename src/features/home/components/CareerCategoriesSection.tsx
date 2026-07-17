'use client';

import { motion } from 'framer-motion';
import { Container, Heading, Card, Badge } from '@/components/ui';
import {
  Code2,
  Database,
  Layers,
  Palette,
  Smartphone,
  Settings,
  Cpu,
  Shield,
} from 'lucide-react';

const categories = [
  {
    icon: Code2,
    title: 'Frontend',
    positions: '2,847',
  },
  {
    icon: Database,
    title: 'Backend',
    positions: '3,124',
  },
  {
    icon: Layers,
    title: 'Full Stack',
    positions: '1,956',
  },
  {
    icon: Palette,
    title: 'UI/UX',
    positions: '1,234',
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    positions: '2,341',
  },
  {
    icon: Settings,
    title: 'DevOps',
    positions: '1,512',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    positions: '1,876',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    positions: '1,423',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export function CareerCategoriesSection() {
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
            Explore Career Paths
          </Heading>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Choose from diverse career categories and discover opportunities that match your interests
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full space-y-4 group hover:border-secondary/50 cursor-pointer transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="inline-flex p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/15 transition-colors">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.positions}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      Open positions available
                    </p>
                  </div>

                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-full px-3 py-2 text-sm font-medium text-secondary hover:bg-secondary/5 rounded-lg transition-colors">
                      Explore →
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
