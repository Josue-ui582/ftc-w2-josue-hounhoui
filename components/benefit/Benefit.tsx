import React, { ReactNode } from "react";

type BenefitProps = {
    children : ReactNode;
}

const Benefit: React.FC<BenefitProps> = ({children}) => {
    return (
        <div className="flex justify-center items-center bg-white">
            <div className="flex flex-col justify-center items-start w-[70%] py-16 gap-4">{children}</div>
        </div>
    )
}

export default Benefit;