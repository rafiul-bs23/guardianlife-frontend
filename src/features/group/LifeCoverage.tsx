type LifeCoverageType = {
  id: number;
  title: string;
  description: string;
};

export function LifeCoverage({ items }: { items: LifeCoverageType[] }) {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`rounded-[12px] px-[20px] py-[20px] ${
            index % 2 === 0 ? "bg-[#F5DBCB]" : "bg-[#DADAE4]"
          }`}
        >
          <p className="font-bold text-[24px] leading-[32px] text-center tracking-[0.02em]">
            {item.title}
          </p>
          <p className="font-normal text-[20px] leading-[32px] tracking-[0.02em]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}