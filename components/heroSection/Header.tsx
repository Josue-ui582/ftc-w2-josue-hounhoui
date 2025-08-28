import React from "react";
import Image from "next/image";
import dashboard from "../../app/asserts/dashboard.png"

const Header = () => {
    return(
        <header className="relative flex flex-col justify-center items-center gap-8 z-[999] w-full mt-10">
            <div className="w-[30%]">
                <h1 className="text-4xl text-white font-extrabold text-center">All your business expenses in one place.</h1>
            </div>
            <div className="w-[25%]">
                <p className="text-gray-400 text-center">Your one-stop finance empower platform. Manage all your business expenses with our supafast app.</p>
            </div>
            <div className="flex justify-center items-center gap-2 text-white text-[14px]">
                <button className="p-2.5 rounded-full bg-blue-500 cursor-pointer">Get a Free Demo</button>
                <button className="p-2.5 rounded-full bg-gray-700 cursor-pointer">See Pricing</button>
            </div>
            <div>
                <Image 
                    src={dashboard}
                    alt="dashboard"
                    width={900}
                    height={400}
                    className="rounded-lg"
                />
            </div>
        </header>
    )
}

export default Header;