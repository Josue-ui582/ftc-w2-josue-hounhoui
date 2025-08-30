"use client";
import React from "react";
import TestimonyCard from "./TestimonyCard";
import { testimonies } from "../../data/testimony";

const TestimonyContainer = () => {
  return (
    <div className="max-w-full px-4 py-8">

      <div className="grid gap-6 grid-cols sm:grid-col lg:grid-cols-3">
        {testimonies.map((t, i) => (
          <TestimonyCard
            key={i}
            declaration={t.declaration}
            text={t.text}
            src={t.src}
            userName={t.userName}
            description={t.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonyContainer;
