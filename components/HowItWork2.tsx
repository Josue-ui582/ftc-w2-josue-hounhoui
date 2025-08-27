import Image from "next/image";
import React from "react";
import content from "../app/asserts/content.png"
import stepper from "../app/asserts/Stepper.png"

const HowItWork2 = () => {
    return(
        <div className="flex justify-center items-center bg-[#201822]">
            <div className="grid grid-cols-2 gap-6 w-[70%] py-20 items-stretch">
                <div>
                    <Image
                        src={content}
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start justify-start gap-4">
                        <h4 className="text-blue-500 uppercase text-lg font-semibold text-[15px]">Howitworks</h4>
                        <h1 className="font-bold text-xl text-white">FewEasyStepsandDone</h1>
                        <p className="text-gray-400 text-sm leading-relaxed">In just few easy step, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.</p>
                    </div>
                    <div className="mt-6">
                        <Image
                            src={stepper}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork2;