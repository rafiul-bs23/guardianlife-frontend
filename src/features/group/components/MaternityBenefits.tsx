type MaternityItem = {
  id: number;
  label: string;
};



export function MaternityBenefits({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: MaternityItem[];
}) {
  return (
    <div className="w-full">
      <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
        {title}
      </p>
      <p className="font-normal text-[20px] leading-[32px] tracking-[0.02em] mt-[24px]">
        {description}
      </p>
      <div className="flex flex-col gap-[14px] mt-[38px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[10px] px-[16px] py-[14px] flex items-center gap-[12px]"
          >
            <span className="w-[20px] h-[20px] rounded-full bg-[#E8823A] flex-shrink-0" />
            <span className="font-normal text-[20px] leading-[32px] tracking-[0.02em]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}