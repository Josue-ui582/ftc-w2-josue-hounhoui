import React, { ReactNode } from "react";

type HowItWorkProps = {
    children : ReactNode;
}

const HowItWork: React.FC<HowItWorkProps> = ({children}) => {
    return(
        <div className="flex justify-center items-center bg-[#201822] py-10">
            <div className="md:w-[70%] w-[90%] flex flex-col justify-center items-center gap-8">{children}</div>
        </div>
    )
}

export default HowItWork;