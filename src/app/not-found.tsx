import Link from "next/link";
import { Container, Heading } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <Container className="py-20">
        <div className="mx-auto max-w-xl rounded-3xl border border-zinc-200/80 bg-white/90 p-10 text-center shadow-sm shadow-zinc-950/5 ring-1 ring-zinc-900/5 backdrop-blur-xl">
          <Heading level={2} className="text-slate-950">
            Page not found
          </Heading>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The page you are looking for does not exist. Return to the foundation homepage to continue.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back home
          </Link>
        </div>
      </Container>
    </main>
  );
}
