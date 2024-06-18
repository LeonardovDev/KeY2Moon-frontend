import { Flex, Input, Typography } from "antd";
import Image from "next/image";
import React, { RefObject } from "react";
import Woman from "@/public/Images/GetTouchPage/Woman.svg";
import Ellipse from "@/public/Images/GetTouchPage/Ellipse.svg";
import Star from "@/public/Images/GetTouchPage/Star.svg";
import C from "@/public/Images/GetTouchPage/C.svg";
import Camera from "@/public/Images/GetTouchPage/Camera.svg";
import Facebook from "@/public/Images/GetTouchPage/Facebook.svg";
import Twitter from "@/public/Images/GetTouchPage/Twitter.svg";
import Student from "@/public/Images/GetTouchPage/Student.svg";
import KeyUnderline from "@/public/Images/GetTouchPage/KeyUnderline.svg";

import RButton from "@/components/RButton";

import { ArrowRightIcon } from "@heroicons/react/16/solid";
import UnderlinedText from "@/components/UnderlinedText";
import Logo from "@/components/Logo";

interface IGetTouchContainerProps {
  ref: RefObject<HTMLDivElement>;
  handleTop: (e: React.MouseEvent<HTMLElement>) => void;
}

const GetTouchContainer: React.FC<IGetTouchContainerProps> = ({
  ref,
  handleTop,
}) => {
  const stars = Array.from({ length: 5 });

  return (
    <div className="flex flex-col space-y-0 w-full" ref={ref}>
      <Flex className="px-[50px] py-[107px] h-[703px] space-x-0 bg-[#FAF9F6] justify-center">
        <Flex className="bg-[#F0E1C9] items-end justify-center relative hidden md:flex">
          <Image
            src={Ellipse}
            alt="ellipse"
            className=" absolute left-[-122px] top-[-116px] z-0"
          />
          <Image src={Woman} alt="woman" className=" z-10" />
        </Flex>
        <div className="flex-1 bg-[#092332] pt-[50px] px-[40px] max-w-[690px] min-w-[480px]">
          <Typography className="text-white text-[24px] font-semibold leading-[40px] font-prompt">
            What’s our real client stories <br />
            About our work & passion
          </Typography>
          <div className="flex space-x-[5px] py-[20px]">
            {stars.map((_, index) => (
              <Image key={index} src={Star} alt="star" />
            ))}
          </div>
          <Typography className="text-white text-[24px] font-normal">
            Thanks to ES Business, Bocz Alien has armed our workforce,
            specifically its data scientists, with highly relevant and in-demand
            tech skills that are enabling consultants to stay ahead of big data
            trends and raise the bar on proficiency, skills and competencies to
            meet client demand.
          </Typography>
        </div>
      </Flex>
      <Flex className="bg-[#092332] flex-col pl-[30px] md:pl-[162px] py-[45px] relative">
        <Flex className="flex-col md:flex-row md:space-x-[80px] space-y-10 items-start relative">
          <div
            className=" cursor-pointer"
            onClick={(e) => {
              handleTop(e);
            }}
          >
            <Logo className="" />
          </div>
          <Flex className="flex space-y-[50px] items-start justify-start flex-1">
            <Flex className=" flex-col md:flex-row space-x-[100px]">
              <Flex className="flex-row md:flex-col justify-center md:justify-start md:space-y-[8px] space-x-5 md:space-x-0 items-center">
                <Typography className="pb-[5px] text-[24px] font-medium text-white">
                  About
                </Typography>
                <Typography className="text-[18px] text-white cursor-pointer">
                  About Us
                </Typography>
                <Typography className="text-[18px] text-white cursor-pointer">
                  Contact Us
                </Typography>
                <Typography className="text-[18px] text-white cursor-pointer">
                  Careers
                </Typography>
                <Typography className="text-[18px] text-white cursor-pointer">
                  Features
                </Typography>
                <Typography className="text-[18px] text-white cursor-pointer">
                  FAQ
                </Typography>
              </Flex>
              <Flex className="flex-row md:flex-col justify-center md:justify-start md:space-y-[8px] space-x-5 md:space-x-0 items-center">
                <Typography className="pb-[5px] text-[24px] font-medium text-white">
                  Support
                </Typography>
                <Typography className="text-[18px] text-white cursor-pointer">
                  Account
                </Typography>
                <Typography className="text-[18px] text-white cursor-pointer">
                  Feedback
                </Typography>
                <Typography className="text-[18px] text-white cursor-pointer">
                  Accessibility
                </Typography>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex className=" justify-start items-stretch space-x-[35px] pt-8 pl-0 lg:pl-[200px]">
          <Input
            placeholder="Enter Email"
            className="bg-[#FFFFFF00] border-2 border-[#F3AD35] text-white placeholder:text-white w-[300px] rounded-[15px] text-[20px]"
          />
          <RButton
            text="Send"
            backColor="bg-[#F3AD35]"
            textColor="text-[#FFFFFF]"
            borderColor="border-[#FFFFFF00]"
            icon={<ArrowRightIcon className="w-6 h-6 text-white" />}
          />
        </Flex>
        <Flex className="flex-1 items-center space-x-[26px] pt-[30px] pr-[70px] md:pr-[200px] xl:pr-[600px]">
          <Image src={C} alt="c" />
          <Typography className="flex-1 text-white text-[20px]">
            2024, E-Platform
          </Typography>
          <Image src={Camera} alt="c" className=" cursor-pointer" />
          <Image src={Facebook} alt="c" className=" cursor-pointer" />
          <Image src={Twitter} alt="c" className=" cursor-pointer" />
        </Flex>
        <Image
          src={Student}
          className="absolute bottom-0 right-[100px] overflow-hidden hidden xl:block"
          alt="student"
        />
      </Flex>
    </div>
  );
};

export default GetTouchContainer;
