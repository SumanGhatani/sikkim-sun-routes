import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/njp-to-gangtok")({
  head: () => ({
    meta: [
      { title: "NJP to Gangtok — Cab Costs & Booking" },
      {
        name: "description",
        content:
          "Cab and shared taxi options from NJP to Gangtok with realistic costs and booking tips.",
      },
    ],
  }),
  component: NjpToGangtok,
});

function NjpToGangtok() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Cabs</p>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          NJP to Gangtok — Cab Costs & Booking
        </h1>
        <p className="mt-4 text-muted-foreground">
          Detailed cab and shared taxi guide coming soon. Expect a 4–5 hour drive with options
          ranging from shared sumos (₹300–₹500/seat) to private cabs (₹3,500–₹5,000).
        </p>
        <Link
          to="/budget-calculator"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Estimate your trip budget <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
