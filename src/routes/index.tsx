import { createFileRoute, Link } from "@tanstack/react-router";
import { TrainFront, BedDouble, Calculator, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "sikkimtrainguide.com — Book Trains, Stays & Cabs for Sikkim" },
      {
        name: "description",
        content:
          "The only platform to book trains to Sikkim, find stays & cabs, and plan your budget—all in one place.",
      },
      { property: "og:title", content: "sikkimtrainguide.com — Sikkim Travel Made Easy" },
      {
        property: "og:description",
        content: "Verified train routes, homestays, and trip cost estimates for Sikkim travel.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="max-w-3xl">
            <h1 className="mt-5 font-display text-3xl leading-[1.1] font-bold sm:text-5xl">
              The Only Platform to Book Trains to Sikkim, Find Stays & Cabs, and Plan Your Budget—All in One Place
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              No more juggling multiple sites. Get verified train routes, homestays, and trip cost estimates—fast.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/train-guide"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Plan My Trip Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/train-guide"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                See the guides
              </Link>
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
              Everything you need
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              Three tools. One trip. Zero hassle.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={<TrainFront className="h-6 w-6" strokeWidth={1.75} />}
              title="Train Guide"
              body="Step-by-step NJP → Sikkim train routes, schedules, and booking tips."
            />
            <Feature
              icon={<BedDouble className="h-6 w-6" strokeWidth={1.75} />}
              title="Stays & Cabs"
              body="Handpicked homestays and trusted taxi partners for a hassle-free trip."
            />
            <Feature
              icon={<Calculator className="h-6 w-6" strokeWidth={1.75} />}
              title="Budget Calculator"
              body="Estimate your Sikkim trip cost in 60 seconds."
            />
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section id="proof" className="border-y border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <p className="text-sm font-medium text-muted-foreground/60">
            Trusted by 500+ travelers in 2026
          </p>
        </div>
      </section>
    </SiteLayout>
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
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </article>
  );
}
