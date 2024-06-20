import React from "react";
import dynamic from "next/dynamic";

import { IIconProps } from "@/app/types/PropsType";

interface IOfferItemProps {
  icon: string;
  title: string;
  color: string;
  children: string;
  className?: string;
}

const OfferItem = ({ icon, title, color, children, className }: IOfferItemProps) => {
  const Icon = dynamic<IIconProps>(() => import(`../Icons/OfferIcons/${icon}`));
  return (
    <div
      className={`offer-item flex p-[10px] hover:offer-active ${color} border-[1px] border-transparent w-[309px] sm:w-fit items-center transition-all duration-500`}
    >
      <div className="offer-item-icon flex justify-center items-center bg-item-back rounded-[6.3px] w-[67px] h-[67px] md:w-[89px] md:h-[89px] flex-shrink-0">
        <Icon
          className="md:w-[52px] md:h-[52px] w-[39px] h-[39px]"
          color={
            {
              purple: "#801eff",
              green: "#45f336",
              red: "#f33592",
            }[color]
          }
        ></Icon>
      </div>
      <div className="offer-description ml-[30px] text-left flex flex-col md:h-[89px]">
        <h4 className="text-[15px]/[18.29px] md:text-mini font-medium">{title}</h4>
        <p className="description text-headerSize max-w-[420px] mt-[10px] hidden sm:block">{children}</p>
      </div>
    </div>
  );
};

export default OfferItem;
