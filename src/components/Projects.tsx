import React from "react";
import Gns from "../assets/images/gns.png";
import FutureLaunch from "../assets/images/FL.png";
import ThoughtLeadership from "../assets/images/TL.png";
import Tempehfy from "../assets/images/tempehfy.png";
import Mitchells from "../assets/images/mitchells.png";
import GlossHover from "./GlossHover";
import SRCInsurance from "../assets/images/Insurance-bnr.png";
import VisualArts from "../assets/images/visual-arts-centre.png";
import { useLanguage } from "../i18n/LanguageContext";
import type { ProjectId } from "../i18n/en";

const projectData: { id: ProjectId; image: string }[] = [
  { id: "tab-future", image: FutureLaunch },
  { id: "tab-mitch", image: Mitchells },
  { id: "tab-tempeh", image: Tempehfy },
  { id: "tab-gns", image: Gns },
  { id: "tab-thought", image: ThoughtLeadership },
  { id: "tab-src", image: SRCInsurance },
  { id: "tab-src-2", image: SRCInsurance },
  { id: "tab-vac", image: VisualArts },
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <h2 className="mb-1 text-[34px] sm:text-[44px] tracking-[0.02em] text-ink dark:text-surface">
          {t.projects.heading}
        </h2>

        <p className="font-urw text-[18px] max-w-xxl text-ink/60 dark:text-surface/60">
          {t.projects.intro}
        </p>
      </div>

      <div className="mt-6 panel-container grid lg:grid-cols-2 grid-cols-1 gap-5 sm:gap-x-8 sm:gap-y-6 justify-items-center mx-auto">
        {projectData.map((project, index) => (
          <GlossHover
            key={project.id}
            image={project.image}
            alt={t.projectList[project.id].label}
            portfolioRedirect={`portfolio/#${project.id}`}
            clientName={t.projectList[project.id].cardTitle}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
