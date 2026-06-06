import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — sikkimtrainguide.com" },
      { name: "description", content: "Get in touch with sikkimtrainguide.com." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h1 className="font-display text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-muted-foreground">
          Coming soon. Reach out for questions, partnerships, or feedback.
        </p>
      </div>
    </SiteLayout>
  );
}
