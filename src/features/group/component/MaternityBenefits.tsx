type MaternityItem = {
  id: number;
  label: string;
};

const maternityItems: MaternityItem[] = [
  { id: 1, label: "Normal Delivery" },
  { id: 2, label: "Caesarean / Ectopic / Extra-uterine Pregnancy" },
  { id: 3, label: "Legal Abortion or Miscarriage" },
];

export function MaternityBenefits() {
  return (
    <div className="w-full">
      <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
        Supporting Employees During Life's Important Moments
      </p>
      <p className="font-normal text-[20px] leading-[32px] tracking-[0.02em] mt-[24px]">
        Maternity benefits offer financial assistance and peace of mind for
        female married employees or spouses up to 45 years of age
      </p>
      <div className="flex flex-col gap-[14px] mt-[38px]">
        {maternityItems.map((item) => (
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