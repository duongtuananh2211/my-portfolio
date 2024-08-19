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
      <p>{date}</p>
      <p>{desc}</p>
    </div>
  );
};
