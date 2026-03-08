import { useTranslation } from "react-i18next";
import Contentheader from "../../../shared/Components/Contentheader";
import { CriticalIllnessList } from "./CriticalillnessList";
import { MOCK_CRITICAL_ILLNESS_DATA } from "../api/mockData";

export const CriticalIllnessSection = () => {
    const { t } = useTranslation();

    // Load illnesses from translation
    const localizedIllnesses = t('group:critical_illness_section.illnesses', { returnObjects: true });
    const illnesses = Array.isArray(localizedIllnesses) ? localizedIllnesses : [];

    return (
        <section className="bg-white pb-16 lg:pb-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <div className="bg-[#F5DBCB] rounded-[30px] lg:rounded-[50px] pb-12 lg:pb-[56px] overflow-hidden">
                    <div className="pt-12 lg:pt-[80px] mb-10 lg:mb-14 px-4 lg:px-10">
                        <Contentheader
                            title={t('group:critical_illness_section.header.title')}
                            description={t('group:critical_illness_section.header.description')}
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start px-6 lg:px-10">
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <CriticalIllnessList items={illnesses as any} />
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                            <img
                                src={MOCK_CRITICAL_ILLNESS_DATA.imgUrl}
                                alt="image"
                                className="w-full h-auto lg:h-[638px] lg:max-w-[638px] object-cover rounded-[35px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

