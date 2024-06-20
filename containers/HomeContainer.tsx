"use client";

import ToolKit from "@/components/ToolKit";
import Image from "next/image";
import CountUp from "react-countup";

import React, { forwardRef } from "react";

import { ArrowRightIcon } from "@heroicons/react/16/solid";

import { Flex, Typography } from "antd";
import RButton from "@/components/RButton";

import ProjectWrappter from "@/public/Images/Homepage/ProjectWrapper.svg";
import WebUnderline from "@/public/Images/Homepage/WebUnderline.svg";

const HomeContainer = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref}>
    <div className="w-screen h-screen flex bg-black">
      <div className="flex-1 bg-darkblue h-full relative">
        <Flex className="flex flex-1 bg-[#092332] -z-20">
          <Flex className="flex flex-col pt-[180px] md:pt-[212px] px-[20px] md:px-[30px] lg:px-[80px] xl:px-[100px] 2xl:px-[150px] space-y-14 justify-center items-center md:items-start">
            <h1 className="text-[25px] md:text-[32px] xl:text-[40px] text-white font-semibold leading-10 max-w-[600px]">
              Creative{" "}
              <p className=" inline-block relative">
                Web3
                <Image
                  src={WebUnderline}
                  alt="underline"
                  className="w-full absolute bottom-[-24px] hidden md:block"
                />
              </p>{" "}
              Agency
              <br /> for your Next
              <p className="relative inline-block pt-1 pl-[10px] md:mt-5">
                <Image
                  src={ProjectWrappter}
                  alt="wrapper"
                  className="absolute top-[-3px] md:top-[-1px] left-[3px] w-full"
                />
                <span className="relative">Projects</span>
              </p>
            </h1>
            <Typography className="text-[18px] md:text-[24px] leading-[35.5px] font-normal text-white max-w-[440px]">
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
        <img
          src="/Images/Homepage/HomeGirl.png"
          className="h-fit min-w-[250px]"
          alt="home-girl"
        />
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
      <div className="project-supported  pt-[60px] pb-[30px] w-[160px] sm:w-fit sm:p-0">
        <h2
          className={`amount text-[40px] md:text-miniTitle xl:text-[64px]/[96px]`}
        >
          <CountUp start={0} end={10} duration={3}></CountUp>+
        </h2>
        <p className="text-amountDescription md:text-[12px] xl:text-[16px]/[19.5px]  font-medium">
          Years of Web3 experience
        </p>
      </div>
      <div className="project-supported  pt-[60px] pb-[30px] w-[160px] sm:w-fit sm:p-0">
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
