import React, { ReactNode } from "react";

type PricingProps = {
    children : ReactNode;
}

const Pricing: React.FC<PricingProps> = ({children}) => {
    return(
        <div className="flex justify-center items-center bg-white">
            <div className="flex flex-col justify-center items-center w-[70%] py-20 gap-4">{children}</div>
        </div>
    )
}

export default Pricing;