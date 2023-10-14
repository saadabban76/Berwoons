import Image, { StaticImageData } from "next/image";
import React from "react";
import { WiDirectionUpRight } from "react-icons/wi";

interface Prop {
  service: string;
  src: StaticImageData;
}

const ServiceCard = (props: Prop): JSX.Element => {
  return (
    <div
      className="flex transition-all ease-in-out flex-col justify-between border
     border-gray-700 rounded-lg xl:max-w-[300px] xl:w-auto sm:w-[240px] w-[90%]
      shadow-2xl"
    >
      <Image className="hover:blur-sm rounded-t-lg h-full" src={props.src} alt="" />
      <div
        className="bg-highlight cursor-pointer hover:text-[#1C64F2] blur-0 text-black 
        font-semibold text-[1.3rem] flex w-full
        items-center justify-between px-2"
      >
        <h5 className="tracking-tight text-inherit">{props.service}</h5>
        <WiDirectionUpRight className="text-[1.5rem] text-inherit" />
      </div>
    </div>

    // <div
    //   className="flex flex-col justify-between shadow-2xl shadow-gray-600
    //     rounded-t-md max-w-[280px]"
    // >
    //   <Image src={props.src} alt="services" />
    //   <div
    //     className="bg-highlight text-black
    //     font-semibold text-[1.1rem] flex w-full
    //     items-center justify-between px-4"
    //   >
    //     <h3 className="inline-block">{props.service}</h3>
    //     <WiDirectionUpRight className="text-[1.5rem] text-inherit" />
    //   </div>
    // </div>
  );
};

export default ServiceCard;
