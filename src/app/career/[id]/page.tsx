import { notFound } from 'next/navigation';
import { Container, Heading } from '@/components/ui';
import { Footer } from '@/features/home/components';
import { getCareerDetails } from '@/features/explore/data/careerDetails';
import { careersData } from '@/features/explore/data/careers';
import {
  CareerDetailsHero,
  CareerOverviewSection,
  CareerRoadmapSection,
  CareerInsightsSection,
  AIRecommendPreview,
  StudentReviews,
  CareerCTA,
  CareerGrid
} from '@/features/explore/components';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CareerDetailsPage(props: PageProps) {
  const { id } = await props.params;
  const career = getCareerDetails(id);

  if (!career) {
    notFound();
  }

  // Get 4 related careers (prioritizing same category first)
  const relatedCareers = careersData
    .filter((c) => c.id !== id)
    .sort((a, b) => {
      if (a.category === career.category && b.category !== career.category) return -1;
      if (a.category !== career.category && b.category === career.category) return 1;
      return 0;
    })
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col justify-between">
      <div className="flex-1">
        {/* 1 & 2. Breadcrumb and Hero Section */}
        <CareerDetailsHero career={career} />

        <Container className="py-12 space-y-12">
          {/* 3. Career Overview Section */}
          <CareerOverviewSection career={career} />

          {/* 4 & 5. Required Skills and Learning Roadmap */}
          <CareerRoadmapSection career={career} />

          {/* 6. Salary & Career Insights Section */}
          <CareerInsightsSection career={career} />

          {/* 7. AI Recommendation Preview */}
          <AIRecommendPreview />

          {/* 8. Related Careers Grid */}
          <section className="py-12 border-t border-slate-100 dark:border-slate-800/60">
            <div className="space-y-6">
              <Heading level={3} className="text-xl sm:text-2xl font-bold text-foreground">
                Related Careers
              </Heading>
              <p className="text-sm text-muted max-w-xl">
                Explore other similar career paths in the tech directory that match your category profile.
              </p>
              <CareerGrid careers={relatedCareers} />
            </div>
          </section>

          {/* 9. Student Reviews Grid */}
          <StudentReviews reviews={career.reviews} />

          {/* 10. Bottom CTA Section */}
          <CareerCTA />
        </Container>
      </div>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
