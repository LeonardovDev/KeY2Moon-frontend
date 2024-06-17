import React, { forwardRef } from "react";
import { Flex, Typography } from "antd";
import UnderlinedText from "@/components/UnderlinedText";

import SolutionUnderline from "@/public/Images/OfferPage/SolutionUnderline.svg";
import CardPic1 from "@/public/Images/OfferPage/CardPic1.svg";
import CardPic2 from "@/public/Images/OfferPage/CardPic2.svg";
import CardPic3 from "@/public/Images/OfferPage/CardPic3.svg";
import CardPic4 from "@/public/Images/OfferPage/CardPic4.svg";
import CardPic5 from "@/public/Images/OfferPage/CardPic5.svg";
import CardPic6 from "@/public/Images/OfferPage/CardPic6.svg";
import OfferCategory from "@/components/OfferCategory";

const OfferContainer = forwardRef<HTMLDivElement>((props, ref) => {
  const offersData = [
    {
      bg: "#FFFFFF",
      offerName: "Services",
      offers: [
        {
          title: "Enterprise Software Development",
          description:
            "Building robust, scalable, and secure applications tailored to meet the complex needs of large organizations.",
          icon: CardPic1,
        },
        {
          title: "UI/UX Design",
          description:
            "Art of crafting user interfaces and experiences that are intuitive, engaging, and enjoyable for digital product users.",
          icon: CardPic2,
        },
        {
          title: "System Integration",
          description:
            "Connecting different subsystems or components within an organization's infrastructure to function harmoniously as a cohesive unit. ",
          icon: CardPic3,
        },
        {
          title: "Managed Application Services",
          description:
            "Provide comprehensive support, maintenance, and optimization for businesses software applications.",
          icon: CardPic4,
        },
        {
          title: "Digital Transformation & Automation",
          description:
            "Leveraging technology to streamline and enhance business operations.",
          icon: CardPic5,
        },
        {
          title: "Business Process",
          description:
            "Streamlining workflows and maximizing efficiency through strategic business process optimization",
          icon: CardPic6,
        },
      ],
    },

    {
      bg: "#FAF9F6",
      offerName: "Competencies",
      offers: [
        {
          title: "Enterprise Resource Planning",
          description:
            "Building robust, scalable, and secure applications tailored to meet the complex needs of large organizations.",
          icon: CardPic1,
        },
        {
          title: "Virtual & Argument Reality",
          description:
            "Art of crafting user interfaces and experiences that are intuitive, engaging, and enjoyable for digital product users.",
          icon: CardPic2,
        },
        {
          title: "IOT & Cloud Computing",
          description:
            "Connecting different subsystems or components within an organization's infrastructure to function harmoniously as a cohesive unit. ",
          icon: CardPic3,
        },
        {
          title: "Artificial Intelligence",
          description:
            "Provide comprehensive support, maintenance, and optimization for businesses software applications.",
          icon: CardPic4,
        },
        {
          title: "Blockchain",
          description:
            "Leveraging technology to streamline and enhance business operations.",
          icon: CardPic5,
        },
        {
          title: "Identity Governance",
          description:
            "Streamlining workflows and maximizing efficiency through strategic business process optimization",
          icon: CardPic6,
        },
      ],
    },

    {
      bg: "#FFFFFF",
      offerName: "Industries",
      offers: [
        {
          title: "Retail & Ecommerce ",
          description:
            "Building robust, scalable, and secure applications tailored to meet the complex needs of large organizations.",
          icon: CardPic1,
        },
        {
          title: "Health care",
          description:
            "Art of crafting user interfaces and experiences that are intuitive, engaging, and enjoyable for digital product users.",
          icon: CardPic2,
        },
        {
          title: "Telecommunication",
          description:
            "Connecting different subsystems or components within an organization's infrastructure to function harmoniously as a cohesive unit. ",
          icon: CardPic3,
        },
        {
          title: "Public Sector",
          description:
            "Provide comprehensive support, maintenance, and optimization for businesses software applications.",
          icon: CardPic4,
        },
        {
          title: "Fin Tech",
          description:
            "Leveraging technology to streamline and enhance business operations.",
          icon: CardPic5,
        },
        {
          title: "Education",
          description:
            "Streamlining workflows and maximizing efficiency through strategic business process optimization",
          icon: CardPic6,
        },
      ],
    },
  ];

  return (
    <>
      <Flex className="flex flex-col bg-white justify-center items-center py-[42px] px-[50px]">
        <Typography className="font-semibold text-[16px] text-[#6E6E6E] font-poppins">
          WE OFFER
        </Typography>
        <Typography className=" font-medium text-[20px] leading-[30px] text-black pt-[22px] font-poppins">
          From the{" "}
          <UnderlinedText
            text="KeY2Moon Solutions"
            icon={SolutionUnderline}
            fontSize="20px"
            fontWeight="medium"
          />{" "}
          community
        </Typography>
      </Flex>

      {offersData.map((data, index) => {
        return (
          <OfferCategory
            key={index}
            bg={data.bg}
            offerName={data.offerName}
            offers={data.offers}
          />
        );
      })}
    </>
  );
});

export default OfferContainer;
