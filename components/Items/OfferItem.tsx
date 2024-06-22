import React, { useState, lazy } from "react";
import dynamic from "next/dynamic";

import { IIconProps } from "@/app/types/PropsType";

import Icon1 from "../Icons/OfferIcons/Icon1";
import Icon2 from "../Icons/OfferIcons/Icon2";
import Icon3 from "../Icons/OfferIcons/Icon3";
import Icon4 from "../Icons/OfferIcons/Icon4";
import Icon5 from "../Icons/OfferIcons/Icon5";
import Icon6 from "../Icons/OfferIcons/Icon6";

interface IOfferItemProps {
  icon: string;
  title: string;
  color: string;
  children: string;
  className?: string;
}

const OfferItem = ({
  icon,
  title,
  color,
  children,
  className,
}: IOfferItemProps) => {
  const [fill, setFill] = useState("white");

  const handleMouseEnter = () => {
    setFill("black");
  };

  const handleMouseLeave = () => {
    setFill("white");
  };

  const Icon = dynamic(() => import(`../Icons/OfferIcons/${icon}`));

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`offer-item flex p-[15px] hover:offer-active ${color} border-[1px] border-transparent w-[309px] sm:w-fit items-center 
      transition-all duration-500 cursor-pointer py-5`}
    >
      <div
        className="offer-item-icon flex justify-center items-center bg-[#092332] rounded-[6.3px] w-[67px] h-[67px] 
      md:w-[89px] md:h-[89px] flex-shrink-0 transition-all duration-500"
      >
        {
          {
            "1": (
              <Icon1
                className="md:w-[62px] md:h-[62px] w-[39px] h-[39px]"
                color={
                  {
                    purple: "#F9BA3E",
                    green: "#45f336",
                    red: "#f33592",
                  }[color]
                }
                fill={fill}
              ></Icon1>
            ),
            "2": (
              <Icon2
                className="md:w-[62px] md:h-[62px] w-[39px] h-[39px]"
                color={
                  {
                    purple: "#F9BA3E",
                    green: "#45f336",
                    red: "#f33592",
                  }[color]
                }
                fill={fill}
              ></Icon2>
            ),
            "3": (
              <Icon3
                className="md:w-[62px] md:h-[62px] w-[39px] h-[39px]"
                color={
                  {
                    purple: "#F9BA3E",
                    green: "#45f336",
                    red: "#f33592",
                  }[color]
                }
                fill={fill}
              ></Icon3>
            ),
            "4": (
              <Icon4
                className="md:w-[62px] md:h-[62px] w-[39px] h-[39px]"
                color={
                  {
                    purple: "#F9BA3E",
                    green: "#45f336",
                    red: "#f33592",
                  }[color]
                }
                fill={fill}
              ></Icon4>
            ),
            "5": (
              <Icon5
                className="md:w-[62px] md:h-[62px] w-[39px] h-[39px]"
                color={
                  {
                    purple: "#F9BA3E",
                    green: "#45f336",
                    red: "#f33592",
                  }[color]
                }
                fill={fill}
              ></Icon5>
            ),
            "6": (
              <Icon6
                className="md:w-[62px] md:h-[62px] w-[39px] h-[39px]"
                color={
                  {
                    purple: "#F9BA3E",
                    green: "#45f336",
                    red: "#f33592",
                  }[color]
                }
                fill={fill}
              ></Icon6>
            ),
          }[icon]
        }
      </div>
      <div className="offer-description ml-[30px] text-left flex flex-col md:h-[89px]">
        <h4 className="text-[15px]/[18.29px] md:text-mini font-medium">
          {title}
        </h4>
        <p className="description text-headerSize max-w-[420px] mt-[10px] hidden sm:block">
          {children}
        </p>
      </div>
    </div>
  );
};

export default OfferItem;
