import React from "react";
import { SnapSection } from "../components/SnapSection";
import { cn } from "../utils/common";

interface SkillsProps {}

const SkillItem: React.FC<{
  title: string;
  percentage: number;
  hightlight?: boolean;
}> = ({ title, percentage, hightlight = false }) => {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <p
            className={cn("text-lg font-medium text-primary-700/80", {
              "text-primary-600/80": hightlight,
            })}
          >
            {title}
          </p>
          <p
            className={cn("text-lg font-bold text-primary-700", {
              "text-primary-600": hightlight,
            })}
          >
            {percentage}%
          </p>
        </div>
      </div>

      <div className="w-full  bg-textForeground/20 h-2.5 mt-3">
        <div
          className={cn("bg-primary-700 h-2.5 ", {
            "bg-primary-600": hightlight,
          })}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export const Skills: React.FC<SkillsProps> = ({}) => {
  return (
    <SnapSection
      id="skills"
      title="Skills"
      reverse
      desc="5+ years working with Javascript"
    >
      <div className="mt-12 pb-8 flex flex-col gap-12 md:mt-0">
        <SkillItem title="Javascript" hightlight percentage={90} />
        <SkillItem title="React" hightlight percentage={90} />
        <SkillItem title="HTML & CSS" percentage={80} />
        <SkillItem title="TailwindCSS" percentage={80} />
        <SkillItem title="Node.js" percentage={50} />
        <SkillItem title="GraphQL" percentage={30} />
        <SkillItem title="Docker" percentage={50} />
      </div>
    </SnapSection>
  );
};
