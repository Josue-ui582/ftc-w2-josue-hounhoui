import React from "react";
import call from "../../app/asserts/call-to-action.png"
import Image from "next/image";

const CallToAction = () => {
    return(
        <div className="flex justify-center items-center bg-[#201822]">
            <div className="flex md:flex-row flex-col md:justify-center mditems-end w-[70%] py-20 gap-4">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-blue-500 font-semibold text-sm">DOWNLOADNOW!</h4>
                        <h1 className="text-white font-bold text-xl">Start Track Your Business Expenses Today</h1>
                        <p className="text-gray-600 text-[14px]">Are you ready to make your business more organized? Download Spend.In now!</p>
                    </div>
                    <div>
                        <button className="p-2 text-white bg-blue-500 rounded-full cursor-pointer">Get a Free Demo</button>
                    </div>
                </div>
                <div>
                    <Image 
                        src={call}
                        alt="call to action illustration"
                    />
                </div>
            </div>
        </div>
    )
}

export default CallToAction;