import MainImage from "../../../assets/images/home/BusinessPartners/MainImage.jpg";
import ActionButton from "../../../shared/Components/BaseButton.tsx";
import { useLayoutEffect, useRef, useState } from "react";
import { partners } from "../api/mockData";
import type { LogoGridProps, LogoCardProps } from "./../types.ts";

const BusinessPartners = () => {

  const rightSectionRef = useRef<HTMLDivElement | null>(null);
  const [rowHeight, setRowHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (rightSectionRef.current) {
      const height = rightSectionRef.current.getBoundingClientRect().height;
      console.log("Right section height:", height);
      setRowHeight((height - 64) / 4);
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-gray-50 min-h-screen">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 px-4 lg:px-0">
        <div className="mb-8 rounded-[32px] lg:rounded-none lg:rounded-tr-[32px] lg:rounded-br-[32px] overflow-hidden">
          <img
            src={MainImage}
            alt="Business Partnership"
            className="w-full h-[445px] object-cover rounded-[32px] lg:rounded-none lg:rounded-tr-[32px] lg:rounded-br-[32px]"
          />
        </div>

        <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start lg:pl-[150px]">
          <p className="font-bold text-[36px] leading-[54px] tracking-[0.02em] uppercase text-[var(--color-primary)]">
            POWER UP YOUR BUSINESS WITH GUARDIAN LIFE INSURANCE.
          </p>

          <p className="text-[var(--color-text-secondary)] font-normal text-[28.8px] leading-[54px] tracking-[0.02em] uppercase">
            JOIN 450+ ORGANIZATIONS THAT TRUST US —<br />
            THE INDUSTRY LEADER IN GROUP COVERAGE.<br />
            THE BEST CHOICE TO PROTECT AND<br />
            EMPOWER YOUR EMPLOYEES.
          </p>

          <ActionButton
            text="Explore Opportunities"
            onClick={() => console.log("explore opportunities clicked")}
          />
        </div>
      </div>

      {/* Right Section */}
      <div ref={rightSectionRef} className="w-full lg:w-1/2 h-screen px-4 lg:pr-[200px]">
        <LogoGrid partners={partners} rowHeight={rowHeight} />
      </div>
    </div>
  );
};

const LogoGrid = ({ partners, rowHeight }: LogoGridProps) => {
  const spanPattern = [
    2, 1,
    1, 1, 1,
    1, 2,
    1, 1, 1,
  ];

  return (
    <div
      className="grid grid-cols-3 gap-4 h-full"
      style={
        rowHeight
          ? { gridTemplateRows: `repeat(4, ${rowHeight}px)` }
          : undefined
      }
    >
      {partners.map((partner, index) => (
        <div
          key={partner.id}
          className={spanPattern[index] === 2 ? "col-span-2" : "col-span-1"}
        >
          <LogoCard logo={partner.logo} name={partner.name} />
        </div>
      ))}
    </div>
  );
};

const LogoCard = ({ logo, name }: LogoCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-full">
      <img
        src={logo}
        alt={name}
        className="max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

export default BusinessPartners;
