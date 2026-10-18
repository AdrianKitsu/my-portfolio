export type CaseStudyId = "xtalks" | "stackadapt";

export type CaseStudyBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: { lead?: string; text: string }[] }
  | { type: "stats"; items: { value: string; label: string }[] }
  | {
      type: "table";
      head: string[];
      rows: { cells: string[]; highlight?: boolean }[];
    };

export type CaseStudyContent = {
  label: string;
  client: string;
  title: string;
  focus: string[];
  technologies: string[];
  sections: { heading: string; blocks: CaseStudyBlock[] }[];
};
