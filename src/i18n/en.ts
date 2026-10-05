const en = {
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    about: "About",
    downloadCv: "Download CV",
    tagline: "Full-stack / Platform Engineer",
    homeAria: "Go to homepage",
    primary: "Primary",
    mobilePrimary: "Mobile Primary",
    toggleMenu: "Toggle menu",
  },
  theme: {
    toggle: "Toggle theme",
    toLight: "Switch to light",
    toDark: "Switch to dark",
  },
  footer: {
    role: "Full-Stack / Platform Engineer · Canada",
  },
  hero: {
    badge: "Based in Canada · Available for contract & full-time",
    heading:
      "Full-stack engineer who architects performant web platforms for enterprise clients.",
    intro:
      "I build and operate full-stack web platforms for enterprise teams, working across TypeScript, React, WordPress, and server-side systems. I ship features with a focus on performance, reliability, and maintainable code.",
    viewWork: "View work",
    downloadCv: "Download CV",
    coreStrengths: "Core strengths",
    strengths: [
      {
        title: "React + TypeScript",
        description: "Gutenberg blocks, UI systems, component libraries.",
      },
      {
        title: "WordPress VIP / Ops",
        description:
          "Deployments, performance, reliability, multi-site governance.",
      },
      {
        title: "Enterprise delivery",
        description:
          "Workflow-first solutions: patterns, templates, authoring UX.",
      },
    ],
    openTo: {
      label: "Open to:",
      roles: ["frontend", "platform", "web operations"],
      and: ", and",
      suffix: " roles.",
    },
  },
  projects: {
    heading: "Project Highlights",
    intro:
      "Selected work across enterprise WordPress platforms, React components, and production operations.",
  },
  clients: {
    heading: "Clients I’ve Worked With",
    intro:
      "Enterprise and consumer brands across finance, food, media, healthcare, and events.",
  },
  about: {
    heading: "About",
    personalHeading: "Personal",
    personal: [
      "I'm a full-stack engineer with 4+ years building and operating production web platforms for enterprise and media clients such as RBC, Maple Leaf Foods, StackAdapt, and the Canadian Olympic Committee.",
      "My work goes beyond feature delivery. I own systems: CMS architecture, deployment workflows, performance, and reliability across development, staging, and production environments. I've driven frontend performance improvements of up to 40%, served as the technical escalation point for critical production incidents, and designed component systems adopted across multiple client platforms.",
      "I work best in environments where engineers are trusted with real ownership, client relations, and production responsibility. Not just tickets.",
    ],
    siteHeading: "About This Site",
    site: "Built with Next.js, TypeScript, and Tailwind. My broader stack includes React, PHP, Node.js, MySQL, GraphQL, and REST APIs. I'm currently expanding into Three.js for interactive experiences and AWS for cloud architecture.",
    cvNote: "My CV is available below.",
    downloadCv: "Download CV",
  },
  portfolio: {
    heading: "Project Highlights",
    previous: "Previous project",
    next: "Next project",
    visitSite: "Visit The Site",
  },
  notFound: {
    title: "Page not found",
    message: "The page you’re looking for doesn’t exist.",
    backHome: "Back home",
  },
  projectList: {
    "tab-future": {
      label: "Future Launch",
      cardTitle: "RBC - Future Launch",
      text: `The Future Launch project was my first major engagement at Trew Knowledge. It centered on migrating the client’s legacy site to WordPress and developing a reusable library of custom, dynamic React components for their network of sites. My primary responsibilities included rebuilding existing components with enhanced data capabilities and creating new ones as fully customizable Gutenberg blocks, enabling drag-and-drop flexibility for content authors. These components empowered consistent layouts, improved analytics and tracking options, and streamlined visual customization across the platform. I also contributed to the creation of custom post types, templates, and patterns to further simplify and accelerate content production workflows.`,
      text2: ``,
      text3: ``,
    },
    "tab-mitch": {
      label: "Mitchell's",
      cardTitle: "Mitchell's Food",
      text: `The Mitchell’s Foods website was a full rebrand initiative where I was responsible for quality control and front-end styling refinement. I reviewed component implementation across the site to ensure consistency and usability, and updated visual styles to align with the new brand direction. This included fine-tuning layouts, resolving UI inconsistencies, and collaborating closely with design to maintain a cohesive look and feel throughout the rebuild.`,
      text2: ``,
      text3: ``,
    },
    "tab-tempeh": {
      label: "Lightlife",
      cardTitle: "Lightlife",
      text: `Lightlife is a website I actively maintain and enhance based on client needs. When the brand introduced its Tempeh launch initiative, I collaborated with the design team to build a new suite of components for the Tempehfy campaign page. Because the site was originally developed using an older full-site editing system, we implemented compatibility solutions to support modern Gutenberg-based components. The Tempehfy page was released in two separate phases, each featuring a unique design direction. Despite tight deadlines and evolving requirements, we successfully delivered both launches on schedule. My key contributions included the development of the new React components, configuring pages and templates, coordinating closely with design and technical leads to align on the vision, planning rollout efforts, and mentoring a newer developer who joined the project.`,
      text2: ``,
      text3: ``,
    },
    "tab-gns": {
      label: "Grab 'N Snack",
      cardTitle: "Grab 'N Snack",
      text: `Similar to the Mitchell’s Foods project, Grab ’N Snack was a full-site rebrand focused on modernizing the visual identity. While only a few new components were introduced, the core of the work involved global styling updates, layout refinements, and re-styling inherited components from the parent theme to ensure consistency with the refreshed brand direction. This included improving responsiveness, aligning typography and color usage, and resolving UI inconsistencies across templates and page types. Unfortunately, the site has since been archived by the client.`,
      text2: ``,
      text3: ``,
    },
    "tab-thought": {
      label: "Thought Leadership",
      cardTitle: "RBC - Thought Leadership",
      text: `Following the success of the initial RBC migration project, I was given the opportunity to help bring an additional two legacy sites, Thought Leadership and Climate Action Institute, into the WordPress ecosystem. With only the existing legacy sites and new design files as reference, our team worked closely with the client to define how each component should behave, providing recommendations on editing workflows, reusability, and scalability within Gutenberg.`,
      text2: `My role focused on rebuilding existing components with enhanced dynamic functionality to give content authors more flexibility, as well as developing new React-based blocks aligned to the updated design system. I also created key pages, custom templates, navigation menus, and reusable patterns to accurately reflect the original site structure while enabling a vastly improved publishing experience.`,
      text3: ``,
    },
    "tab-src": {
      label: "Sales Resource Centre",
      cardTitle: "RBC Insurance - Sales Resource Centre",
      text: `With continued trust from our partners at RBC, I had the opportunity to lead the migration and enhancement of their Sales Resource Centre. The project aimed to transition all forms, documents, and videos to a new hosting provider and leverage its API to build reusable components with advanced backend filtering, enabling unique, dynamic content across pages.`,
      text2: `My role centered on auditing existing components and updating global styling to align with new brand standards. I rebuilt legacy components for better functionality and responsive design, resolved pre-existing errors, and developed new React-based blocks. My tasks involved building templates, site navigation, and reusable patterns while integrating i18n for translations. During the first 3–4 weeks, with the team lead unavailable, I took charge of creating stories, coordinating directly with clients, stakeholders, and project owners, reviewing Figma designs, planning development approaches, and recommending UX and workflow improvements.`,
      text3: ``,
    },
    "tab-src-2": {
      label: "Sales Resource Centre: Phase 2",
      cardTitle: "RBC Insurance - Sales Resource Centre: Phase 2",
      text: `Following the successful site launch, I took ownership of the next phase of improvements as the sole engineer. The work focused on expanding search, sorting, filtering, and the Bynder API integration. I inherited another developer's codebase and had to understand and extend it independently, as the original developer was no longer on the team.`,
      text2: `I researched technical blockers, recommended solutions, and implemented the improvements, including a popularity sort dropdown and links between related Bynder assets in different languages. The client's existing Bynder subscription limited the available API capabilities, so I reviewed the documentation and developed workarounds using custom metadata properties to deliver the requested functionality within those constraints with limited impact on performance.`,
      text3: `Alongside development, I managed the majority of client coordination and day-to-day delivery: creating tickets, scheduling meetings, running scrums, presenting demos, and sharing progress updates. I carried the work from investigation and planning through implementation and client presentations, meeting every deadline while keeping stakeholders informed of progress, blockers, and proposed solutions.`,
    },
    "tab-vac": {
      label: "Visual Arts Centre",
      cardTitle: "Visual Arts Centre",
      text: `The Visual Arts Centre needed a dedicated registration platform to bring its camps into one centralized experience, with future course offerings in mind. Built around WooCommerce and an event ticketing plugin, the site allows parents to explore camps and purchase places for their children. I owned key parts of the registration experience, spanning visual styling, ticket selection, checkout, and sold-out handling.`,
      text2: `I implemented the approved design direction into the site's styling and refined the ticket selection and checkout flows to support camp registration. My work connected the visual experience with the purchasing functionality, giving families a consistent path from choosing tickets to completing checkout.`,
      text3: `I also implemented the out-of-stock logic governing how unavailable camp tickets are presented and handled during registration. This work addressed a critical part of the booking experience: making availability clear and preventing users from proceeding with sold-out selections. My contribution combined design implementation with the commerce logic behind the registration.`,
    },
  },
};

export default en;
export type Dictionary = typeof en;
export type ProjectId = keyof Dictionary["projectList"];
