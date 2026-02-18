type Illness = {
  id: number;
  name: string;
};

const illnesses: Illness[] = [
  { id: 1, name: "Cancer" },
  { id: 2, name: "Heart Attack (Myocardial Infarction)" },
  { id: 3, name: "Stroke" },
  { id: 4, name: "Coronary Artery Bypass Surgery" },
  { id: 5, name: "Kidney Failure (End Stage Renal Disease)" },
  { id: 6, name: "Major Organ Transplantation" },
  { id: 7, name: "Paralysis" },
  { id: 8, name: "Multiple Sclerosis" },
  { id: 9, name: "Loss of Limbs" },
  { id: 10, name: "Blindness / Loss of Sight" },
  { id: 11, name: "Heart Valve Replacement" },
  { id: 12, name: "Surgery of Aorta" },
  { id: 13, name: "Aplastic Anemia" },
  { id: 14, name: "Benign Brain Tumor" },
  { id: 15, name: "Chronic Lung Disease / End Stage Lung Disease" },
  { id: 16, name: "Deafness / Loss of Hearing" },
  { id: 17, name: "Major Head Trauma" },
  { id: 18, name: "Loss of Speech" },
];

export function CriticalIllnessList() {
  return (
    <div className="w-full">
      <p className="m-0 mb-[16px] text-[15px] font-bold text-[#1a1a2e]">
        Covered Critical Illnesses ({illnesses.length}):
      </p>
      <div className="grid grid-cols-2 gap-[8px]">
        {illnesses.map((item) => (
          <div
            key={item.id}
            className="font-normal bg-white rounded-[8px] px-[14px] text-[20px] leading-[32px] tracking-[0.02em] h-[67px] w-[328px]"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}