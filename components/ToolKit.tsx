import React from "react";

import CloudIcon from "./Icons/CloudIcon";
import BagIcon from "./Icons/BagIcon";
import CalendarIcon from "./Icons/CalendarIcon";
import PhoneIcon from "./Icons/PhoneIcon";
import UserGroupIcon from "./Icons/UserGroupIcon";

const ToolKit = () => {
  return (
    <div className="toolbox-wrapper absolute top-[277px] px-3 py-6  rounded-[6.39px]  bg-[#78797B33]/[0.2]  hidden xl:block">
      <div className="flex flex-col gap-y-[24px]">
        <CloudIcon></CloudIcon>
        <BagIcon></BagIcon>
        <CalendarIcon></CalendarIcon>
        <PhoneIcon></PhoneIcon>
        <UserGroupIcon></UserGroupIcon>
      </div>
    </div>
  );
};

export default ToolKit;
