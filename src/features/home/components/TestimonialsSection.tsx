'use client';

import { motion } from 'framer-motion';
import { Container, Heading, Card, Badge } from '@/components/ui';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Software Engineer',
    company: 'Google',
    avatar: 'SJ',
    gradient: 'from-blue-500 to-indigo-600',
    rating: 5,
    review:
      "CareerPilot's resume analysis was a game-changer. The AI suggested exactly the keywords I was missing for Google's ATS. Within three weeks of applying the suggestions, I landed my first technical interview!",
  },
  {
    name: 'David Chen',
    role: 'Data Scientist',
    company: 'Meta',
    avatar: 'DC',
    gradient: 'from-purple-500 to-pink-600',
    rating: 5,
    review:
      'The AI Career Chat gave me a structured roadmap to transition from data analyst to scientist. It recommended libraries and projects that made my portfolio stand out. Unbelievable tool!',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Manager',
    company: 'Microsoft',
    avatar: 'ER',
    gradient: 'from-orange-400 to-red-500',
    rating: 5,
    review:
      'As a new graduate, I was lost. The AI Recommendations suggested Product Management based on my leadership roles in student projects. The interview prep questions were spot on.',
  },
  {
    name: 'Marcus Thompson',
    role: 'DevOps Engineer',
    company: 'Amazon',
    avatar: 'MT',
    gradient: 'from-emerald-400 to-teal-600',
    rating: 5,
    review:
      'The skill gap analysis showed me exactly what I was lacking in my cloud architecture knowledge. The curated roadmap helped me structure my learning and get certified in record time.',
  },
  {
    name: 'Aisha Patel',
    role: 'UX Designer',
    company: 'Airbnb',
    avatar: 'AP',
    gradient: 'from-rose-500 to-pink-500',
    rating: 5,
    review:
      'I uploaded my traditional resume and CareerPilot helped me rewrite it to focus on digital UX metrics. The interface is clean, soft, and so inspiring to work with every day!',
  },
  {
    name: 'Liam O\'Connor',
    role: 'Full Stack Developer',
    company: 'Vercel',
    avatar: 'LO',
    gradient: 'from-cyan-500 to-blue-600',
    rating: 5,
    review:
      "The learning roadmaps are top-tier. CareerPilot laid out a step-by-step path for Next.js, TypeScript, and state management. Now I'm building products at Vercel. Highly recommend!",
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};


export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-800/40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16"
        >
          <div className="flex justify-center">
            <Badge variant="primary" className="px-4 py-1 text-xs">
              Success Stories
            </Badge>
          </div>
          <Heading level={2} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Loved by Students and Job Seekers
          </Heading>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            See how CareerPilot AI has helped thousands of professionals land their dream roles, transition fields, and accelerate their learning.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className="flex">
              <Card className="flex flex-col justify-between w-full h-full p-8 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-slate-950/40 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-sm relative overflow-hidden group">
                <div className="space-y-5">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-base leading-7 text-slate-600 dark:text-slate-350 italic">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                </div>

                {/* User Profile */}
                <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-100 dark:border-slate-850">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br text-white font-bold text-base shadow-sm shrink-0 ${testimonial.gradient}`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center rounded-lg bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {testimonial.company}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
