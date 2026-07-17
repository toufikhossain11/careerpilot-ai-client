import Link from "next/link";
import { Button, Container, Heading, Section, SectionTitle } from "@/components/ui";
import { siteConfig } from "@/constants/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Container className="flex min-h-screen flex-col justify-center py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">
          <section className="space-y-6 rounded-3xl border border-zinc-200/80 bg-white/90 p-10 shadow-sm shadow-zinc-950/5 ring-1 ring-zinc-900/5 backdrop-blur-xl">
            <Heading className="text-slate-950">CareerPilot AI</Heading>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" type="button">
                View components
              </Button>
              <Link
                href="/#foundation"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                Explore foundation
              </Link>
            </div>
          </section>

          <div id="foundation" className="grid gap-6 xl:grid-cols-3">
            <Section>
              <SectionTitle
                title="Layout and styling"
                description="A global layout and modern theme variables make application styling consistent and extensible."
              />
            </Section>
            <Section>
              <SectionTitle
                title="Reusable UI"
                description="Components such as buttons, headings, containers, and sections keep the UI predictable and easy to maintain."
              />
            </Section>
            <Section>
              <SectionTitle
                title="Scalable folders"
                description="Dedicated directories for providers, services, hooks, and feature modules help your application grow cleanly."
              />
            </Section>
          </div>
        </div>
      </Container>
    </main>
  );
}
