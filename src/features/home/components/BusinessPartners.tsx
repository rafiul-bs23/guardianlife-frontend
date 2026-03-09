import PartnersBanner from "../../../shared/Components/PartnersBanner";

import { useTranslation } from 'react-i18next';
import { partners } from "../api/mockData";

const BusinessPartners = () => {
  const { t } = useTranslation('home');
  return (
    <div className="bg-[#F4F4F4] w-full py-20">
      <PartnersBanner
        image={"/assets/images/home/BusinessPartners/MainImage.jpg"}
        imageAlt="Business Partnership"
        title={t('business_partners.title')}
        description={t('business_partners.description')}
        buttonLabel={t('business_partners.button')}
        buttonTo="/group"
        partners={partners}
        maxWidth="max-w-[1440px]"
      />
    </div>
  );
};

export default BusinessPartners;
