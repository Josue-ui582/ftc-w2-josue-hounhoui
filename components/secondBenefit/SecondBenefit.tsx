import React, { ReactNode } from "react";

type SecondBenefitProps = {
    children : ReactNode;
}

const SecondBenefit:React.FC<SecondBenefitProps> = ({children}) => {
    return(
        <div className="flex gap-4 bg-white justify-center items-center">
            <div className="flex flex-col md:justify-center md:items-center justify-start items-start w-[90%] md:w-[70%] py-16 gap-4">{children}</div>
        </div>
    )
}

export default SecondBenefit;