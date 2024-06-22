import React from "react";

import { IIconProps } from "@/app/types/PropsType";

const BranchIcon = ({ className }: IIconProps) => {
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
        d="M44 22V6H30V12H18V6H4V22H18V16H22V36H30V42H44V26H30V32H26V16H30V22H44ZM14 18H8V10H14V18ZM34 30H40V38H34V30ZM34 10H40V18H34V10Z"
        fill="white"
      />
    </svg>
  );
};

export default BranchIcon;
