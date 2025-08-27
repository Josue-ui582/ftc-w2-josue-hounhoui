import Image from "next/image";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import storie from "../app/asserts/success-stories.png"
import ToggleSpendIn from "./ToggleSpendIn";

const SucessStorieContainer = () => {
    return(
        <div className="flex justify-center items-start gap-4">
            <div className="flex flex-col justify-between items-start gap-4">
                <div className="flex flex-col gap-4">
                    <ToggleSpendIn />
                    <h4 className="text-black font-bold text-lg">Track Business Expenses until its Milisecond</h4>
                </div>
                <div className="flex justify-start items-start flex-col gap-4">
                    <div className="flex justify-start items-start gap-2">
                        <div>
                            <CiCircleCheck className="bg-green-500 text-white rounded-full" />
                        </div>
                        <div>
                            <p className="text-sm">Analyze your business cost easily with group transaction thorugh tagging feature.</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                        <div>
                            <CiCircleCheck className="bg-green-500 text-white rounded-full" />
                        </div>
                        <div>
                            <p className="text-sm">Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                        <div>
                            <CiCircleCheck className="bg-green-500 text-white rounded-full" />
                        </div>
                        <div>
                            <p className="text-sm">Arrange your business expenses by date, name, etc., with just one click.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image 
                    src={storie}
                    alt="storie illustration"
                />
            </div>
        </div>
    )
}

export default SucessStorieContainer;