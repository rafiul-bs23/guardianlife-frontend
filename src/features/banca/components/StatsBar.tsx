type StatItem = {
  id: number;
  value: string;
  label: string;
};

const stats: StatItem[] = [
  { id: 1, value: "1,000+", label: "Life Coverage Policies Issued" },
  { id: 2, value: "500+", label: "Claims Successfully Settled" },
  { id: 3, value: "Trusted", label: "by Leading Banks & FIs" },
  { id: 4, value: "Fast", label: "& Transparent Claim Process" },
  { id: 5, value: "Dedicated", label: "Bancassurance Support Team" },
];

export function StatsBar() {
  return (
    <div className="w-full bg-[#EAF0FB] rounded-[12px] px-4 lg:px-[32px] py-[20px] flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-4 md:justify-evenly">
      {stats.map((item) => (
        <div key={item.id} className="flex items-center gap-[0px]">
          <div className="flex flex-col items-center text-center px-[24px]">
            <span className="text-[30px] font-bold text-[#3B6FD4] leading-[1.3]">
              {item.value}
            </span>
            <span className="text-[20px] text-[#555555] leading-[1.5] max-w-[250px] mt-[4px]">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
