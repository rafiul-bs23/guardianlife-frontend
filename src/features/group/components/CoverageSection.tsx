import { useTranslation } from "react-i18next";
import Contentheader from "../../../shared/Components/Contentheader";
import { CoverageList } from "./CoverageList";
import { MOCK_COVERAGE_DATA } from "../api/mockData";
import { ShieldIcon, HeartIcon, StarIcon } from "lucide-react";

interface LocalizedCoverage {
    id: number;
    iconName: string;
    iconColor: string;
    title: string;
    description: string;
}

export const CoverageSection = () => {
    const { t } = useTranslation();

    const getIcon = (iconName: string, color: string) => {
        switch (iconName) {
            case "ShieldIcon":
                return <ShieldIcon size={18} color={color} />;
            case "HeartIcon":
                return <HeartIcon size={18} color={color} />;
            case "StarIcon":
                return <StarIcon size={18} color={color} />;
            default:
                return null;
        }
    };

    // Load coverages from translation
    const localizedCoverages = t('group:coverage_section.coverages', { returnObjects: true });
    const coverages = Array.isArray(localizedCoverages) ? (localizedCoverages as LocalizedCoverage[]) : [];

    const comprehensiveData = coverages.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        icon: getIcon(item.iconName, item.iconColor),
    }));

    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <div className="mb-10 lg:mb-14">
                    <Contentheader
                        title={t('group:coverage_section.header.title')}
                        description={t('group:coverage_section.header.description')}
                    />
                </div>

                <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-start">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img
                            src={MOCK_COVERAGE_DATA.imgUrl}
                            alt="image"
                            className="w-full h-auto lg:h-[554px] lg:max-w-[712px] object-cover rounded-[35px]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <CoverageList items={comprehensiveData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

