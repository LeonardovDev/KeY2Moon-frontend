import React from "react";

import { IIconProps } from "@/app/types/PropsType";

const ClockIcon = ({ className }: IIconProps) => {
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
        d="M30 3H18V7H30V3ZM22 29H26V17H22V29ZM38.06 15.78L40.9 12.94C40.04 11.92 39.1 10.96 38.08 10.12L35.24 12.96C32.14 10.48 28.24 9 24 9C14.06 9 6 17.06 6 27C6 36.94 14.04 45 24 45C33.96 45 42 36.94 42 27C42 22.76 40.52 18.86 38.06 15.78ZM24 41C16.26 41 10 34.74 10 27C10 19.26 16.26 13 24 13C31.74 13 38 19.26 38 27C38 34.74 31.74 41 24 41Z"
        fill="white"
      />
    </svg>
  );
};

export default ClockIcon;
