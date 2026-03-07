import Contentheader from "../../../shared/Components/Contentheader";
import { FacilitiesOfBancassurance } from "./FacilitiesOfBancassurance";
import { mock_facilities_data } from "../api/mockData";

export const FacilitiesOfBancassuranceSection = () => {
    return (
        <div className="mt-16 lg:mt-[117px] px-4 lg:px-0">
            <Contentheader
                title={mock_facilities_data?.header?.title}
                description={mock_facilities_data?.header?.description}
            />
            <div className="mt-12 lg:mt-[82px]">
                <FacilitiesOfBancassurance />
            </div>
        </div>
    );
};
