import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/itineraries")({
  head: () => ({
    meta: [
      { title: "Itineraries — sikkimtrainguide.com" },
      { name: "description", content: "Curated Sikkim itineraries for every kind of traveler." },
    ],
  }),
  component: Itineraries,
});

function Itineraries() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h1 className="font-display text-4xl font-bold">Itineraries</h1>
        <p className="mt-4 text-muted-foreground">
          Coming soon. Curated Sikkim travel itineraries for every kind of traveler.
        </p>
      </div>
    </SiteLayout>
  );
}
