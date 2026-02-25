import { useState } from "react";



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

const BenefitItem = ({ title, description }: { title: string, description: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-start gap-[16px] px-[20px] py-[18px] rounded-[12px] transition-all duration-300 cursor-default ${hovered
          ? "bg-white shadow-[0_4px_20px_rgba(232,130,58,0.1)]"
          : "bg-transparent"
        }`}
    >
      {/* Icon Circle */}
      <div
        className={`flex-shrink-0 w-[38px] h-[38px] rounded-full flex items-center justify-center mt-[2px] transition-colors duration-300 ${hovered ? "bg-[#FDEBD8]" : "bg-[#FAEAE0]"
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

export default function BenefitsList({ items }: { items: { id: number; title: string; description: string }[] }) {
  return (
    <div className="w-full flex flex-col gap-[4px]">
      {items.map((item) => (
        <BenefitItem
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
