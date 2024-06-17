import React from "react";
import Image from "next/image";
import { Flex, Typography } from "antd";

interface IAchiveCard {
  icon: any;
  title: string;
  description: string;
}

const AchiveCard = ({ icon, title, description }: IAchiveCard) => {
  return (
    <Flex className="flex space-x-[20px] 2xl:space-x-[45px] justify-center items-center max-w-[390px]">
      <Image src={icon} alt="target" className="h-[86px] w-[88px]" />
      <Typography className="flex-1">
        <p className="text-[20px] leading-[30px] font-semibold text-white font-poppins">
          {title}
        </p>
        <p className="text-[16px] leading-[24px] text-[#9C9AAC] font-poppins">
          {description}
        </p>
      </Typography>
    </Flex>
  );
};

export default AchiveCard;
