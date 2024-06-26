import { Flex, Typography } from "antd";
import Image from "next/image";
import React, { RefObject, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import Ellipse from "@/public/Images/GetTouchPage/Ellipse.svg";
import Star from "@/public/Images/GetTouchPage/Star.svg";
import C from "@/public/Images/GetTouchPage/C.svg";
import Camera from "@/public/Images/GetTouchPage/Camera.svg";
import Facebook from "@/public/Images/GetTouchPage/Facebook.svg";
import Twitter from "@/public/Images/GetTouchPage/Twitter.svg";

import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { ToastContainer, toast } from "react-toastify";
import Logo from "@/components/Logo";

import LoadingSpinner from "@/components/LoadingSpinner";
import HomeUnderlineLong from "@/public/Images/Homepage/HomeUnderlineLong.svg";

interface IGetTouchContainerProps {
  handleTop: (e: React.MouseEvent<HTMLElement>) => void;
}

const GetTouchContainer: React.FC<IGetTouchContainerProps> = ({
  handleTop,
}) => {
  const stars = Array.from({ length: 5 });

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    const data = {
      message,
    };
    setLoading(true);
    axios
      .post("/api/send", data)
      .then((res) => {
        if (res.data.success) {
          toast.success("Successfully Submitted!");
          setMessage("");
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error("Whops, Error occured!!!");
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col pt-[25px] space-y-0 w-full bg-[#FAF9F6]">
      <h1 className=" text-[32px] font-medium pb-[30px] text-center mb-5">
        <p className="inline-block relative text-[32px]">
          <span
            className={`text-[32px] leading-[0px] pr-[5px] font-medium font-poppins text-black
        }`}
          >
            Our Blogs
          </span>
          <Image
            src={HomeUnderlineLong}
            alt="underline"
            className="absolute bottom-[-22px] w-full h-auto"
          />
        </p>{" "}
      </h1>
      <Flex className="px-[50px] pb-[107px] space-x-0  justify-center">
        <ToastContainer />
        <Flex className="bg-[#F0E1C9] items-end justify-center relative hidden md:flex h-[490px]">
          <Image
            src={Ellipse}
            alt="ellipse"
            className=" absolute left-[-122px] top-[-100px] z-0"
          />
          <img
            src="/Images/GetTouchPage/Woman.png"
            alt="woman"
            className=" z-10"
          />
        </Flex>
        <div className="flex-1 flex justify-center flex-col bg-[#092332] py-[15px] px-[40px] max-w-[690px] min-w-[480px]">
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
        <Flex className="flex-col md:flex-row md:space-x-[80px] space-y-10 md:space-y-0 items-start relative">
          <div
            className=" cursor-pointer"
            onClick={(e) => {
              handleTop(e);
            }}
          >
            <Logo className="" />
          </div>
          <Flex className="flex space-y-[50px] items-start justify-start flex-1">
            <Flex className="flex-col md:flex-row space-x-[100px] items-start">
              <Flex className="md:flex-col justify-center md:justify-start md:space-y-[8px] space-x-5 md:space-x-0 items-center md:items-start">
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
              <Flex className="md:flex-col justify-center md:justify-start md:space-y-[8px] space-x-5 md:space-x-0 items-center md:items-start">
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

        <Flex className=" justify-start items-center space-x-[35px] pt-8 pl-0 lg:pl-[200px]">
          <input
            placeholder="Enter Email"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="px-[18px] py-[5px] bg-[#FFFFFF00] border-2 border-[#F3AD35] text-white placeholder:text-white w-[300px] rounded-[15px] text-[17px] font-normal
             focus:outline-none focus:ring-0"
          />
          <button
            onClick={handleSubmit}
            className={` font-poppins bg-lightyellow text-base text-center py-2 w-[140px] laeding-6 ml-[65%] px-[20px] rounded-[25px]
              border-[1px] border-white text-white flex justify-center items-center`}
          >
            {loading ? (
              <LoadingSpinner>Sending</LoadingSpinner>
            ) : (
              <>
                Send{" "}
                <ChevronRightIcon className="w-6 h-6 ml-5"></ChevronRightIcon>
              </>
            )}
          </button>
        </Flex>
        <Flex className="flex-1 items-center space-x-[20px] pt-[30px] pr-[70px] xl:pr-[450px] 2xl:pr-[600px]">
          <Image src={C} alt="c" className="mt-[3px]" />
          <Typography className="flex-1 text-white text-[16px] xl:text-[20px]">
            2024 KeY2Moon Solutions. All Rights reserved
          </Typography>
          <Image src={Camera} alt="c" className=" cursor-pointer" />
          <Image src={Facebook} alt="c" className=" cursor-pointer" />
          <Image src={Twitter} alt="c" className=" cursor-pointer" />
        </Flex>
        <img
          src="/Images/GetTouchPage/Student.png"
          className="absolute bottom-0 right-[100px] overflow-hidden hidden xl:block"
          alt="student"
        />
      </Flex>
    </div>
  );
};

export default GetTouchContainer;
