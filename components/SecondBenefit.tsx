import React, { ReactNode } from "react";

type SecondBenefitProps = {
    children : ReactNode;
}

const SecondBenefit:React.FC<SecondBenefitProps> = ({children}) => {
    return(
        <div className="flex gap-4 bg-white justify-center items-center">
            <div className="w-[70%] flex flex-col justify-center items-center gap-8">{children}</div>
        </div>
    )
}

export default SecondBenefit;