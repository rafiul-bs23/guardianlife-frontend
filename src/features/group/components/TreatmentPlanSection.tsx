import Contentheader from "../../../shared/Components/Contentheader";
import { TreatmentPlanList } from "./TreatmentPlanList";
import { MOCK_TREATMENT_PLAN_DATA } from "../api/mockData";

export const TreatmentPlanSection = () => {
    return (
        <>
            <div className="mt-16 lg:mt-[124px] px-4">
                <Contentheader
                    title={MOCK_TREATMENT_PLAN_DATA.header.title}
                    description={MOCK_TREATMENT_PLAN_DATA.header.description}
                />
            </div>

            <div className="flex flex-col-reverse lg:flex-row mt-12 lg:mt-[90px] gap-8 lg:gap-0 px-4 lg:px-0">
                <div className="w-full lg:w-1/2 lg:pl-[211px] lg:pr-8">
                    <img
                        src={MOCK_TREATMENT_PLAN_DATA.imgUrl}
                        alt="image"
                        className="w-full h-auto lg:w-[688px] lg:h-[507px] object-cover rounded-[35px]"
                    />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-[212px]">
                    <TreatmentPlanList items={MOCK_TREATMENT_PLAN_DATA.plans} />
                </div>
            </div>
        </>
    );
};
