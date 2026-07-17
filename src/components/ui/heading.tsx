import type { ElementType, ReactNode } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

const headingStyles: Record<NonNullable<HeadingProps["level"]>, string> = {
  1: "text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl",
  2: "text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl",
  3: "text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl",
  4: "text-xl font-semibold tracking-tight text-slate-950",
};

export function Heading({
  level = 1,
  children,
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as ElementType;

  return (
    <Tag className={`${headingStyles[level]} ${className}`.trim()}>{children}</Tag>
  );
}
