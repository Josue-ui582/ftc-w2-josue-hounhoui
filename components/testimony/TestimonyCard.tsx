import React from "react";
import Image, { StaticImageData } from "next/image";

type TestimonyContainerProps = {
    declaration : string;
    text : string;
    src : StaticImageData;
    userName : string;
    description : string
}

const TestimonyCard: React.FC<TestimonyContainerProps> = ({declaration, text, src, userName, description}) => {
    return(
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col gap-4 justify-between items-start">
            <div className="flex flex-col justify-between">
                <h4 className="text-md text-white font-medium">{declaration}</h4>
                <p className="text-white text-sm">{text}</p>
            </div>
            <div className="bg-gray-500 h-[1px] w-full"></div>
            <div className="flex gap-4">
                <div>
                    <Image 
                        src={src}
                        alt={userName}
                    />
                </div>
                <div>
                    <h4 className="text-white font-bold text-md">{userName}</h4>
                    <p className="text-gray-300 text-sm">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonyCard;