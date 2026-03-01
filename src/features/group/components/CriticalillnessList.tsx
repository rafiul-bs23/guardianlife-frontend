type Illness = {
  id: number;
  name: string;
};

export function CriticalIllnessList({ items }: { items: Illness[] }) {
  return (
    <div className="w-full">
      <p className="m-0 mb-[16px] text-[15px] font-bold text-[#1a1a2e]">
        Covered Critical Illnesses ({items.length}):
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="font-normal bg-white rounded-[8px] px-[14px] py-[10px] flex items-center text-[20px] leading-[32px] tracking-[0.02em] min-h-[67px] w-full"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}