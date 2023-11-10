"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between w-full items-center pt-4 px-4">
      {/* logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} width={40} height={40} alt="logo" />
        <h2 className="sm:inline-flex hidden text-[1.3rem]">Viral Pit</h2>
      </Link>
      {/* right navs */}
      <div className="hidden sm:flex space-x-10 items-end justify-center">
        <span>
          <Link
            href="/#plans"
            className="text-gray-200 cursor-pointer xl:text-[1.4rem] hover:text-highlight text-[1.2rem]"
          >
            Plans
          </Link>
        </span>
        <Link
          href="services"
          className="text-gray-200 cursor-pointer xl:text-[1.4rem] hover:text-highlight text-[1.2rem]"
        >
          Services
        </Link>
        <Link
          href="howitworks"
          className="text-gray-200 cursor-pointer xl:text-[1.4rem] hover:text-highlight text-[1.2rem]"
        >
          How it works
        </Link>
        <Link
          href="/about"
          className="text-gray-200 cursor-pointer xl:text-[1.4rem] hover:text-highlight text-[1.2rem]"
        >
          About
        </Link>
        <Link
          href="contact"
          scroll={false}
          className="text-gray-200 cursor-pointer xl:text-[1.4rem] hover:text-highlight text-[1.2rem]"
        >
          Contact
        </Link>
      </div>
      {/* hamburger menu */}
      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-200 cursor-pointer xl:text-[1.4rem] hover:text-highlight text-[1.2rem]"
        >
          {menuOpen ? (
            <VscClose className="text-[2.2rem]" />
          ) : (
            <BiMenu className="text-[2.2rem]" />
          )}
        </button>
        {menuOpen && (
          <div className="bg-black px-5 py-4 absolute top-10 right-5 mt-12 mr-4 z-10">
            <Link
              href="#plans"
              className="block mb-4 cursor-pointer text-gray-200 border-b border-gray-700 py-3 px-5 xl:text-[1.4rem] hover:text-highlight text-[1.2rem]"
            >
              Plans
            </Link>
            <Link
              href="services"
              className="block mb-4 cursor-pointer text-gray-200 border-b border-gray-700 py-3 px-5 xl:text-[1.4rem] hover:text-highlight text-[1.2rem]"
            >
              Services
            </Link>
            <Link
              href="howitworks"
              className="block mb-4 cursor-pointer text-gray-200 border-b border-gray-700 py-3 px-5 xl:text-[1.4rem] hover:text-highlight text-[1.2rem]"
            >
              How it works
            </Link>
            <Link
              href="about"
              className="block mb-4 cursor-pointer text-gray-200 border-b border-gray-700 py-3 px-5 xl:text-[1.4rem] hover:text-highlight text-[1.2rem]"
            >
              About
            </Link>
            <Link
              href="contact"
              className="block mb-4 cursor-pointer text-gray-200 border-b border-gray-700 py-3 px-5 xl:text-[1.4rem] hover:text-highlight text-[1.2rem]"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
