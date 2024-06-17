import React from "react";
import { Flex, Typography } from "antd";

import Image from "next/image";
import Check from "@/public/Images/WhyUsPage/Check.svg";

interface IUsReason {
  text: string;
}

const UsReason = ({ text }: IUsReason) => {
  return (
    <Flex className="flex space-x-[15px] items-start">
      <Image src={Check} alt="check" className="pt-[10px]" />
      <Typography className=" font-normal  text-[24px] text-white max-w-[380px]">
        {text}
      </Typography>
    </Flex>
  );
};

export default UsReason;
