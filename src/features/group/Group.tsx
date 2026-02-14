import HeaderImage from "../../assets/images/category/headerImage.jpg";
import Header from "../../shared/Components/Header.tsx";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import BenefitsList from "./Benefits.tsx";
// import { CoverageList } from "./CoverageList";
import { ShieldIcon, HeartIcon, StarIcon } from "lucide-react";
import {CoverageList} from "./CoverageList.tsx";

const Group = () => {
  const data = [
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
      <div className="flex mt-[90px] h-[1000px]">
        <div className="w-1/2 pl-[211px] pr-8">
          <img
            src="https://glilapi.guardianlife.com.bd/images/1725268980177-483331562-Guardian%20Health%20Insurance.png"
            alt="image"
            className="inset-0 h-[554px] w-[712px] object-cover rounded-[35px]"
          />
        </div>
        <div className="w-1/2 pl-8">
          <CoverageList items={data} />
        </div>
      </div>
      <div className="mt-[124px]">
        <Contentheader
          title="Life Coverage for Financial Protection & Peace of Mind"
          description="Group Life Insurance ensures financial security for employees and their families while reinforcing an organization's commitment to long-term employee welfare. This coverage helps mitigate uncertainty and provides assurance during life-altering events"
        />
      </div>
      <div className="flex mt-[90px] h-[1000px]">
        <div className="w-1/2 pl-[211px] pr-8">
          <CoverageList items={data} />
        </div>
        <div className="w-1/2 pl-8">
          <img
            src="https://glilapi.guardianlife.com.bd/images/1725268980177-483331562-Guardian%20Health%20Insurance.png"
            alt="image"
            className="inset-0 h-[554px] w-[712px] object-cover rounded-[35px]"
          />
        </div>
      </div>
      <div className="bg-orange-200 rounded-[50px] mx-[211px]">
        <div className="mt-[124px]">
          <Contentheader
            title="Protection Against Major Life-Threatening Diseases"
            description="The Critical Illness Benefit is a supplementary coverage designed to support employees and their families financially if diagnosed with any of the specified critical illnesses. This benefit helps manage high treatment costs and income disruption."
          />
        </div>
        <div className="flex mt-[90px] h-[1000px]">
          <div className="w-1/2 pl-[211px] pr-8">left(list)</div>
          <div className="w-1/2 pl-8">right(image)</div>
        </div>
      </div>
      <div className="mt-[124px]">
        <Contentheader
          title="Health Coverage That Supports Everyday Medical Needs"
          description="With rising healthcare costs and evolving family responsibilities, Guardian Life's Group Health Insurance plans are designed to provide extensive medical coverage—both for hospitalization and routine medical expenses."
        />
      </div>
      <div className="flex mt-[90px] h-[1000px]">
        <div className="w-1/2 pl-[211px] pr-8">left(image)</div>
        <div className="w-1/2 pl-8">right(list)</div>
      </div>
      <div className="bg-orange-200 rounded-[50px] h-[500px]">
        left right section
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
