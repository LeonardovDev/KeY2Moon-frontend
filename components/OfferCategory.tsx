import React from "react";
import OfferCard from "./OfferCard";
import { IOfferCard } from "./OfferCard";

interface IOffer {
  bg: string;
  offerName: string;
  offers: Array<IOfferCard>;
}

const OfferCategory = ({ bg, offerName, offers }: IOffer) => {
  return (
    <div className={`bg-[${bg}] w-full flex justify-center`}>
      <div>
        <div className="text-[24px] text-center pb-[20px] pt-[20px] leading-[36px] font-poppins font-semibold">
          {offerName}
        </div>
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows:3 xl:grid-cols-3 xl:grid-rows-2 gap-5 md:gap-5 xl:gap-3 pb-[40px] cursor-pointer">
          {offers.map((offer, index) => {
            return (
              <OfferCard
                key={index}
                icon={offer.icon}
                title={offer.title}
                description={offer.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OfferCategory;
