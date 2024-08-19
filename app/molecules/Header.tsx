import React from "react";
import { Avatar } from "../components/Avatar";
import { SnapSection } from "../components/SnapSection";
import Link from "next/link";

interface HeaderProps {}

const HeaderItem: React.FC<{ title: string; link: string }> = ({
  title,
  link,
}) => {
  return (
    <Link href={link} scroll legacyBehavior>
      {title}
    </Link>
  );
};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex justify-end gap-2 w-full">
      <HeaderItem title="Intro" link="#intro" />
      <HeaderItem title="Career" link="#career" />
      <HeaderItem title="Skills" link="#skills" />
      <HeaderItem title="Projects" link="#projects" />
      <HeaderItem title="Hobbies" link="#hobbies" />
    </div>
  );
};
