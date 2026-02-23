import { bancassuranceBenefitsSections } from "../api/mockData";

export function BenefitsOfBancassurance() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-[24px] px-4">
      {bancassuranceBenefitsSections.map((section) => (
        <div
          key={section.id}
          className={`w-full max-w-[730px] h-auto lg:h-[856px] ${section.bgColor} rounded-[35px] lg:px-[42px] px-6 py-[48px] flex flex-col`}
        >
          <div className="flex items-center gap-[10px] mb-[37px]">
            <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
              {section.icon}
            </div>
            <p className="font-bold text-[36px] leading-[32px] tracking-[0.02em]">
              {section.title}
            </p>
          </div>

          <img
            src={section.image}
            alt={section.title}
            className="h-[368px] object-cover rounded-[35px]"
          />

          <div className="flex flex-col gap-[12px] mt-[23px]">
            {section.points.map((point, index) => (
              <div key={index} className="flex items-start gap-[10px]">
                <span
                  className={`mt-2 w-[20px] h-[20px] rounded-full ${section.dotColor} flex-shrink-0 mt-[5px]`}
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
