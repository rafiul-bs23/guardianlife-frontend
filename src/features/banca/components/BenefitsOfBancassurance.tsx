type BenefitSection = {
  id: number;
  icon: React.ReactNode;
  title: string;
  image: string;
  dotColor: string;
  bgColor: string;
  points: string[];
};

const sections: BenefitSection[] = [
  {
    id: 1,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1L10 6H15L11 9.5L12.5 15L8 11.5L3.5 15L5 9.5L1 6H6L8 1Z"
          fill="#E8823A"
        />
      </svg>
    ),
    title: "Benefits for Bank's Customers",
    image:
      "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
    dotColor: "bg-[#E8823A]",
    bgColor: "bg-[#F5E6DC]",
    points: [
      "Protects families from the burden of loan repayment after the borrower's death",
      "Financial relief during permanent disability or severe health conditions",
      "Health coverage as an add-on benefit with life protection",
      "Peace of mind with minimal effort and maximum security",
    ],
  },
  {
    id: 2,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="#4CAF82" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="3" fill="#4CAF82" />
      </svg>
    ),
    title: "Benefits for Banks",
    image:
      "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
    dotColor: "bg-[#3B6FD4]",
    bgColor: "bg-[#E8EDF5]",
    points: [
      "Increased revenue through insurance sales with minimal investment risk",
      "Reduced credit risk exposure in mortgage, personal, SME loans, and credit cards",
      "Better utilization of existing branches and sales channels",
      "Motivated workforce through commission and incentive opportunities",
      "Enhanced attractiveness of existing banking products",
    ],
  },
];

export function BenefitsOfBancassurance() {
  return (
    <div className=" items-stretch gap-[24px]">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`w-[730px] h-[856px] ${section.bgColor} rounded-[35px] px-[24px] py-[24px] flex flex-col gap-[20px]`}
        >
          <div className="flex items-center gap-[10px]">
            <div className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
              {section.icon}
            </div>
            <h3 className="m-0 text-[18px] font-bold text-[#1a1a2e]">
              {section.title}
            </h3>
          </div>

          <img
            src={section.image}
            alt={section.title}
            className="w-[645px] h-[368px] object-cover rounded-[35px] mx-[42px]"
          />

          <div className="flex flex-col gap-[12px]">
            {section.points.map((point, index) => (
              <div key={index} className="flex items-start gap-[10px]">
                <span
                  className={`w-[10px] h-[10px] rounded-full ${section.dotColor} flex-shrink-0 mt-[5px]`}
                />
                <span className="text-[13px] text-[#333333] leading-[1.6]">
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
