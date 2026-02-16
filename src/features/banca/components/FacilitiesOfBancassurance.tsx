type ServiceCard = {
  id: number;
  image: string;
  title: string;
  points: string[];
};

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    image: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
    title: "Customized Solutions",
    points: [
      "Customized insurance product design",
      "Integration with banking products and processes",
    ],
  },
  {
    id: 2,
    image: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
    title: "Training & Support",
    points: [
      "Training and sales support for bank staff",
      "Marketing and customer communication assistance",
    ],
  },
  {
    id: 3,
    image: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
    title: "Complete Management",
    points: [
      "Policy administration and claims management",
      "Dedicated relationship and support teams",
    ],
  },
];

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
    <div className="flex items-stretch justify-center gap-[35px] w-full">
      {serviceCards.map((card) => (
        <div
          key={card.id}
          className="w-[480px] h-[519px] bg-white rounded-[35px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-[394px] h-[225px] object-cover rounded-[35px] mx-[43px] my-[22px]"
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
