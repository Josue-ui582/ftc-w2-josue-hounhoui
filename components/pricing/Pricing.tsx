import React, { ReactNode } from "react";

type PricingProps = {
    children : ReactNode;
}

const Pricing: React.FC<PricingProps> = ({children}) => {
    return(
        <div className="flex justify-center items-center bg-white">
            <div className="flex flex-col justify-center items-center w-[90%] md:w-[70%] md:py-10 py-6 gap-4">{children}</div>
        </div>
    )
}

export default Pricing;