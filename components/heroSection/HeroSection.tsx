import React, { ReactNode } from "react";

type HeroSectionProps = {
  children: ReactNode;
};

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return <div className="relative w-full h-screen bg-[#201822] overflow-hidden">{children}</div>;
};

export default HeroSection;