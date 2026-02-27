import Contentheader from "../../../shared/Components/Contentheader";
import { BankPartners } from "./BankPartners";
import { MOCK_BANK_PARTNERS_DATA } from "../api/mockData";

export const BankPartnersSection = () => {
    return (
        <div className="mt-20 lg:mt-[100px] pt-16 lg:pt-[96px] bg-[#F6F6F6] px-4 lg:px-0">
            <Contentheader
                title={MOCK_BANK_PARTNERS_DATA.header.title}
                description={MOCK_BANK_PARTNERS_DATA.header.description}
            />
            <div className="mt-12 lg:mt-[199px] pb-12">
                <BankPartners />
            </div>
        </div>
    );
};
