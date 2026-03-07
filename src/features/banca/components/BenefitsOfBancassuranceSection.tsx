import Contentheader from "../../../shared/Components/Contentheader";
import { BenefitsOfBancassurance } from "./BenefitsOfBancassurance";
import { mock_banca_benefits_data } from "../api/mockData";

export const BenefitsOfBancassuranceSection = () => {
    return (
        <div className="mt-16 lg:mt-[129px] px-4 lg:px-0">
            <Contentheader
                title={mock_banca_benefits_data?.header?.title}
                description={mock_banca_benefits_data?.header?.description}
            />
            <div className="mt-12 lg:mt-[43px]">
                <BenefitsOfBancassurance />
            </div>
        </div>
    );
};
