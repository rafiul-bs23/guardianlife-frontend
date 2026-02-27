import Contentheader from "../../../shared/Components/Contentheader";
import { CoverageList } from "./CoverageList";
import { MOCK_COVERAGE_DATA } from "../api/mockData";
import { ShieldIcon, HeartIcon, StarIcon } from "lucide-react";

export const CoverageSection = () => {

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

    const comprehensiveData = MOCK_COVERAGE_DATA.coverages.map((item) => ({
        ...item,
        icon: getIcon(item.iconName, item.iconColor),
    }));

    return (
        <>
            <div className="mt-16 lg:mt-[124px] px-4">
                <Contentheader
                    title={MOCK_COVERAGE_DATA.header.title}
                    description={MOCK_COVERAGE_DATA.header.description}
                />
            </div>

            <div className="flex flex-col-reverse lg:flex-row mt-12 lg:mt-[90px] gap-8 lg:gap-0 px-4 lg:px-0">
                <div className="w-full lg:w-1/2 lg:pl-[211px] lg:pr-8">
                    <img
                        src={MOCK_COVERAGE_DATA.imgUrl}
                        alt="image"
                        className="w-full h-auto lg:h-[554px] lg:w-[712px] object-cover rounded-[35px]"
                    />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8">
                    <CoverageList items={comprehensiveData as any} />
                </div>
            </div>
        </>
    );
};
