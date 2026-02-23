import { bankPartners } from "../api/mockData";

export function BankPartners() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-[59px] w-full px-4 lg:px-0">
      {bankPartners.map((partner) => (
        <div
          key={partner.id}
          className="w-[150px] h-[150px] sm:w-[246px] sm:h-[252px] bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center justify-center"
        >
          <img
            src={partner.logo}
            alt={partner.alt}
            className="max-w-[100px] max-h-[80px] sm:max-w-[180px] sm:max-h-[120px] object-contain"
          />
        </div>
      ))}
    </div>
  );
}
