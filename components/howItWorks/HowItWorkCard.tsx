import React from "react";
import Image, { StaticImageData } from "next/image";

type HowItWorkCardPrpos = {
    src : StaticImageData;
    text : string;
    number : number;
}

const HowItWorkCard: React.FC<HowItWorkCardPrpos> = ({src, text, number}) => {
    return(
        <div className="relative">
            <div className="flex flex-col justify-center items-center gap-4 text-center">
                <Image 
                    src={src}
                    alt=""
                />
                <div>
                    <p className=" text-white text-[14px]">{text}</p>
                </div>
            </div>
            <div className="absolute w-[30px] h-[30px] bg-blue-500 -top-2 left-2 text-white rounded-full text-center font-semibold border-[#201822] border-4 text-[14px]">{number}</div>
        </div>
    )
}

export default HowItWorkCard;