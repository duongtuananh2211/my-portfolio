import React from "react";
import { Avatar } from "../components/Avatar";
import { SnapSection } from "../components/SnapSection";
import Link from "next/link";

interface IntroductionProps {}

export const Introduction: React.FC<IntroductionProps> = ({}) => {
  return (
    <SnapSection id="intro">
      <div className="flex flex-col">
        <Avatar />
        <h1>Hi, I'm Anhdt</h1>
        <p>Frontend developer at Demetio</p>
        <Link href={"mailto:duongtuananh2211@gmail.com"}>
          duongtuananh2211@gmail.com
        </Link>
        <Link href={"phoneto:039xxxxxxxxx"}>039xxxxxxxxx</Link>
        <Link href="https://github.com/duongtuananh2211">
          github.com/duongtuananh2211
        </Link>
      </div>
    </SnapSection>
  );
};
