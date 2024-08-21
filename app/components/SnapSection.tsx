import React, { PropsWithChildren } from "react";
import { cn } from "../utils/common";

interface SnapSectionProps extends PropsWithChildren {
  id: string;
  title?: string;
  reverse?: boolean;
  desc?: string;
}

export const SnapSection: React.FC<SnapSectionProps> = ({
  children,
  id,
  title,
  reverse = false,
  desc,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "h-[100%] overflow-y-auto snap-start pt-20 px-8 max-w-screen-sm mx-auto pb-8 md:pt-24 md:h-auto md:max-w-screen-md md:mb-12 md:px-4",
        {
          "md:flex items-start flex-row md:gap-12": !!title,
          "flex-row-reverse ": reverse,
        }
      )}
    >
      {title && (
        <div
          className={cn("w-60 hidden md:block", {
            "md:flex md:flex-col md:items-end md:text-right": reverse,
          })}
        >
          <div className={cn("w-fit", { "flex flex-col items-end": reverse })}>
            <p className="text-2xl text-primary-800 mt-10">{title}</p>
            <div className="w-12 h-[2px] bg-primary-800 mt-2"></div>
          </div>
          <p className="text-base text-primary-600 mt-4 leading-none ">
            {desc}
          </p>
        </div>
      )}
      <div className={cn({ "flex-auto": !!title })}>{children}</div>
    </section>
  );
};
