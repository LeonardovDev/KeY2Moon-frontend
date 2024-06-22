import { Flex, Typography } from "antd";

type Props = {
  text: string;
  backColor: string;
  textColor: string;
  borderColor: string;
  icon: any;
};

const RButton: React.FC<Props> = ({
  text,
  backColor,
  textColor,
  borderColor,
  icon,
}) => {
  return (
    <Flex
      className={`${backColor} flex justify-center items-center space-x-[33px] px-[21px] py-[12px] rounded-[25px] w-fit ${borderColor} border-[1px] cursor-pointer`}
    >
      <Typography
        className={`${textColor} text-[16px] font-semibold leading-[25px]`}
      >
        {text}
      </Typography>
      {icon}
    </Flex>
  );
};

export default RButton;
