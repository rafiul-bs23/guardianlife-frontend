type CoverageItem = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function CoverageList({ items }: { items: CoverageItem[] }) {
  return (
    <div className="flex flex-col gap-[16px] w-full lg:pr-[211px]">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-[12px] px-[20px] py-[20px] shadow-[0_1px_6px_rgba(0,0,0,0.08)] flex items-start gap-[12px]"
        >
          <div className="w-[32px] h-[32px] flex flex-shrink-0 items-center justify-center bg-[#f5dbcb] rounded-full">
            {item.icon}
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em] mb-[8px]">
              {item.title}
            </p>
            <p className="font-normal text-[20px] leading-[32px] tracking-[0.02em]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
