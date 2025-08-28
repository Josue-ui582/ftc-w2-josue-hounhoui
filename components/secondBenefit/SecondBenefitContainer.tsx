import React from "react";
import Image from "next/image";
import frame1 from "../../app/asserts/Frame-1.png"
import frame2 from "../../app/asserts/Frame-2.png"
import frame3 from "../../app/asserts/Frame-3.png"
import imageContainer from "../../app/asserts/Content.png"

const SecondBenefitContainer = () => {
    return(
        <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col gap-4">
                <div className="flex justify-center items-start gap-2">
                    <div>
                        <Image 
                            src={frame1}
                            alt="frame"
                        />
                    </div>
                    <div>
                        <h1 className="text-md font-bold text-black">Automatic Invoice Payment</h1>
                        <p className="text-gray-400 text-[13px] mt-2">Automatic payments help you to arrange payments on a certain date without doing it manually again.</p>
                    </div>
                </div>
                <div className="flex justify-center items-start gap-2">
                    <div>
                        <Image 
                            src={frame2}
                            alt="frame"
                            width={40}
                            height={40}
                        />
                    </div>
                    <div>
                        <h1 className="text-md font-bold text-black">Clear payment history</h1>
                        <p className="text-gray-400 text-[13px] mt-2">Clear payment history helps you to track your business expenses on specific dates.</p>
                    </div>
                </div>
                <div className="flex justify-center items-start gap-2">
                    <div>
                        <Image 
                            src={frame3}
                            alt="frame"
                        />
                    </div>
                    <div>
                        <h1 className="text-md font-bold text-black">Use of multi-card payments</h1>
                        <p className="text-gray-400 text-[13px] mt-2">Have more than one debit or credit card? Don't worry, we support payments using more than one card.</p>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src={imageContainer}
                    alt=""
                />
            </div>
        </div>
    )
}

export default SecondBenefitContainer;