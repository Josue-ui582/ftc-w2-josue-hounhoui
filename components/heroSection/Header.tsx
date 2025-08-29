import React from "react";
import Image from "next/image";
import dashboard from "../../app/asserts/dashboard.png"

const Header = () => {
    return(
        <header className="relative flex flex-col justify-center items-center gap-8 z-[500] w-full md:mt-20 mt-10 md:h-auto h-[85vh]">
            <div className="md:w-[30%] sm:w-[50%] w-[90%] flex flex-col md:items-center md:justify-center gap-4 justify-start items-start">
                <div>
                    <h1 className="text-4xl text-white font-extrabold md:text-center">All your business expenses in one place.</h1>
                </div>
                <div>
                    <p className="text-gray-400 md:text-center">Your one-stop finance empower platform. Manage all your business expenses with our supafast app.</p>
                </div>
                <div className="flex md:flex-row flex-col md:justify-center md:items-center gap-2 text-white text-[14px] w-full">
                    <button className="p-2.5 rounded-full bg-blue-500 cursor-pointer">Get a Free Demo</button>
                    <button className="p-2.5 rounded-full bg-gray-700 cursor-pointer">See Pricing</button>
                </div>
            </div>
            <div className="md:w-[80%] w-[90%]">
                <Image 
                    src={dashboard}
                    alt="dashboard"
                    className="rounded-lg"
                />
            </div>
        </header>
    )
}

export default Header;