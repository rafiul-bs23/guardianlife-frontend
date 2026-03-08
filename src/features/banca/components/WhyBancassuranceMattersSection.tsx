import { useTranslation } from "react-i18next";
import Contentheader from "../../../shared/Components/Contentheader";
import { mock_why_bancassurance_data } from "../api/mockData";
import { WhatIsBancassurance } from "./WhatIsBancassurance";


export const WhyBancassuranceMattersSection = () => {
    const { t } = useTranslation('banca');

    return (
        <section className="py-16 lg:py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <Contentheader
                    title={t('why_banca.header.title')}
                    description={t('why_banca.header.description')}
                />

                <div className="flex flex-col lg:flex-row items-center mt-16 lg:mt-24 gap-12 lg:gap-20">
                    <div className="w-full lg:w-[55%]">
                        <WhatIsBancassurance data={t('why_banca.what_is', { returnObjects: true }) as any} />
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
