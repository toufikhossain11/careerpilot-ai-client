import {
  HeroSection,
  TrustedCompaniesSection,
  AIFeaturesSection,
  CareerCategoriesSection,
  HowItWorksSection,
  StatisticsSection,
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
    </main>
  );
}
