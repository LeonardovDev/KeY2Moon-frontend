import { Flex, Typography } from "antd";
import Image from "next/image";
import React from "react";

interface ICourseCard {
  pic: any;
  title: string;
  cnt: number;
}

const CourseCard = ({ pic, title, cnt }: ICourseCard) => {
  return (
    <Flex
      className="px-[20px] md:px-[40px] py-[43px] space-x-[26px] items-center bg-white rounded-[15px] border-2 border-[#E6E6E6] 
                      w-[250px] h-[120px] md:w-[302px] md:h-[156px] cursor-pointer transition-all duration-700"
    >
      <Image src={pic} alt="picture1" className="w-[65px] h-fit" />
      <Flex className="flex-col space-y-[10px]">
        <h1 className="text-[15px] md:text-[20px] font-medium leading-[30px]">
          {title}
        </h1>
        <Typography className="text-[15px] md:text-[20px] font-medium leading-[30px] text-[#6E6E6E]">
          {cnt} Courses
        </Typography>
      </Flex>
    </Flex>
  );
};

export default CourseCard;
