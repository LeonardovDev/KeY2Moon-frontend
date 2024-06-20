import { Flex, Typography } from "antd";
import React from "react";

import Image from "next/image";

import RButton from "@/components/RButton";

import { ArrowRightIcon } from "@heroicons/react/16/solid";

import UnderlinedText from "@/components/UnderlinedText";

import StartUnderline from "@/public/Images/WhyUsPage/StartUnderline.svg";
import UsReason from "@/components/UsReason";

const WhyUsContainer = () => {
  return (
    <Flex className="pl-[80px] lg:pl-[200px] pr-[100px] py-[50px] md:py-[125px] bg-[#092332] flex-col space-y-[25px] relative">
      <Typography className="text-[18px] text-[#BEBEBE] font-medium font-poppins">
        WHY CHOOSE US
      </Typography>
      <h1 className="text-[32px] leading-[48px] font-semibold text-white font-poppins ">
        Don't know how to{" "}
        <UnderlinedText
          text=" Start "
          fontSize="32px"
          fontWeight="semibold"
          icon={StartUnderline}
          fontColor="text-white"
        />{" "}
        with
        <br className=" hidden lg:block" /> KeY2Moon Solutions
      </h1>
      <h1 className="text-[16px] leading-[24px] font-semibold text-[#BEBEBE] pb-[30px] font-poppins max-w-[1240px]">
        KeY2Moon Solutions is a technology company that specializes in
        implementing next-generation IT systems with an emphasis on innovation,
        professionalism, quality and reliability
      </h1>
      <Flex className="flex flex-col pl-0 lg:flex-wrap text-white 2xl:h-[190px] max-w-[800px] justify-start items-start">
        <UsReason text="Flexible Engagement Model" />
        <UsReason text="Pursue Best Practices and Proactive Approach" />
        <UsReason text="High Quality Services" />
        <UsReason text="Extensive Offshore IT Services" />
        <UsReason text="On Time and On Budget Deliveryies" />
        <UsReason text="Focus on Continuous Process Improvement" />
      </Flex>
      <div className="px-[30px] pt-[10px]">
        <RButton
          text="Explore All"
          textColor="text-white"
          backColor="bg-[#FFFFFF00]"
          borderColor="border-[#FFFFFF]"
          icon={<ArrowRightIcon className="w-6 h-6 text-white" />}
        />
      </div>
      <img
        src="/Images/WhyUsPage/Group.png"
        alt="group"
        className="w-[30%] h-auto absolute bottom-[100px] right-[150px] min-w-[350px] hidden lg:block"
      />
    </Flex>
  );
};

export default WhyUsContainer;
