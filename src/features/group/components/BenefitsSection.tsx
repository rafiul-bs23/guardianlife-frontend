import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import type { BenefitItem } from "../types";
import { MOCK_BENEFITS_DATA } from "../api/mockData";
import Contentheader from "../../../shared/Components/Contentheader.tsx";
import { useIsMobile } from "../../../shared/hooks/useMediaQuery";

/* ─── Inline check icon ─── */
const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 7L5.5 10L11.5 4"
      stroke="#E8823A"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Single benefit row ─── */
const BenefitRow = ({ title, description, index }: Pick<BenefitItem, "title" | "description"> & { index: number }) => {
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      className="flex items-start gap-6 py-[14px]"
    >
      {/* Orange circle with check */}
      <div className="flex-shrink-0 w-[30px] h-[30px] rounded-full bg-[#FAEAE0] flex items-center justify-center mt-[2px]">
        <CheckIcon />
      </div>

      {/* Text */}
      <div>
        <p className="font-bold text-[14px] lg:text-[20px] leading-[22px] text-gray-900 mb-3">
          {title}
        </p>
        <p className="text-[18px] leading-[20px] text-gray-500 mt-[2px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

/* ─── Section ─── */
const BenefitsSection = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { image_url } = MOCK_BENEFITS_DATA;

  // Load benefits from translation
  const localizedBenefits = t('group:benefits_section.benefits', { returnObjects: true });
  const benefits = Array.isArray(localizedBenefits) ? (localizedBenefits as BenefitItem[]) : [];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Contentheader
            title={t('group:benefits_section.header.title')}
            description={t('group:benefits_section.header.description')}
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mt-10 lg:mt-14">

          {/* Left — benefit items */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {benefits.map((item: BenefitItem, index: number) => (
              <BenefitRow
                key={item.id}
                index={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <img
              src={image_url}
              alt="Group insurance team"
              className="w-full h-auto lg:h-[500px] object-cover rounded-[20px]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
