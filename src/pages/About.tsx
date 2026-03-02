import React from "react";

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.7-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.29.1-2.68 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.39.2 2.42.1 2.68.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.33.68.98.68 1.98 0 1.43-.01 2.58-.01 2.93 0 .26.18.58.69.48A10.3 10.3 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
    />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.65H9.37V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.21 2.34 4.21 5.38v6.36zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.55V9H3.56v11.45z"
    />
  </svg>
);

const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="text-center tracking-[0.02em] text-[34px] sm:text-[44px] mt-2 text-ink dark:text-surface">
        About
      </h2>

      <div className="mt-8 bg-white dark:bg-surface/5 border border-ink/10 dark:border-surface/10 shadow-sm rounded-2xl p-6 md:p-10">
        <div className="flex flex-wrap gap-4 justify-between">
          <a
            className="group inline-flex items-center gap-2 py-2 font-urw text-sm tracking-[0.12em] uppercase transition-colors duration-200 text-ink/70 dark:text-surface/75 hover:text-brand"
            href="https://www.linkedin.com/in/adrian-borges-solari-17982513b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-5 w-5 text-current opacity-80 group-hover:opacity-100 transition mb-[2px]" />
            LinkedIn
          </a>

          <a
            className="group inline-flex items-center gap-2 py-2 font-urw text-sm tracking-[0.12em] uppercase transition-colors duration-200 text-ink/70 dark:text-surface/75 hover:text-brand"
            href="https://github.com/AdrianKitsu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-5 w-5 text-current opacity-80 group-hover:opacity-100 transition" />
            GitHub
          </a>
        </div>

        <h3 className="font-caslon text-[28px] text-ink dark:text-surface mt-8 mb-3">
          Personal
        </h3>

        <p className="mb-3 font-urw text-ink/75 dark:text-surface/75 leading-relaxed">
          I’m a frontend and platform-focused engineer with experience building
          and operating production web platforms for enterprise and media
          organizations.
        </p>

        <p className="mb-3 font-urw text-ink/75 dark:text-surface/75 leading-relaxed">
          My work spans frontend development with React and TypeScript, as well
          as platform responsibilities such as CMS foundations, deployment
          workflows, site reliability, and performance. I regularly work across
          development, staging, and production environments, ensuring features
          ship reliably and systems remain stable at scale.
        </p>

        <p className="mb-3 font-urw text-ink/75 dark:text-surface/75 leading-relaxed">
          I began my career in support-oriented roles, where I developed a
          strong foundation in troubleshooting frontend and server-side issues,
          collaborating directly with clients, and translating requirements into
          practical technical solutions. Over time, my role expanded into
          project-based and platform-focused work, including sprint planning,
          technical estimation, and ownership of production changes.
        </p>

        <p className="font-urw text-ink/75 dark:text-surface/75 leading-relaxed">
          I’m most effective in environments where engineers are trusted with
          end-to-end ownership, production responsibility, and long-term system
          health. Not just feature delivery.
        </p>

        <h3 className="font-caslon text-[28px] text-ink dark:text-surface mt-8 mb-3">
          About This Site
        </h3>

        <p className="font-urw text-ink/75 dark:text-surface/75 leading-relaxed">
          This site was built with TypeScript, Framer, and Tailwind. I’ve worked
          with HTML5, CSS/SCSS, JavaScript, React, Next.js, Node.js, MySQL, and
          PHP across a variety of projects.
          <br />
          <br /> I’m currently learning Three.js, and AWS to build more
          interactive and scalable web experiences. My CV is available below.
        </p>

        <div className="mt-8">
          <a
            className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 font-urw text-sm tracking-[0.14em] uppercase text-surface hover:brightness-110 transition dark:bg-surface dark:text-ink"
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
