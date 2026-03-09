import { useTranslation } from "react-i18next";
import Contentheader from "../../../shared/Components/Contentheader";
import { BancassuranceProductSolutions } from "./BancassuranceProductSolutions";

export const BancassuranceProductSolutionsSection = () => {
    const { t } = useTranslation('banca');

    return (
        <div className="mt-16 lg:mt-[199px] px-4 lg:px-0">
            <Contentheader
                title={t('product_solutions.header.title')}
                description={t('product_solutions.header.description')}
            />
            <div className="mt-12 lg:mt-[60px]">
                <BancassuranceProductSolutions />
            </div>
        </div>
    );
};
