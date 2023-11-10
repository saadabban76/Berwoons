"use client";

import React from 'react'
import Dropdown from './Dropdown'
import { useParams } from 'next/navigation'

const Form = () => {
    const param = useParams();
    return (
        <form className="h-full px-10">
            <h2 className=" text-black text-[1.9rem] font-semibold py-1 sm:py-8">Payment Process
                <span className='text-gray-900 border-b-2 border-[#e3e642]'>{
                    param.slug == "Gold" ? " Bussiness" : " Individual"} </span> </h2>
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
     block w-full p-2.5 dark:bg-transparent dark:placeholder:text-gray-500 pl-6
      dark:border-gray-600 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Berwan"
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block mb-2 text-[1.3rem] font-medium text-gray-900"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-[1.3rem] rounded-lg focus:ring-blue-500 focus:border-blue-500
     block w-full p-2.5 dark:bg-transparent
      dark:border-gray-600 dark:placeholder:text-gray-500 pl-6 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="berwan@company.com"
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="number"
                    className="block mb-2 text-[1.3rem] font-medium text-gray-900"
                >
                    Choose your plan
                </label>
                <Dropdown />
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-[1.3rem] 
                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[100px]
                     w-full p-2.5 dark:bg-transparent dark:border-gray-600
                      dark:placeholder:text-gray-500 pl-6 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="brief details of your project"
                    required
                />
            </div>
            <button
                type="submit"
                className="text-black bg-highlight hover:bg-black hover:text-highlight focus:ring-4 
      focus:outline-none focus:ring-blue-300 font-medium rounded-full border border-gray-300 text-[1.3rem] 
      w-full  px-5 py-1 text-center"
            >
                Send Message
            </button>
        </form>
    )
}

export default Form