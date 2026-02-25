import Contentheader from "../../shared/Components/Contentheader.tsx";
import { BenefitsSection } from "./component/BenefitsSection";
import { CoverageSection } from "./component/CoverageSection";
import { LifeCoverage } from "./component/LifeCoverage.tsx";
import { CriticalIllnessList } from "./component/CriticalillnessList.tsx";
import { TreatmentPlanList } from "./component/TreatmentPlanList.tsx";
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

  type LifeCoverageType = {
    id: number;
    title: string;
    description: string;
  };
  const lifeCoveragedata: LifeCoverageType[] = [
    {
      id: 1,
      title: "Death Benefit (Natural Death)",
      description: "If an insured employee passes away due to natural causes during the policy period, Guardian Life Insurance, upon receiving written proof of death, will pay the sum insured to the organization or the nominated beneficiary of the employee.",
    },
    {
      id: 2,
      title: "Accidental Death Benefit (ADB)",
      description: "In the event of an insured employee's death caused directly by an accident involving external and violent means, the Accidental Death Benefit provides an additional sum insured over and above the standard death benefit.",
    },
    {
      id: 3,
      title: "Permanent & Total Disability (PTD)",
      description: "If an insured employee becomes permanently and totally disabled due to an accident resulting in bodily injury, Guardian Life will pay the full sum insured to the organization, offering financial support during a life-changing situation.",
    },
    {
      id: 4,
      title: "Permanent Partial Disability (PPD)",
      description: "When an accident results in permanent partial disability, Guardian Life provides fixed financial benefits to the employer or employee in accordance with the Labor Law of Bangladesh, ensuring continued financial stability.",
    },
  ];

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

      <div className="mt-16 lg:mt-[124px] px-4">
        <Contentheader
          title="Life Coverage for Financial Protection & Peace of Mind"
          description="Group Life Insurance ensures financial security for employees and their families while reinforcing an organization's commitment to long-term employee welfare. This coverage helps mitigate uncertainty and provides assurance during life-altering events"
        />
      </div>

      <div className="flex flex-col lg:flex-row mt-12 lg:mt-[90px] gap-8 lg:gap-0 px-4 lg:px-0">
        <div className="w-full lg:w-1/2 lg:pl-[211px] lg:pr-8">
          <LifeCoverage items={lifeCoveragedata} />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-[211px]">
          <img
            src="https://glilapi.guardianlife.com.bd/images/1725268980177-483331562-Guardian%20Health%20Insurance.png"
            alt="image"
            className="w-full h-auto lg:h-[554px] lg:w-[712px] object-cover rounded-[35px]"
          />
        </div>
      </div>

      <div className="bg-[#F5DBCB] rounded-[30px] lg:rounded-[50px] mx-4 lg:mx-[211px] mt-16 lg:mt-[111px] pb-12 lg:pb-[56px] overflow-hidden">
        <div className="pt-12 lg:pt-[124px] px-4">
          <Contentheader
            title="Protection Against Major Life-Threatening Diseases"
            description="The Critical Illness Benefit is a supplementary coverage designed to support employees and their families financially if diagnosed with any of the specified critical illnesses. This benefit helps manage high treatment costs and income disruption."
          />
        </div>
        <div className="flex flex-col lg:flex-row mt-12 lg:mt-[90px] gap-8 lg:gap-0 px-4 lg:px-0">
          <div className="w-full lg:w-1/2 lg:pl-[28px] lg:pr-8">
            <CriticalIllnessList />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-[28px]">
            <img
              src="https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg"
              alt="image"
              className="w-full h-auto lg:h-[638px] lg:w-[638px] object-cover rounded-[35px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-[124px] px-4">
        <Contentheader
          title="Health Coverage That Supports Everyday Medical Needs"
          description="With rising healthcare costs and evolving family responsibilities, Guardian Life's Group Health Insurance plans are designed to provide extensive medical coverage—both for hospitalization and routine medical expenses."
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-12 lg:mt-[90px] gap-8 lg:gap-0 px-4 lg:px-0">
        <div className="w-full lg:w-1/2 lg:pl-[211px] lg:pr-8">
          <img
            src="https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg"
            alt="image"
            className="w-full h-auto lg:w-[688px] lg:h-[507px] object-cover rounded-[35px]"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-[212px]">
          <TreatmentPlanList />
        </div>
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

