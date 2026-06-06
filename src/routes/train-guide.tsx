import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/train-guide")({
  head: () => ({
    meta: [
      { title: "Train Guide — sikkimtrainguide.com" },
      { name: "description", content: "Step-by-step NJP to Sikkim train routes, schedules, and booking tips." },
    ],
  }),
  component: TrainGuide,
});

function TrainGuide() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h1 className="font-display text-4xl font-bold">Train Guide</h1>
        <p className="mt-4 text-muted-foreground">
          Coming soon. Detailed NJP → Sikkim train routes, schedules, and booking tips.
        </p>
      </div>
    </SiteLayout>
  );
}
