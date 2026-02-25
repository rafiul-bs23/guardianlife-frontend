import Contentheader from "../../../shared/Components/Contentheader";
import BenefitsList from "./Benefits";
import { MOCK_BENEFITS_DATA } from "../api/mockData";

export const BenefitsSection = () => {
    return (
        <>
            <div className="mt-16 lg:mt-[84px] px-4">
                <Contentheader
                    title={MOCK_BENEFITS_DATA.header.title}
                    description={MOCK_BENEFITS_DATA.header.description}
                />
            </div>

            <div className="flex flex-col lg:flex-row mt-12 lg:mt-[90px] gap-8 lg:gap-0 px-4 lg:px-0">
                <div className="w-full lg:w-1/2 lg:pl-[211px] lg:pr-8">
                    <div className="max-w-[696px] mx-auto lg:mx-0">
                        <BenefitsList items={MOCK_BENEFITS_DATA.benefits} />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-[211px]">
                    <img
                        src={MOCK_BENEFITS_DATA.imgUrl}
                        alt="Header background"
                        className="w-full h-auto lg:h-[554px] lg:w-[712px] object-cover rounded-[35px]"
                    />
                </div>
            </div>
        </>
    );
};
