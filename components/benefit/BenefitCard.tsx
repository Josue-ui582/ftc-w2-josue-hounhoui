import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type BenefitContainerProps = {
    title : string;
    text : string;
    src : StaticImageData
}

const BenefitCard: React.FC<BenefitContainerProps> = ({title, text, src}) => {
    return(
        <div className="flex flex-col justify-between gap-4">
            <div className="md:w-[300px]">
                <Image 
                    src={src}
                    alt=""
                />
            </div>
            <div>
                <h4 className="text-black font-bold text-lg">{title}</h4>
                <p className="text-gray-500 text-[13px] mt-1">{text}</p>
            </div>
        </div>
    )
}

export default BenefitCard;