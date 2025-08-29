import React from "react";

const BenefitTitle = () => {
    return(
        <div className="flex md:flex-row flex-col md:gap-40 gap-4 justify-start items-start ">
            <div>
                <p className="text-blue-500 uppercase text-md font-semibold">Whyusespen.in</p>
                <h1 className="text-black mt-4 font-bold text-2xl">Easy, Simple, <br /> Affordable</h1>
            </div>
            <div className="md:w-[53%] text-gray-500 text-[14px]">
                <p>Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.</p>
            </div>
        </div>
    )
}

export default BenefitTitle;