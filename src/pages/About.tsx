import React from "react";
import LinkedIn from "../assets/images/LinkedIn.png";
import GitHub from "../assets/images/GitHub.png";

const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="text-center text-ink tracking-[0.02em] text-[34px] sm:text-[44px] mt-2">
        About
      </h2>
      <div className="mt-8 bg-white border border-ink/10 shadow-sm rounded-2xl p-6 md:p-10">
        <div className="flex flex-wrap gap-4 justify-between">
          <a
            className="inline-flex items-center gap-2 py-2 font-urw text-sm tracking-[0.12em] uppercase transition-colors duration-200 text-ink/70 hover:text-brand"
            href="https://www.linkedin.com/in/adrian-borges-solari-17982513b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[20px] h-[20px] mr-[10px] mt-[4px]"
              src={LinkedIn}
              alt="LinkedIn Logo"
            />
            LinkedIn
          </a>
          <a
            className="inline-flex items-center gap-2 py-2 font-urw text-sm tracking-[0.12em] uppercase transition-colors duration-200 text-ink/70 hover:text-brand"
            href="https://github.com/AdrianKitsu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[20px] h-[20px] mr-[10px] mt-[4px]"
              src={GitHub}
              alt="GitHub Logo"
            />
            GitHub
          </a>
        </div>
        <h3 className="font-caslon text-[28px] text-ink mt-8 mb-3">
          Personal
        </h3>
        <p className="mb-3 font-urw text-ink/75 leading-relaxed">
          I’m a frontend and platform-focused engineer with experience building
          and operating production web platforms for enterprise and media
          organizations.
        </p>
        <p className="mb-3 font-urw text-ink/75 leading-relaxed">
          My work spans frontend development with React and TypeScript, as well
          as platform responsibilities such as CMS foundations, deployment
          workflows, site reliability, and performance. I regularly work across
          development, staging, and production environments, ensuring features
          ship reliably and systems remain stable at scale.
        </p>
        <p className="mb-3 font-urw text-ink/75 leading-relaxed">
          I began my career in support-oriented roles, where I developed a
          strong foundation in troubleshooting frontend and server-side issues,
          collaborating directly with clients, and translating requirements into
          practical technical solutions. Over time, my role expanded into
          project-based and platform-focused work, including sprint planning,
          technical estimation, and ownership of production changes.
        </p>
        <p className="font-urw text-ink/75 leading-relaxed">
          I’m most effective in environments where engineers are trusted with
          end-to-end ownership, production responsibility, and long-term system
          health. Not just feature delivery.
        </p>
        <h3 className="font-caslon text-[28px] text-ink mt-8 mb-3">
          About This Site
        </h3>
        <p className="font-urw text-ink/75 leading-relaxed">
          This site was built with TypeScript and Tailwind. I’ve worked with
          HTML5, CSS/SCSS, JavaScript, React, Next.js, Node.js, and PHP across a
          variety of projects.
          <br /> I’m currently learning Three.js, Framer, and AWS to build more
          interactive and scalable web experiences. My CV is available below.
        </p>
        <div className="mt-8">
          <a
            className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 font-urw text-sm tracking-[0.14em] uppercase text-surface hover:brightness-110 transition"
            href="/Adrian Borges Solari - CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
