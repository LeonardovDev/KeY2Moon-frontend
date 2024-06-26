import React from "react";
import { Flex, Typography } from "antd";
import Image from "next/image";

import SolutionUnderline from "@/public/Images/OfferPage/SolutionUnderline.svg";
import MemberCard from "@/components/MemberCard";
import ServiceCard from "@/components/ServiceCard";

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
            <span className="text-[20px] leading-[0px] font-medium font-poppins text-black">
              KeY2Moon c
            </span>
            <Image
              src={SolutionUnderline}
              alt="underline"
              className="absolute bottom-[-8px] w-full h-auto"
            />
          </p>
          ommunity
        </h1>
        <Typography className="text-[20px] text-[#6E6E6E] font-medium leading-[30px] pt-[45px] text-center font-poppins px-[50px] lg:px-[150px] max-w-[1300px]">
          Take the next step forward achieving your personal and professional
          aspirations with KeY2Moon Book it has survived not only five centuries
        </Typography>
        <div
          className="flex flex-nowrap md:flex-wrap flex-col md:flex-row 
         space-x-0 md:space-x-[20px] 2xl:space-x-[100px] pt-[30px] lg:pt-[100px] gap-5
         justify-center"
        >
          <MemberCard
            name="Bonnie Bennet"
            respons="Marketing Expert"
            avatar="/Images/TeamPage/Bonnie_Bennet.png"
          />
          <MemberCard
            name="Bonnie Bennet"
            respons="UI/UX Expert"
            avatar="/Images/TeamPage/Caroline.png"
          />
          <MemberCard
            name="Bonnie Bennet"
            respons="Business Analysist"
            avatar="/Images/TeamPage/Marget_Williams.png"
          />
        </div>
      </Flex>

      <div
        className="flex flex-col xl:flex-row justify-center items-center space-x-0 xl:space-x-[30px] mb-0 xl:mb-5
         space-y-[20px] xl:space-y-0 mt-10 px-[30px]"
      >
        <ServiceCard
          title="Expert instructor live classes here!"
          description="When an unknown printer took a gallery offer area type make specimen book has survived type make."
          avatar="/Images/TeamPage/Serve1.png"
        />
        <ServiceCard
          title="Achieve your goals with KeY2Moon Solutions"
          description="When an unknown printer took a gallery offer area type make specimen book has survived type make."
          avatar="/Images/TeamPage/Serve2.png"
        />
      </div>
    </>
  );
};

export default TeamContainer;
