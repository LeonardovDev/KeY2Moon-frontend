"use client";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
  Bars3Icon,
} from "@heroicons/react/16/solid";

import Link from "next/link";
import Logo from "./Logo";
import { Button } from "antd";

import { useState } from "react";

const headers = ["Portfolio", "About", "Blog", "Contact"];

interface IHeaderProps {
  selectedMenu: number;
  handleClick: (e: React.MouseEvent<HTMLElement>, menuID: number) => void;
}

const Header = ({ selectedMenu, handleClick }: IHeaderProps) => {
  return (
    <>
      <div className="hidden xl:flex absolute w-full justify-center items-center z-50 ">
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
      <div className="mobile-menu-wrapper absolute w-full justify-between items-center z-50 flex xl:hidden bg-[#00000021] px-10 py-5 shadow-md">
        <Logo className="font-normal" />
        <button
          className=" bg-transparent hover:bg-[#FFFFFF55] cursor-pointer border-[1px] rounded-md p-1"
          id="dropdownBottomButton"
          data-dropdown-toggle="dropdownBottom"
          data-dropdown-placement="bottom"
          type="button"
        >
          <Bars3Icon className="w-6 h-6 text-white" />
        </button>

        <div
          id="dropdownBottom"
          className="z-100 hidden absolute r-[40px] bg-darkblue divide-y divide-gray-100 rounded-lg shadow w-44 text-white"
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
    </>
  );
};

export default Header;
