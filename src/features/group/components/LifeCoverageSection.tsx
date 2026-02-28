import Contentheader from "../../../shared/Components/Contentheader";
import { LifeCoverage } from "./LifeCoverage";
import { MOCK_LIFE_COVERAGE_DATA } from "../api/mockData";

export const LifeCoverageSection = () => {
    return (
        <>
            <div className="mt-16 lg:mt-[124px] px-4">
                <Contentheader
                    title={MOCK_LIFE_COVERAGE_DATA.header.title}
                    description={MOCK_LIFE_COVERAGE_DATA.header.description}
                />
            </div>

            <div className="flex flex-col lg:flex-row mt-12 lg:mt-[90px] gap-8 lg:gap-0 px-4 lg:px-0">
                <div className="w-full lg:w-1/2 lg:pl-[211px] lg:pr-8">
                    <LifeCoverage items={MOCK_LIFE_COVERAGE_DATA.coverages} />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-[211px]">
                    <img
                        src={MOCK_LIFE_COVERAGE_DATA.imgUrl}
                        alt="image"
                        className="w-full h-auto lg:h-[554px] lg:w-[712px] object-cover rounded-[35px]"
                    />
                </div>
            </div>
        </>
    );
};
