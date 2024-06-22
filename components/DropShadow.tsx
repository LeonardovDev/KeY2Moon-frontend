import React from "react";

import "@/app/assets/css/DropShadow.css";

interface IDropShadowProps {
  children: React.ReactNode;
  color: string;
}
const DropShadow = ({ children, color }: IDropShadowProps) => {
  return (
    <>
      <span className={`relative ${color} z-10 inline`}>
        {children}
        <span
          className={`absolute shadow-effect-${color} w-full h-0 left-0 top-[50%] z-[-100] `}
        ></span>
      </span>
    </>
  );
};

export default DropShadow;
