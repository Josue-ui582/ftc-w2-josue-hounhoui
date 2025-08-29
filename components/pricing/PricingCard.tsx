import { FC, ReactNode } from "react";

type PricingCardProps = {
  icon : ReactNode;
  title: string;
  subtitle: string;
  price: string;
  per: string;
  description: string;
  features: { label: string; included: boolean }[];
  buttonLabel: string;
  popular?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({
  icon,
  title,
  subtitle,
  price,
  per,
  description,
  features,
  buttonLabel,
  popular = false,
}) => {
  return (
    <div className="flex flex-col rounded-2xl shadow-lg p-6 bg-gray-100 relative w-full max-w-sm">
      {popular && (
        <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded-md">
          Popular
        </span>
      )}

      <div className="flex gap-2 justify-start items-center">
        <div className="text-blue-500">{icon}</div>
        <h3 className="text-xl font-bold flex items-center gap-2">
        {title}
      </h3>
      </div>
      <p className="text-gray-500 mt-1">{subtitle}</p>

      <div className="mt-4 text-3xl font-bold">
        {price}
        <span className="text-base font-medium text-gray-500">{per}</span>
      </div>

      <p className="text-gray-500 text-sm mt-2">{description}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            {f.included ? (
              <button className="bg-green-400 text-white rounded-full px-[6px] py-[3px] text-[8px]">✔</button>
            ) : (
              <button className="bg-gray-700 text-white rounded-full px-[6px] py-[3px] text-[8px]">✖</button>
            )}
            <button className={f.included ? "text-gray-700" : "text-gray-400"}>
              {f.label}
            </button>
          </li>
        ))}
      </ul>

      <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-full transition cursor-pointer">
        {buttonLabel}
      </button>
    </div>
  );
};

export default PricingCard;