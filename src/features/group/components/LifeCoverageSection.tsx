import Contentheader from "../../../shared/Components/Contentheader";
import { LifeCoverage } from "./LifeCoverage";
import { MOCK_LIFE_COVERAGE_DATA } from "../api/mockData";

export const LifeCoverageSection = () => {
    return (
        <section className="bg-white pb-16 lg:pb-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <div className="mb-10 lg:mb-14">
                    <Contentheader
                        title={MOCK_LIFE_COVERAGE_DATA.header.title}
                        description={MOCK_LIFE_COVERAGE_DATA.header.description}
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <LifeCoverage items={MOCK_LIFE_COVERAGE_DATA.coverages} />
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <img
                            src={MOCK_LIFE_COVERAGE_DATA.imgUrl}
                            alt="image"
                            className="w-full h-auto lg:h-[554px] lg:max-w-[712px] object-cover rounded-[35px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
