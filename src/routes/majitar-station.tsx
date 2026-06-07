import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Train, MapPin, Clock, Wallet, TrendingUp, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/majitar-station")({
  head: () => ({
    meta: [
      { title: "Majitar (Rangpoo) Railway Station — Sikkim's First Train Hub" },
      {
        name: "description",
        content:
          "Everything about Sikkim's new Majitar (Rangpoo) railway station: opening date, distance to Gangtok, cab costs, and how it transforms travel.",
      },
      {
        property: "og:title",
        content: "Majitar (Rangpoo) Railway Station — Sikkim's First Train Connection",
      },
      {
        property: "og:description",
        content:
          "Sikkim's first direct train access. Opening 2026-2027. Just 40 km from Gangtok.",
      },
    ],
  }),
  component: MajitarStation,
});

const facts = [
  { label: "Status", value: "🚧 Under Construction (June 2026)" },
  { label: "Location", value: "Majitar, East Sikkim (near Rangpoo border)" },
  { label: "Distance to Gangtok", value: "~40 km" },
  { label: "Expected Opening", value: "2026-2027" },
  { label: "Managed by", value: "Indian Railways (Northeast Frontier Railway)" },
  { label: "Why It Matters", value: "First direct train access to Sikkim!" },
];

const comparison = [
  { feature: "Distance to Gangtok", njp: "124 km", majitar: "40 km" },
  { feature: "Travel Time", njp: "4-5 hours", majitar: "1.5-2 hours" },
  { feature: "Cab Cost", njp: "₹3,500-₹5,000", majitar: "₹1,500-₹2,500" },
  { feature: "Status", njp: "Operational", majitar: "Opening 2026-2027" },
];

const benefits = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Saves 2-3 Hours",
    body: "No more 4-5 hour drives from NJP.",
  },
  {
    icon: <Wallet className="h-5 w-5" />,
    title: "Cuts Costs by 50%",
    body: "Cabs from Majitar to Gangtok will cost half as much.",
  },
  {
    icon: <Train className="h-5 w-5" />,
    title: "Direct Rail Access",
    body: "First time Sikkim has its own railway station.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Tourism Boom",
    body: "Easier access = more visitors = better local economy.",
  },
];

const steps = [
  "Arrive at Majitar Station (future)",
  "Book a Cab/Shared Taxi (₹1,500-₹2,500 for private cab)",
  "1.5-2 Hour Scenic Drive to Gangtok",
  "Check Into Your Hotel and start exploring!",
];

const routes = [
  { from: "Kolkata → Majitar", time: "~6-7 hours" },
  { from: "Delhi → Majitar", time: "~18-20 hours (via connections)" },
  { from: "Guwahati → Majitar", time: "~8-10 hours" },
  { from: "Siliguri → Majitar", time: "~3 hours" },
];

const faqs = [
  {
    q: "When will Majitar (Rangpoo) station open?",
    a: "Expected 2026-2027. We update this page monthly with official news.",
  },
  {
    q: "Is Rangpoo the same as Majitar?",
    a: "Yes! Rangpoo is the town, Majitar is the station name. They're in the same area.",
  },
  {
    q: "Should I wait for Majitar or book to NJP now?",
    a: "If traveling in 2026, use NJP. If you can wait until 2027, Majitar will save time/money.",
  },
  {
    q: "Will NJP become obsolete?",
    a: "No. NJP will still serve many routes, but Majitar will be the best option for Sikkim.",
  },
];

function MajitarStation() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-[#0c2340] via-[#1a4a6e] to-[#2d8a9e] text-white">
        <Train
          className="absolute -right-10 -bottom-10 h-72 w-72 text-white/5"
          strokeWidth={1}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
            New Station
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-[1.1] sm:text-5xl">
            Majitar (Rangpoo) Railway Station — Sikkim's First Train Connection
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            Everything about Sikkim's new railway station at Majitar (Rangpoo): opening date,
            distance to Gangtok, cab costs, and how it transforms travel.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-14 space-y-16">
        {/* Key Facts Box */}
        <section>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Key Facts</h2>
          <div className="mt-6 grid gap-3 rounded-2xl border-2 border-primary/30 bg-secondary p-5 sm:grid-cols-2 sm:p-6">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {f.label}
                </span>
                <span className="font-semibold text-foreground">{f.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Quick Comparison: NJP vs Majitar (Rangpoo)
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Feature</th>
                    <th className="px-4 py-3 font-semibold">NJP (Current)</th>
                    <th className="px-4 py-3 font-semibold text-primary">Majitar (Future)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.feature} className="border-t border-border bg-card">
                      <td className="px-4 py-3 font-medium">{row.feature}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.njp}</td>
                      <td className="px-4 py-3 font-semibold text-primary">{row.majitar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why game-changer */}
        <section>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Why This Station is a Game-Changer
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  {b.icon}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to reach */}
        <section>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            How to Reach Gangtok from Majitar (Rangpoo) Station
          </h2>
          <ol className="mt-6 space-y-3">
            {steps.map((s, i) => (
              <li
                key={s}
                className="flex gap-4 rounded-2xl border border-border bg-card p-4"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary font-display text-base font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="self-center text-sm sm:text-base">{s}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Expected Routes */}
        <section>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Expected Train Routes (Post-Opening)
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {routes.map((r) => (
              <div
                key={r.from}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
              >
                <span className="font-medium">{r.from}</span>
                <span className="text-sm font-semibold text-primary">{r.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Map */}
        <section>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Location</h2>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Majitar, East Sikkim — between NJP and Gangtok
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Majitar Rangpoo location"
              src="https://www.google.com/maps?q=Majitar,+Rangpo,+Sikkim&output=embed"
              loading="lazy"
              className="h-72 w-full sm:h-96"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-gradient-to-br from-[#0c2340] to-[#2d8a9e] p-8 text-center text-white sm:p-12">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Stay Updated on Majitar (Rangpoo) Station
          </h2>
          <p className="mt-3 text-white/85">
            We'll notify you as soon as the station opens or booking begins!
          </p>
          <a
            href="https://wa.me/?text=Please%20notify%20me%20when%20Majitar%20station%20opens"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0c2340] shadow-sm transition hover:bg-white/90"
          >
            📱 Get Opening Alerts on WhatsApp
          </a>
        </section>

        {/* Related */}
        <section>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Related Guides</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { to: "/njp-to-gangtok", label: "NJP to Gangtok Transport Guide" },
              { to: "/train-guide", label: "Train Booking to Sikkim" },
              { to: "/itineraries", label: "Sikkim Itineraries" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition hover:border-primary"
              >
                <span className="font-medium">{l.label}</span>
                <ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
