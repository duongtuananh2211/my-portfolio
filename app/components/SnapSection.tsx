import React, { PropsWithChildren } from "react";

interface SnapSectionProps extends PropsWithChildren {
  id: string;
}

export const SnapSection: React.FC<SnapSectionProps> = ({ children, id }) => {
  return (
    <section
      id={id}
      className="h-[100%] overflow-y-auto snap-start pt-20 px-8 max-w-screen-sm mx-auto pb-8"
    >
      {children}
    </section>
  );
};
