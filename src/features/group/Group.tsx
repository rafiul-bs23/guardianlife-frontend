import HeaderImage from "../../assets/images/category/headerImage.jpg";
import Header from "../../shared/Components/Header.tsx";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import BenefitsList from "./Benefits.tsx";
import { ShieldIcon, HeartIcon, StarIcon } from "lucide-react";
import {CoverageList} from "./CoverageList.tsx";
import {LifeCoverage} from "./LifeCoverage.tsx";
import {CriticalIllnessList} from "./CriticalillnessList.tsx";
import {TreatmentPlanList} from "./component/TreatmentPlanList.tsx";
import {MaternityBenefits} from "./component/MaternityBenefits.tsx";

const Group = () => {
  const comprehensiveData = [
    {
      id: 1,
      icon: <ShieldIcon size={18} color="#4A90D9" />,
      title: "Life Coverage",
      description: "Comprehensive life insurance including death benefits, accidental death, disability coverage, and critical illness protection for complete financial security.",
    },
    {
      id: 2,
      icon: <HeartIcon size={18} color="#4CAF82" />,
      title: "Health Coverage",
      description: "Extensive medical coverage including in-patient treatment, maternity benefits, and out-patient care for everyday medical needs.",
    },
    {
      id: 3,
      icon: <StarIcon size={18} color="#9B6FD4" />,
      title: "Specialized Benefits",
      description: "Additional coverage for dental and optical care, ensuring comprehensive healthcare support for all aspects of employee well-being.",
    },
  ];
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
  return (
    <div>
      <Header
        backgroundImage={HeaderImage}
        title={
          <h1 className="text-4xl font-bold leading-tight">
            SECURE YOUR <span className="text-[#1E3161]">FAMILY’S FUTURE</span>, <br/>
            PLAN YOUR RETIREMENT, OR <br/>
            PROTECT YOUR HEALTH — <br/>
            <span className="text-[#1E3161]">WE’VE GOT YOU COVERED.</span>
          </h1>
        }
      />
      <div className="mt-[84px]">
        <Contentheader
          title="Why Group Insurance Matters for Your Organization"
          description="A Smarter Way to Care for Your Employees"
        />
      </div>

      <div className="flex mt-[90px]">
        <div className="w-1/2 pl-[211px] pr-8 ">
          <div className="max-w-[696px]">
            <BenefitsList/>
          </div>
        </div>
        <div className="w-1/2 pl-8">
          <img
            src="https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg?semt=ais_hybrid"
            alt="Header background"
            className="inset-0 h-[554px] w-[712px] object-cover rounded-[35px]"
          />
        </div>
      </div>
      <div className="mt-[124px]">
        <Contentheader
          title="Comprehensive Coverage Under One Group Policy"
          description="Guardian Life offers a complete range of group insurance coverages that can be tailored to your organization's size, industry, and budget."
        />
      </div>
      <div className="flex mt-[90px]">
        <div className="w-1/2 pl-[211px] pr-8">
          <img
            src="https://glilapi.guardianlife.com.bd/images/1725268980177-483331562-Guardian%20Health%20Insurance.png"
            alt="image"
            className="inset-0 h-[554px] w-[712px] object-cover rounded-[35px]"
          />
        </div>
        <div className="w-1/2 pl-8">
          <CoverageList items={comprehensiveData} />
        </div>
      </div>
      <div className="mt-[124px]">
        <Contentheader
          title="Life Coverage for Financial Protection & Peace of Mind"
          description="Group Life Insurance ensures financial security for employees and their families while reinforcing an organization's commitment to long-term employee welfare. This coverage helps mitigate uncertainty and provides assurance during life-altering events"
        />
      </div>
      <div className="flex mt-[90px]">
        <div className="w-1/2 pl-[211px] pr-8">
          <LifeCoverage items={lifeCoveragedata} />
        </div>
        <div className="w-1/2 pl-8">
          <img
            src="https://glilapi.guardianlife.com.bd/images/1725268980177-483331562-Guardian%20Health%20Insurance.png"
            alt="image"
            className="inset-0 h-[554px] w-[712px] object-cover rounded-[35px]"
          />
        </div>
      </div>
      <div className="bg-[#F5DBCB] rounded-[50px] mx-[211px] mt-[111px] pb-[56px]">
        <div className="pt-[124px]">
          <Contentheader
            title="Protection Against Major Life-Threatening Diseases"
            description="The Critical Illness Benefit is a supplementary coverage designed to support employees and their families financially if diagnosed with any of the specified critical illnesses. This benefit helps manage high treatment costs and income disruption."
          />
        </div>
        <div className="flex mt-[90px]">
          <div className="w-1/2 pl-[28px] pr-8">
            <CriticalIllnessList />
          </div>
          <div className="w-1/2 pl-8">
            <img
              src="https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg"
              alt="image"
              className="inset-0 h-[638px] w-[638px] object-cover rounded-[35px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-[124px]">
        <Contentheader
          title="Health Coverage That Supports Everyday Medical Needs"
          description="With rising healthcare costs and evolving family responsibilities, Guardian Life's Group Health Insurance plans are designed to provide extensive medical coverage—both for hospitalization and routine medical expenses."
        />
      </div>
      <div className="flex mt-[90px]">
        <div className="w-1/2 pl-[211px] pr-8">
          <img
            src="https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg"
            alt="image"
            className="inset-0 w-[688px] h-[507px] object-cover rounded-[35px]"
          />
        </div>
        <div className="w-1/2 pl-8 pr-[212px]">
          <TreatmentPlanList />
        </div>
      </div>
      <div className="flex bg-[#F5DBCB] rounded-[50px] mt-[94px] mx-[200px] py-[65px]">
        <div className="w-1/2 pl-[43px]">
          <MaternityBenefits />
        </div>
        <div className="w-1/2 mx-[40px]">
          <img
            src="https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg"
            alt="image"
            className="inset-0 w-[688px] h-[507px] object-cover rounded-[35px]"
          />
        </div>
      </div>
      <div>
        two card
      </div>
      <div>
        cashless hospital network
      </div>
    </div>
  );
};

export default Group;
