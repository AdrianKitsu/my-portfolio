import React from "react";
import LinkedIn from "../assets/images/LinkedIn.png";
import GitHub from "../assets/images/GitHub.png";

const About = () => {
  return (
    <div className="w-full space-y-8 sm:space-y-16 p-4 pb-[64px]">
      <h2 className="mb-5 text-center text-[#fcfcfc] tracking-[4px] text-[40px] sm:text-[60px] mt-5 max-h-min">
        About
      </h2>
      <div className="w-[90%] mx-auto mt-12 bg-white shadow-md rounded-xl p-6 md:p-10">
        <div className="flex justify-between">
          <a
            className="flex-1 flex text-center py-4 font-futura font-bold text-lg max-w-max transition-colors duration-300 text-[#312f30] hover:text-[#3b9ff0] ml-[30px] md:ml-[50px]"
            href="https://www.linkedin.com/in/adrian-borges-solari-17982513b/"
          >
            <img
              className="w-[20px] h-[20px] mr-[10px] mt-[4px]"
              src={LinkedIn}
              alt="LinkedIn Logo"
            />
            LinkedIn
          </a>
          <a
            className="flex-1 flex text-center py-4 font-futura font-bold text-lg max-w-max transition-colors duration-300 text-[#312f30] hover:text-[#3b9ff0] mr-[30px] md:mr-[50px]"
            href="https://github.com/AdrianKitsu"
          >
            <img
              className="w-[20px] h-[20px] mr-[10px] mt-[4px]"
              src={GitHub}
              alt="GitHub Logo"
            />
            GitHub
          </a>
        </div>
        <h4 className="font-caslon text-[26px] text-[#312f30] mt-[30px] mb-[15px]">
          Personal
        </h4>
        <p className="mb-[10px] font-urw">
          I’m a frontend and platform-focused engineer with experience building
          and operating production web platforms for enterprise and media
          organizations.
        </p>
        <p className="mb-[10px] font-urw">
          My work spans frontend development with React and TypeScript, as well
          as platform responsibilities such as CMS foundations, deployment
          workflows, site reliability, and performance. I regularly work across
          development, staging, and production environments, ensuring features
          ship reliably and systems remain stable at scale.
        </p>
        <p className="mb-[10px] font-urw">
          I began my career in support-oriented roles, where I developed a
          strong foundation in troubleshooting frontend and server-side issues,
          collaborating directly with clients, and translating requirements into
          practical technical solutions. Over time, my role expanded into
          project-based and platform-focused work, including sprint planning,
          technical estimation, and ownership of production changes.
        </p>
        <p className="font-urw">
          I’m most effective in environments where engineers are trusted with
          end-to-end ownership, production responsibility, and long-term system
          health. Not just feature delivery.
        </p>
        <h4 className="font-caslon text-[26px] text-[#312f30] mt-[30px] mb-[15px]">
          About This Site
        </h4>
        <p className="font-urw">
          This site was built with TypeScript and Tailwind. I’ve worked with
          HTML5, CSS/SCSS, JavaScript, React, Next.js, Node.js, and PHP across a
          variety of projects.
          <br /> I’m currently learning Three.js, Framer, and AWS to build more
          interactive and scalable web experiences. My CV is available below.
        </p>
        <h4 className="mt-[30px] hover:scale-[1.07] origin-left duration-500 ease-in-out">
          <a
            className="font-caslon text-[26px] text-[#312f30] hover:text-[#3b9ff0] duration-500 ease-in-out cursor-pointer"
            href="/Adrian Borges Solari - CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My CV
          </a>
        </h4>
      </div>
    </div>
  );
};

export default About;
