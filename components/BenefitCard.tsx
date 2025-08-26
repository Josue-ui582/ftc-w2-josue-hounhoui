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
        <div className="relative flex flex-col overflow-hidden gap-4">
            <div className="w-[290px] h-[332px] rounded-lg bg-gray-200"></div>
            <Image 
                src={src}
                alt="invoice"
                className="absolute top-8 left-0 w-[250px] h-[300px]"
            />
            <div>
                <h4 className="text-black font-bold text-lg">{title}</h4>
                <p className="text-gray-500 text-[13px] mt-1">{text}</p>
            </div>
        </div>
    )
}

export default BenefitCard;