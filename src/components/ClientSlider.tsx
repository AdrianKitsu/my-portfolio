import React from "react";
import { ReactComponent as Coc } from "../assets/logos/coc-logo.svg";
import { ReactComponent as D4c } from "../assets/logos/d4c.svg";
import { ReactComponent as Fantino } from "../assets/logos/fantino.svg";
import { ReactComponent as Grabnsnack } from "../assets/logos/grabnsnack.svg";
import { ReactComponent as Greenleaf } from "../assets/logos/greenleaf.svg";
import { ReactComponent as Housingwire } from "../assets/logos/housingwire.svg";
import { ReactComponent as Independent } from "../assets/logos/independent.svg";
import { ReactComponent as Lightlife } from "../assets/logos/lightlife.svg";
import { ReactComponent as Lunchmate } from "../assets/logos/lunchmate.svg";
import { ReactComponent as Mapleleaf } from "../assets/logos/mapleleaf.svg";
import { ReactComponent as Mitchells } from "../assets/logos/mitchells.svg";
import { ReactComponent as Rbc } from "../assets/logos/rbc.svg";
import { ReactComponent as Schneiders } from "../assets/logos/schneiders.svg";
import { ReactComponent as Sonova } from "../assets/logos/sonova.svg";
import { ReactComponent as Xtalks } from "../assets/logos/xtalks.svg";

const ClientSlider = () => {
  const logos = [
    { Component: Coc, name: "Coc", url: "https://olympic.ca/" },
    {
      Component: Mapleleaf,
      name: "Mapleleaf",
      url: "https://www.mapleleaf.ca/",
    },
    { Component: D4c, name: "D4c", url: "https://www.dentistry4children.com/" },
    {
      Component: Fantino,
      name: "Fantino",
      url: "https://fantinomondello.ca/en/",
    },
    {
      Component: Grabnsnack,
      name: "Grabnsnack",
      url: "https://www.grabnsnack.ca/",
    },
    {
      Component: Rbc,
      name: "RBC",
      url: "https://www.rbcroyalbank.com/en-ca/my-money-matters/",
    },
    {
      Component: Greenleaf,
      name: "Greenleaf",
      url: "https://www.greenleaffoods.com/#about-us",
    },
    {
      Component: Housingwire,
      name: "Housingwire",
      url: "https://www.housingwire.com/",
    },
    {
      Component: Independent,
      name: "Independent",
      url: "https://www.independent.com/",
    },
    {
      Component: Lightlife,
      name: "Lightlife",
      url: "https://lightlife.com/en_ca/tempehfy/",
    },
    {
      Component: Lunchmate,
      name: "Lunchmate",
      url: "https://lunchmatekits.ca/",
    },
    {
      Component: Mitchells,
      name: "Mitchells",
      url: "https://www.mitchellsfoods.ca/",
    },
    {
      Component: Schneiders,
      name: "Schneiders",
      url: "https://schneiders.ca/",
    },
    { Component: Sonova, name: "Sonova", url: "https://www.sonova.com/en" },
    { Component: Xtalks, name: "Xtalks", url: "https://xtalks.com/" },
  ];

  return (
    <>
      <h2 className="mb-5 text-center text-[#fcfcfc] tracking-[4px]">
        Clients I've Worked With
      </h2>
      <div className="overflow-hidden w-full bg-[#fcfcfc] py-5">
        <div className="flex w-max animate-scroll gap-[35px] hover:[animation-play-state:paused]">
          {[...logos, ...logos].map(({ Component, name, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex items-center justify-center px-[10px] transition-transform duration-300 ease-in-out hover:scale-130 cursor-pointer"
            >
              <Component className="h-[80px] w-auto" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientSlider;
