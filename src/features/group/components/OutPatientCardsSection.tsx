import { useTranslation } from "react-i18next";
import OutPatientCard from "./OutPatientCard";
import { MOCK_OUTPATIENT_DATA } from "../api/mockData";
import type { OutPatientCard as OutPatientCardType } from "../types";

export const OutPatientCardsSection = () => {
    const { t } = useTranslation();

    const localizedCards = t('group:outpatient_section.cards', { returnObjects: true });
    const cards = Array.isArray(localizedCards) ? (localizedCards as OutPatientCardType[]) : [];

    return (
        <section className="bg-white pb-16 lg:pb-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-[60px] justify-center items-stretch object-cover w-full">
                    {cards.map((card, index) => {
                        const asset = MOCK_OUTPATIENT_DATA[index];
                        return (
                            <div key={asset.product_code} className="flex justify-center w-full lg:w-1/2 max-w-[643px]">
                                <OutPatientCard
                                    thumbnail_url={asset.thumbnail_url}
                                    title={card.title}
                                    description={card.description}
                                    points={card.points}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
