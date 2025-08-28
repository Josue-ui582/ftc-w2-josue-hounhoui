import React, { ReactNode } from "react";

type SucessStorieProps = {
    children : ReactNode;
}

const SucessStorie: React.FC<SucessStorieProps> = ({children}) => {
    return(
        <div className="flex justify-center items-center py-20">
            <div className="w-[70%] flex flex-col gap-5">{children}</div>
        </div>
    )
}

export default SucessStorie;