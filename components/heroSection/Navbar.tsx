"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../app/asserts/Logo.png";
import { IoChevronDownSharp } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav className="relative flex justify-between items-center md:h-[10vh] h-[8vh] w-full m-auto border-b border-gray-700 text-white z-[800] px-4">

      <div className="flex justify-center items-center gap-2">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <p className="font-bold text-lg">Spend.In</p>
      </div>

      <div className="hidden md:flex">
        <ul className="flex justify-center items-center gap-6">
          <li className="flex items-center gap-[5px] cursor-pointer hover:text-blue-400 transition">
            Products <IoChevronDownSharp />
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">Benefit</li>
          <li className="cursor-pointer hover:text-blue-400 transition">How it Works</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Pricing</li>
          <li className="flex items-center gap-[5px] cursor-pointer hover:text-blue-400 transition">
            Company <IoChevronDownSharp />
          </li>
        </ul>
      </div>

      <div className="hidden md:flex justify-center items-center gap-2">
        <button className="rounded-full px-4 py-2 border border-gray-500 hover:bg-gray-800 transition">
          Login
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 transition">
          Get Demo
        </button>
      </div>

      <div className="md:hidden">
        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-3xl" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black text-white z-[1000] flex justify-between items-start">
          
          <div className="w-full">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
              <div className="flex justify-center items-center gap-2">
                <Image src={logo} alt="Logo" width={40} height={40} />
                <p className="font-bold text-lg">Spend.In</p>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <HiX className="text-3xl" />
              </button>
            </div>

            <div className="flex flex-col gap-32">
              <ul className="flex flex-col items-center gap-8 p-8 text-xl font-medium flex-grow">
                <li className="flex items-center gap-[5px] cursor-pointer hover:text-blue-400 transition">
                  Products <IoChevronDownSharp />
                </li>
                <li className="cursor-pointer hover:text-blue-400 transition">Benefit</li>
                <li className="cursor-pointer hover:text-blue-400 transition">How it Works</li>
                <li className="cursor-pointer hover:text-blue-400 transition">Pricing</li>
                <li className="flex items-center gap-[5px] cursor-pointer hover:text-blue-400 transition">
                  Company <IoChevronDownSharp />
                </li>
              </ul>

              <div className="flex flex-col gap-4 items-center">
                <button className="rounded-full px-6 py-2 border border-gray-500 hover:bg-gray-800 transition w-full">
                  Login
                </button>
                <button className="bg-blue-500 px-6 py-2 rounded-full text-white hover:bg-blue-600 transition w-full">
                  Get Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;