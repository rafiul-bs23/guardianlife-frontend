import { useTranslation } from "react-i18next";
import { MaternityBenefits } from "./MaternityBenefits";
import { MOCK_MATERNITY_DATA } from "../api/mockData";

export const MaternityBenefitsSection = () => {
    const { t } = useTranslation();

    // Load items from translation
    const localizedItems = t('group:maternity_section.items', { returnObjects: true });
    const items = Array.isArray(localizedItems) ? localizedItems : [];

    return (
        <section className="bg-white pb-16 lg:pb-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <div className="bg-[#F5DBCB] rounded-[30px] lg:rounded-[50px] py-12 lg:pb-[65px] px-4 lg:px-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <MaternityBenefits
                                title={t('group:maternity_section.title')}
                                description={t('group:maternity_section.description')}
                                items={items as any}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                            <img
                                src={MOCK_MATERNITY_DATA.imgUrl}
                                alt="image"
                                className="w-full h-auto lg:h-[507px] lg:max-w-[688px] object-cover rounded-[35px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

