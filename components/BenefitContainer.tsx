import React from "react";
import Image from "next/image";
import BenefitCard from "./BenefitCard";
import invoice1 from "../app/asserts/invoice1.png"
import invoice2 from "../app/asserts/invoice2.png"
import invoice3 from "../app/asserts/invoice3.png"

const BenefitContainer = () => {
    return(
        <div className="flex gap-4">
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
        </div>
    )
}

export default BenefitContainer;