import React from "react";

import HomeUnderlineLong from "@/public/Images/Homepage/HomeUnderlineLong.svg";
import Image from "next/image";

import LogoIcon from "@/public/Logo.svg";

interface ILogoProps {
  className: string;
}
const Logo = ({ className }: ILogoProps) => {
  return (
    <div className={`${className}`}>
      <div className="relative">
        <div className=" text-white font-rancho text-[24px] tracking-wide flex">
          <Image src={LogoIcon} alt="logo icon" className="mr-[18px]" />
          KeY2Moon Solutions
        </div>
        <Image
          src={HomeUnderlineLong}
          alt="home logo"
          className="w-[160px] h-fit absolute bottom-[-18px] right-0"
        />
      </div>
    </div>
  );
};

export default Logo;
