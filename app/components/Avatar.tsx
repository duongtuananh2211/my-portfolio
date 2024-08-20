import Image from "next/image";
import React from "react";

interface AvatarProps {}

export const Avatar: React.FC<AvatarProps> = ({}) => {
  return <Image src={"/avatar.jpg"} fill alt="My avatar" />;
};
