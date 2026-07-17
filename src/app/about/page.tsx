import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { Footer } from '@/features/home/components';
import {
  AboutHero,
  MissionVision,
  ValuesSection,
  AboutTimeline,
  WhyChooseGrid,
  AboutStats,
  TeamSection,
  AboutCTA
} from '@/features/public/components/AboutComponents';

export const metadata: Metadata = {
  title: 'About Us - CareerPilot AI',
  description: 'Learn about our mission, vision, core values, leadership team, and why candidates trust CareerPilot AI to guide their career transitions.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col justify-between">
      <div className="flex-1">
        {/* Hero Section */}
        <AboutHero />

        <Container className="py-12 space-y-12">
          {/* Mission & Vision */}
          <MissionVision />

          {/* Core Values */}
          <ValuesSection />

          {/* How It Works Timeline */}
          <AboutTimeline />

          {/* Why Choose Us */}
          <WhyChooseGrid />

          {/* Statistics Summary */}
          <AboutStats />

          {/* Leadership Team */}
          <TeamSection />

          {/* Bottom CTA Banner */}
          <AboutCTA />
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
