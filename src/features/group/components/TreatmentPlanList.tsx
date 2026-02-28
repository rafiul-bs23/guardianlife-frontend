type TreatmentPlan = {
  id: number;
  title: string;
  description: string;
  bulletPoints?: string[];
};

export function TreatmentPlanList({ items }: { items: TreatmentPlan[] }) {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      {items.map((plan) => (
        <div
          key={plan.id}
          className="bg-white rounded-[12px] px-[20px] py-[20px] shadow-[0_1px_6px_rgba(0,0,0,0.08)]"
        >
          <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
            {plan.title}
          </p>
          <p className="font-normal text-[20px] leading-[32px] tracking-[0.02em]">
            {plan.description}
          </p>
          {plan.bulletPoints && (
            <ul className="m-0 mt-[12px] p-0 flex flex-col gap-[8px] list-none">
              {plan.bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-[10px] text-[20px]"
                >
                  <span className="w-[20px] h-[20px] rounded-full bg-[#E8823A] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
