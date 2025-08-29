"use client";

import { useState } from "react";
import groupe from "../../app/asserts/Group.png"
import Image from "next/image";

export default function BillingToggle() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        <span
          className={`text-sm font-bold ${
            !yearly ? "text-black" : "text-gray-400"
          }`}
        >
          Monthly
        </span>

        <button
          onClick={() => setYearly(!yearly)}
          className={`relative w-14 h-8 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
            yearly ? "bg-purple-600" : "bg-purple-400"
          }`}
        >
          <span
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
              yearly ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>

        <span
          className={`text-sm font-bold ${
            yearly ? "text-black" : "text-gray-400"
          }`}
        >
          Yearly
        </span>
      </div>

      {yearly && (
        <div className="flex items-center gap-2">
          <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-[13px] font-semibold">
            Save 65%
          </span>
          <Image 
            src={groupe}
            alt="groupe illustration"
          />
        </div>
      )}
    </div>
  );
}