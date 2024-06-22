import React from "react";

import DropShadow from "./DropShadow";

interface IProgressWrapperProps {
  color: string;
  count: number;
  children: React.ReactNode;
  title: string;
}

const ProgressWrapper = ({
  color,
  count,
  children,
  title,
}: IProgressWrapperProps) => {
  return (
    <div className={`mt-[10px] progress-wrapper ${color}`}>
      <div className="flex md:items-center md:flex-row flex-col items-start">
        <div className="progress-number w-16 h-16 text-center text-[20px]/[24.38px] font-semibold rounded-[50%] py-[18px] hidden md:block">
          <p>{count}</p>
        </div>
        <div className="progress-number-mobile md:hidden text-left ml-3">
          <p className="text-headerSize">{count}/3</p>
        </div>
        <div className="horizontal-line h-[2px] w-[100%] md:w-[60%] ml-[12px] relative">
          <div className="ellipse absolute right-20 bottom-[-4px] w-[10px] h-[10px] bg-black rounded-[50%] border-[2px] border-[#F9BA3E]"></div>
        </div>
        <h3 className="offer-industry-title font-medium text-[20px]/[24.38px] ml-auto mr-auto md:mx-0 mt-[20px] md:mt-0">
          {/* <DropShadow color={color}>{title}</DropShadow> */}
          {title}
        </h3>
      </div>
      <div className="offer-industries-items mt-3 flex">
        <div className="vertical-line w-[2px] ml-[28px] relative hidden md:block">
          <div className="ellipse absolute bottom-10 right-[-2px] w-[6px] h-[6px] bg-white rounded-[50%]"></div>
        </div>
        <div className="items-wrapper ml-4 flex flex-wrap place-content-center md:items-center md:grid md:grid-cols-2 md:p-[10px] lg:p-[30px] gap-x-[10px] gap-y-[10px] md:gap-y-[40px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProgressWrapper;
