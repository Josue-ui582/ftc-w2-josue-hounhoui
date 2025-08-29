import React, { ReactNode } from "react";

type TestimonyProps = {
    children : ReactNode;
}

const Testimony: React.FC<TestimonyProps> = ({children}) => {
    return(
        <div className="flex justify-center items-center bg-[#201822] md:py-10 py-6">
            <div className="flex flex-col justify-center items-center w-[90%] md:w-[70%] gap-4">{children}</div>
        </div>
    );
}

export default Testimony;