import { Flex, Typography } from "antd";
import Image from "next/image";

export type IOfferCard = {
  title: string;
  description: string;
  icon: any;
};

const OfferCard: React.FC<IOfferCard> = ({ title, description, icon }) => {
  return (
    <Flex className="flex flex-col w-[372px] h-full border-[1px] border-[#E4E0DC] rounded-[15px] p-[15px] space-y-[26px]">
      <Flex className="flex flex-row flex-1 justify-start space-x-[18px] items-center">
        <Image src={icon} alt="card pic" />
        <h1 className=" font-medium text-[18px] text-black font-poppins">
          {title}
        </h1>
      </Flex>
      <Typography className="font-light text-[16px] flex-1 font-poppins">
        {description}
      </Typography>
    </Flex>
  );
};

export default OfferCard;
