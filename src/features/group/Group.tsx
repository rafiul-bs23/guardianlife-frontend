import { BenefitsSection } from "./component/BenefitsSection";
import { CoverageSection } from "./component/CoverageSection";
import { LifeCoverageSection } from "./component/LifeCoverageSection";
import { CriticalIllnessSection } from "./component/CriticalIllnessSection";
import { TreatmentPlanSection } from "./component/TreatmentPlanSection";
import { MaternityBenefitsSection } from "./component/MaternityBenefitsSection.tsx";
import { OutPatientCardsSection } from "./component/OutPatientCardsSection.tsx";
import GroupHeader from "./components/GroupHeader.tsx";
import { useHeader } from "./hooks/useHeader.ts";
import CashlessNetwork from "../../shared/Components/CashlessNetwork.tsx";
import MicroContactForm from "../micro/components/MicroContactForm.tsx";
import { mockMicroData } from "../micro/api/mockData.ts";
import AppDownloadSection from "../../shared/Components/AppDownloadSection.tsx";
import PartnersSlider from "../../shared/Components/PartnersSlider.tsx";
import GroupContactForm from "./components/GroupContactForm.tsx";

// import { comprehensiveData, lifeCoveragedata, mockGroupApiResponse as apiResponse } from "./api/mockData";

const Group = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();



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
      <div className="mx-[auto]">
        <BenefitsSection />
      </div>

      <div className="mx-[auto]">
        <CoverageSection />
      </div>

      <div className="mx-[auto]">
        <LifeCoverageSection />
      </div>

      <div className="mx-[auto]">
        <CriticalIllnessSection />
      </div>

      <div className="mx-[auto]">
        <TreatmentPlanSection />
      </div>

      <div className="mx-[auto]">
        <MaternityBenefitsSection />
      </div>

      <OutPatientCardsSection />

      <div className="mt-16">
        <CashlessNetwork />
      </div>
      <PartnersSlider channel="group" />
      <GroupContactForm />
      <AppDownloadSection />
    </main>
  );
};

export default Group;

