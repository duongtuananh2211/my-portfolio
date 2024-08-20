import React from "react";
import { SnapSection } from "../components/SnapSection";

interface HobbiesProps {}

export const Hobbies: React.FC<HobbiesProps> = ({}) => {
  return (
    <SnapSection id="hobbies">
      <div className="mt-12">
        <div>
          <div className="relative w-fit">
            <p className="text-xl font-bold">Coffee</p>

            <div className="w-12 h-[1px] bg-textForeground"></div>
          </div>

          <div></div>
        </div>

        <div>
          <div className="flex flex-col items-end">
            <p className="text-xl font-bold text-right">Photography</p>
            <div className="w-20 h-[1px] bg-textForeground"></div>
          </div>
        </div>
      </div>
    </SnapSection>
  );
};
