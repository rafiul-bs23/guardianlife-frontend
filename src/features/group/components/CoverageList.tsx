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
          className="bg-white rounded-[12px] px-[20px] py-[20px] shadow-[0_1px_6px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center gap-[10px] mb-[12px]">
            <div className="w-[28px] h-[28px] flex items-center justify-center">
              {item.icon}
            </div>
            <p className="font-bold text-[24px] leading-[32px] text-center tracking-[0.02em]">
              {item.title}
            </p>
          </div>
          <p className="font-normal text-[20px] leading-[32px] tracking-[0.02em]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
