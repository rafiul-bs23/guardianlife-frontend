import HeaderImage from "../../assets/images/category/headerImage.jpg";
import Header from "../../shared/Components/Header.tsx";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import BenefitsList from "./component/Benefits.tsx";
import { CoverageList } from "./component/CoverageList.tsx";
import { LifeCoverage } from "./component/LifeCoverage.tsx";
import { CriticalIllnessList } from "./component/CriticalillnessList.tsx";
import { TreatmentPlanList } from "./component/TreatmentPlanList.tsx";
import { MaternityBenefits } from "./component/MaternityBenefits.tsx";
import OutPatientCard from "./component/OutPatientCard.tsx";
import CashlessNetwork from "../../shared/Components/CashlessNetwork.tsx";
import MicroPartners from "../micro/components/MicroPartners.tsx";
import MicroContactForm from "../micro/components/MicroContactForm.tsx";
import { mockMicroData } from "../micro/api/mockData.ts";
import AppDownloadSection from "../../shared/Components/AppDownloadSection.tsx";

import { comprehensiveData, lifeCoveragedata, mockGroupApiResponse as apiResponse } from "./api/mockData";

const Group = () => {
  return (
    <div className="overflow-hidden">
      <Header
        backgroundImage={HeaderImage}
        title={
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
            SECURE YOUR <span className="text-[#1E3161]">FAMILY’S FUTURE</span>, <br className="hidden lg:block" />
            PLAN YOUR RETIREMENT, OR <br className="hidden lg:block" />
            PROTECT YOUR HEALTH — <br className="hidden lg:block" />
            <span className="text-[#1E3161]">WE’VE GOT YOU COVERED.</span>
          </h1>
        }
      />
      <div className="mt-16 lg:mt-[84px] px-4">
        <Contentheader
          title="Why Group Insurance Matters for Your Organization"
          description="A Smarter Way to Care for Your Employees"
        />
      </div>

      <div className="flex flex-col lg:flex-row mt-12 lg:mt-[90px] gap-8 lg:gap-0 px-4 lg:px-0">
        <div className="w-full lg:w-1/2 lg:pl-[211px] lg:pr-8">
          <div className="max-w-[696px] mx-auto lg:mx-0">
            <BenefitsList />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-[211px]">
          <img
            src="https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg?semt=ais_hybrid"
            alt="Header background"
            className="w-full h-auto lg:h-[554px] lg:w-[712px] object-cover rounded-[35px]"
          />
        </div>
      </div>

      <div className="mt-16 lg:mt-[124px] px-4">
        <Contentheader
          title="Comprehensive Coverage Under One Group Policy"
          description="Guardian Life offers a complete range of group insurance coverages that can be tailored to your organization's size, industry, and budget."
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-12 lg:mt-[90px] gap-8 lg:gap-0 px-4 lg:px-0">
        <div className="w-full lg:w-1/2 lg:pl-[211px] lg:pr-8">
          <img
            src="https://glilapi.guardianlife.com.bd/images/1725268980177-483331562-Guardian%20Health%20Insurance.png"
            alt="image"
            className="w-full h-auto lg:h-[554px] lg:w-[712px] object-cover rounded-[35px]"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <CoverageList items={comprehensiveData} />
        </div>
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

    </div>
  );
};

export default Group;
