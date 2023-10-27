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
      className=" text-gray-300 py-1 border-y 
      border-gray-400 flex justify-evenly 
        items-center"
    >
      <h3>{index}</h3>
      <h1
        className="text-[1.4rem] 
      text-gray-100 font-semibold w-[60px]"
      >
        {title}
      </h1>
      <h3 className="w-[400px] py-10">{description}</h3>
      <BsArrowUpRight className="cursor-pointer text-[1.3rem]" />
    </article>
  );
};

export default ServiceCard;
