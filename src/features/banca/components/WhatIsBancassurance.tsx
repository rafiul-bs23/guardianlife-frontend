const checkItems: string[] = [
  "Protect Customers And Their Families Against Financial Uncertainty",
  "Mitigate Credit Risk Arising From Death, Disability, Or Critical Illness",
  "Strengthen Long-Term Customer Relationships",
];

export function WhatIsBancassurance() {
  return (
    <div className="flex flex-col w-full text-[#534E4E]">
      <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
        What Is Bancassurance?
      </p>

      <p className="font-medium text-[24px] leading-[29px] text-[#534E4E] mt-[14px]">
        Bancassurance Is A Strategic Collaboration Between Banks And Life
        Insurance Companies That Enables Banks To Offer Insurance Solutions
        Through Their Existing Distribution Channels.
      </p>

      <p className="font-medium text-[24px] leading-[29px] text-[#534E4E] mt-[20px]">
        This Partnership Enhances Traditional Banking Products By Embedding Life
        Insurance Coverage, Helping To:
      </p>

      <div className="flex flex-col gap-[35px] mt-[30px]">
        {checkItems.map((item, index) => (
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
        When Implemented With The Right Strategy And Operational Excellence,
        Bancassurance Creates A Win-Win Ecosystem For Customers, Banks, And
        Insurers Alike.
      </p>
    </div>
  );
}
