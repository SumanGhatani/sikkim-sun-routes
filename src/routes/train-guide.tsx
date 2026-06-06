import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, Train, Car, BedDouble } from "lucide-react";

export const Route = createFileRoute("/train-guide")({
  head: () => ({
    meta: [
      { title: "How to Reach Sikkim by Train — Complete Guide for First-Timers" },
      {
        name: "description",
        content:
          "Step-by-step guide to reaching Sikkim by train via NJP, with popular trains, fares, and onward cab options.",
      },
      { property: "og:title", content: "How to Reach Sikkim by Train — Complete Guide" },
      {
        property: "og:description",
        content: "NJP routes, popular trains, fares, and onward cabs to Gangtok.",
      },
    ],
  }),
  component: TrainGuide,
});

const trains = [
  { name: "Rajdhani Express", from: "Delhi → NJP", duration: "~16 hours", fare: "₹1,500–₹3,000" },
  { name: "Kanchanjungha Express", from: "Kolkata → NJP", duration: "~10 hours", fare: "₹800–₹2,000" },
  { name: "Saraighat Express", from: "Guwahati → NJP", duration: "~4 hours", fare: "₹500–₹1,200" },
];

const steps = [
  {
    icon: <Train className="h-5 w-5" strokeWidth={1.75} />,
    title: "Reach NJP",
    body: "New Jalpaiguri (NJP) is the nearest major railway station to Sikkim. Most travelers arrive here by train from across India.",
  },
  {
    icon: <Car className="h-5 w-5" strokeWidth={1.75} />,
    title: "NJP to Gangtok by cab or shared taxi",
    body: "From NJP, take a private cab or shared taxi to Gangtok — approximately 4–5 hours of scenic mountain driving.",
  },
  {
    icon: <BedDouble className="h-5 w-5" strokeWidth={1.75} />,
    title: "Book your stay",
    body: "Pick a verified homestay or hotel in Gangtok (or onward to Pelling, Lachung, Lachen) for a smooth first night.",
  },
];

function TrainGuide() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-5 pt-14 pb-12 sm:pt-20 sm:pb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Train Guide</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-[1.1] sm:text-5xl">
            How to Reach Sikkim by Train — Complete Guide for First-Timers
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Sikkim has no railway station of its own. Here's exactly how to get there by train,
            step by step.
          </p>
        </div>
      </section>

      {/* Route breakdown */}
      <section className="mx-auto max-w-4xl px-5 py-14 pb-32">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">Route breakdown</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-primary/40">{i + 1}</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  {s.icon}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        {/* Popular Trains */}
        <h2 className="mt-16 font-display text-2xl font-bold sm:text-3xl">Popular Trains to NJP</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Indicative fares. Always check IRCTC for live availability and current pricing.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-secondary text-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Train Name</th>
                  <th className="px-4 py-3 font-semibold">From</th>
                  <th className="px-4 py-3 font-semibold">Duration</th>
                  <th className="px-4 py-3 font-semibold">Approx Fare</th>
                </tr>
              </thead>
              <tbody>
                {trains.map((t) => (
                  <tr key={t.name} className="border-t border-border bg-card">
                    <td className="px-4 py-3 font-medium">{t.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{t.from}</td>
                    <td className="px-4 py-3 text-muted-foreground">{t.duration}</td>
                    <td className="px-4 py-3 text-muted-foreground">{t.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sticky bottom CTA */}
      <div className="sticky bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-4xl flex-col items-stretch gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
          <p className="text-sm font-medium text-foreground sm:text-base">
            Book Your Train + Cab + Stay
          </p>
          <Link
            to="/budget-calculator"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Plan Your Trip Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
