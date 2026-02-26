import Contentheader from "../../../shared/Components/Contentheader";
import { BenefitsOfBancassurance } from "./BenefitsOfBancassurance";
import { MOCK_BANCA_BENEFITS_DATA } from "../api/mockData";

export const BenefitsOfBancassuranceSection = () => {
    return (
        <div className="mt-16 lg:mt-[129px] px-4 lg:px-0">
            <Contentheader
                title={MOCK_BANCA_BENEFITS_DATA.header.title}
                description={MOCK_BANCA_BENEFITS_DATA.header.description}
            />
            <div className="mt-12 lg:mt-[43px]">
                <BenefitsOfBancassurance />
            </div>
        </div>
    );
};
