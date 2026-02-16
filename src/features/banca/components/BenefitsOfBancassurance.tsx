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
    <div className="flex items-stretch justify-center gap-[24px]">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`w-[730px] h-[856px] ${section.bgColor} rounded-[35px] px-[42px] py-[48px] flex flex-col`}
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
