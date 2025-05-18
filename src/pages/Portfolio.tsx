import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import grabnsnackBanner from "../assets/images/gns-tablet.png";
import mitchellsBanner from "../assets/images/laptop-mitchells.png";
import tempehfyBanner from "../assets/images/tempehfy-cell.png";
import futureBanner from "../assets/images/FL-desktop.png";
import thoughtBanner from "../assets/images/TL-phonepng.png";

const tabs = [
  { label: "Future Launch", id: "tab-future" },
  { label: "Thought Leadership", id: "tab-thought" },
  { label: "Grab 'N Snack", id: "tab-gns" },
  { label: "Lightlife", id: "tab-tempeh" },
  { label: "Mitchell's", id: "tab-mitch" },
];

const tabContent: { [key: string]: { image: string; text: string } } = {
  "Future Launch": {
    image: futureBanner,
    text: `The Future Launch project involved migrating the client’s legacy site to WordPress. My primary focus was rebuilding their original components and developing new ones as reusable Gutenberg blocks using React, enabling consistent use across the new WordPress environment. I also created pages, custom templates, and patterns to streamline content creation.`,
  },
  "Thought Leadership": {
    image: thoughtBanner,
    text: `This project involved migrating the client’s legacy site to WordPress, including both the Thought Leadership and Climate Action Institute sites. My primary focus was rebuilding existing components and developing new ones as reusable Gutenberg blocks using React. I also recreated key pages, custom templates, menus, and patterns to closely match the original site’s design.`,
  },
  "Grab 'N Snack": {
    image: grabnsnackBanner,
    text: `The Grab 'N Snack project was a full site rebrand. While only a few new components were introduced, the bulk of the work focused on global styling updates, layout adjustments, and re-styling inherited components from the parent theme to align with the new visual identity.`,
  },
  Lightlife: {
    image: tempehfyBanner,
    text: `This project supported the launch of the Tempeh product line. In collaboration with the design team, we built several new components for the Tempehfy page. Since the site was built on an older full-site editing system, we implemented a number of compatibility adjustments to support Gutenberg-based components. The Tempehfy page underwent two separate launches, each with distinct designs. Despite tight deadlines and last-minute design changes, we ensured a smooth and on-time deployment. My main responsibilities included creating the react gutenberg components, setting up the pages and templates, communicating with the Team Lead and designers for better understanding of the vision and last minute change requests, and mentoring a newer developer who was brought onto the project.`,
  },
  "Mitchell's": {
    image: mitchellsBanner,
    text: `The Mitchell's site was a rebrand project where I was responsible for quality control and styling adjustments. This included reviewing component implementation across pages and refining styles to align with the updated brand direction.`,
  },
};

const Portfolio = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const matched = tabs.find((tab) => tab.id === hash);
    if (matched) setActiveTab(matched.label);
  }, [location]);

  const { image, text } = tabContent[activeTab];

  return (
    <>
      <h2 className="mb-5 text-center text-[#fcfcfc] tracking-[4px] text-[40px] sm:text-[60px]">
        Projects I've developed
      </h2>
      <div className="wrapper w-[90%] max-w-7xl mx-auto mt-12">
        <div className="hidden sm:flex flex-wrap justify-between border-b border-gray-300 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.label);
                window.location.hash = tab.id;
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
                  window.location.hash = tab.id;
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

        <div className="bg-white shadow-md rounded-xl p-6 md:p-10 grid md:grid-cols-2 gap-6 items-start transition-all duration-300">
          <img
            src={image}
            alt={activeTab}
            className="rounded-lg max-w-full shadow-sm"
          />
          <p className="text-gray-800 text-[17px] leading-relaxed font-futura text-lg text-left mt-auto mb-auto">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
