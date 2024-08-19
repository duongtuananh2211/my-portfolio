import React from "react";
import { SnapSection } from "../components/SnapSection";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = ({}) => {
  return (
    <SnapSection id="skills">
      <div>Skills</div>
      <div>
        <p>Javascript</p>
        <p>5+ years working with Javascript </p>
      </div>
      <div>
        <p>Firestore</p>
      </div>
      <div>
        <p>React</p>
      </div>
      <div>
        <p>Css</p>
      </div>
    </SnapSection>
  );
};
