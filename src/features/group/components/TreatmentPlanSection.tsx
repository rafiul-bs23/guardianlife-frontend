import Contentheader from "../../../shared/Components/Contentheader";
import { TreatmentPlanList } from "./TreatmentPlanList";
import { MOCK_TREATMENT_PLAN_DATA } from "../api/mockData";

export const TreatmentPlanSection = () => {
    return (
        <section className="bg-white pb-16 lg:pb-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <div className="mb-10 lg:mb-14">
                    <Contentheader
                        title={MOCK_TREATMENT_PLAN_DATA.header.title}
                        description={MOCK_TREATMENT_PLAN_DATA.header.description}
                    />
                </div>

                <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-start">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img
                            src={MOCK_TREATMENT_PLAN_DATA.imgUrl}
                            alt="image"
                            className="w-full h-auto lg:h-[507px] lg:max-w-[688px] object-cover rounded-[35px]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <TreatmentPlanList items={MOCK_TREATMENT_PLAN_DATA.plans} />
                    </div>
                </div>
            </div>
        </section>
    );
};
