import { useLayoutEffect, useRef, useState } from "react";
import Button from "./Button";

/* ─── span pattern: rows [2,1] [1,1,1] [1,2] [1,1,1] ─── */
const SPAN_PATTERN = [2, 1, 1, 1, 1, 1, 2, 1, 1, 1];

export interface PartnerItem {
  id: number;
  name: string;
  logo: string;
}

interface LogoGridProps {
  partners: PartnerItem[];
  rowHeight: number | null;
}

interface LogoCardProps {
  logo: string;
  name: string;
}

export interface PartnersBannerProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonTo: string;
  partners: PartnerItem[];
  reversed?: boolean;
  maxWidth?: string;
}

/* ─── Logo grid ─── */
const LogoGrid = ({ partners, rowHeight }: LogoGridProps) => (
  <div
    className="grid grid-cols-3 gap-2 h-full"
    style={rowHeight ? { gridTemplateRows: `repeat(4, ${rowHeight}px)` } : undefined}
  >
    {partners.map((partner, index) => (
      <div
        key={partner.id}
        className={SPAN_PATTERN[index] === 2 ? "col-span-2" : "col-span-1"}
      >
        <LogoCard logo={partner.logo} name={partner.name} />
      </div>
    ))}
  </div>
);

/* ─── Logo card ─── */
const LogoCard = ({ logo, name }: LogoCardProps) => (
  <div className="bg-white border border-gray-100 flex items-center justify-center h-full p-4 hover:border-gray-300 transition-colors duration-200">
    <img
      src={logo}
      alt={name}
      className="max-h-14 max-w-[70%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
    />
  </div>
);

/* ─── PartnersBanner ─── */
const PartnersBanner = ({
  image,
  imageAlt,
  title,
  description,
  buttonLabel,
  buttonTo,
  partners,
  reversed = false,
  maxWidth,
}: PartnersBannerProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [rowHeight, setRowHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      if (gridRef.current) {
        const h = gridRef.current.getBoundingClientRect().height;
        setRowHeight((h - 24) / 4); // 3 gaps × 8px = 24
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className={maxWidth ? `mx-auto w-full ${maxWidth} overflow-hidden` : "overflow-hidden"}>
      <div className={`flex flex-col bg-[#f4f4f4] ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>

        {/* ── Content: image + text ── */}
        <div className="w-full lg:w-1/2 flex flex-col">

          {/* Image — rounded corners face the grid side */}
          <div
            className={`overflow-hidden rounded-[32px] lg:rounded-none mx-4 lg:mx-0 ${reversed
              ? "lg:rounded-tl-[32px] lg:rounded-bl-[32px] !ml-12"
              : "lg:rounded-tr-[32px] lg:rounded-br-[32px] !mr-12"
              }`}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-[300px] lg:h-[360px] object-cover"
            />
          </div>

          {/* Text block — padding mirrors to push text away from the outer edge */}
          <div
            className={`flex flex-col gap-5 px-6 pt-8 pb-10 ${reversed ? "lg:pr-[100px] lg:pl-16" : "lg:pl-[100px] lg:pr-16"
              }`}
          >
            <h2 className="font-bold text-[18px] lg:text-[22px] leading-[1.45] tracking-[0.02em] uppercase text-[#F37021]">
              {title}
            </h2>

            <p className="text-gray-500 text-[12px] lg:text-[13px] leading-[2] tracking-[0.04em] uppercase whitespace-pre-line">
              {description}
            </p>

            <div>
              <Button label={buttonLabel} variant="solid-orange" to={buttonTo} />
            </div>
          </div>
        </div>

        {/* ── Grid — flush to outer edge ── */}
        <div
          ref={gridRef}
          className={`w-full lg:w-1/2 p-4 self-stretch ${reversed ? "lg:py-0 lg:pl-0" : "lg:py-0 lg:pr-0"
            }`}
        >
          <LogoGrid partners={partners} rowHeight={rowHeight} />
        </div>

      </div>
    </div>
  );
};

export default PartnersBanner;
