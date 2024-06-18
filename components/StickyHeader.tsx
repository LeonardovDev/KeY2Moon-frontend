import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/react/16/solid";

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
      className={`header flex fixed h-[63px] justify-end xl:justify-center  items-center w-full z-[100] transition-all duration-300 ${
        isVisible
          ? ""
          : "invisible -translate-y-full transition-all duration-150"
      } ${
        lastScrollTop > 100
          ? "md:bg-[#12171c] bg-mobile-header visible"
          : " bg-trans-dark/[.12] visible"
      } `}
    >
      <Logo className="absolute left-[50px] xl:left-[150px] top-[5px] font-normal" />
      <ul className=" justify-between text-white w-[160px] absolute right-[150px] top-[20px] hidden xl:flex">
        <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer" />
        <HeartIcon className="w-6 h-6 cursor-pointer" />
        <ShoppingBagIcon className="w-6 h-6 cursor-pointer" />
      </ul>
      <div className="menu-wrapper hidden xl:block">
        <ul className=" flex justify-between w-[500px] text-white text-[18px] font-prompt">
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
      <div className="mobile-menu-wrapper xl:hidden mr-4 sm:mr-10">
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
          className="z-10 hidden r-0 bg-darkblue divide-y divide-gray-100 rounded-lg shadow w-44 text-white"
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
