import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-surface text-ink dark:bg-ink dark:text-surface">
        <Navbar />

        <main className="pt-20 pb-16">
          <AppRoutes />
        </main>

        <footer className="border-t border-ink/10 dark:border-surface/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <p className="font-urw text-sm tracking-[0.10em] uppercase text-ink/70 dark:text-surface/70">
                Adrian Borges
              </p>
              <p className="font-urw text-sm text-ink/60 dark:text-surface/60">
                Frontend / Platform Engineer · Montreal
              </p>
            </div>

            <div className="flex gap-4">
              <a
                className="font-urw text-sm tracking-[0.10em] uppercase text-ink/70 dark:text-surface/70 hover:text-brand transition-colors"
                href="https://www.linkedin.com/in/adrian-borges-solari-17982513b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="font-urw text-sm tracking-[0.10em] uppercase text-ink/70 dark:text-surface/70 hover:text-brand transition-colors"
                href="https://github.com/AdrianKitsu"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>

      <Analytics />
      <SpeedInsights />
    </Router>
  );
};

export default App;
