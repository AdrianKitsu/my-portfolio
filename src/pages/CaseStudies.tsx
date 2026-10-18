import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as XtalksLogo } from "../assets/logos/xtalks.svg";
import { ReactComponent as StackAdaptLogo } from "../assets/logos/stackadapt.svg";
import { ReactComponent as ArrowRight } from "../assets/images/ui/arrow-right.svg";
import { useLanguage } from "../i18n/LanguageContext";
import type { CaseStudyBlock, CaseStudyId } from "../i18n/caseStudyTypes";

type CaseStudy = {
  id: CaseStudyId;
  Logo: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
  // Divider colour when the tab is inactive (literal classes for Tailwind).
  tabClass: string;
  accentClass: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "xtalks",
    Logo: XtalksLogo,
    href: "https://www.xtalks.com/",
    tabClass: "bg-brand text-surface hover:brightness-110",
    accentClass: "bg-brand",
  },
  {
    id: "stackadapt",
    Logo: StackAdaptLogo,
    href: "https://www.stackadapt.com/",
    tabClass: "bg-warm text-surface hover:brightness-110",
    accentClass: "bg-warm",
  },
];

const bodyText =
  "font-urw text-[17px] leading-relaxed text-ink/75 dark:text-surface/75";
const labelText =
  "font-urw text-xs uppercase tracking-[0.16em] fr:tracking-[0.08em] text-ink/50 dark:text-surface/50";

const Block = ({ block }: { block: CaseStudyBlock }) => {
  switch (block.type) {
    case "paragraph":
      return <p className={bodyText}>{block.text}</p>;

    case "subheading":
      return (
        <h5 className="pt-2 font-urw text-[17px] font-semibold text-ink dark:text-surface">
          {block.text}
        </h5>
      );

    case "list":
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item.text} className={`relative pl-5 ${bodyText}`}>
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-brand"
              />
              {item.lead && (
                <strong className="font-semibold text-ink dark:text-surface">
                  {item.lead}:{" "}
                </strong>
              )}
              {item.text}
            </li>
          ))}
        </ul>
      );

    case "stats":
      return (
        <div className="grid gap-4 sm:grid-cols-3">
          {block.items.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-ink/10 bg-surface/60 p-4 dark:border-surface/10 dark:bg-surface/5"
            >
              <p className="font-caslon text-[28px] leading-tight text-brand">
                {stat.value}
              </p>
              <p className="mt-1 font-urw text-sm text-ink/60 dark:text-surface/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-ink/10 dark:border-surface/10">
          <table className="w-full min-w-[480px] border-collapse font-urw text-[15px]">
            <thead>
              <tr className="bg-surface/60 dark:bg-surface/5">
                {block.head.map((cell, i) => (
                  <th
                    key={cell}
                    scope="col"
                    className={`px-4 py-3 ${labelText} font-normal ${
                      i === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr
                  key={row.cells[0]}
                  className="border-t border-ink/10 dark:border-surface/10"
                >
                  {row.cells.map((cell, i) =>
                    i === 0 ? (
                      <th
                        key={i}
                        scope="row"
                        className="px-4 py-3 text-left font-normal text-ink/80 dark:text-surface/80"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={i}
                        className={`px-4 py-3 text-right tabular-nums ${
                          row.highlight && i === row.cells.length - 1
                            ? "font-semibold text-brand"
                            : "text-ink/80 dark:text-surface/80"
                        }`}
                      >
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
};

const CaseStudies = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<CaseStudyId>(caseStudies[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const binderRef = useRef<HTMLDivElement | null>(null);

  const activeIndex = caseStudies.findIndex((study) => study.id === activeId);

  // Sync with the URL hash (deep links, browser back/forward)
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const matched = caseStudies.find((study) => study.id === hash);
    if (matched) setActiveId(matched.id);
  }, [location.hash]);

  const selectStudy = (index: number, scroll = false) => {
    const study = caseStudies[index];
    if (!study || study.id === activeId) return;
    setActiveId(study.id);
    navigate(`/case-studies#${study.id}`);
    if (scroll) binderRef.current?.scrollIntoView({ block: "start" });
  };

  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    const last = caseStudies.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight")
      next = index === last ? 0 : index + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft")
      next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    selectStudy(next);
    tabRefs.current[next]?.focus();
  };

  const study = caseStudies[activeIndex];
  const content = t.caseStudies.list[study.id];
  const prevStudy = caseStudies[activeIndex - 1];
  const nextStudy = caseStudies[activeIndex + 1];

  // Tabs overlap the page border by 1px so the active one merges into the page.
  const tabClass = (s: CaseStudy, isActive: boolean) =>
    [
      "font-urw text-sm uppercase tracking-[0.14em] fr:tracking-[0.08em] whitespace-nowrap",
      "border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand",
      // Mobile: tabs across the top of the page
      "px-5 py-3 rounded-t-xl border-b-0",
      // Desktop: dividers on the right edge of the page, text running vertically
      "md:px-3 md:py-6 md:rounded-tr-xl md:rounded-br-xl md:rounded-tl-none md:border-b md:border-l-0 md:[writing-mode:vertical-rl]",
      isActive
        ? "bg-white text-ink border-ink/10 dark:bg-[#1A242E] dark:text-surface dark:border-surface/10"
        : `${s.tabClass} border-transparent`,
    ].join(" ");

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="text-center tracking-[0.02em] text-[34px] sm:text-[44px] mt-2 text-ink dark:text-surface">
        {t.caseStudies.heading}
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center font-urw text-[18px] text-ink/60 dark:text-surface/60">
        {t.caseStudies.intro}
      </p>

      <div
        ref={binderRef}
        className="mt-10 flex scroll-mt-24 flex-col md:flex-row md:items-start"
      >
        {/* Divider tabs */}
        <div
          role="tablist"
          aria-label={t.caseStudies.tabsLabel}
          className="relative z-10 -mb-px flex gap-1 px-4 md:order-2 md:mb-0 md:-ml-px md:flex-col md:gap-2 md:px-0 md:pt-10"
        >
          {caseStudies.map((s, index) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`case-tab-${s.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="case-study-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectStudy(index)}
                onKeyDown={(e) => onTabKeyDown(e, index)}
                className={tabClass(s, isActive)}
              >
                {t.caseStudies.list[s.id].label}
              </button>
            );
          })}
        </div>

        {/* Binder page */}
        <article
          id="case-study-panel"
          role="tabpanel"
          aria-labelledby={`case-tab-${study.id}`}
          className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm dark:border-surface/10 dark:bg-[#1A242E] md:order-1"
        >
          {/* Ring holes + margin rule */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 sm:block"
          >
            {["top-[120px]", "top-1/2", "bottom-[120px]"].map((pos) => (
              <span
                key={pos}
                className={`absolute left-5 ${pos} h-5 w-5 -translate-y-1/2 rounded-full bg-surface shadow-[inset_0_2px_3px_rgba(19,27,35,0.25)] dark:bg-ink`}
              />
            ))}
            <span className="absolute inset-y-0 right-0 w-px bg-brand/25" />
          </div>

          <div className={`h-1.5 w-full ${study.accentClass}`} />

          <div className="p-6 sm:py-10 sm:pl-24 sm:pr-10 md:pr-14">
            {/* Header */}
            <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className={labelText}>
                  {t.caseStudies.caseStudy}{" "}
                  {String(activeIndex + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-caslon text-[32px] sm:text-[40px] leading-tight text-ink dark:text-surface">
                  {content.title}
                </h3>
              </div>
              <study.Logo
                aria-label={content.client}
                className="h-16 w-auto shrink-0 self-start dark:invert dark:brightness-150"
              />
            </div>

            {/* Meta */}
            <dl className="mt-8 grid gap-6 border-y border-ink/10 py-6 dark:border-surface/10 sm:grid-cols-[1fr_2fr_2fr]">
              <div>
                <dt className={labelText}>{t.caseStudies.meta.client}</dt>
                <dd className="mt-1 font-urw text-ink dark:text-surface">
                  {content.client}
                </dd>
              </div>
              <div>
                <dt className={labelText}>{t.caseStudies.meta.focus}</dt>
                <dd className="mt-1 font-urw text-ink dark:text-surface">
                  {content.focus.join(" · ")}
                </dd>
              </div>
              <div>
                <dt className={labelText}>
                  {t.caseStudies.meta.technologies}
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {content.technologies.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink/15 px-3 py-0.5 font-urw text-sm text-ink/80 dark:border-surface/20 dark:text-surface/80"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            {/* Sections */}
            <div className="mt-10 space-y-12">
              {content.sections.map((section, i) => (
                <section
                  key={section.heading}
                  className="grid gap-4 lg:grid-cols-[220px_1fr] lg:gap-10"
                >
                  <h4 className="flex items-baseline gap-3 font-caslon text-[24px] leading-tight text-ink dark:text-surface">
                    <span className="font-urw text-sm tabular-nums text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h4>
                  <div className="max-w-3xl space-y-4">
                    {section.blocks.map((block, j) => (
                      <Block key={j} block={block} />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer: page navigation */}
            <div className="mt-12 flex flex-col gap-4 border-t border-ink/10 pt-6 dark:border-surface/10 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-urw text-sm font-semibold uppercase tracking-[0.14em] fr:tracking-[0.08em] text-ink/80 transition-colors hover:text-brand dark:text-surface/80 dark:hover:text-brand"
              >
                {t.caseStudies.visitSite}
                <ArrowRight aria-hidden="true" className="ml-1 h-5 w-4" />
              </a>

              <div className="flex items-center gap-4">
                {prevStudy && (
                  <button
                    type="button"
                    onClick={() => selectStudy(activeIndex - 1, true)}
                    className="inline-flex items-center gap-2 font-urw text-sm uppercase tracking-[0.12em] fr:tracking-[0.06em] text-ink/60 transition-colors hover:text-brand dark:text-surface/60"
                  >
                    <ArrowRight aria-hidden="true" className="h-5 w-4 rotate-180" />
                    {t.caseStudies.list[prevStudy.id].label}
                  </button>
                )}
                <span className="font-urw text-sm tabular-nums text-ink/40 dark:text-surface/40">
                  {activeIndex + 1} / {caseStudies.length}
                </span>
                {nextStudy && (
                  <button
                    type="button"
                    onClick={() => selectStudy(activeIndex + 1, true)}
                    className="inline-flex items-center gap-2 font-urw text-sm uppercase tracking-[0.12em] fr:tracking-[0.06em] text-ink/60 transition-colors hover:text-brand dark:text-surface/60"
                  >
                    {t.caseStudies.list[nextStudy.id].label}
                    <ArrowRight aria-hidden="true" className="h-5 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CaseStudies;
