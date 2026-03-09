import PartnersBanner from "../../../shared/Components/PartnersBanner";

import { useTranslation } from 'react-i18next';
import { partners2 } from "../api/mockData";

const EmpoweringFamilies = () => {
  const { t } = useTranslation('home');
  return (
    <div className="bg-[#F4F4F4] w-full py-20">
      <PartnersBanner
        image={"/assets/images/home/EmpoweringFamilies/empoweringFamilies.jpg"}
        imageAlt="Empowering Families"
        title={t('empowering_families.title')}
        description={t('empowering_families.description')}
        buttonLabel={t('empowering_families.button')}
        buttonTo="/micro"
        partners={partners2}
        reversed={true}
        maxWidth="max-w-[1440px]"
      />
    </div>
  );
};

export default EmpoweringFamilies;
