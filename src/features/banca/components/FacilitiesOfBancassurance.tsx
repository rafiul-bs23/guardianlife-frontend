import { serviceCards } from "../api/mockData";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2 7L5.5 10.5L12 3.5"
      stroke="#E8823A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function FacilitiesOfBancassurance() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-stretch justify-center gap-8 lg:gap-[35px] w-full px-4 lg:px-0">
      {serviceCards.map((card) => (
        <div
          key={card.id}
          className="w-full max-w-[480px] h-auto lg:h-[519px] bg-white rounded-[35px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-[calc(100%-48px)] lg:w-[394px] h-[225px] object-cover rounded-[35px] mx-6 lg:mx-[43px] my-[22px]"
          />
          <div className="px-[21px] py-[20px] flex flex-col gap-[14px]">
            <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
              {card.title}
            </p>
            <div className="flex flex-col gap-[10px]">
              {card.points.map((point, index) => (
                <div key={index} className="flex items-start gap-[10px]">
                  <span className="mt-[1px] flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="font-normal text-[20px] leading-[32px] tracking-[0.02em] text-[#33363F]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
