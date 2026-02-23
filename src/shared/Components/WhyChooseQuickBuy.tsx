import { Zap, Smartphone, Shield } from "lucide-react";

type Feature = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 1,
    icon: <Zap size={48} strokeWidth={2.5} className="text-[#FDB022]" />,
    title: "Instant Approval",
    description: "Get covered in minutes",
  },
  {
    id: 2,
    icon: <Smartphone size={48} strokeWidth={2.5} className="text-[#2C3E50]" />,
    title: "Digital Process",
    description: "100% paperless",
  },
  {
    id: 3,
    icon: <Shield size={48} strokeWidth={2.5} className="text-[#E74C3C]" />,
    title: "Immediate Coverage",
    description: "Protection starts now",
  },
];

export function WhyChooseQuickBuy() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[903px] w-full flex flex-col items-center gap-[20px] bg-white py-8">
        <h2 className="m-0 text-[32px] font-bold text-[#1a1a2e] text-center">
          Why Choose Quick Buy?
        </h2>

        <div className="flex items-start justify-between w-full gap-[40px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex-1 flex flex-col items-center text-center"
            >
              <div className="mb-[8px]">{feature.icon}</div>
              <h3 className="m-0 text-[22px] font-bold text-[#1a1a2e]">
                {feature.title}
              </h3>
              <p className="m-0 text-[18px] text-[#666666] leading-[1.6]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}