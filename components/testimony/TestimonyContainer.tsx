"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import TestimonyCard from "./TestimonyCard";
import user1 from "../../app/asserts/user-1.png";
import user2 from "../../app/asserts/user-2.png";
import user3 from "../../app/asserts/user-3.png";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonies = [
  {
    declaration: "It’s just incredible!",
    text: "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    src: user1,
    userName: "Jimmy Bartney",
    description: "Product Manager at Picko Lab",
  },
  {
    declaration: "Satisfied User Here!",
    text: "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    src: user2,
    userName: "Natasha Romanoff",
    description: "Black Widow",
  },
  {
    declaration: "No doubt, Spend.In is the best!",
    text: "“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    src: user3,
    userName: "Moritika Kazuki",
    description: "Finance Manager at Mangan",
  },
  {
    declaration: "Back again incredible!",
    text: "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    src: user1,
    userName: "Jimmy Bartney",
    description: "Product Manager at Picko Lab",
  },
  {
    declaration: "Still satisfied!",
    text: "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    src: user2,
    userName: "Natasha Romanoff",
    description: "Black Widow",
  },
  {
    declaration: "No doubt encore!",
    text: "“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    src: user3,
    userName: "Moritika Kazuki",
    description: "Finance Manager at Mangan",
  },
];

const TestimonyContainer = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="md:max-w-6xl w-[90%] overflow-hidden px-4">
      <Slider ref={sliderRef} {...settings}>
        {testimonies.map((t, i) => (
          <div key={i} className="px-2">
            <TestimonyCard
              declaration={t.declaration}
              text={t.text}
              src={t.src}
              userName={t.userName}
              description={t.description}
            />
          </div>
        ))}
      </Slider>

      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="p-3 bg-gray-200 rounded-full hover:bg-purple-500 transition cursor-pointer hover:text-white"
        >
          <GrFormPreviousLink size={24} />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="p-3 bg-gray-200 rounded-full hover:bg-purple-500 transition cursor-pointer hover:text-white"
        >
          <GrFormNextLink size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonyContainer;