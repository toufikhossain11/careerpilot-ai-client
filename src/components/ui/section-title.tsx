interface SectionTitleProps {
  title: string;
  description: string;
  className?: string;
}

export function SectionTitle({
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`space-y-2 ${className}`.trim()}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
        {title}
      </p>
      <p className="max-w-xl text-base leading-7 text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}
