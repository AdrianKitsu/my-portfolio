import React from "react";
import Gns from "../assets/images/gns.png";
import FutureLaunch from "../assets/images/FL.png";
import ThoughtLeadership from "../assets/images/TL.png";
import Tempehfy from "../assets/images/tempehfy.png";
import Mitchells from "../assets/images/mitchells.png";
import GlossHover from "./GlossHover";

const Projects = () => {
  return (
    <>
      <h2 className="mb-[10px] text-center text-[#fcfcfc] tracking-[4px]">
        Projects I've Worked On
      </h2>
      <div className="panel-container grid sm:grid-cols-1 md:grid-cols-3 gap-10 justify-items-center mx-auto max-w-fit">
        <GlossHover
          image={FutureLaunch}
          alt="Future Launch"
          href="https://www.rbc.com/en/future-launch/"
          portfolioRedirect="portfolio#tab-fl"
        />
        <GlossHover
          image={Gns}
          alt="Grab n Snack"
          href="https://www.grabnsnack.ca/"
          portfolioRedirect="portfolio#tab-gns"
        />
        <GlossHover
          image={Tempehfy}
          alt="Tempehfy"
          href="https://lightlife.com/tempehfy/"
          portfolioRedirect="portfolio#tab-tempeh"
        />
        <GlossHover
          image={ThoughtLeadership}
          alt="Thought Leadership"
          href="https://www.rbc.com/en/thought-leadership/"
          portfolioRedirect="portfolio#tab-tl"
        />
        <GlossHover
          image={Mitchells}
          alt="Mitchells"
          href="https://mitchellsfoods.ca/"
          portfolioRedirect="portfolio#tab-mitch"
        />
      </div>
    </>
  );
};

export default Projects;
