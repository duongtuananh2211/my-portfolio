import React from "react";
import { SnapSection } from "../components/SnapSection";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = ({}) => {
  return (
    <SnapSection id="skills">
      <div>
        <p>UI programing</p>

        <div className="w-full bg-transparent rounded-full h-2.5 ">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: "45%" }}
          ></div>
        </div>
      </div>

      <div>
        <p>UI programing</p>
      </div>
    </SnapSection>
  );
};
