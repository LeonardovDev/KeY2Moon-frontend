import React from "react";
import Image from "next/image";

interface IUTProps {
  text: string;
  fontSize: string;
  fontWeight: string;
  icon: any;
  fontColor?: string;
}

const UnderlinedText = ({
  text,
  fontSize,
  fontWeight,
  icon,
  fontColor,
}: IUTProps) => {
  return (
    <p className="inline-block relative">
      <span
        className={`text-[${fontSize}] leading-[0px] pr-[5px] font-${fontWeight} font-poppins ${
          fontColor ? fontColor : "text-black"
        }`}
      >
        {text}
      </span>
      <Image
        src={icon}
        alt="underline"
        className="absolute bottom-[-10%] w-full h-auto"
      />
    </p>
  );
};

export default UnderlinedText;
