"use client";

import React, { useRef, useState, useEffect } from "react";

import Header from "@/components/Header";
import StickyHeader from "@/components/StickyHeader";
import GetTouchContainer from "@/containers/GetTouchContainer";
import HomeContainer from "@/containers/HomeContainer";
import OfferContainer from "@/containers/OfferContainer";
import PartnerContainer from "@/containers/PartnerContainer";
import ServiceContainer from "@/containers/ServiceContainer";
import WhyUsContainer from "@/containers/WhyUsContainer";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 300) {
        setPrevScrollPos(currentScrollPos);
        setVisible(false);
      } else {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const portfoliotRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);
  const blogRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);

  const refs = [portfoliotRef, aboutRef, blogRef, contactRef];

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
      {/* <Header handleClick={handleClick} /> */}
      <StickyHeader
        selectedMenu={selectedMenu}
        handleClick={handleClick}
        refs={refs}
        setSelectedMenu={setSelectedMenu}
      />
      <HomeContainer ref={portfoliotRef} />
      <ServiceContainer ref={aboutRef} />
      <PartnerContainer />
      <WhyUsContainer />
      <OfferContainer ref={blogRef} />
      <GetTouchContainer refer={contactRef} handleTop={handleTop} />
    </div>
  );
}
