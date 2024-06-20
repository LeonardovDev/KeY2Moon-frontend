import React from "react";
import dynamic from "next/dynamic";

import { IIconProps } from "@/app/types/PropsType";

interface IBenefitItemProps {
  icon: string;
  color?: string;
  children: string;
}

const BenefitItem = ({ icon, color, children }: IBenefitItemProps) => {
  const Icon = dynamic<IIconProps>(() => import(`../Icons/${icon}Icon`).then((result) => result.default), {});

  return (
    <div
      className={`why-us-item  sm:h-[207px] w-full  sm:min-w[212px] h-[110px] p-[10px] bg-item-back rounded-lg sm:rounded-[15px] hover:why-us-active transition-all duration-500 border border-transparent`}
    >
      <Icon className="w-[26px] h-[26px] sm:w-12 sm:h-12"></Icon>
      <p className="mt-6 sm:mt-12 text-[8.52px]/[10.38px] sm:text-base ">{children}</p>
    </div>
  );
};

export default BenefitItem;
