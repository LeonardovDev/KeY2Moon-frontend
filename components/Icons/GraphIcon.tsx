import React from "react";

import { IIconProps } from "@/app/types/PropsType";

const GraphIcon = ({ className }: IIconProps) => {
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
        d="M28.12 21.38L24 19.5L28.12 17.62L30 13.5L31.88 17.62L36 19.5L31.88 21.38L30 25.5L28.12 21.38ZM8 29.5L9.88 25.38L14 23.5L9.88 21.62L8 17.5L6.12 21.62L2 23.5L6.12 25.38L8 29.5ZM17 19.5L19.18 14.68L24 12.5L19.18 10.32L17 5.5L14.82 10.32L10 12.5L14.82 14.68L17 19.5ZM9 42.5L21 30.48L29 38.48L46 19.36L43.18 16.54L29 32.48L21 24.48L6 39.5L9 42.5Z"
        fill="white"
      />
    </svg>
  );
};

export default GraphIcon;
