type TreatmentPlan = {
  id: number;
  title: string;
  description: string;
  bulletPoints?: string[];
};

const treatmentPlans: TreatmentPlan[] = [
  {
    id: 1,
    title: "In-Patient Treatment (IPD) Plan",
    description:
      "The In-Patient Treatment plan provides financial protection for medical expenses incurred during hospitalization of at least 24 hours due to illness or accidental injury within the policy period.",
  },
  {
    id: 2,
    title: "General Out-Patient Treatment (OPD) Plan",
    description:
      "The OPD plan covers medical expenses that do not require hospitalization, allowing employees to claim for routine healthcare costs.",
    bulletPoints: [
      "Doctor Consultation Fees",
      "Medicine Costs",
      "Diagnostic & Investigation Expenses",
    ],
  },
];

export function TreatmentPlanList() {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      {treatmentPlans.map((plan) => (
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
                  <span className="w-[10px] h-[10px] rounded-full bg-[#E8823A] flex-shrink-0" />
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
