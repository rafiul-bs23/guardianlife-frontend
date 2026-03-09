import { useTranslation } from "react-i18next";
import Contentheader from "../../../shared/Components/Contentheader";
import { FacilitiesOfBancassurance } from "./FacilitiesOfBancassurance";

export const FacilitiesOfBancassuranceSection = () => {
    const { t } = useTranslation('banca');

    return (
        <div className="mt-16 lg:mt-[117px] px-4 lg:px-0">
            <Contentheader
                title={t('facilities.header.title')}
                description={t('facilities.header.description')}
            />
            <div className="mt-12 lg:mt-[82px]">
                <FacilitiesOfBancassurance />
            </div>
        </div>
    );
};
