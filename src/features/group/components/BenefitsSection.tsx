import type { BenefitItem } from "../types";
import { MOCK_BENEFITS_DATA } from "../api/mockData";

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
const BenefitRow = ({ title, description }: Pick<BenefitItem, "title" | "description">) => (
  <div className="flex items-start gap-6 py-[14px]">
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
  </div>
);

/* ─── Section ─── */
const BenefitsSection = () => {
  const { header, image_url, benefits } = MOCK_BENEFITS_DATA;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-extrabold text-[20px] lg:text-[26px] uppercase leading-[1.3] tracking-[0.01em] text-gray-900">
            {header.title}
          </h2>
          <p className="mt-3 text-[14px] lg:text-[15px] text-gray-500 font-normal">
            {header.description}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Left — benefit items */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {benefits.map((item) => (
              <BenefitRow
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Right — image */}
          <div className="w-full lg:w-1/2">
            <img
              src={image_url}
              alt="Group insurance team"
              className="w-full h-auto lg:h-[500px] object-cover rounded-[20px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
