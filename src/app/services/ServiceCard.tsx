import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

interface Props {
  index: number;
  title: string;
  description: string;
  //   to: string;
}

const ServiceCard = ({ index, title, description }: Props) => {
  return (
    <article
      className=" text-gray-300 border-y 
      border-gray-400 flex flex-col lg:flex-row justify-evenly 
        items-center py-3"
    >
      <div className="flex items-center lg:space-x-28 
      lg:w-auto w-[75%] sm:w-[500px] justify-between">
        <h3 className="">{index}</h3>
        <h1
          className="text-[1.4rem] 
      text-gray-100 font-semibold w-[60px]"
        >
          {title}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="max-w-[500px] w-[400px] py-10">{description}</h3>
        <BsArrowUpRight className="cursor-pointer text-[1.3rem]" />
      </div>
    </article>
  );
};

export default ServiceCard;
