import React, { ReactNode } from "react";

type SucessStorieProps = {
    children : ReactNode;
}

const SucessStorie: React.FC<SucessStorieProps> = ({children}) => {
    return(
        <div className="flex justify-center items-center py-6 md:py-10">
            <div className="flex flex-col justify-start items-start w-[90%] md:w-[70%] py-16 md:gap-4 gap-8">{children}</div>
        </div>
    )
}

export default SucessStorie;