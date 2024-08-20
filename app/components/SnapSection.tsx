import React, { PropsWithChildren } from "react";

interface SnapSectionProps extends PropsWithChildren {
  id: string;
}

export const SnapSection: React.FC<SnapSectionProps> = ({ children, id }) => {
  return (
    <section id={id} className="h-[100%] snap-start pt-20 px-14">
      {children}
    </section>
  );
};
