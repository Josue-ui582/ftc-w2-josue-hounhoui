import React, { ReactNode } from "react";

type TestimonyProps = {
    children : ReactNode;
}

const Testimony: React.FC<TestimonyProps> = ({children}) => {
    return(
        <div className="flex justify-center items-center bg-[#201822] py-20">
            <div className="w-[70%] flex flex-col gap-4 items-center justify-center">{children}</div>
        </div>
    )
}

export default Testimony;