import { useTranslation } from "react-i18next";
import { bancassurance_benefits_sections } from "../api/mockData";

export function BenefitsOfBancassurance() {
  const { t } = useTranslation('banca');
  const sections = t('benefits.sections', { returnObjects: true }) as any[];

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-[24px] px-4">
      {sections?.map((section, index) => (
        <div
          key={index}
          className={`w-full max-w-[730px] h-auto lg:h-[856px] ${bancassurance_benefits_sections[index]?.bg_color} rounded-[35px] lg:px-[42px] px-6 py-[48px] flex flex-col`}
        >
          <div className="flex items-center gap-[10px] mb-[37px]">
            <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
              {bancassurance_benefits_sections[index]?.icon}
            </div>
            <p className="font-bold text-[36px] leading-[32px] tracking-[0.02em]">
              {section?.title}
            </p>
          </div>

          <img
            src={bancassurance_benefits_sections[index]?.image}
            alt={section?.title}
            className="h-[368px] object-cover rounded-[35px]"
          />

          <div className="flex flex-col gap-[12px] mt-[23px]">
            {section?.points?.map((point: string, idx: number) => (
              <div key={idx} className="flex items-start gap-[10px]">
                <span
                  className={`mt-2 w-[20px] h-[20px] rounded-full ${bancassurance_benefits_sections[index]?.dot_color} flex-shrink-0 mt-[5px]`}
                />
                <span className="font-normal text-[20px] leading-[32px] tracking-[0.02em]">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
