import image1 from "../../../assets/images/banca/image1.png"
import image2 from "../../../assets/images/banca/image2.png"
import image3 from "../../../assets/images/banca/image3.png"

type BankPartner = {
  id: number;
  logo: string;
  alt: string;
};

const partners: BankPartner[] = [
  { id: 1, logo: image1, alt: "Bank 1" },
  { id: 2, logo: image2, alt: "Bank 2" },
  { id: 3, logo: image3, alt: "Bank 3" },
];

export function BankPartners() {
  return (
    <div className="flex items-center justify-center gap-[59px] w-full">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="w-[246px] h-[252px] bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center justify-center"
        >
          <img
            src={partner.logo}
            alt={partner.alt}
            className="max-w-[180px] max-h-[120px] object-contain"
          />
        </div>
      ))}
    </div>
  );
}
