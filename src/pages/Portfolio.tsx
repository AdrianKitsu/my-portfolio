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

const tabs = [
  { label: "Future Launch", id: "tab-future" },
  { label: "Mitchell's", id: "tab-mitch" },
  { label: "Lightlife", id: "tab-tempeh" },
  { label: "Grab 'N Snack", id: "tab-gns" },
  { label: "Thought Leadership", id: "tab-thought" },
  { label: "Sales Resource Centre", id: "tab-src" },
  { label: "Sales Resource Centre: Phase 2", id: "tab-src-2" },
  { label: "Visual Arts Centre", id: "tab-vac" },
];

const tabContent: {
  [key: string]: {
    image: string;
    text: string;
    text2: string;
    text3: string;
    href: string;
  };
} = {
  "Future Launch": {
    image: futureBanner,
    href: "https://www.rbc.com/en/future-launch/",
    text: `The Future Launch project was my first major engagement at Trew Knowledge. It centered on migrating the client’s legacy site to WordPress and developing a reusable library of custom, dynamic React components for their network of sites. My primary responsibilities included rebuilding existing components with enhanced data capabilities and creating new ones as fully customizable Gutenberg blocks, enabling drag-and-drop flexibility for content authors. These components empowered consistent layouts, improved analytics and tracking options, and streamlined visual customization across the platform. I also contributed to the creation of custom post types, templates, and patterns to further simplify and accelerate content production workflows.`,
    text2: ``,
    text3: ``,
  },
  "Mitchell's": {
    image: mitchellsBanner,
    href: "https://www.mitchellsfoods.ca/",
    text: `The Mitchell’s Foods website was a full rebrand initiative where I was responsible for quality control and front-end styling refinement. I reviewed component implementation across the site to ensure consistency and usability, and updated visual styles to align with the new brand direction. This included fine-tuning layouts, resolving UI inconsistencies, and collaborating closely with design to maintain a cohesive look and feel throughout the rebuild.`,
    text2: ``,
    text3: ``,
  },
  Lightlife: {
    image: tempehfyBanner,
    href: "https://lightlife.com/tempehfy/",
    text: `Lightlife is a website I actively maintain and enhance based on client needs. When the brand introduced its Tempeh launch initiative, I collaborated with the design team to build a new suite of components for the Tempehfy campaign page. Because the site was originally developed using an older full-site editing system, we implemented compatibility solutions to support modern Gutenberg-based components. The Tempehfy page was released in two separate phases, each featuring a unique design direction. Despite tight deadlines and evolving requirements, we successfully delivered both launches on schedule. My key contributions included the development of the new React components, configuring pages and templates, coordinating closely with design and technical leads to align on the vision, planning rollout efforts, and mentoring a newer developer who joined the project.`,
    text2: ``,
    text3: ``,
  },
  "Grab 'N Snack": {
    image: grabnsnackBanner,
    href: "https://web.archive.org/web/20250323221342/https://www.grabnsnack.ca/",
    text: `Similar to the Mitchell’s Foods project, Grab ’N Snack was a full-site rebrand focused on modernizing the visual identity. While only a few new components were introduced, the core of the work involved global styling updates, layout refinements, and re-styling inherited components from the parent theme to ensure consistency with the refreshed brand direction. This included improving responsiveness, aligning typography and color usage, and resolving UI inconsistencies across templates and page types. Unfortunately, the site has since been archived by the client.`,
    text2: ``,
    text3: ``,
  },
  "Thought Leadership": {
    image: thoughtBanner,
    href: "https://www.rbc.com/en/thought-leadership/",
    text: `Following the success of the initial RBC migration project, I was given the opportunity to help bring an additional two legacy sites, Thought Leadership and Climate Action Institute, into the WordPress ecosystem. With only the existing legacy sites and new design files as reference, our team worked closely with the client to define how each component should behave, providing recommendations on editing workflows, reusability, and scalability within Gutenberg.`,
    text2: `My role focused on rebuilding existing components with enhanced dynamic functionality to give content authors more flexibility, as well as developing new React-based blocks aligned to the updated design system. I also created key pages, custom templates, navigation menus, and reusable patterns to accurately reflect the original site structure while enabling a vastly improved publishing experience.`,
    text3: ``,
  },
  "Sales Resource Centre": {
    image: insuranceBanner,
    href: "https://www.advisor.rbcinsurance.com/en/",
    text: `With continued trust from our partners at RBC, I had the opportunity to lead the migration and enhancement of their Sales Resource Centre. The project aimed to transition all forms, documents, and videos to a new hosting provider and leverage its API to build reusable components with advanced backend filtering, enabling unique, dynamic content across pages.`,
    text2: `My role centered on auditing existing components and updating global styling to align with new brand standards. I rebuilt legacy components for better functionality and responsive design, resolved pre-existing errors, and developed new React-based blocks. My tasks involved building templates, site navigation, and reusable patterns while integrating i18n for translations. During the first 3–4 weeks, with the team lead unavailable, I took charge of creating stories, coordinating directly with clients, stakeholders, and project owners, reviewing Figma designs, planning development approaches, and recommending UX and workflow improvements.`,
    text3: ``,
  },
  "Sales Resource Centre: Phase 2": {
    image: insuranceBanner,
    href: "https://www.advisor.rbcinsurance.com/en/",
    text: `Following the successful site launch, I took ownership of the next phase of improvements as the sole engineer. The work focused on expanding search, sorting, filtering, and the Bynder API integration. I inherited another developer's codebase and had to understand and extend it independently, as the original developer was no longer on the team.`,
    text2: `I researched technical blockers, recommended solutions, and implemented the improvements, including a popularity sort dropdown and links between related Bynder assets in different languages. The client's existing Bynder subscription limited the available API capabilities, so I reviewed the documentation and developed workarounds using custom metadata properties to deliver the requested functionality within those constraints with limited impact on performance.`,
    text3: `Alongside development, I managed the majority of client coordination and day-to-day delivery: creating tickets, scheduling meetings, running scrums, presenting demos, and sharing progress updates. I carried the work from investigation and planning through implementation and client presentations, meeting every deadline while keeping stakeholders informed of progress, blockers, and proposed solutions.`,
  },
  "Visual Arts Centre": {
    image: VisualArts,
    href: "https://visualartscentre.ca/",
    text: `The Visual Arts Centre needed a dedicated registration platform to bring its camps into one centralized experience, with future course offerings in mind. Built around WooCommerce and an event ticketing plugin, the site allows parents to explore camps and purchase places for their children. I owned key parts of the registration experience, spanning visual styling, ticket selection, checkout, and sold-out handling.`,
    text2: `I implemented the approved design direction into the site's styling and refined the ticket selection and checkout flows to support camp registration. My work connected the visual experience with the purchasing functionality, giving families a consistent path from choosing tickets to completing checkout.`,
    text3: `I also implemented the out-of-stock logic governing how unavailable camp tickets are presented and handled during registration. This work addressed a critical part of the booking experience: making availability clear and preventing users from proceeding with sold-out selections. My contribution combined design implementation with the commerce logic behind the registration.`,
  },
};

const Portfolio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const activeIndex = tabs.findIndex((tab) => tab.label === activeTab);

  const selectProject = (index: number) => {
    const tab = tabs[index];
    if (!tab) return;
    setActiveTab(tab.label);
    navigate(`/portfolio/#${tab.id}`);
  };
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const matched = tabs.find((tab) => tab.id === hash);
    if (matched) setActiveTab(matched.label);
  }, [location.hash]);

  const { image, text, text2, text3, href } = tabContent[activeTab];

  const headingClass =
    "text-center tracking-[0.02em] text-[34px] sm:text-[44px] mt-2 text-ink dark:text-surface";

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className={headingClass}>Project Highlights</h2>

      <div className="wrapper mt-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3
            id="project-title"
            aria-live="polite"
            className="font-caslon text-2xl text-ink dark:text-surface"
          >
            {activeTab}
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
                    direction < 0 ? "Previous project" : "Next project"
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
            alt={activeTab}
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
              tracking-[0.14em]
              text-ink/80 dark:text-surface/80
              font-urw uppercase text-sm font-semibold
              transition-colors duration-200
              hover:text-brand dark:hover:text-brand
              mt-2"
            >
              Visit The Site
              <ArrowRight className="ml-1 h-5 w-4 text-current" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
