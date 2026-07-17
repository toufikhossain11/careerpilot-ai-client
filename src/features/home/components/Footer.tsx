'use client';

import Link from 'next/link';
import { Container } from '@/components/ui';
import { Heart, Sparkles } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore Careers', href: '/explore' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const resources = [
    { label: 'Career Guides', href: '/resources/career-guides' },
    { label: 'Resume Tips', href: '/resources/resume-tips' },
    { label: 'Interview Prep', href: '/resources/interview-prep' },
    { label: 'Learning Roadmaps', href: '/resources/learning-roadmaps' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Settings', href: '/cookies' },
    { label: 'Help & Support', href: '/support' },
  ];

  const socials = [
    {
      href: 'https://github.com',
      label: 'GitHub',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      href: 'https://facebook.com',
      label: 'Facebook',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      href: 'https://twitter.com',
      label: 'Twitter',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full py-2 text-sm font-semibold text-white transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-primary"
              aria-label="CareerPilot AI home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-secondary">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">CareerPilot AI</span>
            </Link>
            <p className="max-w-md text-sm sm:text-base leading-7 text-slate-400">
              An AI-powered career mentoring platform designed to help students, fresh graduates, job seekers, and career switchers navigate their professional paths, master new skills, and land their dream jobs.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-350 border border-slate-800 hover:border-secondary hover:text-secondary hover:bg-slate-850 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-250 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm">
              {resources.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-250 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Legal & Support</h4>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-250 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 mt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-500">
          <p className="font-medium text-slate-500">
            &copy; {new Date().getFullYear()} CareerPilot AI. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-medium">
            Made with <Heart className="w-4 h-4 text-rose-500 fill-current" /> using{' '}
            <span className="text-slate-400 font-semibold">Next.js</span> and{' '}
            <span className="text-slate-400 font-semibold">TypeScript</span>.
          </p>
        </div>
      </Container>
    </footer>
  );
}
