import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, type Variants } from "framer-motion";
import { useIsMobile } from "../hooks/useMediaQuery";
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
  isInView: boolean;
  reversed: boolean;
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

const DISPLAY_COUNT = 10;
const LOGO_CHANGE_INTERVAL = 10000;

const pickRandom = (all: PartnerItem[], exclude: PartnerItem[]): PartnerItem[] => {
  if (all.length <= DISPLAY_COUNT) return all;
  const excludeIds = new Set(exclude.map((p) => p.id));
  const pool = all.filter((p) => !excludeIds.has(p.id));
  const source = pool.length >= DISPLAY_COUNT ? pool : all;
  return [...source].sort(() => Math.random() - 0.5).slice(0, DISPLAY_COUNT);
};

/* ─── Logo grid ─── */
const LogoGrid = ({ partners, rowHeight, isInView, reversed }: LogoGridProps) => {
  const [batch, setBatch] = useState<PartnerItem[]>(() => pickRandom(partners, []));
  const [batchKey, setBatchKey] = useState(0);

  useEffect(() => {
    if (partners.length <= DISPLAY_COUNT) return;
    const id = setInterval(() => {
      setBatch((prev) => pickRandom(partners, prev));
      setBatchKey((k) => k + 1);
    }, LOGO_CHANGE_INTERVAL);
    return () => clearInterval(id);
  }, [partners]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        staggerDirection: reversed ? -1 : 1,
        delayChildren: 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: reversed ? 1 : -1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: reversed ? -100 : 100, y: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0,
      x: reversed ? 60 : -60,
      transition: { duration: 0.22, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={batchKey}
        className="grid grid-cols-3 gap-2 h-full max-h-[100px]"
        style={rowHeight ? { gridTemplateRows: `repeat(4, ${rowHeight}px)` } : undefined}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="exit"
      >
        {batch.map((partner, index) => (
          <motion.div
            key={partner.id}
            className={SPAN_PATTERN[index] === 2 ? "col-span-2" : "col-span-1"}
            variants={itemVariants}
          >
            <LogoCard logo={partner.logo} name={partner.name} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Logo card ─── */
const LogoCard = ({ logo, name }: LogoCardProps) => (
  <div className="group bg-white border border-gray-100 flex items-center justify-center h-full p-4 overflow-hidden hover:border-gray-300 transition-colors duration-200">
    <img
      src={logo}
      alt={name}
      className="max-h-[70%] max-w-[70%] object-contain grayscale group-hover:grayscale-0 group-hover:scale-[1.2] transition-all duration-300"
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
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [rowHeight, setRowHeight] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const isInView = useInView(containerRef, { once: true, amount: isMobile ? 0.06 : 0.2 });

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

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: reversed ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8 // After logo section starts appearing
      }
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: reversed ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 1.3 // After image starts appearing
      }
    },
  };

  return (
    <div
      ref={containerRef}
      className={maxWidth ? `mx-auto w-full ${maxWidth} overflow-hidden` : "overflow-hidden"}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`flex flex-col bg-[#f4f4f4] ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >

        {/* ── Content: image + text ── */}
        <div className="w-full lg:w-1/2 flex flex-col">

          {/* Image — rounded corners face the grid side */}
          <motion.div
            variants={imageVariants}
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
          </motion.div>

          {/* Text block — padding mirrors to push text away from the outer edge */}
          <motion.div
            variants={textVariants}
            className={`flex flex-col gap-5 px-6 pt-8 pb-10 ${reversed ? "lg:pr-[100px] lg:pl-16" : "lg:pl-[100px] lg:pr-16"
              }`}
          >
            <h2 className="font-bold text-[18px] lg:text-[26px] leading-[1.45] tracking-[0.02em] uppercase text-[#F37021]">
              {title}
            </h2>

            <p className="text-gray-500 text-[12px] lg:text-[23px] leading-[2] tracking-[0.04em] uppercase whitespace-pre-line">
              {description}
            </p>

            <div>
              <Button label={buttonLabel} variant="solid-orange" to={buttonTo} />
            </div>
          </motion.div>
        </div>

        {/* ── Grid — flush to outer edge ── */}
        <div
          ref={gridRef}
          className={`w-full lg:w-1/2 p-4 self-stretch ${reversed ? "lg:py-0 lg:pl-0" : "lg:py-0 lg:pr-0"
            }`}
        >
          <LogoGrid partners={partners} rowHeight={rowHeight} isInView={isInView} reversed={reversed} />
        </div>

      </motion.div>
    </div>
  );
};

export default PartnersBanner;
