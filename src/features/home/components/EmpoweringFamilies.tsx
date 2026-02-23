import EmpoweringFamiliesImage from "../../../assets/images/home/EmpoweringFamilies/empoweringFamilies.jpg";
import ActionButton from "../../../shared/Components/BaseButton.tsx";
import { useLayoutEffect, useRef, useState } from "react";
import { partners } from "../api/mockData";
import type { Partner } from "../api/mockData";

type LogoGridProps = {
  partners: Partner[];
  rowHeight: number | null;
};

type LogoCardProps = {
  logo: string;
  name: string;
};

const EmpoweringFamilies = () => {

  const rightSectionRef = useRef<HTMLDivElement | null>(null);
  const [rowHeight, setRowHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (rightSectionRef.current) {
      const height = rightSectionRef.current.getBoundingClientRect().height;
      console.log("Right section height:", height);
      setRowHeight((height - 64) / 4);
    }
  }, []);

  console.log("row height:", rowHeight);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8 bg-gray-50 lg:min-h-screen mt-[84px] px-4 xl:px-0">
      {/* Left Section */}
      <div ref={rightSectionRef} className="w-full lg:w-1/2 h-screen lg:pl-[200px]">
        <LogoGrid partners={partners} rowHeight={rowHeight} />
      </div>
      {/* Right Section */}
      <div className="w-full lg:w-1/2 lg:pr-[180px]">
        <div className="mb-8 rounded-[32px] lg:rounded-none lg:rounded-tr-[32px] lg:rounded-br-[32px] overflow-hidden">
          <img
            src={EmpoweringFamiliesImage}
            alt="Empowering families"
            className="w-full h-[445px] object-cover rounded-tl-[32px] rounded-bl-[32px]"
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