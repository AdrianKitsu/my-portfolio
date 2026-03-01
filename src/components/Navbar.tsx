import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

type NavItem = {
  label: string;
  path: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  {
    label: "Download CV",
    path: "/Adrian Borges Solari - CV.pdf",
    external: true,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "px-3 py-2 rounded-md font-urw text-sm tracking-[0.12em] uppercase",
      "transition-colors duration-200",
      isActive
        ? "text-surface bg-brand/20"
        : "text-surface/80 hover:text-surface hover:bg-surface/10",
    ].join(" ");

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "block w-full px-4 py-3 rounded-lg",
      "font-urw text-base tracking-[0.10em] uppercase",
      "transition-colors duration-200",
      isActive
        ? "bg-brand text-surface"
        : "text-surface/90 hover:bg-surface/10 hover:text-surface",
    ].join(" ");

  const desktopCtaClass =
    "px-4 py-2 rounded-lg font-urw text-sm tracking-[0.12em] uppercase bg-brand text-surface hover:brightness-110 transition";

  const mobileCtaClass =
    "block w-full px-4 py-3 rounded-lg font-urw text-base tracking-[0.10em] uppercase bg-brand text-surface hover:brightness-110 transition";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-ink/95 backdrop-blur border-b border-surface/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <NavLink
              to="/"
              className="flex items-baseline gap-3 text-surface hover:text-surface transition-colors"
              aria-label="Go to homepage"
            >
              <span className="font-caslon text-xl tracking-[0.02em]">
                Adrian Borges
              </span>
              <span className="hidden sm:inline font-urw text-xs tracking-[0.18em] uppercase text-surface/70">
                Frontend / Platform Engineer
              </span>
            </NavLink>

            {/* Desktop nav (>=1024px) */}
            <nav
              className="hidden lg:flex items-center gap-2"
              aria-label="Primary"
            >
              {navItems.map((item) => {
                if (item.external) {
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={desktopCtaClass}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={desktopLinkClass}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Tablet/Mobile nav (<1024px) */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav-panel"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-surface hover:bg-surface/10 focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative h-5 w-6">
                <span
                  className={
                    "absolute left-0 top-0 h-[2px] w-6 bg-current transition-transform duration-200 " +
                    (open ? "translate-y-[9px] rotate-45" : "")
                  }
                />
                <span
                  className={
                    "absolute left-0 top-[9px] h-[2px] w-6 bg-current transition-opacity duration-200 " +
                    (open ? "opacity-0" : "opacity-100")
                  }
                />
                <span
                  className={
                    "absolute left-0 top-[18px] h-[2px] w-6 bg-current transition-transform duration-200 " +
                    (open ? "-translate-y-[9px] -rotate-45" : "")
                  }
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={
          "lg:hidden fixed inset-0 z-40 transition-opacity duration-200 " +
          (open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none")
        }
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-ink/70"
          onClick={() => setOpen(false)}
        />

        <div
          id="mobile-nav-panel"
          ref={panelRef}
          className={
            "absolute top-16 left-0 right-0 mx-3 sm:mx-6 rounded-xl bg-ink border border-surface/10 shadow-xl p-3 transition-transform duration-200 ease-out " +
            (open ? "translate-y-0" : "-translate-y-2")
          }
        >
          <nav aria-label="Mobile Primary" className="flex flex-col gap-2">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={mobileCtaClass}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={mobileLinkClass}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
