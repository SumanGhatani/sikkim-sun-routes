import { createFileRoute } from "@tanstack/react-router";
import { TrainFront, BedDouble, Calculator, Mountain, ArrowRight, Leaf } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sikkim Trails — Plan your Himalayan trip the easy way" },
      {
        name: "description",
        content:
          "Plan a budget-friendly Sikkim trip: train routes, trusted stays & cabs, and a live budget calculator. Built for slow networks.",
      },
      { property: "og:title", content: "Sikkim Trails — Plan your Himalayan trip" },
      {
        property: "og:description",
        content: "Train guide, stays & cabs, and a budget calculator for Sikkim travel.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
            <Mountain className="h-5 w-5 text-primary" strokeWidth={1.75} />
            Sikkim Trails
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground sm:flex">
            <a href="#features" className="hover:text-foreground">Guides</a>
            <a href="#proof" className="hover:text-foreground">Travelers</a>
            <a href="#features" className="hover:text-foreground">Plan trip</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                <Leaf className="h-3.5 w-3.5" strokeWidth={2} />
                Built for slow networks
              </span>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] sm:text-6xl">
                Plan your Sikkim trip <em className="not-italic text-primary">without the chaos.</em>
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                Trains, stays, cabs and a live budget — everything you need to reach the Himalayas,
                in one quiet little site.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Start planning <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  See the guides
                </a>
              </div>
            </div>
          </div>
          {/* Subtle mountain silhouette via SVG (no images) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 220"
            className="block w-full text-secondary"
            preserveAspectRatio="none"
          >
            <path
              d="M0 180 L160 80 L260 150 L380 40 L520 160 L640 90 L780 170 L900 60 L1040 150 L1200 90 L1200 220 L0 220 Z"
              fill="currentColor"
            />
          </svg>
        </section>

        {/* Features */}
        <section id="features" className="bg-[color:var(--fog)]">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mb-12 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Three tools, zero fluff
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Everything Sikkim, none of the noise.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Feature
                icon={<TrainFront className="h-6 w-6" strokeWidth={1.75} />}
                title="Train Guide"
                body="Step-by-step from your city to NJP — routes, timings and the smartest connections."
              />
              <Feature
                icon={<BedDouble className="h-6 w-6" strokeWidth={1.75} />}
                title="Stays & Cabs"
                body="Trusted homestays and shared cab rates across Gangtok, Pelling and North Sikkim."
              />
              <Feature
                icon={<Calculator className="h-6 w-6" strokeWidth={1.75} />}
                title="Budget Calculator"
                body="Tap in your days and group size — get a real number, not a marketing one."
              />
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section id="proof" className="border-y border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Trusted by traveler communities
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-muted-foreground">
              <span>r/IndiaTravel</span>
              <span aria-hidden>•</span>
              <span>Backpackers India</span>
              <span aria-hidden>•</span>
              <span>NE Explorers</span>
              <span aria-hidden>•</span>
              <span>Himalayan Hikers</span>
            </div>
            <p className="mx-auto mt-10 max-w-2xl font-display text-2xl leading-snug">
              “Saved me three browser tabs and one panic attack the night before my train.”
            </p>
            <p className="mt-3 text-sm text-muted-foreground">— Aanya, first-time visitor</p>
          </div>
        </section>
      </main>

      <footer className="bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 text-sm">
            <Mountain className="h-4 w-4 text-primary" strokeWidth={1.75} />
            <span className="font-display font-semibold">Sikkim Trails</span>
            <span className="text-muted-foreground">· Travel light.</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sikkim Trails. An independent guide.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <article className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-sm">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
        Open <ArrowRight className="h-4 w-4" />
      </span>
    </article>
  );
}
