import BenefitsSection from "./components/BenefitsSection.tsx";
import { CoverageSection } from "./components/CoverageSection.tsx";
import { LifeCoverageSection } from "./components/LifeCoverageSection.tsx";
import { CriticalIllnessSection } from "./components/CriticalIllnessSection.tsx";
import { TreatmentPlanSection } from "./components/TreatmentPlanSection.tsx";
import { MaternityBenefitsSection } from "./components/MaternityBenefitsSection.tsx";
import { OutPatientCardsSection } from "./components/OutPatientCardsSection.tsx";
import GroupHeader from "./components/GroupHeader.tsx";

import CashlessNetwork from "../../shared/Components/CashlessNetwork.tsx";

import AppDownloadSection from "../../shared/Components/AppDownloadSection.tsx";
import PartnersSlider from "../../shared/Components/PartnersSlider.tsx";
import GroupContactForm from "./components/GroupContactForm.tsx";
import { useHeader } from "../../shared/hooks/useHeader.ts";
import { MOCK_GROUP_HEADER_DATA } from "./api/mockData.ts";

const Group = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader("group-info", true, MOCK_GROUP_HEADER_DATA);

  if (isHeaderLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }

  return (
    <main className="overflow-hidden">
      {headerData && <GroupHeader data={headerData} />}

      <BenefitsSection />
      <CoverageSection />
      <LifeCoverageSection />
      <CriticalIllnessSection />
      <TreatmentPlanSection />
      <MaternityBenefitsSection />
      <OutPatientCardsSection />

      <CashlessNetwork />
      <PartnersSlider channel="group" />
      <AppDownloadSection />
      <GroupContactForm />
    </main>
  );
};

export default Group;

