import React from "react";
import Gns from "../assets/images/gns.png";
import FutureLaunch from "../assets/images/FL.png";
import ThoughtLeadership from "../assets/images/TL.png";
import Tempehfy from "../assets/images/tempehfy.png";
import Mitchells from "../assets/images/mitchells.png";
import GlossHover from "./GlossHover";

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
];

const Projects = () => {
  return (
    <>
      <h2 className="mb-[10px] text-[40px] sm:text-[60px] text-center text-[#fcfcfc] sm:tracking-[4px] sm:text-2xl">
        Projects I've Worked On
      </h2>
      <div className="panel-container grid sm:grid-cols-1 md:grid-cols-3 gap-5 sm:gap-x-10 sm:gap-y-1 justify-items-center sm:mx-auto sm:max-w-fit">
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
