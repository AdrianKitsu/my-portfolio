import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import grabnsnackBanner from "../assets/images/gns-tablet.png";
import mitchellsBanner from "../assets/images/laptop-mitchells.png";
import tempehfyBanner from "../assets/images/tempehfy-cell.png";
import futureBanner from "../assets/images/FL-desktop.png";
import thoughtBanner from "../assets/images/TL-phonepng.png";
import insuranceBanner from "../assets/images/SRC-laptoppng.png";
import { ReactComponent as ArrowRight } from "../assets/images/ui/arrow-right.svg";

const tabs = [
  { label: "Future Launch", id: "tab-future" },
  { label: "Mitchell's", id: "tab-mitch" },
  { label: "Lightlife", id: "tab-tempeh" },
  { label: "Grab 'N Snack", id: "tab-gns" },
  { label: "Thought Leadership", id: "tab-thought" },
  { label: "Sales Resource Center", id: "tab-src" },
];

const tabContent: {
  [key: string]: { image: string; text: string; text2: string; href: string };
} = {
  "Future Launch": {
    image: futureBanner,
    href: "https://www.rbc.com/en/future-launch/",
    text: `The Future Launch project was my first major engagement at Trew Knowledge. It centered on migrating the client’s legacy site to WordPress and developing a reusable library of custom, dynamic React components for their network of sites. My primary responsibilities included rebuilding existing components with enhanced data capabilities and creating new ones as fully customizable Gutenberg blocks, enabling drag-and-drop flexibility for content authors. These components empowered consistent layouts, improved analytics and tracking options, and streamlined visual customization across the platform. I also contributed to the creation of custom post types, templates, and patterns to further simplify and accelerate content production workflows.`,
    text2: ``,
  },
  "Mitchell's": {
    image: mitchellsBanner,
    href: "https://www.mitchellsfoods.ca/",
    text: `The Mitchell’s Foods website was a full rebrand initiative where I was responsible for quality control and front-end styling refinement. I reviewed component implementation across the site to ensure consistency and usability, and updated visual styles to align with the new brand direction. This included fine-tuning layouts, resolving UI inconsistencies, and collaborating closely with design to maintain a cohesive look and feel throughout the rebuild.`,
    text2: ``,
  },
  Lightlife: {
    image: tempehfyBanner,
    href: "https://lightlife.com/tempehfy/",
    text: `Lightlife is a website I actively maintain and enhance based on client needs. When the brand introduced its Tempeh launch initiative, I collaborated with the design team to build a new suite of components for the Tempehfy campaign page. Because the site was originally developed using an older full-site editing system, we implemented compatibility solutions to support modern Gutenberg-based components. The Tempehfy page was released in two separate phases, each featuring a unique design direction. Despite tight deadlines and evolving requirements, we successfully delivered both launches on schedule. My key contributions included the development of the new React components, configuring pages and templates, coordinating closely with design and technical leads to align on the vision, planning rollout efforts, and mentoring a newer developer who joined the project.`,
    text2: ``,
  },
  "Grab 'N Snack": {
    image: grabnsnackBanner,
    href: "https://www.grabnsnack.ca/",
    text: `Similar to the Mitchell’s Foods project, Grab ’N Snack was a full-site rebrand focused on modernizing the visual identity. While only a few new components were introduced, the core of the work involved global styling updates, layout refinements, and re-styling inherited components from the parent theme to ensure consistency with the refreshed brand direction. This included improving responsiveness, aligning typography and color usage, and resolving UI inconsistencies across templates and page types.`,
    text2: ``,
  },
  "Thought Leadership": {
    image: thoughtBanner,
    href: "https://www.rbc.com/en/thought-leadership/",
    text: `Following the success of the initial RBC migration project, I was given the opportunity to help bring an additional two legacy sites, Thought Leadership and Climate Action Institute, into the WordPress ecosystem. With only the existing legacy sites and new design files as reference, our team worked closely with the client to define how each component should behave, providing recommendations on editing workflows, reusability, and scalability within Gutenberg.`,
    text2: `My role focused on rebuilding existing components with enhanced dynamic functionality to give content authors more flexibility, as well as developing new React-based blocks aligned to the updated design system. I also created key pages, custom templates, navigation menus, and reusable patterns to accurately reflect the original site structure while enabling a vastly improved publishing experience.`,
  },
  "Sales Resource Center": {
    image: insuranceBanner,
    href: "https://www.advisor.rbcinsurance.com/en/",
    text: `With continued trust from our partners at RBC, I had the opportunity to lead the migration and enhancement of their Sales Resource Center. The project aimed to transition all forms, documents, and videos to a new hosting provider and leverage its API to build reusable components with advanced backend filtering, enabling unique, dynamic content across pages.`,
    text2: `My role centered on auditing existing components and updating global styling to align with new brand standards. I rebuilt legacy components for better functionality and responsive design, resolved pre-existing errors, and developed new React-based blocks. My tasks involved building templates, site navigation, and reusable patterns while integrating i18n for translations. During the first 3–4 weeks, with the team lead unavailable, I took charge of creating stories, coordinating directly with clients, stakeholders, and project owners, reviewing Figma designs, planning development approaches, and recommending UX and workflow improvements.`,
  },
};

const Portfolio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const matched = tabs.find((tab) => tab.id === hash);
    if (matched) setActiveTab(matched.label);
  }, [location.hash]);

  const { image, text, text2, href } = tabContent[activeTab];

  return (
    <div className="w-full space-y-8 sm:space-y-16 p-4 pb-[64px]">
      <h2 className="mb-5 text-center text-[#fcfcfc] tracking-[4px] text-[40px] sm:text-[60px]  mt-5">
        Project Highlights
      </h2>
      <div className="wrapper w-[90%] max-w-7xl mx-auto mt-12">
        <div className="hidden sm:flex flex-wrap justify-between border-b border-gray-300 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.label);
                navigate(`/portfolio/#${tab.id}`);
              }}
              className={`flex-1 text-center py-4 font-futura text-lg transition-colors duration-300 ${
                activeTab === tab.label
                  ? "border-b-4 border-[#3b9ff0] text-[#3b9ff0] font-semibold tracking-[0.5px]"
                  : "text-gray-500 hover:text-[white]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="sm:hidden overflow-x-auto scrollbar-hide mb-10">
          <div className="flex min-w-max border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.label);
                  navigate(`/portfolio/#${tab.id}`);
                }}
                className={`whitespace-nowrap px-4 py-4 font-futura text-lg transition-colors duration-300 ${
                  activeTab === tab.label
                    ? "border-b-4 border-[#3b9ff0] text-[#3b9ff0] font-semibold tracking-[0.5px]"
                    : "text-gray-500 hover:text-[white]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative bg-white shadow-md rounded-xl p-6 md:p-10 grid md:grid-cols-2 gap-6 items-start transition-all duration-300">
          <img
            src={image}
            alt={activeTab}
            className="rounded-lg max-w-full shadow-sm"
          />
          <div className="flex flex-col justify-between">
            <p className="text-[#312f30] text-[17px] leading-relaxed font-urw text-lg text-left mb-[30px]">
              {text}
            </p>
            {text2 && (
              <p className="text-[#312f30] text-[17px] leading-relaxed font-urw text-left mb-[30px]">
                {text2}
              </p>
            )}
            <a
              href={href}
              className="flex tracking-[1.5px] text-[#312f30] font-urw text-[18px] uppercase text-sm 
            hover:text-[#3b9ff0] font-semibold transition-all duration-500 mt-[30px] sm:mt-[0] text-nowrap"
            >
              Visit The Site
              <ArrowRight className="flex ml-1 h-5 w-4 text-current" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
