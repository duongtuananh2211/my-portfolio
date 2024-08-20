"use client";

import React, { useEffect } from "react";
import { useActiveSection } from "../stores/active-section";
import { cn } from "../utils/common";
import { useTranslations } from "use-intl";
interface HeaderProps {}

const HeaderItem: React.FC<{ title: string; link: string }> = ({
  title,
  link,
}) => {
  const { activeSection } = useActiveSection();

  const isActive = activeSection === link.replace("#", "");

  return (
    <a
      className={cn("py-4 text-base relative px-2 opacity-50 font-medium", {
        "opacity-100": isActive,
      })}
      href={link}
    >
      {title}

      <div
        className={cn(
          "absolute bottom-0 left-0 h-[2px] w-full bg-black hidden ",
          {
            block: isActive,
          }
        )}
      ></div>
    </a>
  );
};

export const Header: React.FC<HeaderProps> = ({}) => {
  const { activeSection } = useActiveSection();
  const trans = useTranslations("section");

  // return (
  //   <div className="  w-full absolute  items-center px-6 ">
  //     <div className="relative py-5  tracking-[-0.05rem] ">
  //       <p className=" text-xl relative text-gray-400 font-medium">
  //         {trans(activeSection)}
  //       </p>
  //       <div
  //         className={cn(" bottom-0 left-0 mt-1 h-[2px] w-20 bg-gray-400  ")}
  //       ></div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex justify-end  w-full absolute h-16 items-center px-6">
      <HeaderItem title="Intro" link="#intro" />
      <HeaderItem title="Career" link="#career" />
      <HeaderItem title="Skills" link="#skills" />
      <HeaderItem title="Projects" link="#projects" />
      <HeaderItem title="Hobbies" link="#hobbies" />
      {/* <p>{activeSection}</p> */}
    </div>
  );
};
