import React from "react";

import { IIconProps } from "@/app/types/PropsType";

const ConnectIcon = ({ className }: IIconProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 32V34.52L18 28.52V22.18L23.4 16H32V4H20V13.8L14.6 20H6V32H16L30 39V44H42V32H30ZM24 8H28V12H24V8ZM14 28H10V24H14V28ZM38 40H34V36H38V40Z"
        fill="white"
      />
    </svg>
  );
};

export default ConnectIcon;
