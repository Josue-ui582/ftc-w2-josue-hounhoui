import React from "react";
import Image from "next/image";
import logo from "../app/asserts/Logo.png"
import { IoChevronDownSharp } from "react-icons/io5";

const Navbar = () => {
    return(
        <nav className="relative flex justify-between items-center px-16 py-4 border-b border-gray-700 text-white z-[999]">
            <div className="flex justify-center items-center">
                <Image 
                    src={logo}
                    alt="Logo"
                />
                <p className="font-bold">Spend.In</p>
            </div>
            <div>
                <ul className="flex justify-center items-center gap-4">
                    <li className="flex justify-center items-center gap-[5px] cursor-pointer">Products <IoChevronDownSharp /></li>
                    <li className="cursor-pointer">Benefit</li>
                    <li className="cursor-pointer">How it Works</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="flex justify-center items-center gap-[5px] cursor-pointer">Company <IoChevronDownSharp /></li>
                </ul>
            </div>
            <div className="flex justify-center items-center gap-2">
                <button className="rounded-full cursor-pointer">Login</button>
                <button className="bg-blue-500 p-2.5 rounded-full text-white cursor-pointer">Get Demo</button>
            </div>
        </nav>
    )
}

export default Navbar;