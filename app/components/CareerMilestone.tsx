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
      <p className="text-lg font-medium">{date}</p>
      <p className="text-base font-extralight tracking-[0.02em] ">{desc}</p>
    </div>
  );
};
