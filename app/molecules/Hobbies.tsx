import React from "react";
import { SnapSection } from "../components/SnapSection";

interface HobbiesProps {}

export const Hobbies: React.FC<HobbiesProps> = ({}) => {
  return (
    <SnapSection id="hobbies">
      <p>Hobbies</p>

      <div>
        <div>
          <p>Coffee</p>
        </div>

        <div>
          <p>Photography</p>
        </div>
      </div>
    </SnapSection>
  );
};
