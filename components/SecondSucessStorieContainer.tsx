import Image from "next/image";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import storie2 from "../app/asserts/success-stories2.png"
import ToggleSpendIn from "./ToggleSpendIn";

const SecondSucessStorieContainer = () => {
    return(
        <div className="flex justify-center items-start gap-4">
            <div className="flex flex-col justify-between items-start gap-4">
                <div className="flex flex-col gap-4">
                    <ToggleSpendIn />
                    <h4 className="text-black font-bold text-lg">Taking too long to tidy up administrative files makes it unproductive</h4>
                </div>
                <div className="flex justify-start items-start flex-col gap-4">
                    <div className="flex justify-start items-start gap-2">
                        <div>
                            <IoIosCloseCircleOutline className="bg-red-500 text-white rounded-full" />
                        </div>
                        <div>
                            <p className="text-sm">Complex recording process due to every administrative file in a different place.</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                        <div>
                            <IoIosCloseCircleOutline className="bg-red-500 text-white rounded-full" />
                        </div>
                        <div>
                            <p className="text-sm">Need more effort to pay manually one by one invoice because there is no payment accommodation.</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                        <div>
                            <IoIosCloseCircleOutline className="bg-red-500 text-white rounded-full" />
                        </div>
                        <div>
                            <p className="text-sm">Manual data arranging needs a long time because the different months/years are not in the same place.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image 
                    src={storie2}
                    alt="storie illustration"
                />
            </div>
        </div>
    )
}

export default SecondSucessStorieContainer;