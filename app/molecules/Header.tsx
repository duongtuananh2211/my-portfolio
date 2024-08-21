"use client";

import React from "react";
import { useActiveSection } from "../stores/active-section";
import { cn } from "../utils/common";
interface HeaderProps {}

const HeaderItem: React.FC<{ title: string; link: string }> = ({
  title,
  link,
}) => {
  const { activeSection } = useActiveSection();

  const isActive = activeSection === link.replace("#", "");

  return (
    <a
      className={cn(
        "py-4 text-base text-primary-600 relative px-2 opacity-50 font-medium",
        {
          "opacity-100": isActive,
        }
      )}
      href={link}
    >
      {title}
      <div
        className={cn(
          "absolute bottom-0 left-0 h-[2px] w-full bg-primary-600 hidden ",
          {
            block: isActive,
          }
        )}
      ></div>
    </a>
  );
};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex justify-center bg-gradient-to-b from-background to-background/0 w-full absolute z-[100] h-16 items-center px-6">
      <HeaderItem title="Intro" link="#intro" />
      <HeaderItem title="Career" link="#career" />
      <HeaderItem title="Skills" link="#skills" />
      <HeaderItem title="Projects" link="#projects" />
      {/* <HeaderItem title="Hobbies" link="#hobbies" /> */}
    </div>
  );
};
