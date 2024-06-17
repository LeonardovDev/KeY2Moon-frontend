"use client";

import ToolKit from "@/components/ToolKit";
import Image from "next/image";
import CountUp from "react-countup";

import React, { forwardRef } from "react";

import { ArrowRightIcon } from "@heroicons/react/16/solid";

import { Flex, Typography, Button } from "antd";
import RButton from "@/components/RButton";

import HomeUnderlineShort from "@/public/Images/Homepage/HomeUnderlineShort.svg";
import ProjectWrappter from "@/public/Images/Homepage/ProjectWrapper.svg";
import HomeGirl from "@/public/Images/Homepage/HomeGirl.svg";

const HomeContainer = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref}>
    <div className="w-screen h-screen flex bg-black">
      <div className="flex-1 bg-darkblue h-full relative">
        <Flex className="flex flex-1 bg-[#092332] -z-20">
          <Flex className="flex flex-col pt-[180px] md:pt-[212px] px-[20px] md:px-[30px] lg:px-[80px] xl:px-[150px] space-y-10 justify-center items-center md:items-start">
            <h1 className="text-[25px] md:text-[32px] text-white font-semibold leading-9 max-w-[380px]">
              Creative
              <span className=" relative inline-block pl-[10px]">
                <p>Web3</p>
                <Image src={HomeUnderlineShort} alt="home underline" />
              </span>{" "}
              Agency for your Next
              <p className="relative inline-block pl-[10px] md:mt-3">
                <Image
                  src={ProjectWrappter}
                  alt="wrapper"
                  className="absolute top-[-5px] left-[3px] w-full"
                />
                <span className="relative">Projects</span>
              </p>
            </h1>
            <Typography className="text-[18px] leading-[22.5px] font-normal text-white max-w-[440px]">
              Hands-on advisory firm helping projects to enter and evolve in the
              web3 industry
            </Typography>
            <RButton
              text="Explore Now"
              backColor="bg-lightyellow"
              textColor="text-white"
              borderColor="border-[#00000000]"
              icon={<ArrowRightIcon className="w-6 h-6 text-white" />}
            />
          </Flex>
        </Flex>
      </div>
      <div className="flex flex-1 bg-gradient-to-r from-[#EB9A27] to-[#FBC042] h-full relative justify-center items-start pt-[200px] md:pt-0 md:items-center">
        <Image src={HomeGirl} className="h-fit min-w-[250px]" alt="home-girl" />
      </div>
      <ToolKit />
    </div>
    <div className="grid md:flex grid-rows-2 grid-cols-2 gap-4 justify-between place-items-center text-center  absolute bottom-[80px] w-full text-white px-[40px] lg:px-[150px]">
      <div className="project-supported  pt-[60px] pb-[30px] sm:p-0 w-[160px] sm:w-[142px] md:w-fit">
        <h2
          className={`amount text-[40px] md:text-miniTitle xl:text-[64px]/[96px] text-center`}
        >
          {" "}
          <CountUp start={0} end={50} duration={3}></CountUp>+
        </h2>
        <p className="text-amountDescription md:text-[12px] xl:text-[16px]/[19.5px] font-medium">
          Projects supported
        </p>
      </div>
      <div className="project-raised  pt-[60px] pb-[30px] w-[160px] sm:w-fit sm:p-0">
        <h2
          className={`amount text-[40px] md:text-miniTitle xl:text-[64px]/[96px]`}
        >
          $<CountUp start={0} end={20} duration={3}></CountUp>M
        </h2>
        <p className="text-amountDescription md:text-[12px] xl:text-[16px]/[19.5px]  font-medium">
          Raised for Projects
        </p>
      </div>
      <div className="project-supported  pt-[30px] pb-[60px] w-[160px] sm:w-fit sm:p-0">
        <h2
          className={`amount text-[40px] md:text-miniTitle xl:text-[64px]/[96px]`}
        >
          <CountUp start={0} end={10} duration={3}></CountUp>+
        </h2>
        <p className="text-amountDescription md:text-[12px] xl:text-[16px]/[19.5px]  font-medium">
          Years of Web3 experience
        </p>
      </div>
      <div className="project-supported  pt-[30px] pb-[60px] w-[160px] sm:w-fit sm:p-0">
        <h2
          className={`amount text-[40px] md:text-miniTitle xl:text-[64px]/[96px]`}
        >
          <CountUp start={0} end={300} duration={3}></CountUp>+
        </h2>
        <p className="text-amountDescription md:text-[12px] xl:text-[16px]/[19.5px]  font-medium">
          Partnership in Web3
        </p>
      </div>
    </div>
  </div>
));

export default HomeContainer;
