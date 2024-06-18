import React from "react";
import { Typography, Flex } from "antd";
import Image from "next/image";

import "flowbite/dist/flowbite.min.js";

import Pic1 from "@/public/Images/PartnerPage/Pic1.svg";
import Pic2 from "@/public/Images/PartnerPage/Pic2.svg";
import Pic3 from "@/public/Images/PartnerPage/Pic3.svg";
import Pic4 from "@/public/Images/PartnerPage/Pic4.svg";

import GlobalUnderline from "@/public/Images/PartnerPage/GlobalUnderline.svg";
import UnderlinedText from "@/components/UnderlinedText";

const PartnerContainer = () => {
  return (
    <div className="w-full flex-col flex items-center px-[50px]">
      <Typography className="text-[16px] text-[#6E6E6E] font-semibold pt-[55px] font-poppins">
        OUR PARTNERS
      </Typography>
      <h1 className="text-[20px] font-medium pt-[22px]  font-poppins text-black">
        We Worked with{" "}
        <h2 className="inline-block relative">
          <span
            className={`text-[20px] leading-[0px] pr-[5px] font-medium font-poppins ${"text-black"}`}
          >
            Global Largest
          </span>
          <Image
            src={GlobalUnderline}
            alt="underline"
            className="absolute bottom-[-17px] w-full h-auto"
          />
        </h2>
        Brands
      </h1>
      <Typography className="text-[20px] text-[#6E6E6E] font-medium leading-[30px] pt-[45px] text-center font-poppins px-[50px] lg:px-[150px] max-w-[1065px]">
        We start every new client interaction with an in-depth discovery call
        where we get to know each other and recommended best course of action
      </Typography>
      <div className="py-[55px] w-full space-x-[35px] justify-center items-center grid grid-rows-2 lg:grid-rows-1 grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        <Image src={Pic1} alt="pic1" className="" />
        <Image src={Pic2} alt="pic2" className="" />
        <Image src={Pic3} alt="pic3" className="" />
        <Image src={Pic4} alt="pic4" className="" />
      </div>
    </div>
  );
};

export default PartnerContainer;
