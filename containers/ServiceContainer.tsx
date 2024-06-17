import React, { forwardRef } from "react";
import Image from "next/image";

import { Flex, Modal, Typography } from "antd";
import SittingMan from "@/public/Images/ServicePage/SittingMan.svg";
import SittingWoman from "@/public/Images/ServicePage/SittingWoman.svg";
import Pic1 from "@/public/Images/ServicePage/Pic1.svg";
import Pic2 from "@/public/Images/ServicePage/Pic2.svg";
import Pic3 from "@/public/Images/ServicePage/Pic3.svg";

import Pic4 from "@/public/Images/ServicePage/Pic4.svg";
import Pic5 from "@/public/Images/ServicePage/Pic5.svg";
import Pic6 from "@/public/Images/ServicePage/Pic6.svg";

import Target from "@/public/Images/ServicePage/Target.svg";
import Led from "@/public/Images/ServicePage/Led.svg";
import Medal from "@/public/Images/ServicePage/Medal.svg";

import UnderlinedText from "@/components/UnderlinedText";
import HelpUnderline from "@/public/Images/ServicePage/HelpUnderline.svg";
import ProUnderline from "@/public/Images/ServicePage/ProUnderline.svg";
import PeopleGroup from "@/public/Images/ServicePage/PeopleGroup.svg";
import CourseCard from "@/components/CourseCard";
import AchiveCard from "@/components/AchiveCard";

const ServiceContainer = forwardRef<HTMLDivElement>((props, ref) => (
  <Flex
    className="w-full justify-start pt-14 flex-col items-center bg-white"
    ref={ref}
  >
    <Typography className="font-semibold text-[24px] leading-[20px] text-[#6E6E6E] font-poppins">
      OUR SERVICES
    </Typography>
    <Typography className="text-[28px] font-medium leading-[30px] pt-[28px] font-poppins text-black">
      Services We Can{" "}
      <UnderlinedText
        text="Help"
        fontSize="28px"
        fontWeight="medium"
        icon={HelpUnderline}
      />
      You
    </Typography>
    <Flex className="w-full lg:space-x-[46px] flex flex-col lg:flex-row items-center justify-center pt-[0px] md:pt-[57px] pb-[55px] px-[50px]">
      <Flex className="flex flex-1 space-x-[20px] justify-end items-end">
        <Flex className="flex flex-col justify-center items-center">
          <Flex className="flex flex-col justify-center items-center bg-[#F3AD35] rounded-[22px] px-[42px] py-[48px] w-fit">
            <Typography className="text-[22px] font-semibold font-poppins">
              12 Years of
            </Typography>
            <Typography className="text-[17px] font-medium font-poppins">
              Experiences
            </Typography>
          </Flex>
          <Image src={SittingMan} alt="sitting man" className="w-fit" />
        </Flex>
        <Flex className="flex flex-col items-center">
          <Image src={SittingWoman} alt="sitting man" className="w-fit" />
          <Flex className="flex justify-center items-center rounded-[22px] px-[20px] py-[48px] w-fit space-x-[10px] border-[1px] border-[#EAEAEA]">
            <Image src={PeopleGroup} alt="people group" />
            <Flex className="flex flex-col items-center">
              <Typography className="text-[22px] font-semibold font-poppins">
                35K+
              </Typography>
              <Typography className="text-[17px] font-medium font-poppins">
                Positive Reviews
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="flex flex-col space-y-[25px] flex-1 pt-[50px] lg:pt-0 items-center lg:items-start">
        <Typography className="text-[20px] leading-[30px] font-medium text-[#6E6E6E] font-poppins text-center lg:text-left">
          WHAT'S OUR MAIN GOAL
        </Typography>
        <Typography className="text-[24px] leading-[43px] font-semibold font-poppins text-black max-w-[600px] lg:max-w-[500px] text-center lg:text-left">
          Take The Next Step Toward Your Personal And{" "}
          <UnderlinedText
            text="Professional"
            fontSize="24px"
            fontWeight="semibold"
            icon={ProUnderline}
          />{" "}
          Goals With Key2Moon Solutions
        </Typography>
        <Typography className="text-[15px] leading-[24px] text-[#6E6E6E] font-poppins text-center lg:text-left max-w-[540px]">
          We're dedicated to delivering innovative IT solutions that empower
          businesses to thrive in the digital age. Zen Class is one of the
          industry’s leading Project Based Career Programs offered by KeY2Moon
          Solutions that promises Placement Assistance on completing the course.
          Conducted by an IIT Madras incubated company & designed by our
          Founders (Ex-Paypal Employees) also offers mentoring through experts
          from companies like Google, Microsoft, Flipkart, Zoho & Fresh-works
          for placing you in top companies with high salaries.
        </Typography>
      </Flex>
    </Flex>

    <div className="w-full bg-[#FAF9F6] flex justify-center px-6">
      <div className="w-auto px-[50px] py-[30px] md:py-[80px] grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 items-center place-items-center gap-x-28 gap-y-4 md:gap-y-10">
        <CourseCard pic={Pic1} title="Branding" cnt={1} />
        <CourseCard pic={Pic2} title="UI UX Design" cnt={2} />
        <CourseCard pic={Pic3} title="Consulting Programs" cnt={4} />
        <CourseCard pic={Pic4} title="Web Development" cnt={1} />
        <CourseCard pic={Pic5} title="Application Development" cnt={2} />
        <CourseCard pic={Pic6} title="Blockchain" cnt={4} />
      </div>
    </div>

    <Flex
      className="w-full bg-[#092332] px-[30px] items-center justify-center py-[30px] lg:py-[109px] lg:space-x-[63px] space-y-10 lg:space-y-0
                       flex-col lg:flex-row"
    >
      <AchiveCard
        icon={Target}
        title="Get Achive New Level"
        description="It is a longe established factory
              that reader will be follow read 
              page"
      />
      <AchiveCard
        icon={Led}
        title="Get Achive New Level"
        description="It is a longe established factory
              that reader will be follow read 
              page"
      />
      <AchiveCard
        icon={Medal}
        title="Get Achive New Level"
        description="It is a longe established factory
              that reader will be follow read 
              page"
      />
    </Flex>
  </Flex>
));

export default ServiceContainer;
