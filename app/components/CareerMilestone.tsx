import React from "react";
import { cn } from "../utils/common";

interface CareerMilestoneProps {
  desc: string;
  date: string;
  className?: string;
}

export const CareerMilestone: React.FC<CareerMilestoneProps> = ({
  date,
  desc,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "relative border-l-[1px] border-l-textForeground/60 pl-4",
        className
      )}
    >
      <div className="w-fit relative">
        <p className="text-xl  font-extralight leading-none tracking-tight text-textForeground/60">
          {date}
        </p>
      </div>
      <p className="text-lg leading-none font-medium tracking-[0.02em] mt-2">
        {desc}
      </p>
    </div>
  );
};
