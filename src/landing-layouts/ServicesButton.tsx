"use client";
import Link from "next/link";
import React from "react";
import { IoReturnUpForward } from "react-icons/io5";

const ServicesButton = () => {
  return (
    <div className="block">
      <Link href={"/services"}>
        <button
          className="rounded-sm bg-gray-200 
        flex space-x-1 items-center md:w-[200px] font-semibold sm:w-[130px]
         justify-between border hover:border-gray-300 border-black text-gray-700 hover:bg-black hover:text-highlight px-4 py-1"
        >
          <span className="w-full">Check all Services</span>
          <IoReturnUpForward className="text-[1.4rem]" />
        </button>
      </Link>
    </div>
  );
};

export default ServicesButton;
