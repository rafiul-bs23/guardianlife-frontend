import { Dock, House, Banknote } from 'lucide-react';

type SolutionsSection = {
  id: number;
  icon: React.ReactNode;
  title: string;
  image: string;
  points: string[];
};

const sections: SolutionsSection[] = [
  {
    id: 1,
    icon: (
      <Dock
        size={30}
        className="text-[var(--color-primary)]"
      />
    ),
    title: "Credit Shield Products",
    image:
      "https://glilapi.guardianlife.com.bd/images/1725268173315-560204496-Early%20Cash.jpg",
    points: [
      "Coverage up to 200% of outstanding credit card balance",
      "Protection against natural death and permanent total disability",
      "Critical illness coverage",
      "Optional IPD and OPD health benefit",
    ],
  },
  {
    id: 2,
    icon: (
      <House
        size={30}
        className="text-[var(--color-primary)]"
      />
    ),
    title: "Mortgage / Home Loan",
    image:
      "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
    points: [
      "Protection of outstanding loan principal",
      "Coverage for natural death, accidental death and permanent total disability",
    ],
  },
  {
    id: 3,
    icon: (
      <Banknote
        size={30}
        className="text-[var(--color-primary)]"
      />
    ),
    title: "Personal Loan",
    image:
      "https://glilapi.guardianlife.com.bd/images/1725268173315-560204496-Early%20Cash.jpg",
    points: [
      "Loan repayment assurance in case of death or disability of the borrower",
    ],
  },
];

export function BancassuranceProductSolutions() {
  return (
    <div className="flex items-stretch justify-center gap-[24px]">
      {sections.map((section) => (
        <div
          key={section.id}
          className="w-[470px] h-[785px] bg-white rounded-[35px] px-[42px] py-[40px] flex flex-col
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
