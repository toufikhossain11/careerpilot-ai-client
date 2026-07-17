import {
  HeroSection,
  TrustedCompaniesSection,
  AIFeaturesSection,
  CareerCategoriesSection,
  HowItWorksSection,
  StatisticsSection,
  TestimonialsSection,
  FAQSection,
  NewsletterSection,
  CTASection,
  Footer,
} from '@/features/home/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted Companies Section */}
      <TrustedCompaniesSection />

      {/* AI Features Section */}
      <AIFeaturesSection />

      {/* Career Categories Section */}
      <CareerCategoriesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Testimonials / Success Stories Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Call to Action Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

