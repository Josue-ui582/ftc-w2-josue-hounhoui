import Benefit from "@/components/Benefit";
import BenefitContainer from "@/components/BenefitContainer";
import BenefitTitle from "@/components/BenefitTitle";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SecondBenefit from "@/components/SecondBenefit";
import SecondBenefitTitle from "@/components/SecondBenefitTitle";
import SecondBenefitContainer from "@/components/SecondBenefitContainer";
import HowItWork from "@/components/HowItWork";
import HowItWorkTitle from "@/components/HowItWorkTitle";
import HowItWorkCardContainer from "@/components/HowItWorkCardContainer";
import HowItWorkFooter from "@/components/HowItWorkFooter";

export default function Home() {
  return (
    <>
      <HeroSection>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full border-[4rem] border-gray-800"></div>
          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gray-800 to-transparent blur-3xl"></div>
          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-gray-800 to-transparent blur-3xl"></div>
          <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full border-[4rem] border-gray-800"></div>
        </div>

        <Navbar />
        <Header />
      </HeroSection>

      <Benefit>
        <BenefitTitle />
        <BenefitContainer />
      </Benefit>

      <SecondBenefit>
        <SecondBenefitTitle />
        <SecondBenefitContainer />
      </SecondBenefit>

      <HowItWork>
        <HowItWorkTitle />
        <HowItWorkCardContainer />
        <HowItWorkFooter />
      </HowItWork>
    </>
  );
}