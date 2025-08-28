"use client";
import { useState } from "react";

export default function ToggleSpendIn() {
  const [active, setActive] = useState<"with" | "without">("with");

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1 w-fit">
      <button
        onClick={() => setActive("with")}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer
          ${
            active === "with"
              ? "bg-blue-500 text-white shadow"
              : "bg-transparent text-gray-400 hover:text-gray-600"
          }`}
      >
        With Spend.In
      </button>

      <button
        onClick={() => setActive("without")}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer
          ${
            active === "without"
              ? "bg-purple-500 text-white shadow"
              : "bg-transparent text-gray-400 hover:text-gray-600"
          }`}
      >
        Without Spend.In
      </button>
    </div>
  );
}