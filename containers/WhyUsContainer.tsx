import { Flex, Typography } from "antd";
import React from "react";

import Image from "next/image";

import RButton from "@/components/RButton";

import { ArrowRightIcon } from "@heroicons/react/16/solid";

import DiscountRate from "@/public/Images/WhyUsPage/DiscountRate.svg";
import PeopleGroup from "@/public/Images/WhyUsPage/PeopleGroup.svg";
import Girl from "@/public/Images/WhyUsPage/Girl.svg";
import UnderlinedText from "@/components/UnderlinedText";
import Group from "@/public/Images/WhyUsPage/Group.svg";

import StartUnderline from "@/public/Images/WhyUsPage/StartUnderline.svg";
import UsReason from "@/components/UsReason";

const WhyUsContainer = () => {
  return (
    <Flex className="pl-[40px] lg:pl-[200px] pr-[100px] py-[50px] md:py-[125px] bg-[#092332] flex-col space-y-[25px] relative">
      <Typography className="text-[18px] text-[#BEBEBE] font-medium font-poppins">
        WHY CHOOSE US
      </Typography>
      <Typography className="text-[32px] leading-[48px] font-semibold text-white font-poppins ">
        Don't know how t
        <UnderlinedText
          text="o Start w"
          fontSize="32px"
          fontWeight="semibold"
          icon={StartUnderline}
          fontColor="text-white"
        />
        ith KeY2Moon Solutions
      </Typography>
      <Typography className="text-[16px] leading-[24px] font-semibold text-[#BEBEBE] pb-[55px] font-poppins max-w-[1240px]">
        KeY2Moon Solutions is a technology company that specializes in
        implementing next-generation IT systems with an emphasis on innovation,
        professionalism, quality and reliability
      </Typography>
      <Flex className="flex flex-col pl-[40px] lg:pl-0 lg:flex-wrap space-y-[12px] text-white 2xl:h-[200px] max-w-[800px]">
        <UsReason text="Flexible Engagement Model" />
        <UsReason text="Pursue Best Practices and Proactive Approach" />
        <UsReason text="High Quality Services" />
        <UsReason text="Extensive Offshore IT Services" />
        <UsReason text="On Time and On Budget Deliveryies" />
        <UsReason text="Focus on Continuous Process Improvement" />
      </Flex>

      <RButton
        text="Explore All"
        textColor="text-white"
        backColor="bg-[#FFFFFF00]"
        borderColor="border-[#FFFFFF]"
        icon={<ArrowRightIcon className="w-6 h-6 text-white" />}
      />
      <Image
        src={Group}
        alt="group"
        className="w-[30%] h-auto absolute bottom-[100px] right-[150px] min-w-[350px] hidden lg:block"
      />
    </Flex>
  );
};

export default WhyUsContainer;
