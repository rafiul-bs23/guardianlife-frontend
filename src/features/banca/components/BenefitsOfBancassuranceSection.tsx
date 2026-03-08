import { useTranslation } from "react-i18next";
import Contentheader from "../../../shared/Components/Contentheader";
import { BenefitsOfBancassurance } from "./BenefitsOfBancassurance";

export const BenefitsOfBancassuranceSection = () => {
    const { t } = useTranslation('banca');

    return (
        <div className="mt-16 lg:mt-[129px] px-4 lg:px-0">
            <Contentheader
                title={t('benefits.header.title')}
                description={t('benefits.header.description')}
            />
            <div className="mt-12 lg:mt-[43px]">
                <BenefitsOfBancassurance />
            </div>
        </div>
    );
};
