import Contentheader from "../../../shared/Components/Contentheader";
import { WhatIsBancassurance } from "./WhatIsBancassurance";
import { MOCK_WHY_BANCASSURANCE_DATA } from "../api/mockData";

export const WhyBancassuranceMattersSection = () => {
    return (
        <div className="mt-16 lg:mt-[77px] px-4 lg:px-0">
            <Contentheader
                title={MOCK_WHY_BANCASSURANCE_DATA.header.title}
                description={MOCK_WHY_BANCASSURANCE_DATA.header.description}
            />
            <div className="flex flex-col-reverse lg:flex-row mt-12 mb-12 lg:mt-[90px] gap-8 lg:gap-0 max-w-7xl mx-auto">
                <div className="w-full lg:w-1/2 lg:pl-[50px] lg:pr-8">
                    <WhatIsBancassurance data={MOCK_WHY_BANCASSURANCE_DATA.whatIsBancassurance} />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 flex justify-center">
                    <img
                        src={MOCK_WHY_BANCASSURANCE_DATA.imgUrl}
                        alt="image"
                        className="w-full max-w-[649px] h-auto lg:h-[505px] object-cover rounded-[35px]"
                    />
                </div>
            </div>
        </div>
    );
};
