import { Link } from "@tanstack/react-router";
import { Mountain } from "lucide-react";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <Mountain className="h-5 w-5 text-primary" strokeWidth={1.75} />
          Sikkim Train Guide
        </Link>
        <nav className="hidden gap-7 text-sm text-muted-foreground sm:flex">
          <Link to="/train-guide" className="hover:text-foreground">Train Guide</Link>
          <Link to="/majitar-station" className="hover:text-foreground">Majitar Station</Link>
          <Link to="/itineraries" className="hover:text-foreground">Itineraries</Link>
          <Link to="/budget-calculator" className="hover:text-foreground">Budget</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 text-sm">
            <Mountain className="h-4 w-4 text-primary" strokeWidth={1.75} />
            <span className="font-display font-semibold">Sikkim Train Guide</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link to="/train-guide" className="hover:text-foreground">Train Guide</Link>
            <Link to="/majitar-station" className="hover:text-foreground">Majitar Station</Link>
            <Link to="/itineraries" className="hover:text-foreground">Itineraries</Link>
            <Link to="/budget-calculator" className="hover:text-foreground">Budget Calculator</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          © 2026 sikkimtrainguide.com | All rights reserved
        </p>
      </div>
    </footer>
  );
}
