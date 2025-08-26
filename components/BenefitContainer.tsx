import React from "react";
import Image from "next/image";
import BenefitCard from "./BenefitCard";
import invoice1 from "../app/asserts/Invoice 1.png"
import invoice2 from "../app/asserts/Invoice2.png"
import invoice3 from "../app/asserts/Invoice3.png"
import check from "../app/asserts/verified.png"

const BenefitContainer = () => {
    return(
        <div className="flex gap-4 relative">
            <BenefitCard 
                src={invoice1}
                title="Automatic Invoice Payment"
                text="No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!"
            />
            <BenefitCard 
                src={invoice2}
                title="Clear payment history"
                text="Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!"
            />
            <BenefitCard 
                src={invoice3}
                title="Use of multi-card payments"
                text="Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!"
            />
            <div className="absolute flex gap-1 justify-center items-center p-2 rounded-full top-14 left-44 bg-white">
                <Image
                    src={check}
                    alt="verified"
                />
                <p className="text-black font-semibold text-[14px]">Verified</p>
            </div>
        </div>
    )
}

export default BenefitContainer;