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
    <h1 className="inline-block relative">
      <p
        className={`text-[${fontSize}] leading-[0px] pr-[5px] font-${fontWeight} font-poppins ${
          fontColor ? fontColor : "text-black"
        }`}
      >
        {text}
      </p>
      <Image
        src={icon}
        alt="underline"
        className="absolute bottom-[-10px] w-full"
      />
    </h1>
  );
};

export default UnderlinedText;
