'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Heading, Badge } from '@/components/ui';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-slate-100 dark:border-slate-800/60 last:border-none">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left font-semibold text-foreground text-base sm:text-lg group hover:text-primary transition-colors focus-visible:outline-none focus-visible:text-primary"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-150/40 dark:bg-slate-800/40 text-muted group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 shrink-0 ${
            isOpen ? 'rotate-180 text-primary bg-primary/10' : ''
          }`}
        >
          <ChevronDown className="h-4 w-4 transition-transform" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-base leading-7 text-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const faqs = [
    {
      question: 'How does CareerPilot AI work?',
      answer:
        'CareerPilot AI uses advanced Gemini AI models to analyze your unique professional profile, resume, and aspirations. Based on this analysis, it generates tailored career recommendations, calculates your skill gaps, designs custom learning roadmaps, and conducts interactive mock interview preparation.',
    },
    {
      question: 'Is Resume Analysis free?',
      answer:
        'Yes! Every new user gets 3 free resume analyses per month. This includes a complete ATS score check, keyword suggestions, formatting critique, and section-by-section improvements. Premium plans offer unlimited scans and direct resume rebuilding.',
    },
    {
      question: 'Which AI model powers the platform?',
      answer:
        'CareerPilot AI is powered by the latest Gemini 2.5 Flash and Pro models, which offer state-of-the-art context window capabilities, fast generation speeds, and highly accurate structured JSON reasoning.',
    },
    {
      question: 'Can I save career recommendations?',
      answer:
        'Absolutely. Once you find a career path you like or receive custom AI recommendations, you can save them directly to your dashboard to track your roadmap progress, save notes, and upload tailored resumes.',
    },
    {
      question: 'How accurate are the AI suggestions?',
      answer:
        'The AI suggestions are highly personalized because they look at real-time global job trends, standardized career matrices, and your specific history. While AI recommendations should be treated as guidance, they closely align with current professional standards.',
    },
    {
      question: 'Can beginners use this platform?',
      answer:
        'Yes, CareerPilot AI is designed for students, fresh graduates, and career switchers alike. It adapts to your current level and builds step-by-step learning roadmaps starting from foundational concepts all the way to advanced techniques.',
    },
    {
      question: 'How do I upload my resume?',
      answer:
        'You can upload your resume directly as a PDF or DOCX file, or copy-paste your text inside our analyzer. The system instantly parses it in the browser and sends the text securely to the API for evaluation.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Security is our top priority. We do not store your raw resume files or personal contact details. All data is processed using encrypted transit protocols and only shared with the Gemini API to perform your analysis.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[var(--surface)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Header Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-5 lg:sticky lg:top-24 h-fit"
          >
            <Badge variant="primary" className="px-4 py-1 text-xs">
              FAQ
            </Badge>
            <Heading level={2} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Frequently Asked Questions
            </Heading>
            <p className="text-lg text-muted leading-8">
              Have questions about CareerPilot AI? Find quick answers here or reach out to our team via the contact page.
            </p>
          </motion.div>

          {/* Right Column - Accordions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-slate-950/20 rounded-[2rem] p-6 sm:p-10 border border-slate-100 dark:border-slate-800/60 shadow-sm"
          >
            <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
