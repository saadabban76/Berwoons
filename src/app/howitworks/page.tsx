import Image from "next/image";
import React from "react";
import Blocks from "./Blocks";

import one from "../../../public/assets/howitworks/one.png";
import two from "../../../public/assets/howitworks/two.png";
import three from "../../../public/assets/howitworks/three.png";
import { BsArrowDownRight } from "react-icons/bs";

const page = () => {
  return (
    <main className="px-7 py-10 flex flex-col gap-10 justify-start items-start">
      {/* header */}
      <h1 className="w-[240px] text-gray-100 xl:w-[280px] font-semibold text-[1.9rem] xl:text-[2.1rem]">
        Basically, it works like this
      </h1>
      <section className="flex justify-start sm:flex-row flex-col">
        {/* choose your plan */}
        <Blocks
          index={1}
          title="Choose Your Plan"
          description="Start by selecting the right plan for your needs or consuit with us for
        personalized guidance. You have the fexibility to change your plan
        anytime."
          image={one}
        />
        <Blocks
          index={2}
          title="Collaborative Group Chat : "
          description="Start by selecting the right plan for your needs or consuit with us for
        personalized guidance. You have the fexibility to change your plan
        anytime."
          //   description={`Whether you${"'"}re an individual creator, a brand or a comp`}
          image={two}
        />
        <Blocks
          index={3}
          title="Choose Your Plan"
          description="Start by selecting the right plan for your needs or consuit with us for
        personalized guidance. You have the fexibility to change your plan
        anytime."
          image={three}
        />
      </section>
      <p className="text-[0.9rem] text-gray-200">
        Wish Viral Pit. You{"'"}re an essential part of our creative process.
        Let{"'"}s create something extraordiniary together.{" "}
      </p>
      <section
        className="w-full border-y cursor-pointer
          flex justify-center p-4 mt-4 mb-5 border-gray-400 text-highlight 
          hover:bg-highlight hover:text-black"
      >
        <div className="flex items-center space-x-10 text-[2.4rem] xl:text-[3.1rem] text-inherit">
          <h1 className="text-[2.5rem] xl:text-[3.2rem] text-inherit">
            Contact
          </h1>
          <BsArrowDownRight className="text-inherit" />
        </div>
      </section>
    </main>
  );
};

export default page;
