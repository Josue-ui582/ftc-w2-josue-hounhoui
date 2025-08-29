import React from "react";

const HowItWorkFooter = () => {
    return(
        <div className="flex md:flex-row flex-col justify-center items-center gap-2 text-white text-[14px] md:w-[30%] w-full">
            <button className="p-2.5 rounded-full bg-blue-500 cursor-pointer w-full">Get a Free Demo</button>
            <button className="p-2.5 rounded-full bg-gray-700 cursor-pointer w-full">See Pricing</button>
        </div>
    )
}

export default HowItWorkFooter;