import React from "react";
import { SnapSection } from "../components/SnapSection";
import Link from "next/link";
import { CareerMilestone } from "../components/CareerMilestone";

interface CareerProps {}

export const Career: React.FC<CareerProps> = ({}) => {
  return (
    <SnapSection id="career">
      <div className="flex flex-col gap-4">
        <CareerMilestone date="now" desc="" />
        <CareerMilestone date="10-2023" desc="Work at Demetio" />
        <CareerMilestone date="09-2022" desc="Work at Deha" />
        <CareerMilestone date="04-2020" desc="Work at Agilead Global" />
        <CareerMilestone date="11-2019" desc="Work at Codegym" />
        <CareerMilestone date="07-2019" desc="Learned coding at CodeGym" />
        <CareerMilestone date="11-2001" desc="Hello world" />
      </div>
    </SnapSection>
  );
};
