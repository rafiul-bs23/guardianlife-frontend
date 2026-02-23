import EmpoweringFamiliesImage from "../../../assets/images/home/EmpoweringFamilies/empoweringFamilies.jpg";
import BusinessPastner1 from "../../../assets/images/home/BusinessPartners/BusinessPartner1.png";
import ActionButton from "../../../shared/Components/BaseButton.tsx";
import { useLayoutEffect, useRef, useState } from "react";

import type { Partner, LogoGridProps, LogoCardProps } from "./../types.ts";

const EmpoweringFamilies = () => {
  const partners: Partner[] = [
    { id: 1, name: "Shanta", logo: BusinessPastner1 },
    { id: 2, name: "The Palace", logo: BusinessPastner1 },
    { id: 3, name: "BRAC", logo: BusinessPastner1 },
    { id: 4, name: "ICMAB", logo: BusinessPastner1 },
    { id: 5, name: "Meridian", logo: BusinessPastner1 },
    { id: 6, name: "BRAC", logo: BusinessPastner1 },
    { id: 7, name: "Shanta", logo: BusinessPastner1 },
    { id: 8, name: "BRAC", logo: BusinessPastner1 },
    { id: 9, name: "Meridian", logo: BusinessPastner1 },
    { id: 10, name: "Meridian2", logo: BusinessPastner1 },
  ];

  const rightSectionRef = useRef<HTMLDivElement | null>(null);
  const [rowHeight, setRowHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (rightSectionRef.current) {
      const height = rightSectionRef.current.getBoundingClientRect().height;
      console.log("Right section height:", height);
      setRowHeight((height-64) / 4);
    }
  }, []);

  console.log("row height:", rowHeight);

  return (
    <div className="flex gap-8 bg-gray-50 min-h-screen mt-[84px]">
      {/* Left Section */}
      <div ref={rightSectionRef} className="w-1/2 h-screen pl-[200px]">
        <LogoGrid partners={partners} rowHeight={rowHeight} />
      </div>
      {/* Right Section */}
      <div className="w-1/2 pr-[180px]">
        <div className="mb-8 rounded-tr-[32px] rounded-br-[32px]">
          <img
            src={EmpoweringFamiliesImage}
            alt="Empowering families"
            className="w-full h-[445px] object-cover rounded-tl-[32px] rounded-bl-[32px]"
          />
        </div>

        <div className="space-y-6 pr-[170px]">
          <p className="font-bold text-[36px] leading-[54px] tracking-[0.02em] uppercase text-[var(--color-primary)]">
            Empowering Families with Guardian Life Insurance
          </p>

          <p className="text-[var(--color-text-secondary)] font-normal text-[28.8px] leading-[54px] tracking-[0.02em] uppercase">
            Affordable protection for all — Our microinsurance partners with trusted NGOs to bring financial security to underserved communities.
          </p>

          <ActionButton
            text="Check Services"
            onClick={() => console.log("Check Services clicked")}
          />
        </div>
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

export default EmpoweringFamilies;