"use client";

import Image from "next/image";
import React from "react";
import headerimage from "../../public/assets/header.png";
import { motion } from "framer-motion";
import Reveal from "@/utils/Reveal";

export const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-center w-full items-center px-6 py-8">
      {/* Golden Boy image */}
      <div className="flex-[0.9] xl:flex-[0.6]">
        <Image className="w-full h-full" src={headerimage} alt="header" />
      </div>
      {/* article */}
      <article className="flex flex-col space-y-8 items-start h-full">
        <div
          className="text-gray-100 font-semibold xl:text-[3rem] 
            md:text-[2.2rem] text-[1.8rem] 
          "
        >
          <h2 className="text-inherit inline-block">
            Struggling To Go Viral ?
          </h2>
          <Reveal width="fit-content" showHighlight={"gray"} 
          >
            <h2 className="text-inherit">
              You{"'"}re in the Right Place
              <span className="absolute -right-4 bottom-3 z-10 inline-block w-5 h-5 text-[2rem]  rounded-full bg-highlight">
                !
              </span>
            </h2>
          </Reveal>
        </div>
        <button
          className="inline-block hover:bg-black hover:text-highlight bg-highlight 
          transition-colors ease-in-out font-semibold px-4 py-2 rounded-full text-black"
        >
          Start a Project
        </button>
      </article>
    </div>
  );
};
