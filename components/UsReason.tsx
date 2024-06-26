import React from "react";
import { Flex } from "antd";

import Image from "next/image";
import Check from "@/public/Images/WhyUsPage/Check.svg";

interface IUsReason {
  text: string;
}

const UsReason = ({ text }: IUsReason) => {
  return (
    <Flex className="flex space-x-[15px] items-start pb-3">
      <Image src={Check} alt="check" className="pt-[6px]" />
      <h5 className=" font-normal  text-[19px] text-white max-w-[580px] lg:max-w-[400px]">
        {text}
      </h5>
    </Flex>
  );
};

export default UsReason;
