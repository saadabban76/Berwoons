import Reveal from "@/utils/Reveal";
import Image from "next/image";
import contact from "../../../public/assets/contact.png";
import React from "react";

const page = () => {
  return (
    <main
      className="h-max bg-white flex sm:flex-row flex-col 
      justify-start items-start"
      id="contact"
    >
      {/* helper */}
      <div className="absolute h-[30px] bg-black w-full">
      </div>
      {/* image */}
      <section
        className="flex-1 bg-black px-24 py-44 sm:inline-flex flex-[0.9] xl:flex-[0.6] 
        flex justify-center items-center text-[1.2rem] xl:text-[1.4rem]"
      >
        <div className="flex justify-start flex-col gap-7">
          {/* header */}
          <h1
            className="xl:w-[400px] w-[280px] text-[2.7rem] sm:text-[3.1rem] 
          xl:text-[3.8rem] font-bold"
          >
            Hey there ! Let{"'"}s chat
          </h1>
          <p>Interested in Working with us ?</p>
          <p> Or you want to get in touch about general enquiry ?</p>
          <p>Fill in the form today and our team will be in touch shortly.</p>
          <p>
            If you{"'"}d prefer to email us directly, send us a message at
            <span className="text-highlight cursor-pointer">
              hello@viralpit.com
            </span>
          </p>
        </div>
        {/* <Reveal width="fit-content" showHighlight="transparent">
          <Image className="w-full h-full" src={contact} alt="contact" />
        </Reveal> */}
      </section>
      {/* contact us */}
      <form className="sm:pl-10 sm:ml-0 ml-10 py-5 rounded-sm pt-20 h-full">
        <h2 className="py-5 text-black text-[1.9rem] font-bold">Contact Us</h2>
        <div className="mb-6 xl:w-[500px] w-[400px]">
          <label
            htmlFor="name"
            className="block mb-2 text-[1.3rem] font-medium text-gray-900"
          >
            what{"'"}s your name?
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[1.3rem] rounded-lg focus:ring-blue-500 focus:border-blue-500
         block w-full p-2.5 dark:bg-transparent dark:placeholder:text-gray-700 pl-6
          dark:border-gray-600 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-[1.3rem] font-medium text-gray-900"
          >
            An email we can reach out to you ?
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[1.3rem] rounded-lg focus:ring-blue-500 focus:border-blue-500
         block w-full p-2.5 dark:bg-transparent
          dark:border-gray-600 dark:placeholder:text-gray-700 pl-6 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="number"
            className="block mb-2 text-[1.3rem] font-medium text-gray-900"
          >
            Phone Number(optional)
          </label>
          <input
            type="number"
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[1.3rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder:text-gray-700 pl-6 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+91 8303830183"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="overview"
            className="block mb-2 text-[1.3rem] font-medium text-gray-900"
          >
            An overview of your project
          </label>
          <textarea
            id="overview"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[1.3rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[100px] w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder:text-gray-700 pl-6 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="brief details of your project"
            required
          />
        </div>
        {/* <div className="flex items-center mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 
              focus:ring-3 focus:ring-blue-300 dark:bg-transparent
               dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-[1.3rem] font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div> */}
        <button
          type="submit"
          className="text-black bg-highlight hover:bg-black hover:text-highlight focus:ring-4 
          focus:outline-none focus:ring-blue-300 font-medium rounded-full border border-gray-700 text-[1.3rem] 
          w-full sm:w-[200px] px-5 py-1 text-center"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};

export default page;
