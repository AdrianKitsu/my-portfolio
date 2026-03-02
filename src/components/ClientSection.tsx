import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  type Variants,
} from "framer-motion";
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
import { ReactComponent as FieldRoast } from "../assets/logos/fieldroast.svg";
import { ReactComponent as GreenFieldMeat } from "../assets/logos/greenfieldmeat.svg";

type LogoItem = {
  Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  url: string;
};

const logos: LogoItem[] = [
  { Component: Coc, name: "COC", url: "https://olympic.ca/" },
  {
    Component: Mapleleaf,
    name: "Maple Leaf",
    url: "https://www.mapleleaf.ca/",
  },
  {
    Component: D4c,
    name: "Dentistry4Children",
    url: "https://www.dentistry4children.com/",
  },
  {
    Component: Fantino,
    name: "Fantino Mondello",
    url: "https://fantinomondello.ca/en/",
  },
  {
    Component: Grabnsnack,
    name: "Grab n Snack",
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
    name: "HousingWire",
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
  { Component: Lunchmate, name: "Lunchmate", url: "https://lunchmatekits.ca/" },
  {
    Component: Mitchells,
    name: "Mitchell’s",
    url: "https://www.mitchellsfoods.ca/",
  },
  { Component: Schneiders, name: "Schneiders", url: "https://schneiders.ca/" },
  { Component: Sonova, name: "Sonova", url: "https://www.sonova.com/en" },
  {
    Component: GreenFieldMeat,
    name: "Greenfield Meat",
    url: "https://www.greenfieldmeat.com/",
  },
  { Component: Xtalks, name: "Xtalks", url: "https://www.xtalks.com/" },
  {
    Component: FieldRoast,
    name: "Field Roast",
    url: "https://www.fieldroast.com/",
  },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

export default function ClientSection() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, {
    amount: 0.25,
    margin: "0px 0px -15% 0px",
  });

  return (
    <section
      ref={ref}
      className="w-full bg-white dark:bg-transparent border-none"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-16">
        <div className="flex flex-col gap-3 md:gap-4 text-center">
          <h2 className="text-ink dark:text-surface text-[30px] md:text-[42px] tracking-[0.02em] font-semibold">
            Clients I’ve Worked With
          </h2>
          <p className="text-ink/70 dark:text-surface/70 max-w-2xl mx-auto text-[15px] md:text-[16px] leading-relaxed">
            Enterprise and consumer brands across finance, food, media,
            healthcare, and events.
          </p>
        </div>

        <motion.div
          className="mt-10 md:mt-12 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-8"
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : inView ? "show" : "hidden"}
        >
          {logos.map(({ Component, name, url }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              variants={reduceMotion ? undefined : itemVariants}
              className="
                group relative
                flex items-center justify-center
                h-[72px] md:h-[84px]
                px-5
                rounded-xl
                transition
                focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50
              "
            >
              {/* hover surface */}
              <span
                className="
                  pointer-events-none absolute inset-0 rounded-xl transition
                  bg-surface/0 group-hover:bg-surface/70
                  dark:bg-surface/0 dark:group-hover:bg-surface/10
                "
              />

              {/* hover ring */}
              <span
                className="
                  pointer-events-none absolute inset-0 rounded-xl transition
                  ring-1 ring-ink/0 group-hover:ring-brand/15
                  dark:ring-surface/0 dark:group-hover:ring-brand/25
                "
              />

              {/* logo */}
              <span className="relative">
                <Component
                  className="
                    h-[60px] md:h-[60px] w-auto transition
                    opacity-90 group-hover:opacity-100
                    dark:opacity-85 dark:group-hover:opacity-100
                    dark:invert dark:brightness-150
                  "
                />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
