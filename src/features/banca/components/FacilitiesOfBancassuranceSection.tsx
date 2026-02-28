import Contentheader from "../../../shared/Components/Contentheader";
import { FacilitiesOfBancassurance } from "./FacilitiesOfBancassurance";
import { MOCK_FACILITIES_DATA } from "../api/mockData";

export const FacilitiesOfBancassuranceSection = () => {
    return (
        <div className="mt-16 lg:mt-[117px] px-4 lg:px-0">
            <Contentheader
                title={MOCK_FACILITIES_DATA.header.title}
                description={MOCK_FACILITIES_DATA.header.description}
            />
            <div className="mt-12 lg:mt-[82px]">
                <FacilitiesOfBancassurance />
            </div>
        </div>
    );
};
