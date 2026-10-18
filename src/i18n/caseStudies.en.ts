import type { CaseStudyContent, CaseStudyId } from "./caseStudyTypes";

const caseStudiesEn: Record<CaseStudyId, CaseStudyContent> = {
  xtalks: {
    label: "Xtalks",
    client: "Xtalks",
    title: "Restoring a Critical Zoom Registration Integration",
    focus: [
      "Backend Development",
      "Third-Party API Integration",
      "OAuth Migration",
      "Production Troubleshooting",
    ],
    technologies: ["PHP", "WordPress", "WooCommerce", "Zoom API", "OAuth 2.0"],
    sections: [
      {
        heading: "The Challenge",
        blocks: [
          {
            type: "paragraph",
            text: "Xtalks relied on a custom WordPress integration to automatically register customers for Zoom Peer Circle meetings following a successful WooCommerce purchase.",
          },
          {
            type: "paragraph",
            text: "When the integration stopped functioning, customers continued receiving purchase confirmations but were no longer being registered for their associated Zoom meetings. This disrupted a critical customer-facing workflow and required manual intervention to provide access.",
          },
          {
            type: "paragraph",
            text: "I investigated the issue and discovered that the integration depended on Zoom's deprecated JWT authentication system, which had been discontinued in September 2023.",
          },
        ],
      },
      {
        heading: "My Approach",
        blocks: [
          {
            type: "paragraph",
            text: "I took ownership of investigating, updating, and validating the existing integration. The work involved:",
          },
          {
            type: "list",
            items: [
              {
                lead: "Authentication migration",
                text: "Reworked the custom plugin's Zoom API authentication to use OAuth, replacing the obsolete JWT authentication mechanism.",
              },
              {
                lead: "API troubleshooting",
                text: "Investigated failed access-token requests, missing credentials, and unexpected API responses.",
              },
              {
                lead: "Backend debugging",
                text: "Traced WooCommerce order data through the registration workflow, identifying issues with meeting IDs, customer information, and API request payloads.",
              },
              {
                lead: "Workflow restoration",
                text: "Corrected the logic responsible for creating Zoom users, assigning them to the appropriate groups, and registering them for meetings.",
              },
              {
                lead: "End-to-end testing",
                text: "Validated the integration through test purchases, new-user activation, Zoom group assignments, meeting registrations, and confirmation emails across local and staging environments.",
              },
            ],
          },
        ],
      },
      {
        heading: "The Outcome",
        blocks: [
          {
            type: "paragraph",
            text: "Successfully rebuilt the integration around OAuth authentication and validated the complete registration workflow in staging.",
          },
          {
            type: "paragraph",
            text: "Testing confirmed that new customers could complete a purchase, activate their Zoom accounts, receive appropriate group assignments, and obtain meeting registration confirmations.",
          },
          {
            type: "paragraph",
            text: "Following successful staging validation, the changes were merged and deployed to production for final client verification.",
          },
        ],
      },
      {
        heading: "Engineering Takeaways",
        blocks: [
          {
            type: "paragraph",
            text: "This project required diagnosing failures across multiple interconnected systems, rather than simply replacing an authentication method.",
          },
          {
            type: "paragraph",
            text: "It reinforced the importance of maintaining third-party API compatibility, tracing data across integration boundaries, and validating complete user journeys before production deployment.",
          },
        ],
      },
    ],
  },
  stackadapt: {
    label: "StackAdapt",
    client: "StackAdapt",
    title: "Optimizing Frontend Performance and JavaScript Execution",
    focus: [
      "Web Performance",
      "JavaScript Optimization",
      "Third-Party Integrations",
      "Production Troubleshooting",
    ],
    technologies: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "WordPress VIP",
      "Gutenberg",
      "HubSpot",
      "Google reCAPTCHA",
      "Lighthouse",
    ],
    sections: [
      {
        heading: "The Challenge",
        blocks: [
          {
            type: "paragraph",
            text: "StackAdapt sought to improve desktop and mobile performance across its marketing website, with a particular focus on reducing Total Blocking Time (TBT) and unnecessary JavaScript execution.",
          },
          {
            type: "paragraph",
            text: "Initial investigations revealed that third-party scripts, including HubSpot form integrations and Google reCAPTCHA, were contributing to browser processing overhead during page load.",
          },
          {
            type: "paragraph",
            text: "These resources were being loaded on pages that did not necessarily require them, potentially affecting loading performance and responsiveness.",
          },
          {
            type: "paragraph",
            text: "The challenge was to reduce unnecessary JavaScript execution without disrupting critical lead-generation forms, analytics, or existing website functionality.",
          },
        ],
      },
      {
        heading: "My Approach",
        blocks: [
          {
            type: "paragraph",
            text: "I led the technical investigation and implemented targeted optimizations to reduce browser workload.",
          },
          { type: "subheading", text: "1. Auditing JavaScript execution" },
          {
            type: "paragraph",
            text: "Using Lighthouse, PageSpeed Insights, and code-level analysis, I investigated JavaScript execution time, main-thread activity, third-party dependencies, and custom Gutenberg block assets.",
          },
          {
            type: "paragraph",
            text: "I identified globally loaded HubSpot and reCAPTCHA resources as opportunities for improvement, while confirming that several Gutenberg block scripts were already being conditionally loaded.",
          },
          {
            type: "subheading",
            text: "2. Implementing conditional script loading",
          },
          {
            type: "paragraph",
            text: "I modified the frontend to initialize reCAPTCHA only when relevant form components were present.",
          },
          {
            type: "paragraph",
            text: "I also introduced conditional loading for HubSpot scripts, avoiding unnecessary initialization on pages without forms.",
          },
          {
            type: "paragraph",
            text: "These changes targeted JavaScript execution overhead while preserving the functionality of existing integrations.",
          },
          {
            type: "subheading",
            text: "3. Resolving cross-environment compatibility issues",
          },
          {
            type: "paragraph",
            text: "During testing, differences between development, staging, and production exposed several integration issues.",
          },
          {
            type: "paragraph",
            text: "I investigated inconsistencies involving WordPress page templates, Gutenberg block detection, and WordPress VIP caching behavior.",
          },
          {
            type: "paragraph",
            text: "The final approach accounted for forms rendered through both page content and reusable templates, ensuring that scripts could load when required without returning to unconditional site-wide loading.",
          },
          { type: "subheading", text: "4. Testing and deployment" },
          {
            type: "paragraph",
            text: "I worked through multiple rounds of Lighthouse testing, regression investigation, QA, and staging validation before the changes were deployed to production.",
          },
          {
            type: "paragraph",
            text: "The work required balancing performance improvements against the reliability of business-critical forms.",
          },
        ],
      },
      {
        heading: "Measured Results",
        blocks: [
          {
            type: "stats",
            items: [
              { value: "35%", label: "Less main-thread work" },
              { value: "4.0 s → 2.6 s", label: "Main-thread work" },
              { value: "50–80 ms", label: "TBT across most tested pages" },
            ],
          },
          {
            type: "paragraph",
            text: "For one representative page tested in staging:",
          },
          {
            type: "table",
            head: ["Metric", "Before", "After"],
            rows: [
              { cells: ["Main-thread work", "4.0 s", "2.6 s"] },
              {
                cells: ["Main-thread work reduction", "—", "35%"],
                highlight: true,
              },
              { cells: ["TBT assessment", "Yellow", "Green"] },
              {
                cells: [
                  "JavaScript execution diagnostic",
                  "2.2 s flagged",
                  "No longer flagged",
                ],
              },
              { cells: ["Lighthouse performance score", "66", "81"] },
            ],
          },
          {
            type: "paragraph",
            text: "Additional staging QA reported TBT values of approximately 50–80 ms across most tested pages.",
          },
          {
            type: "paragraph",
            text: "The overall Lighthouse score did not consistently increase, highlighting the influence of other factors, particularly Largest Contentful Paint (LCP), hero media, and visual rendering.",
          },
          {
            type: "paragraph",
            text: "The changes were subsequently deployed to production, with further performance investigation remaining possible.",
          },
        ],
      },
      {
        heading: "Engineering Takeaways",
        blocks: [
          {
            type: "paragraph",
            text: "This project demonstrated that effective web performance optimization requires more than reducing file sizes or removing scripts.",
          },
          {
            type: "paragraph",
            text: "The work involved understanding third-party dependencies, distinguishing necessary resources from avoidable browser work, accounting for WordPress rendering and caching behavior, and testing changes across different environments.",
          },
          {
            type: "paragraph",
            text: "Most importantly, it reinforced the need to evaluate performance improvements alongside application reliability, particularly when optimizing integrations responsible for lead generation.",
          },
        ],
      },
    ],
  },
};

export default caseStudiesEn;
