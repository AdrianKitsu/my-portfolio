import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-sand/60 px-3 py-1 border border-ink/10">
            <span
              className="h-2 w-2 rounded-full bg-brand"
              aria-hidden="true"
            />
            <span className="font-urw text-xs tracking-[0.16em] uppercase text-ink/70">
              Based in Montreal · Available for contract & full-time
            </span>
          </div>

          <h1 className="mt-5 font-caslon text-4xl sm:text-5xl leading-tight text-ink">
            Frontend and platform-focused engineer building reliable web
            experiences.
          </h1>

          <p className="mt-4 font-urw text-lg text-ink/75 leading-relaxed max-w-2xl">
            I build and operate production WordPress and React platforms for
            enterprise teams. Shipping features fast while keeping performance,
            stability, and workflows clean.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <NavLink
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3 font-urw text-sm tracking-[0.14em] uppercase text-surface hover:brightness-110 transition"
            >
              View work
            </NavLink>
            <a
              href="/Adrian Borges Solari - CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 font-urw text-sm tracking-[0.14em] uppercase text-surface hover:brightness-110 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-white border border-ink/10 shadow-sm overflow-hidden">
            <div className="p-5">
              <p className="font-urw text-xs tracking-[0.16em] uppercase text-ink/60">
                Core strengths
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-urw text-sm tracking-[0.06em] uppercase text-ink">
                      React + TypeScript
                    </p>
                    <p className="font-urw text-sm text-ink/70">
                      Gutenberg blocks, UI systems, component libraries.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full bg-warm"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-urw text-sm tracking-[0.06em] uppercase text-ink">
                      WordPress VIP / Ops
                    </p>
                    <p className="font-urw text-sm text-ink/70">
                      Deployments, performance, reliability, multi-site
                      governance.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full bg-ink"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-urw text-sm tracking-[0.06em] uppercase text-ink">
                      Enterprise delivery
                    </p>
                    <p className="font-urw text-sm text-ink/70">
                      Workflow-first solutions: patterns, templates, authoring
                      UX.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-sand/60 border-t border-ink/10 p-5">
              <p className="font-urw text-sm text-ink/70">
                Open to: <span className="text-ink">frontend</span>,{" "}
                <span className="text-ink">platform</span>, and{" "}
                <span className="text-ink">web operations</span> roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
