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
    <div>
      <p>{title}</p>
      <p>{teamsize} co-workers</p>
      <p>{techStack.join(", ")}</p>
      <p>{desc}</p>
    </div>
  );
};
