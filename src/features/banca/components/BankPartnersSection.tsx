import { useTranslation } from "react-i18next";
import Contentheader from "../../../shared/Components/Contentheader";
import { BankPartners } from "./BankPartners";

export const BankPartnersSection = () => {
    const { t } = useTranslation('banca');

    return (
        <div className="py-20 lg:mt-[100px] pt-16 lg:pt-[96px] bg-[#F6F6F6] px-4 lg:px-0">
            <Contentheader
                title={t('bank_partners.header.title')}
                description={t('bank_partners.header.description')}
            />
            <div className="py-12 lg:py-[100px]">
                <BankPartners />
            </div>
        </div>
    );
};
