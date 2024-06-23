import React, { RefObject, useState, forwardRef } from "react";
import Image from "next/image";

import HomeUnderlineLong from "@/public/Images/Homepage/HomeUnderlineLong.svg";
import { Button, Input, Typography } from "antd";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const SubmitContainer = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className="w-full py-[63px] flex flex-col justify-center items-center space-y-[12px] px-[30px]"
      ref={ref}
    >
      <p className="font-semibold text-[16px] text-[#6E6E6E] font-poppins">
        GET IN TOUCH
      </p>
      <h1 className=" text-[32px] font-medium pb-[30px] text-center">
        Let's connect and{" "}
        <p className="inline-block relative text-[32px]">
          <span
            className={`text-[32px] leading-[0px] pr-[5px] font-medium font-poppins text-black
            }`}
          >
            kick start
          </span>
          <Image
            src={HomeUnderlineLong}
            alt="underline"
            className="absolute bottom-[-15px] w-full h-auto"
          />
        </p>{" "}
        your project
      </h1>
      <div className="flex space-x-10 xl:space-x-[300px] flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0">
        <div className="flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-[60px] flex-1 pt-0 md:pt-[50px]">
          <h1 className=" text-[32px] font-medium">
            Get{" "}
            <p className="inline-block relative text-[32px]">
              <span
                className={`text-[32px] leading-[0px] pr-[5px] font-medium font-poppins text-black
            }`}
              >
                Started
              </span>
              <Image
                src={HomeUnderlineLong}
                alt="underline"
                className="absolute bottom-[-15px] w-full h-auto"
              />
            </p>{" "}
            Now
          </h1>
          <p className="block text-[20px] font-medium max-w-[508px] text-center md:text-start">
            If you would like to work with us or just want to get in touch, We’d
            love to hear from you!
          </p>
        </div>
        <div className="flex flex-1 justify-end items-end">
          <div className="flex flex-col justify-start items-start space-y-[23px] min-w-[340px] rounded-[15px] border-[1px] border-black px-[43px] pb-[45px]">
            <div className="flex justify-center items-center w-full">
              <img
                src="/Images/GetTouchPage/Logo.png"
                alt="logo"
                className=" z-10 w-[80px] h-auto"
              />
            </div>
            <input
              placeholder="Enter your email"
              className=" border-b-[1px] outline-none border-black w-full text-[13px] font-light pb-[3px] font-poppins pt-[10px]
             focus: border-0"
            />
            <input
              placeholder="Message"
              className=" border-b-[1px] outline-none border-black w-full text-[13px] font-light pb-[3px] font-poppins active: border-0"
            />
            <div
              className={`bg-transparent flex justify-center items-center space-x-[10px] px-[15px] py-[8px] rounded-[25px] w-fit
               border-lightyellow border-[1px] cursor-pointer`}
            >
              <Typography
                className={` text-black text-[14px] font-normal leading-[21px] font-poppins`}
              >
                Submit
              </Typography>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SubmitContainer;
