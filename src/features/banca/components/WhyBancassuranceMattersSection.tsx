import Contentheader from "../../../shared/Components/Contentheader";
import { mock_why_bancassurance_data } from "../api/mockData";
import { WhatIsBancassurance } from "./WhatIsBancassurance";


export const WhyBancassuranceMattersSection = () => {
    return (
        <section className="py-16 lg:py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <Contentheader
                    title={mock_why_bancassurance_data?.header?.title}
                    description={mock_why_bancassurance_data?.header?.description}
                />

                <div className="flex flex-col lg:flex-row items-center mt-16 lg:mt-24 gap-12 lg:gap-20">
                    <div className="w-full lg:w-[55%]">
                        <WhatIsBancassurance data={mock_why_bancassurance_data?.what_is_bancassurance} />
                    </div>
                    <div className="w-full lg:w-[45%]">
                        <div className="relative group">
                            <img
                                src={mock_why_bancassurance_data?.image_url}
                                alt="Bancassurance illustration"
                                className="w-full h-auto object-cover rounded-[40px] shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
