import React from "react";
import { Avatar } from "../components/Avatar";
import { SnapSection } from "../components/SnapSection";
import Link from "next/link";

interface IntroductionProps {}

export const Introduction: React.FC<IntroductionProps> = ({}) => {
  return (
    <SnapSection id="intro">
      <div className="flex flex-col items-left mt-16 gap-10">
        <div className="relative w-48 rounded-[100px] mx-auto overflow-hidden aspect-square shadow-inner border-[3px] border-solid border-textForeground/80">
          <Avatar />
        </div>
        <div className="flex flex-col text-lg leading-normal gap-2">
          <h1 className="text-2xl tracking-tighter text-textForeground/80">
            Hi, I&apos;m{" "}
            <span className="font-bold text-textForeground ">AnhDT</span>
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
