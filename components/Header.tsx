"use client";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/react/16/solid";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./Logo";

const headers = ["Portfolio", "About", "Blog", "Contact"];

interface IHeaderProps {
  handleClick: (e: React.MouseEvent<HTMLElement>, menuID: number) => void;
}

const Header = ({ handleClick }: IHeaderProps) => {
  const [show, setShow] = useState(false);
  const handleBtnClicked = () => {
    console.log("clicked!_button");
    setShow(!show);
  };

  return (
    <div className="hidden xl:block absolute w-full justify-center items-center z-50 transition-all duration-700">
      <div className="relative pt-[53px] w-full flex justify-center">
        <ul
          className={`flex justify-between w-[500px] text-white text-[18px] font-prompt`}
        >
          {headers.map((headerItem, index) => {
            return (
              <li key={index}>
                <Link href={"#"} onClick={(e) => handleClick(e, index)}>
                  {headerItem}
                </Link>
              </li>
            );
          })}
        </ul>
        <Logo className="absolute left-[150px] top-[50px] font-normal" />
        <ul className="flex justify-between text-white w-[160px] absolute right-[150px] top-[53px]">
          <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer" />
          <HeartIcon className="w-6 h-6 cursor-pointer" />
          <ShoppingBagIcon className="w-6 h-6 cursor-pointer" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
