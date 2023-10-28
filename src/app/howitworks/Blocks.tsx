"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface Prop {
  index: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const Blocks = ({ index, title, description, image }: Prop) => {
  return (
    <article
      className="flex flex-col text-gray-300 gap-7 justify-center border-b sm:border-b-0 sm:border-r 
        border-gray-400 px-4 sm:mx-0 mx-4 py-2 max-w-[500px] h-max"
    >
      <h1 className="text-[1.6rem] font-semibold xl:text-[1.7rem]">{index}</h1>
      <h2
        className="text-[1.2rem] 
      font-semibold xl:text-[1.4rem] text-white"
      >
        {title}{" "}
      </h2>
      <p className="text-gray-400">{description}</p>
      <div className="w-full">
        <Image src={image} alt="one" className="w-[100%] lg:w-[70%]" />
      </div>
    </article>
  );
};

export default Blocks;
