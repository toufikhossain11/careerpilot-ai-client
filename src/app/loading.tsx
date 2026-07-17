export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-200 border-t-slate-950 animate-spin" aria-label="Loading" />
    </div>
  );
}
