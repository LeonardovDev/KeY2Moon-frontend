import React from "react";
import {
  CalendarIcon,
  CloudIcon,
  PhoneIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";

const ToolKit = () => {
  return (
    <div
      className={`toolbox-wrapper absolute top-[225px] px-[18px] py-[30px] text-white rounded-[6.39px]  bg-[#78797B33]/[0.2] hidden lg:grid grid-rows-5 gap-y-[30px] 
    items-center sm:opacity-100 opacity-0 md:hidden`}
    >
      <CloudIcon className="w-[24px] h-[24px] cursor-pointer"></CloudIcon>
      <ShoppingBagIcon className="w-6 cursor-pointer"></ShoppingBagIcon>
      <CalendarIcon className="w-6 cursor-pointer"></CalendarIcon>
      <PhoneIcon className="w-6 cursor-pointer"></PhoneIcon>
      <UserGroupIcon className="w-6 cursor-pointer"></UserGroupIcon>
    </div>
  );
};

export default ToolKit;
