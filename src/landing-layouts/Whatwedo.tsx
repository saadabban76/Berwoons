"use client";

import React from "react";
import s1 from "../../public/assets/s1.png";
import s2 from "../../public/assets/s2.png";
import s3 from "../../public/assets/s3.png";
import s4 from "../../public/assets/s4.png";
import s5 from "../../public/assets/s5.png";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { IoReturnUpForward } from "react-icons/io5";

const Whatwedo = () => {
  return (
    <main className="flex flex-col space-y-8 py-8">
        <h1 className="text-[2.7rem] xl:text-[2.7rem]">What We Do</h1>
        <section
          className="flex gap-6 xl:justify-evenly flex-grow
      sm:justify-start justify-center flex-wrap"
        >
          <ServiceCard service="3D Design" src={s1} />
          <ServiceCard service="Graphic Design" src={s2} />
          <ServiceCard service="Video Editing" src={s3} />
          <ServiceCard service="Marketting" src={s4} />
          <ServiceCard service="Web Creating" src={s5} />
        </section>
        {/* below services */}
        <section
          className="flex sm:flex-row gap-8 flex-col 
      justify-between sm:items-center w-full xl:px-48"
        >
          <div className="text-[1.1rem] text-gray-300 pt-10">
            <h2>
              Explore Our Comprehensive range of services, all conveniently
              explained in one place
            </h2>
            <h2>
              Find the{" "}
              <span className="text-highlight">creative and digital</span>{" "}
              solutions you need, tailored to your unique requirements.
            </h2>
          </div>
          <button
            className="rounded-sm bg-gray-200 
        flex space-x-1 items-center md:w-[200px] font-semibold sm:w-[130px]
         justify-between border hover:border-gray-300 border-black text-gray-700 hover:bg-black hover:text-highlight px-4 py-1"
          >
            <span className="w-full">Check all Services</span>
            <IoReturnUpForward className="text-[1.4rem]" />
          </button>
        </section>
    </main>
  );
};

export default Whatwedo;
