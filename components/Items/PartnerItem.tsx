import React from "react";

import DropShadow from "../DropShadow";
import "@/app/assets/css/Item.css";
interface IPartnerItemProps {
  children: React.ReactNode;
}
const PartnerItem = ({ children }: IPartnerItemProps) => {
  return (
    <button className="partner-item cursor-default text-[11.64px]/[14.19px] md:text-description lg:text-base p-2 md:p-4 roundex-[25px] font-normal mt-6 mr-2 sm:mr-5">
      {" "}
      <div className="flex"> {children}</div>{" "}
    </button>
  );
};

export default PartnerItem;
