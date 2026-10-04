import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import grabnsnackBanner from "../assets/images/gns-tablet.png";
import mitchellsBanner from "../assets/images/laptop-mitchells.png";
import tempehfyBanner from "../assets/images/tempehfy-cell.png";
import futureBanner from "../assets/images/FL-desktop.png";
import thoughtBanner from "../assets/images/TL-phonepng.png";
import insuranceBanner from "../assets/images/SRC-laptoppng.png";
import VisualArts from "../assets/images/visual-arts-centre.png";
import { ReactComponent as ArrowRight } from "../assets/images/ui/arrow-right.svg";
import { useLanguage } from "../i18n/LanguageContext";
import type { ProjectId } from "../i18n/en";

const tabs: { id: ProjectId; image: string; href: string }[] = [
  {
    id: "tab-future",
    image: futureBanner,
    href: "https://www.rbc.com/en/future-launch/",
  },
  {
    id: "tab-mitch",
    image: mitchellsBanner,
    href: "https://www.mitchellsfoods.ca/",
  },
  {
    id: "tab-tempeh",
    image: tempehfyBanner,
    href: "https://lightlife.com/tempehfy/",
  },
  {
    id: "tab-gns",
    image: grabnsnackBanner,
    href: "https://web.archive.org/web/20250323221342/https://www.grabnsnack.ca/",
  },
  {
    id: "tab-thought",
    image: thoughtBanner,
    href: "https://www.rbc.com/en/thought-leadership/",
  },
  {
    id: "tab-src",
    image: insuranceBanner,
    href: "https://www.advisor.rbcinsurance.com/en/",
  },
  {
    id: "tab-src-2",
    image: insuranceBanner,
    href: "https://www.advisor.rbcinsurance.com/en/",
  },
  { id: "tab-vac", image: VisualArts, href: "https://visualartscentre.ca/" },
];

const Portfolio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ProjectId>(tabs[0].id);
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  const selectProject = (index: number) => {
    const tab = tabs[index];
    if (!tab) return;
    setActiveTab(tab.id);
    navigate(`/portfolio/#${tab.id}`);
  };
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const matched = tabs.find((tab) => tab.id === hash);
    if (matched) setActiveTab(matched.id);
  }, [location.hash]);

  const { image, href } = tabs[activeIndex];
  const { label, text, text2, text3 } = t.projectList[activeTab];

  const headingClass =
    "text-center tracking-[0.02em] text-[34px] sm:text-[44px] mt-2 text-ink dark:text-surface";

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className={headingClass}>{t.portfolio.heading}</h2>

      <div className="wrapper mt-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3
            id="project-title"
            aria-live="polite"
            className="font-caslon text-2xl text-ink dark:text-surface"
          >
            {label}
          </h3>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <span className="font-urw text-sm tabular-nums text-ink/60 dark:text-surface/60">
              {activeIndex + 1} / {tabs.length}
            </span>
            <div className="flex gap-2">
              {[-1, 1].map((direction) => (
                <button
                  key={direction}
                  type="button"
                  aria-label={
                    direction < 0 ? t.portfolio.previous : t.portfolio.next
                  }
                  aria-controls="project-panel"
                  disabled={
                    direction < 0
                      ? activeIndex === 0
                      : activeIndex === tabs.length - 1
                  }
                  onClick={() => selectProject(activeIndex + direction)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-default disabled:opacity-30 dark:border-surface/20 dark:text-surface dark:hover:bg-surface/10"
                >
                  <ArrowRight
                    aria-hidden="true"
                    className={`h-5 w-4 ${direction < 0 ? "rotate-180" : ""}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Content panel */}
        <div
          id="project-panel"
          role="region"
          aria-labelledby="project-title"
          tabIndex={0}
          className="relative bg-white dark:bg-surface/5 border border-ink/10 dark:border-surface/10 shadow-sm rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-start transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <img
            src={image}
            alt={label}
            className="rounded-xl max-w-full border border-ink/10 dark:border-surface/10"
            loading="lazy"
          />

          <div className="flex flex-col justify-between">
            <p className="text-ink/75 dark:text-surface/75 text-[17px] leading-relaxed font-urw text-left mb-6">
              {text}
            </p>

            {text2 && (
              <p className="text-ink/75 dark:text-surface/75 text-[17px] leading-relaxed font-urw text-left mb-6">
                {text2}
              </p>
            )}

            {text3 && (
              <p className="text-ink/75 dark:text-surface/75 text-[17px] leading-relaxed font-urw text-left mb-6">
                {text3}
              </p>
            )}

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex items-center gap-2
              tracking-[0.14em] fr:tracking-[0.08em]
              whitespace-nowrap
              text-ink/80 dark:text-surface/80
              font-urw uppercase text-sm font-semibold
              transition-colors duration-200
              hover:text-brand dark:hover:text-brand
              mt-2"
            >
              {t.portfolio.visitSite}
              <ArrowRight className="ml-1 h-5 w-4 text-current" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
