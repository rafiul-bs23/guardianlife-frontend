import { bancassuranceProductSections } from "../api/mockData";

export function BancassuranceProductSolutions() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8 lg:gap-[24px]">
      {bancassuranceProductSections.map((section) => (
        <div
          key={section.id}
          className="w-full max-w-[470px] h-auto lg:h-[785px] bg-white rounded-[35px] px-6 lg:px-[42px] py-10 lg:py-[40px] flex flex-col
          border border-amber-300
          transition-all duration-300 ease-in-out
          hover:border-amber-500
          hover:shadow-[0px_20px_50px_rgba(0,0,0,0.08)]
          hover:-translate-y-1
          group"
        >

          <div className="items-center gap-[10px] mb-[37px]">
            <div className="w-[56px] h-[56px] rounded-2xl bg-[#FDE2D3] flex items-center justify-center flex-shrink-0">
              {section.icon}
            </div>
            <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em] mt-7">
              {section.title}
            </p>
          </div>

          <img
            src={section.image}
            alt={section.title}
            className="object-cover rounded-[20px] max-h-[257px]"
          />

          <div className="flex flex-col gap-[12px] mt-[23px]">
            {section.points.map((point, index) => (
              <div key={index} className="flex items-start gap-[10px]">
                <span
                  className="w-[10px] h-[10px] rounded-full bg-[var(--color-primary)] flex-shrink-0 mt-3"
                />
                <span className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
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
