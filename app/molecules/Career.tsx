import React from "react";
import { SnapSection } from "../components/SnapSection";
import Link from "next/link";
import { CareerMilestone } from "../components/CareerMilestone";

interface CareerProps {}

const OPACITY_FROM = 50;

export const Career: React.FC<CareerProps> = ({}) => {
  const items = [
    { date: "10/2023", desc: "Work at Demetio" },
    { date: "09/2022", desc: "Worked at Deha" },
    { date: "04/2020", desc: "Worked at Agilead Global" },
    { date: "11/2019", desc: "Worked at Codegym" },
    { date: "07/2019", desc: "Learned coding at CodeGym" },
    { date: "11/2001", desc: "Hello world" },
  ];

  return (
    <SnapSection id="career">
      <div className="flex flex-col gap-10  mt-14 ">
        <div className="text-textForeground/40 text-xl pl-4 opacity-50">
          Now
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              opacity: `${
                OPACITY_FROM +
                ((items.length - (index + 1)) * 50) / items.length
              }%`,
            }}
          >
            <CareerMilestone date={item.date} desc={item.desc} />
          </div>
        ))}
      </div>
    </SnapSection>
  );
};
