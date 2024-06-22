import React from "react";
import { Flex, Typography } from "antd";
import Image from "next/image";

import SolutionUnderline from "@/public/Images/OfferPage/SolutionUnderline.svg";

const TeamContainer = () => {
  return (
    <>
      <Flex className="flex flex-col bg-white justify-center items-center pt-[42px] px-[50px] pb-[42px]">
        <Typography className="font-semibold text-[16px] text-[#6E6E6E] font-poppins">
          OUR TEAM
        </Typography>
        <h1 className=" font-medium text-[20px] leading-[30px] text-black pt-[22px] font-poppins">
          From the{" "}
          <p className="inline-block relative">
            <span className="text-[20px] leading-[0px] pr-[5px] font-medium font-poppins text-black">
              KeY2Moon
            </span>
            <Image
              src={SolutionUnderline}
              alt="underline"
              className="absolute bottom-[-15px] w-full h-auto"
            />
          </p>{" "}
          community
        </h1>
        <Typography className="text-[20px] text-[#6E6E6E] font-medium leading-[30px] pt-[45px] text-center font-poppins px-[50px] lg:px-[150px] max-w-[1300px]">
          Take the next step forward achieving your personal and professional
          aspirations with KeY2Moon Book it has survived not only five centuries
        </Typography>
      </Flex>
    </>
  );
};

export default TeamContainer;
