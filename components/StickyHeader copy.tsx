import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/16/solid";

interface IHeaderProps {
  selectedMenu: number;
  handleClick: (e: React.MouseEvent<HTMLElement>, menuID: number) => void;
  refs: any;
  setSelectedMenu: (menuId: number) => void;
}

const headers = ["Portfolio", "About", "Blog", "Contact"];

const Header = ({
  selectedMenu,
  handleClick,
  refs,
  setSelectedMenu,
}: IHeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scroll = window.scrollY;
    refs.forEach((ref: any, index: number) => {
      if (ref.current) {
        const sectionTop = ref.current.offsetTop;
        const sectionHeight = ref.current.offsetHeight;
        if (scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
          setSelectedMenu(index);
        }
      }
    });
    if (scroll > lastScrollTop && isVisible) {
      setIsVisible(false);
    }
    if (scroll < lastScrollTop) {
      setIsVisible(true);
    }
    setLastScrollTop(scroll);
    console.log(lastScrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, handleScroll]);

  return (
    <div
      className={`header flex fixed h-[63px]  justify-end md:justify-around  items-center w-full z-[100] transition-all duration-300  ${
        isVisible
          ? ""
          : "invisible -translate-y-full transition-all duration-150"
      } ${
        lastScrollTop > 100
          ? "md:bg-[#12171c] bg-mobile-header"
          : " bg-trans-dark/[.12]"
      }`}
    >
      <div
        className="title text-mobileTitle font-semibold sm:text-base absolute top-[10px] md:top-[10px]  left-[16px] sm:left-[20px] lg:left-[50px] 2xl:left-[176px] flex items-center gap-x-5 sm:gap-x-3 cursor-pointer"
        onClick={(e) => handleClick(e, 0)}
      >
        {/* <Image src={Logo} alt={"Logo"} priority /> */}
        KeY2Moon Solutions
      </div>
      <div className="menu-wrapper hidden md:block">
        <ul className=" flex justify-between px-10px text-[14x]/[17px] w-[420px]">
          {headers.map((headerItem, index) => {
            return (
              <li key={index}>
                <Link
                  href={"#"}
                  onClick={(e) => handleClick(e, index)}
                  className="text-headerSize font-medium"
                >
                  <span>{headerItem}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mobile-menu-wrapper md:hidden mr-4 sm:mr-10">
        <button
          id="dropdownBottomButton"
          data-dropdown-toggle="dropdownBottom"
          data-dropdown-placement="bottom"
          className="text-white text-center w-6 h-6"
          type="button"
        >
          <Bars3Icon className="w-6 h-6"></Bars3Icon>
        </button>

        <div
          id="dropdownBottom"
          className="z-10 hidden r-0 bg-main-back divide-y divide-gray-100 rounded-lg shadow w-44 text-white"
        >
          <ul
            className="py-2 text-sm text-white"
            aria-labelledby="dropdownDefaultButton"
          >
            {headers.map((headerItem, index) => {
              return (
                <li key={index} className="block px-4 py-2 hover:bg-slate-600">
                  <Link
                    href={"#"}
                    onClick={(e) => handleClick(e, index)}
                    className="text-headerSize font-medium"
                  >
                    <h3>{headerItem}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
