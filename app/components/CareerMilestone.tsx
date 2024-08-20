import React from "react";

interface CareerMilestoneProps {
  desc: string;
  date: string;
}

export const CareerMilestone: React.FC<CareerMilestoneProps> = ({
  date,
  desc,
}) => {
  return (
    <div className="relative border-l-[1px] border-l-textForeground/60 pl-4">
      <div className="w-fit relative">
        <p className="text-lg  font-extralight leading-none tracking-tight text-textForeground/60">
          {date}
        </p>
      </div>
      <p className="text-base font-medium tracking-[0.02em] mt-1">{desc}</p>
    </div>
  );
};
