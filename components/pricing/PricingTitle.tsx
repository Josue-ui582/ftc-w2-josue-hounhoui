import React from "react";
import BillingToggle from "./BillingToggle";

const PricingTitle = () => {
    return(
        <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h2 className="text-xl text-black font-bold text-center">Ready to Get Started?</h2>
                <p className="text-sm text-gray-400 text-center">Choose a plan that suits your business needs</p>
            </div>
            <div>
                <div>
                    <BillingToggle />
                </div>
            </div>
        </div>
    )
}

export default PricingTitle;