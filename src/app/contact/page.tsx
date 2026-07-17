import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { Footer } from '@/features/home/components';
import {
  ContactHero,
  ContactCards,
  ContactForm,
  OfficeLocation,
  FAQPreview
} from '@/features/public/components/ContactComponents';

export const metadata: Metadata = {
  title: 'Contact Us - CareerPilot AI',
  description: 'Reach out to CareerPilot AI team for product support, feature inquiries, or scheduling slots with career mentors.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col justify-between">
      <div className="flex-1">
        {/* Contact Hero */}
        <ContactHero />

        <Container className="py-12 space-y-12">
          {/* Support Channels & Info Cards */}
          <ContactCards />

          {/* Form and Sidebar channel metrics */}
          <ContactForm />

          {/* Office Location Maps block */}
          <OfficeLocation />

          {/* FAQ Preview Accordions */}
          <FAQPreview />
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
