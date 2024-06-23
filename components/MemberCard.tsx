import React from "react";

interface IMemberCard {
  name: string;
  respons: string;
  avatar: string;
}

const MemberCard = ({ name, respons, avatar }: IMemberCard) => {
  return (
    <div
      className="bg-[url('/Images/TeamPage/CardBack.png')] w-[250px] xl:w-[324px] h-[200px] md:h-[360px] xl:h-[466px]
                  relative flex justify-center items-center
                  transition-all duration-300 shadow-md cursor-pointer rounded-[15px]"
    >
      <img
        src={avatar}
        className="absolute top-0 opacity-0 md:opacity-100 transition-all duration-100"
      />
      <div
        className="flex flex-col space-y-[10px] bg-[url('/Images/TeamPage/NameBox.png')] absolute left-[-2px] xl:left-[20px] bottom-[-2px] xl:bottom-[23px] 
      justify-center items-center w-[285px] h-[111px] transition-all duration-300"
      >
        <h1 className=" font-medium text-[20px] text-lightyellow">{name}</h1>
        <h2 className=" font-normal text-[16px] text-[#6E6E6E]">{respons}</h2>
      </div>
      <img src="/Images/TeamPage/Lines.png" className="" />
      <img
        src="/Images/TeamPage/Git.png"
        className="absolute top-[20px] right-[25px] cursor-pointer hover:border-gray-300 transition-all duration-300 rounded-[3px] border-[1px] border-transparent
         p-3"
      />
    </div>
  );
};

export default MemberCard;
