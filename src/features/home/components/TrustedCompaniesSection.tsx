'use client';

import { motion } from 'framer-motion';
import { Container, Section, Heading } from '@/components/ui';

const companies = [
  { name: 'Google', logo: '🔍' },
  { name: 'Microsoft', logo: '⊞' },
  { name: 'Amazon', logo: '◀' },
  { name: 'Meta', logo: 'f' },
  { name: 'Netflix', logo: 'N' },
  { name: 'Spotify', logo: '♪' },
  { name: 'Adobe', logo: 'A' },
  { name: 'IBM', logo: 'I' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export function TrustedCompaniesSection() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--background)]">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <Heading level={2} className="text-3xl sm:text-4xl">
              Trusted by learners preparing for careers at leading companies
            </Heading>
          </motion.div>

          {/* Companies Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {companies.map((company) => (
              <motion.div
                key={company.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="flex items-center justify-center rounded-xl border border-border bg-white p-4 transition-all duration-300 hover:shadow-soft cursor-pointer">
                  <span className="text-3xl font-bold text-muted transition-all duration-300 group-hover:text-foreground">
                    {company.logo}
                  </span>
                </div>
                <p className="mt-2 text-center text-xs font-medium text-muted group-hover:text-foreground transition-colors">
                  {company.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
