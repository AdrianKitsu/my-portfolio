import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl bg-white border border-ink/10 shadow-sm p-8 sm:p-12 text-center">
        <p className="font-urw text-xs tracking-[0.16em] uppercase text-ink/60">404</p>
        <h1 className="mt-3 font-caslon text-4xl sm:text-5xl text-ink">Page not found</h1>
        <p className="mt-3 font-urw text-ink/70">The page you’re looking for doesn’t exist.</p>
        <div className="mt-6">
          <NavLink
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 font-urw text-sm tracking-[0.14em] uppercase text-surface hover:brightness-110 transition"
          >
            Back home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
