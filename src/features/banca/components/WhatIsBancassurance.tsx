type WhatIsBancassuranceProps = {
  data: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    bulletPoints: string[];
    footer: string;
  };
};

export function WhatIsBancassurance({ data }: WhatIsBancassuranceProps) {
  return (
    <div className="flex flex-col w-full text-[#534E4E]">
      <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
        {data.title}
      </p>

      <p className="font-medium text-[24px] leading-[29px] text-[#534E4E] mt-[14px]">
        {data.subtitle1}
      </p>

      <p className="font-medium text-[24px] leading-[29px] text-[#534E4E] mt-[20px]">
        {data.subtitle2}
      </p>

      <div className="flex flex-col gap-[35px] mt-[30px]">
        {data.bulletPoints.map((item, index) => (
          <div key={index} className="flex items-center gap-[12px]">
            <div className="w-[26px] h-[26px] rounded-full bg-[#E8823A] flex items-center justify-center flex-shrink-0">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M2.5 6.5L5.5 9.5L10.5 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-medium text-[20px] leading-[24px]">
              {item}
            </span>
          </div>
        ))}
      </div>

      <p className="font-medium text-[24px] leading-[29px] text-[#534E4E] mt-[40px]">
        {data.footer}
      </p>
    </div>
  );
}
