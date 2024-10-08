import React from "react";
import { Avatar } from "../components/Avatar";
import { SnapSection } from "../components/SnapSection";
import Link from "next/link";

interface IntroductionProps {}

export const Introduction: React.FC<IntroductionProps> = ({}) => {
  return (
    <SnapSection id="intro">
      <div className="flex flex-col items-left mt-16 gap-10 md:justify-between md:items-center md:mt-24 md:gap-12 md:flex-row ">
        <div className="relative  w-48 rounded-[300px] mx-auto overflow-hidden aspect-square shadow-inner border-[3px] border-solid border-primary-900 md:w-72 md:mx-0">
          <Avatar />
        </div>
        <div className="flex flex-col text-lg text-primary-800  leading-normal gap-2 w-fit mx-auto">
          <h1 className="text-2xl tracking-tighter text-primary-700">
            Hi, I&apos;m{" "}
            <span className="font-bold text-primary-600 underline decoration-wavy decoration-red-900">
              AnhDT
            </span>
          </h1>
          <div className="flex flex-col gap-1">
            <p>
              Frontend developer at{" "}
              <span className="text-textForeground font-bold">Demetio</span>
            </p>
            <Link href={"mailto:duongtuananh2211@gmail.com"}>
              duongtuananh2211@gmail.com
            </Link>
            <Link href={"phoneto:039xxxxxxxxx"}>039xxxxxxxxx</Link>
            <Link href="https://github.com/duongtuananh2211">
              github.com/duongtuananh2211
            </Link>
          </div>
        </div>
      </div>
    </SnapSection>
  );
};
