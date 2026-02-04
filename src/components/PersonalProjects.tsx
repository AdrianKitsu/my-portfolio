import React from "react";
import GlossHover from "./GlossHover";
import FreeGameFinder from "../assets/images/FL.png";

const projectData = [
  {
    image: FreeGameFinder,
    alt: "Free Game Finder",
    portfolioRedirect: "personal-projects/#tab-fl",
    clientName: "Free Game Finder",
  },
];

const PersonalProjects = () => {
  return (
    <>
      <h2 className="mb-[10px] text-[40px] sm:text-[60px] text-center text-[#fcfcfc] sm:tracking-[4px] sm:text-2xl">
        Personal Project Highlights
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

export default PersonalProjects;
