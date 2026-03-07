import Contentheader from "../../../shared/Components/Contentheader";
import { BankPartners } from "./BankPartners";
import { mock_bank_partners_data } from "../api/mockData";

export const BankPartnersSection = () => {
    return (
        <div className="py-20 lg:mt-[100px] pt-16 lg:pt-[96px] bg-[#F6F6F6] px-4 lg:px-0">
            <Contentheader
                title={mock_bank_partners_data?.header?.title}
                description={mock_bank_partners_data?.header?.description}
            />
            <div className="py-12 lg:py-[100px]">
                <BankPartners />
            </div>
        </div>
    );
};
