import Contentheader from "../../../shared/Components/Contentheader";
import { CriticalIllnessList } from "./CriticalillnessList";
import { MOCK_CRITICAL_ILLNESS_DATA } from "../api/mockData";

export const CriticalIllnessSection = () => {
    return (
        <div className="bg-[#F5DBCB] rounded-[30px] lg:rounded-[50px] mx-4 lg:mx-[211px] mt-16 lg:mt-[111px] pb-12 lg:pb-[56px] overflow-hidden">
            <div className="pt-12 lg:pt-[124px] px-4">
                <Contentheader
                    title={MOCK_CRITICAL_ILLNESS_DATA.header.title}
                    description={MOCK_CRITICAL_ILLNESS_DATA.header.description}
                />
            </div>
            <div className="flex flex-col lg:flex-row mt-12 lg:mt-[90px] gap-8 lg:gap-0 px-4 lg:px-0">
                <div className="w-full lg:w-1/2 lg:pl-[28px] lg:pr-8">
                    <CriticalIllnessList items={MOCK_CRITICAL_ILLNESS_DATA.illnesses} />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-[28px]">
                    <img
                        src={MOCK_CRITICAL_ILLNESS_DATA.imgUrl}
                        alt="image"
                        className="w-full h-auto lg:h-[638px] lg:w-[638px] object-cover rounded-[35px]"
                    />
                </div>
            </div>
        </div>
    );
}
