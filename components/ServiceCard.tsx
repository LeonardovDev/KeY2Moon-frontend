import React from "react";

import { ArrowRightIcon } from "@heroicons/react/16/solid";

interface IServiceCard {
  title: string;
  description: string;
  avatar: string;
}

const ServiceCard = ({ title, description, avatar }: IServiceCard) => {
  return (
    <div className="flex w-[570px] h-[300px] md:h-[368px] px-[37px] py-[13px] md:py-[44px] border-[1px] rounded-[15px] shadow-md space-x-[26px]">
      <img src={avatar} className="w-[190px] h-[190px]" />
      <div className="flex-1 flex flex-col space-y-[20px]">
        <h1 className="text-[20px] font-medium leading-[30px]">{title}</h1>
        <p className="text-[20px] font-normal leading-[30px] text-[#6E6E6E]">
          {description}
        </p>
        <button
          className={` font-poppins bg-lightyellow text-base text-center py-3 w-[220px] laeding-6 px-[20px] rounded-[25px] hover:bg-white
              hover:border-black hover:text-black
              border-[1px] border-white text-white flex justify-center items-center transition-all duration-500`}
        >
          <>
            Take Our Service{" "}
            <ArrowRightIcon className="w-6 h-6 ml-5"></ArrowRightIcon>
          </>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
