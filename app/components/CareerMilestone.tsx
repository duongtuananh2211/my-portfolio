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
    <div>
      <p className="text-lg font-[500]">{date}</p>
      <p className="text-base font-[300] tracking-[0.02em]">{desc}</p>
    </div>
  );
};
