import { BenefitsSection } from "./component/BenefitsSection";
import { CoverageSection } from "./component/CoverageSection";
import { LifeCoverageSection } from "./component/LifeCoverageSection";
import { CriticalIllnessSection } from "./component/CriticalIllnessSection";
import { TreatmentPlanSection } from "./component/TreatmentPlanSection";
import { MaternityBenefits } from "./component/MaternityBenefits.tsx";
import OutPatientCard from "./component/OutPatientCard.tsx";
import GroupHeader from "./components/GroupHeader.tsx";
import { useHeader } from "./hooks/useHeader.ts";
import CashlessNetwork from "../../shared/Components/CashlessNetwork.tsx";
import MicroPartners from "../micro/components/MicroPartners.tsx";
import MicroContactForm from "../micro/components/MicroContactForm.tsx";
import { mockMicroData } from "../micro/api/mockData.ts";
import AppDownloadSection from "../../shared/Components/AppDownloadSection.tsx";

// import { comprehensiveData, lifeCoveragedata, mockGroupApiResponse as apiResponse } from "./api/mockData";

const Group = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();

  const apiResponse = {
    "status": true,
    "transactionId": "GLIL-TXN-ID",
    "data": {
      "channel": "retail",
      "category": null,
      "subcategory": null,
      "products": [
        {
          "title": "Dental Out-Patient Treatment Benefit",
          "description": "Dental OPD coverage provides access to essential dental care without hospitalization.",
          "productCode": "NRB-SP",
          "logoUrl": null,
          "thumbnailUrl": "https://i.ibb.co/hV3q6K9/term-life-insurance-2.png",
          "footer": null,
          "points": [
            "Doctor Consultation Fees",
            "Amalgam, Resin Plastic & Temporary/Permanent Fillings",
            "Routine Extraction",
            "Medication",
            "X-rays & Investigations",
            "Root Canal Treatment (including bridging and capping)",
            "Scaling & Polishing (once per year per member)"
          ]
        },
        {
          "title": "Optical Out-Patient Treatment Benefit",
          "description": "Optical OPD benefits cover eye care and vision correction needs on an outpatient basis.",
          "productCode": "JAYA-01",
          "logoUrl": "https://guardian-life-website-example.com/assets/images/nrb-savingslogo.png",
          "thumbnailUrl": "https://i.ibb.co/hV3q6K9/term-life-insurance-2.png",
          "footer": "Ideal for digital buyers",
          "points": [
            "Consultation",
            "Vision Tests for Refractive Errors",
            "Medication",
            "Lenses & Spectacles"
          ]
        }
      ]
    }
  };

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

      <div className="flex flex-col lg:flex-row bg-[#F5DBCB] rounded-[30px] lg:rounded-[50px] mt-16 lg:mt-[94px] mx-4 lg:mx-[150px] xl:mx-[200px] py-12 lg:py-[65px] gap-8 lg:gap-0 px-4 lg:px-0">
        <div className="w-full lg:w-1/2 lg:px-[43px]">
          <MaternityBenefits />
        </div>
        <div className="w-full lg:w-1/2 lg:px-[40px]">
          <img
            src="https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg"
            alt="image"
            className="w-full h-auto lg:w-[688px] lg:h-[507px] object-cover rounded-[35px]"
          />
        </div>
      </div>

      <div className="flex flex-wrap lg:grid lg:grid-cols-2 gap-8 justify-center mt-16 lg:mt-[84px] px-4 lg:px-[100px] xl:px-[200px]">
        {apiResponse.data.products.map((product) => (
          <OutPatientCard
            key={product.productCode}
            thumbnailUrl={product.thumbnailUrl}
            title={product.title}
            description={product.description}
            points={product.points}
          />
        ))}
      </div>

      <div className="mt-16">
        <CashlessNetwork />
      </div>
      <MicroPartners />
      <MicroContactForm data={mockMicroData.contactForm} />
      <AppDownloadSection />
    </main>
  );
};

export default Group;

