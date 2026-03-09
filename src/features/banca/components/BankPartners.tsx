import { Link } from "react-router-dom";
import { bank_partners } from "../api/mockData";
import Card from "../../../shared/Components/Card";

export function BankPartners() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-[59px] w-full px-4 lg:px-0">
      {bank_partners?.map((partner) => (
        <Card
          className="w-[150px] h-[150px] sm:w-[246px] sm:h-[252px]"
        ><Link
          to={partner?.link || "#"}
          key={partner?.id} className=" w-full h-full  rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center justify-center"

        >
            <img
              src={partner?.logo}
              alt={partner?.alt}
              className="max-w-[80%] max-h-[80px] 
              
              
              object-contain"
            /></Link>
        </Card>
      ))}
    </div>
  );
}
