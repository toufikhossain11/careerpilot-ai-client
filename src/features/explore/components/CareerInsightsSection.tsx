'use client';

import { Card, Heading } from '@/components/ui';
import { DollarSign, TrendingUp, Laptop, Flame } from 'lucide-react';
import { type CareerDetails } from '../data/careerDetails';

interface CareerInsightsSectionProps {
  career: CareerDetails;
}

export function CareerInsightsSection({ career }: CareerInsightsSectionProps) {
  const formatSalary = (salary: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(salary);
  };

  const insights = [
    {
      title: 'Average Salary',
      value: formatSalary(career.averageSalary),
      subtext: 'Yearly median salary',
      icon: DollarSign,
      color: 'text-primary bg-primary/10',
      description: 'Based on current global hiring indexes for remote and mid-tier roles.',
    },
    {
      title: 'Job Growth',
      value: career.jobGrowth,
      subtext: 'Projected demand growth',
      icon: TrendingUp,
      color: 'text-accent bg-accent/10',
      description: 'Growth projection compared to other baseline tech and engineering roles.',
    },
    {
      title: 'Remote Availability',
      value: career.remoteAvailability,
      subtext: 'Work structure index',
      icon: Laptop,
      color: 'text-secondary bg-secondary/10',
      description: 'Percentage of hires offered full remote or hybrid structures.',
    },
    {
      title: 'Demand Level',
      value: career.demandLevel,
      subtext: 'Current market urgency',
      icon: Flame,
      color: 'text-orange-500 bg-orange-500/10',
      description: 'Hiring activity indicator based on active LinkedIn & Indeed openings.',
    },
  ];

  return (
    <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
      <div className="space-y-6">
        <Heading level={3} className="text-xl sm:text-2xl font-bold text-foreground">
          Salary & Career Insights
        </Heading>
        <p className="text-sm text-muted max-w-xl">
          Overview of the financial rewards, stability, and career growth potential for this role in the global job market.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <Card
                key={index}
                className="p-6 border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-950/20 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Title & Icon Header */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">
                      {insight.title}
                    </span>
                    <span className={`p-2 rounded-xl ${insight.color} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Highlight value */}
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-foreground block tracking-tight">
                      {insight.value}
                    </span>
                    <span className="text-[11px] text-muted font-semibold mt-0.5 block">
                      {insight.subtext}
                    </span>
                  </div>
                </div>

                {/* Footnote description */}
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-4 leading-relaxed pt-3 border-t border-slate-100/50 dark:border-slate-800/40">
                  {insight.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
