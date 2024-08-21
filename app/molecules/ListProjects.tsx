import React from "react";
import { SnapSection } from "../components/SnapSection";
import { ProjectCard } from "../components/ProjectCard";

interface ListProjectsProps {}

export const ListProjects: React.FC<ListProjectsProps> = ({}) => {
  return (
    <SnapSection
      id="projects"
      title="Projects"
      desc="Projects participating in Demetio"
    >
      <div className="flex gap-10 mt-14 flex-col md:mt-0">
        <ProjectCard
          desc="Printing edit tool"
          teamsize={4}
          techStack={["NextJS", "Tailwind", "NestJS"]}
          title="Editing tool"
        />

        <ProjectCard
          desc="A shopify app that allows custom delivery"
          teamsize={4}
          techStack={["Shopify"]}
          title="Custom delivery"
        />

        <ProjectCard
          desc="A shopify app that allows custom takeout"
          teamsize={4}
          techStack={["Shopify"]}
          title="Takeout"
        />

        <ProjectCard
          desc="A landing page for a contruction company"
          teamsize={4}
          techStack={["NextJS", "Tailwind"]}
          title="Kakehi"
        />
      </div>
    </SnapSection>
  );
};
