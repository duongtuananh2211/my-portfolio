import React from "react";

interface ProjectCardProps {
  title: string;
  desc: string;
  techStack: string[];
  teamsize: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  desc,
  teamsize,
  techStack,
  title,
}) => {
  return (
    <div className="relative">
      <p className="text-xl leading-none font-bold">{title}</p>
      <div className="mt-1 ">
        <p className="font-medium">{techStack.join(", ")}</p>
        <p className="text-textForeground/80">{teamsize} co-workers</p>
        <p className="text-textForeground/80">{desc}</p>
      </div>
    </div>
  );
};
