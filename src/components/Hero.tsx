import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const strengthDotClasses = ["bg-brand", "bg-warm", "bg-ink dark:bg-surface"];

const Hero = () => {
  const { t } = useLanguage();
  const { openTo } = t.hero;
  const roleClass = "text-ink dark:text-surface";

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-sand/60 dark:bg-surface/10 px-3 py-1 border border-ink/10 dark:border-surface/10">
            <span
              className="h-2 w-2 rounded-full bg-brand"
              aria-hidden="true"
            />
            <span className="font-urw text-xs tracking-[0.16em] uppercase text-ink/70 dark:text-surface/70 fr:tracking-[0.08em]">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="mt-5 font-caslon text-4xl sm:text-5xl leading-tight text-ink dark:text-surface">
            {t.hero.heading}
          </h1>

          <p className="mt-4 font-urw text-lg text-ink/75 dark:text-surface/75 leading-relaxed max-w-2xl">
            {t.hero.intro}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <NavLink
              to="/portfolio"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-brand px-5 py-3 font-urw text-sm tracking-[0.14em] uppercase text-surface hover:brightness-110 transition fr:tracking-[0.08em]"
            >
              {t.hero.viewWork}
            </NavLink>

            <a
              href="/Adrian Borges Solari - CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-ink px-5 py-3 font-urw text-sm tracking-[0.14em] uppercase text-surface hover:brightness-110 transition dark:bg-surface dark:text-ink fr:tracking-[0.08em]"
            >
              {t.hero.downloadCv}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-white dark:bg-surface/5 border border-ink/10 dark:border-surface/10 shadow-sm overflow-hidden">
            <div className="p-5">
              <p className="font-urw text-xs tracking-[0.16em] uppercase text-ink/60 dark:text-surface/60">
                {t.hero.coreStrengths}
              </p>

              <ul className="mt-4 space-y-3">
                {t.hero.strengths.map((strength, index) => (
                  <li key={strength.title} className="flex gap-3">
                    <span
                      className={`mt-2 h-2 w-2 rounded-full ${strengthDotClasses[index]}`}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-urw text-sm tracking-[0.06em] uppercase text-ink dark:text-surface">
                        {strength.title}
                      </p>
                      <p className="font-urw text-sm text-ink/70 dark:text-surface/70">
                        {strength.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sand/60 dark:bg-surface/10 border-t border-ink/10 dark:border-surface/10 p-5">
              <p className="font-urw text-sm text-ink/70 dark:text-surface/70">
                {openTo.label}{" "}
                <span className={roleClass}>{openTo.roles[0]}</span>,{" "}
                <span className={roleClass}>{openTo.roles[1]}</span>
                {openTo.and}{" "}
                <span className={roleClass}>{openTo.roles[2]}</span>
                {openTo.suffix}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
