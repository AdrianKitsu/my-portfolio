import React from "react";
import Gns from "../assets/images/gns.png";
import FutureLaunch from "../assets/images/FL.png";
import ThoughtLeadership from "../assets/images/TL.png";
import Tempehfy from "../assets/images/tempehfy.png";
import Mitchells from "../assets/images/mitchells.png";
import GlossHover from "./GlossHover";
import SRCInsurance from "../assets/images/Insurance-bnr.png";

const projectData = [
  {
    image: FutureLaunch,
    alt: "Future Launch",
    portfolioRedirect: "portfolio/#tab-fl",
    clientName: "RBC - Future Launch",
  },
  {
    image: Mitchells,
    alt: "Mitchells",
    portfolioRedirect: "portfolio/#tab-mitch",
    clientName: "Mitchell's Food",
  },
  {
    image: Tempehfy,
    alt: "Tempehfy",
    portfolioRedirect: "portfolio/#tab-tempeh",
    clientName: "Lightlife",
  },
  {
    image: Gns,
    alt: "Grab n Snack",
    portfolioRedirect: "portfolio/#tab-gns",
    clientName: "Grab 'N Snack",
  },
  {
    image: ThoughtLeadership,
    alt: "Thought Leadership",
    portfolioRedirect: "portfolio/#tab-tl",
    clientName: "RBC - Thought Leadership",
  },
  {
    image: SRCInsurance,
    alt: "RBC SRC Insurance",
    portfolioRedirect: "portfolio/#tab-src",
    clientName: "RBC Insurance - Sales Resource Centre",
  },
];

const Projects = () => {
  return (
    <>
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <h2 className="mb-1 text-[34px] sm:text-[44px] tracking-[0.02em] text-ink dark:text-surface">
          Project Highlights
        </h2>

        <p className="font-urw text-[18px] max-w-xxl text-ink/60 dark:text-surface/60">
          Selected work across enterprise WordPress platforms, React components,
          and production operations.
        </p>
      </div>

      <div className="mt-6 panel-container grid lg:grid-cols-2 grid-cols-1 gap-5 sm:gap-x-8 sm:gap-y-6 justify-items-center mx-auto">
        {projectData.map((project, index) => (
          <GlossHover
            key={index}
            image={project.image}
            alt={project.alt}
            portfolioRedirect={project.portfolioRedirect}
            clientName={project.clientName}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
