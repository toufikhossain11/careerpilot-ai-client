'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Container, Heading, Card } from '@/components/ui';

interface StatisticItemProps {
  value: number;
  label: string;
  suffix?: string;
}

function StatisticItem({ value, label, suffix = '' }: StatisticItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let currentValue = 0;
    const increment = value / 20;
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(currentValue));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Card className="text-center space-y-2">
        <div className="text-4xl sm:text-5xl font-bold text-primary">
          {displayValue}
          {suffix}
        </div>
        <p className="text-lg font-semibold text-foreground">{label}</p>
      </Card>
    </motion.div>
  );
}

const statistics = [
  {
    value: 10000,
    label: 'Users',
    suffix: 'K+',
  },
  {
    value: 500,
    label: 'Career Paths',
    suffix: '+',
  },
  {
    value: 95,
    label: 'Success Rate',
    suffix: '%',
  },
  {
    value: 4,
    label: 'Average Rating',
    suffix: '.9★',
  },
];

export function StatisticsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16"
        >
          <Heading level={2} className="text-3xl sm:text-4xl">
            Trusted by Thousands Worldwide
          </Heading>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Join thousands of professionals who have transformed their careers with CareerPilot AI
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {statistics.map((stat, index) => (
            <StatisticItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
