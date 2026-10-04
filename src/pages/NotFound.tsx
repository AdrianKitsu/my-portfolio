import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl bg-white border border-ink/10 shadow-sm p-8 sm:p-12 text-center">
        <p className="font-urw text-xs tracking-[0.16em] uppercase text-ink/60">404</p>
        <h1 className="mt-3 font-caslon text-4xl sm:text-5xl text-ink">{t.notFound.title}</h1>
        <p className="mt-3 font-urw text-ink/70">{t.notFound.message}</p>
        <div className="mt-6">
          <NavLink
            to="/"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-brand px-5 py-3 font-urw text-sm tracking-[0.14em] fr:tracking-[0.08em] uppercase text-surface hover:brightness-110 transition"
          >
            {t.notFound.backHome}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
