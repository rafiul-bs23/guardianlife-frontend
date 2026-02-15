import { useState } from "react";

const benefits = [
  {
    id: 1,
    title: "Enhances Employee Loyalty and Retention",
    description:
      "Build stronger relationships with your workforce through comprehensive benefits that show you care about their well-being.",
  },
  {
    id: 2,
    title: "Demonstrates Organizational Commitment",
    description:
      "Show your dedication to employee well-being and create a positive workplace culture that attracts top talent.",
  },
  {
    id: 3,
    title: "Reduces Financial Stress",
    description:
      "Provide peace of mind during medical or life emergencies, allowing employees to focus on their work and recovery.",
  },
  {
    id: 4,
    title: "Strengthens Employer Branding",
    description:
      "Enhance your corporate governance and reputation as a responsible employer in the marketplace.",
  },
  {
    id: 5,
    title: "Cost-Effective Coverage",
    description:
      "Offer comprehensive protection at lower costs compared to individual insurance policies, maximizing your benefits budget.",
  },
];

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8L6.5 11.5L13 5"
      stroke="#E8823A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BenefitItem = ({ title, description }:{title:string, description:string}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-start gap-[16px] px-[20px] py-[18px] rounded-[12px] transition-all duration-300 cursor-default ${
        hovered
          ? "bg-white shadow-[0_4px_20px_rgba(232,130,58,0.1)]"
          : "bg-transparent"
      }`}
    >
      {/* Icon Circle */}
      <div
        className={`flex-shrink-0 w-[38px] h-[38px] rounded-full flex items-center justify-center mt-[2px] transition-colors duration-300 ${
          hovered ? "bg-[#FDEBD8]" : "bg-[#FAEAE0]"
        }`}
      >
        <CheckIcon />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-[4px]">
        <p className="font-extrabold text-[20px] leading-[28px] tracking-[0.02em]">
          {title}
        </p>
        <p className="font-normal text-[20px] leading-[28px] tracking-[0.02em]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function BenefitsList() {
  return (
      <div className="w-full flex flex-col gap-[4px]">
        {benefits.map((item) => (
          <BenefitItem
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
  );
}
