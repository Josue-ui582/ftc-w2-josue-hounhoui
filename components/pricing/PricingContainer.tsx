import PricingCard from "./PricingCard";
import { RiHeartsFill } from "react-icons/ri";
import { FaCrown } from "react-icons/fa6";

const PricingCardContainer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full">
        <PricingCard
          icon={<RiHeartsFill />}
          title="Free"
          subtitle="Perfect plan to get started"
          price="$0"
          per="/month"
          description="A free plan grants you access to some cool features of Spend.In."
          features={[
            { label: "Sync accross device", included: true },
            { label: "5 workspace", included: true },
            { label: "Collaborate with 5 user", included: true },
            { label: "Sharing permission", included: false },
            { label: "Admin tools", included: false },
            { label: "100+ integrations", included: false },
          ]}
          buttonLabel="Get Your Free Plan"
        />

        <PricingCard
          icon={<FaCrown />}
          title="Pro"
          subtitle="Perfect plan for professionals!"
          price="$12"
          per="/month"
          description="For professional only! Start arranging your expenses with our best templates."
          features={[
            { label: "Everything in Free Plan", included: true },
            { label: "Unlimited workspace", included: true },
            { label: "Collaborative workspace", included: true },
            { label: "Sharing permission", included: true },
            { label: "Admin tools", included: true },
            { label: "100+ integrations", included: true },
          ]}
          buttonLabel="Get Started"
          popular
        />

        <PricingCard
          icon={<FaCrown />}
          title="Ultimate"
          subtitle="Best suits for great company!"
          price="$33"
          per="/month"
          description="If you a finance manager at big company, this plan is a perfect match."
          features={[
            { label: "Everything in Pro Plan", included: true },
            { label: "Daily performance reports", included: true },
            { label: "Dedicated assistant", included: true },
            { label: "Artificial intelligence", included: true },
            { label: "Marketing tools & automations", included: true },
            { label: "Advanced security", included: true },
          ]}
          buttonLabel="Get Started"
        />
      </div>
    </div>
  );
};

export default PricingCardContainer;