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
      <p className="text-xl leading-none font-bold text-primary-600">{title}</p>
      <div className="mt-1 ">
        <p className="font-medium text-primary-700">{techStack.join(", ")}</p>
        <p className="text-primary-800">{teamsize} co-workers</p>
        <p className="text-primary-800">{desc}</p>
      </div>
    </div>
  );
};
