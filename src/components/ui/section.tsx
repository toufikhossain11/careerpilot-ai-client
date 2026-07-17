import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`space-y-6 rounded-3xl border border-zinc-200/80 bg-white/90 p-8 shadow-sm shadow-zinc-950/5 ring-1 ring-zinc-900/5 backdrop-blur-xl ${className}`.trim()}>
      {children}
    </section>
  );
}
