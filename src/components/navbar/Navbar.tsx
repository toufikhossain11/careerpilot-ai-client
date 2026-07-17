'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Menu, Sparkles, UserCircle, X } from "lucide-react";
import { Button } from "@/components/ui";

const loggedOutLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Careers", href: "/explore" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const loggedInLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Careers", href: "/explore" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "Resume Analyzer", href: "/resume-analyzer" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const profileItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/settings" },
  { label: "Logout", href: "/logout" },
];

export function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isLoggedIn = false;
  const navItems = isLoggedIn ? loggedInLinks : loggedOutLinks;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200/60 bg-white/75 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-card" : "shadow-none"
      }`}
    >
      <div className="page-container flex h-16 items-center gap-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-full px-3 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(79,70,229,0.15)]"
          aria-label="CareerPilot AI home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(79,70,229,0.1)] text-[var(--primary)] transition-transform duration-200 group-hover:-translate-y-0.5">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">CareerPilot AI</span>
        </Link>

        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-full px-4 py-2 transition duration-200 ease-out ${
                      isActive
                        ? "bg-[var(--primary)] text-white shadow-card"
                        : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-muted)]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="rounded-full border border-[var(--border)] bg-transparent px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition duration-200 ease-out hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(79,70,229,0.12)]"
                >
                  Login
                </Link>
                <Button variant="primary" size="sm">
                  Register
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition duration-200 ease-out hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(79,70,229,0.12)]"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                </button>
                <details className="relative">
                  <summary className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition duration-200 ease-out hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(79,70,229,0.12)]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--muted)]">
                      <UserCircle className="h-5 w-5" />
                    </span>
                    <span>Guest</span>
                    <ChevronDown className="h-4 w-4 text-[var(--muted)]" />
                  </summary>
                  <div className="absolute right-0 z-10 mt-3 w-48 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-card">
                    <div className="space-y-1">
                      {profileItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-2xl px-3 py-2 text-sm text-[var(--foreground)] transition duration-200 ease-out hover:bg-[var(--surface-muted)]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            )}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition duration-200 ease-out hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(79,70,229,0.12)] lg:hidden"
            onClick={() => setDrawerOpen((current) => !current)}
            aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={drawerOpen}
          >
            {drawerOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-50 w-[min(90vw,320px)] transform bg-[var(--surface)] p-6 shadow-card transition duration-300 ease-out lg:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(79,70,229,0.1)] text-[var(--primary)]">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-[var(--foreground)]">CareerPilot AI</span>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition duration-200 ease-out hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(79,70,229,0.12)]"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8">
          <ul className="space-y-2 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeDrawer}
                    className={`block rounded-3xl px-4 py-3 transition duration-200 ease-out ${
                      isActive
                        ? "bg-[var(--primary)] text-white"
                        : "text-[var(--foreground)] hover:bg-[var(--surface-muted)]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-8 space-y-3">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                onClick={closeDrawer}
                className="block rounded-full border border-[var(--border)] px-4 py-3 text-center text-sm font-semibold text-[var(--foreground)] transition duration-200 ease-out hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Login
              </Link>
              <Button variant="primary" size="lg" className="w-full" onClick={closeDrawer}>
                Register
              </Button>
            </>
          ) : (
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-4">
              <p className="text-sm font-semibold text-[var(--foreground)]">Guest options</p>
              <div className="mt-3 space-y-2">
                {profileItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeDrawer}
                    className="block rounded-2xl px-4 py-3 text-sm text-[var(--foreground)] transition duration-200 ease-out hover:bg-[var(--surface)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
