import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/budget-calculator")({
  head: () => ({
    meta: [
      { title: "Budget Calculator — sikkimtrainguide.com" },
      { name: "description", content: "Estimate your Sikkim trip cost in 60 seconds." },
    ],
  }),
  component: BudgetCalculator,
});

function BudgetCalculator() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h1 className="font-display text-4xl font-bold">Budget Calculator</h1>
        <p className="mt-4 text-muted-foreground">
          Coming soon. Estimate your Sikkim trip cost in 60 seconds.
        </p>
      </div>
    </SiteLayout>
  );
}
