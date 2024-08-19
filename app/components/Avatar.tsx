import Image from "next/image";
import React from "react";

interface AvatarProps {}

export const Avatar: React.FC<AvatarProps> = ({}) => {
  return (
    <Image
      src={"/avatar.jpg"}
      fill={false}
      alt="My avatar"
      width={120}
      height={120}
    />
  );
};
