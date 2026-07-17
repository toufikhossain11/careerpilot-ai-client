import type { Metadata } from 'next';
import { BlogPageContent } from '@/features/public/components/BlogComponents';

export const metadata: Metadata = {
  title: 'Blog - CareerPilot AI',
  description: 'Explore CareerPilot AI blog containing technical design tips, ATS resume checkers hacks, cloud computing job updates, and developer guides.',
};

export default function BlogPage() {
  return <BlogPageContent />;
}
