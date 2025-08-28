import React from "react";
import HowItWorkCard from "./HowItWorkCard";
import who1 from "../../app/asserts/who1.png"
import who2 from "../../app/asserts/who2.png"
import who3 from "../../app/asserts/who3.png"

const HowItWorkCardContainer = () => {
    return(
        <div className="flex justify-center items-center gap-24">
            <HowItWorkCard 
                src={who1}
                text="Register your Spend.In account."
                number={1}
            />
            <HowItWorkCard 
                src={who2}
                text="Fill in the list of your business expenses."
                number={2}
            />
            <HowItWorkCard 
                src={who3}
                text="Done, let’s continue the work."
                number={3}
            />
        </div>
    )
}

export default HowItWorkCardContainer;