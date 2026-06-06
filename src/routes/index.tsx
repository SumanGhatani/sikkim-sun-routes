import { createFileRoute, Link } from "@tanstack/react-router";
import { TrainFront, BedDouble, Calculator, ArrowRight, Train, Car, Wallet, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "sikkimtrainguide.com — Plan Your Sikkim Trip" },
      {
        name: "description",
        content:
          "Plan your Sikkim trip — train routes, stays, cabs & budget tools for first-time travelers.",
      },
      { property: "og:title", content: "sikkimtrainguide.com — Plan Your Sikkim Trip" },
      {
        property: "og:description",
        content: "Real routes, realistic costs, and trusted trip planning for Sikkim.",
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
              Plan Your Sikkim Trip — Train Routes, Stays, Cabs & Budget Tools
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Built for first-time travelers who need real routes, realistic costs, and trusted trip planning.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/train-guide"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Plan My Trip <ArrowRight className="h-4 w-4" />
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

      {/* Start Here */}
      <section id="start-here" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mb-10 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Start Here</p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              Your trip in three steps
            </h2>
          </div>
          <ol className="grid gap-4 sm:grid-cols-3">
            <StartStep
              num="1"
              icon={<Train className="h-5 w-5" strokeWidth={1.75} />}
              title="How to Reach Sikkim by Train"
              to="/train-guide"
            />
            <StartStep
              num="2"
              icon={<Car className="h-5 w-5" strokeWidth={1.75} />}
              title="NJP to Gangtok — Cab Costs & Booking"
              to="/njp-to-gangtok"
            />
            <StartStep
              num="3"
              icon={<Wallet className="h-5 w-5" strokeWidth={1.75} />}
              title="Trip Budget Calculator"
              to="/budget-calculator"
            />
          </ol>
        </div>
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

          {/* Why Travelers Trust Us */}
          <div className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold sm:text-2xl">Why Travelers Trust Us</h3>
            <ul className="mt-5 space-y-3 text-sm sm:text-base">
              {[
                "Real routes, not generic advice",
                "Verified homestays & cab partners",
                "Trip planning in one place",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-secondary text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
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

function StartStep({
  num,
  icon,
  title,
  to,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  to: string;
}) {
  return (
    <li>
      <Link
        to={to}
        className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-sm"
      >
        <div className="flex flex-none items-center gap-2">
          <span className="font-display text-2xl font-bold text-primary/40">{num}</span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
            {icon}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-base font-semibold leading-snug sm:text-lg">{title}</h3>
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
            Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </li>
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
