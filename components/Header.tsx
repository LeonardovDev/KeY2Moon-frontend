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

const headers = ["Portfolio", "About", "Blog"];

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
            <li>
              <Link
                href={"#"}
                className="flex"
                onClick={(e) => handleClick(e, headers.length)}
              >
                <span>Contact</span>
                <ChevronDownIcon className="w-6 h-6" />
              </Link>
            </li>
          </ul>
          <Logo className="absolute left-[150px] top-[50px] font-normal" />
          <ul className="flex justify-between text-white w-[160px] absolute right-[150px] top-[53px]">
            <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer" />
            <HeartIcon className="w-6 h-6 cursor-pointer" />
            <ShoppingBagIcon className="w-6 h-6 cursor-pointer" />
          </ul>
        </div>
      </div>
      <div className="absolute w-full justify-between items-center z-50 flex xl:hidden bg-[#00000021] px-10 py-5 shadow-md">
        <Logo className="font-normal" />
        <div className=" bg-transparent hover:bg-[#FFFFFF55] cursor-pointer border-[1px] rounded-md p-1">
          <Bars3Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </>
  );
};

export default Header;
