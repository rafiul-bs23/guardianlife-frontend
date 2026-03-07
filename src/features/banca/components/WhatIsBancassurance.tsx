type WhatIsBancassuranceProps = {
  data: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    bullet_points: string[];
    footer: string;
  };
};

export function WhatIsBancassurance({ data }: WhatIsBancassuranceProps) {
  return (
    <div className="flex flex-col w-full text-[#534E4E] font-inter">
      <h3 className="font-bold text-xl lg:text-2xl text-[#1A1A1A] leading-tight mb-4">
        {data?.title}
      </h3>

      <div className="space-y-6 text-[#534E4E]">
        <p className="text-base lg:text-[18px] font-medium leading-relaxed">
          {data?.subtitle1}
        </p>

        <p className="text-base lg:text-[18px] font-medium leading-relaxed">
          {data?.subtitle2}
        </p>

        <div className="flex flex-col gap-5 mt-6">
          {data?.bullet_points?.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-[22px] h-[22px] rounded-full bg-[#EB6925] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6L5 8.5L9.5 3.5"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm lg:text-[16px] font-medium leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="text-base lg:text-[18px] font-medium leading-relaxed mt-8">
          {data?.footer}
        </p>
      </div>
    </div>
  );
}
