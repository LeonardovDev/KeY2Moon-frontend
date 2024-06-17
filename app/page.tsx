"use client";

import React, { useRef, useState } from "react";

import Header from "@/components/Header";
import GetTouchContainer from "@/containers/GetTouchContainer";
import HomeContainer from "@/containers/HomeContainer";
import OfferContainer from "@/containers/OfferContainer";
import PartnerContainer from "@/containers/PartnerContainer";
import ServiceContainer from "@/containers/ServiceContainer";
import WhyUsContainer from "@/containers/WhyUsContainer";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const portfoliotRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);
  const blogRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const handleTop = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    portfoliotRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>, menuID: number) => {
    e.preventDefault();
    setSelectedMenu(menuID);
    switch (menuID) {
      case 0:
        portfoliotRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        break;

      case 1:
        aboutRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        break;
      case 2:
        blogRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        break;
      case 3:
        contactRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        break;
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Header selectedMenu={selectedMenu} handleClick={handleClick} />
      <HomeContainer ref={portfoliotRef} />
      <ServiceContainer ref={aboutRef} />
      <PartnerContainer />
      <WhyUsContainer />
      <OfferContainer ref={blogRef} />
      <GetTouchContainer ref={contactRef} handleTop={handleTop} />
    </div>
  );
}
