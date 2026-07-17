'use client';

import { AnimatePresence } from 'framer-motion';
import { CareerCard } from './CareerCard';
import { type Career } from '../data/careers';

interface CareerGridProps {
  careers: Career[];
}

export function CareerGrid({ careers }: CareerGridProps) {
  return (
    <div className="w-full py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {careers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
