import Image from "next/image";
import React from "react";
import person from "../../../public/assets/about/person.png";
import header from "../../../public/assets/about/header.png";
import { BsArrowDownRight } from "react-icons/bs";

const page = () => {
  return (
    <main className="text-white">
      {/* heading */}
      <h1 className="xl:text-[3.1rem] text-[2.1rem] text-center font-bold pt-10 pb-4">
        DIGITAL CREATIVE AGENCY
      </h1>
      {/* image */}
      <section className="relative xl:h-[340px] h-[300px]">
        <Image
          src={header}
          alt="car on road"
          className="object-cover 
           w-full h-full"
        />
        <div className="flex justify-center w-full">
          <h4
            className="xl:text-[1.4rem] text-[1rem] w-[90%]
            text-highlight 
            absolute bottom-4"
          >
            {" "}
            We specialize in crafting compelling content, digital solutions and
            innovative marketing strategies. Our mission is to bring your ideas
            to life, enhance your online presence, and drive success with
            cost-effective solutions and seamless communication. Whether you
            {"'"}
            re an individual creator, brand, or company, we{"'"}re here to
            transform your vision into a digital masterpiece
          </h4>
        </div>
      </section>
      {/* middle component */}
      <section className="sm:p-24 p-12 xl:px-[500px] text-gray-300 
      text-[1rem] xl:text-[1.1rem]">
        {/* first row */}
        <article className="flex gap-5 flex-wrap justify-between">
          <h2 className="w-[340px] mt-14">
            And we are a passionate team of artists developers, and digital
            visionaries who are dedicated to pushing the boundaries of
            creativity and technology. We believe that innovation,
            collaboration, solutions are the keys to unlocking success.
          </h2>
          <Image
            src={person}
            alt="person-image"
            className="w-[300px] h-[360px] rounded-md"
          />
        </article>
        <article className="flex justify-between space-x-10 items-start mt-10">
          <h2 className="w-[340px]">
            From content creation to marketing strategies, we offer a
            comprehensive suite of services that cater to individual creators,
            brands, companies alike. Our team{"'"}s diverse skills enable us to
            tailor solutions that meet your specific needs and goals.
          </h2>
          <h2 className="w-[340px]">
            Whether you{"'"}re an entrepreneur with a vision, a brand looking to
            make a mark, or an individual seeking creative solutions, we invite
            you to join us on this exciting journey. Together, we can turn ideas
            into reality and create a digital future that is both inspiring and
            innovative.
          </h2>
        </article>
      </section>
      <section
        className="w-full border-y cursor-pointer
          flex justify-center p-10 mt-20 mb-5 border-gray-400 text-highlight 
          hover:bg-highlight hover:text-black"
      >
        <div className="flex items-center space-x-10 text-[2.4rem] xl:text-[3.1rem] text-inherit">
          <h1 className="text-[2.5rem] xl:text-[3.2rem] text-inherit">
            Let{"'"}s talk
          </h1>
          <BsArrowDownRight className="text-inherit" />
        </div>
      </section>
    </main>
  );
};

export default page;
