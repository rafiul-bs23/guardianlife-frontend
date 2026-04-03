import PartnersBanner from "../../../shared/Components/PartnersBanner";

import { useTranslation } from 'react-i18next';
import { microPartners } from "../api/mockData";

const EmpoweringFamilies = () => {
  const { t } = useTranslation('home');
  return (
    <div className="bg-[#F4F4F4] w-full py-20">
      <PartnersBanner
        image={"/assets/images/home/EmpoweringFamilies/matters.png"}
        imageAlt="Empowering Families"
        title={t('empowering_families.title')}
        description={t('empowering_families.description')}
        buttonLabel={t('empowering_families.button')}
        buttonTo="/micro"
        partners={microPartners}
        reversed={true}
        maxWidth="max-w-[1440px]"
      />
    </div>
  );
};

export default EmpoweringFamilies;
