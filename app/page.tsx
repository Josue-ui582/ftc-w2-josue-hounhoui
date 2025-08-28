import Benefit from "@/components/benefit/Benefit";
import BenefitContainer from "@/components/benefit/BenefitContainer";
import BenefitTitle from "@/components/benefit/BenefitTitle";
import Header from "@/components/heroSection/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import Navbar from "@/components/heroSection/Navbar";
import SecondBenefit from "@/components/secondBenefit/SecondBenefit";
import SecondBenefitTitle from "@/components/secondBenefit/SecondBenefitTitle";
import SecondBenefitContainer from "@/components/secondBenefit/SecondBenefitContainer";
import HowItWork from "@/components/howItWorks/HowItWork";
import HowItWorkTitle from "@/components/howItWorks/HowItWorkTitle";
import HowItWorkCardContainer from "@/components/howItWorks/HowItWorkCardContainer";
import HowItWorkFooter from "@/components/howItWorks/HowItWorkFooter";
import HowItWork2 from "@/components/howItWorks/HowItWork2";
import SucessStorie from "@/components/sucessSection/SucessStorie";
import SucessTitle from "@/components/sucessSection/SucessTitle";
import SucessStorieContainer from "@/components/sucessSection/SucessStorieContainer";
import SecondSucessStorie from "@/components/sucessSection/SecondSuccesStorie";
import SecondSucessTitle from "@/components/sucessSection/SecondSucessTitle";
import SecondSucessStorieContainer from "@/components/sucessSection/SecondSucessStorieContainer";
import Testimony from "@/components/testimony/Testimony";
import TestimonyTitle from "@/components/testimony/TestimonyTitle";
import TestimonyContainer from "@/components/testimony/TestimonyContainer";

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

      <HowItWork2 />

      <SucessStorie>
        <SucessTitle />
        <SucessStorieContainer />
      </SucessStorie>

      <SecondSucessStorie>
        <SecondSucessTitle />
        <SecondSucessStorieContainer />
      </SecondSucessStorie>

      <Testimony>
        <TestimonyTitle />
        <TestimonyContainer />
      </Testimony>
    </>
  );
}