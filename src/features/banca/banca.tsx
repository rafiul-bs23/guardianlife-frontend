import HeaderImage from "../../assets/images/category/headerImage.jpg";
import Header from "../../shared/Components/Header.tsx";
import {StatsBar} from "./components/StatsBar.tsx";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import {WhatIsBancassurance} from "./components/WhatIsBancassurance.tsx";
import {FacilitiesOfBancassurance} from "./components/FacilitiesOfBancassurance.tsx";
import {BenefitsOfBancassurance} from "./components/BenefitsOfBancassurance.tsx";
import {BancassuranceProductSolutions} from "./components/BancassuranceProductSolutions.tsx";

const Banca = () => {
  return (
    <section>
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

      <StatsBar/>

      <div className="mt-[77px]">
        <Contentheader
          title="Why Bancassurance Matters"
          description="In an evolving financial landscape, banks are increasingly exposed to credit risk while customers seek greater financial security. Bancassurance bridges this gap by integrating life insurance protection directly into banking products—ensuring continuity, protection, and long-term value for all stakeholders."
        />
        <div className="flex mt-[90px]">
          <div className="w-1/2 pl-[210px] pr-8">
            <WhatIsBancassurance/>
          </div>
          <div className="w-1/2 pl-8">
            <img
              src="https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg"
              alt="image"
              className="inset-0 w-[649px] h-[505px] object-cover rounded-[35px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-[117px]">
        <Contentheader
          title="Facilities of Bancassurance with Guardian Life"
          description="We provide end-to-end Bancassurance support to ensure seamless integration and long-term success"
        />
        <div className="mt-[82px]">
          <FacilitiesOfBancassurance/>
        </div>
      </div>

      <div className="mt-[129px]">
        <Contentheader
          title="Benefits of Bancassurance"
          description="Discover how Guardian Life's Bancassurance solutions create value for both customers and banking partners"
        />
        <div className="mt-[43px]">
          <BenefitsOfBancassurance/>
        </div>
      </div>

      <div className="mt-[199px]">
        <Contentheader
          title="Bancassurance Product Solutions"
          description="Comprehensive protection solutions designed for diverse banking needs"
        />
        <div className="mt-[60px]">
          <BancassuranceProductSolutions/>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] w-full px-[214px] mt-[80px]">
        <div className="flex gap-[40px]">

          <div
            className="flex-1 min-w-0 bg-white rounded-[12px] px-[20px] py-[20px] shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
            <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
              SME Loan
            </p>
            <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
              Settlement of outstanding liabilities in case of life casualties
            </p>
          </div>

          <div
            className="flex-1 min-w-0 bg-white rounded-[12px] px-[20px] py-[20px] shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
            <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
              Employee Insurance
            </p>
            <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
              Customized insurance solutions bundled with salary or employee accounts
            </p>
            <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
              Comprehensive coverage at minimal cost
            </p>
          </div>

        </div>
        <div className="flex gap-[12px]">
          <div className="w-full bg-[#EEF1F8] rounded-[12px] px-[20px] py-[20px] flex gap-[24px]">
            <div className="flex-1">
              <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
                Depository Insurance Products
              </p>
              <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
                Cash assurance for current and savings accounts
              </p>
            </div>
            <div className="flex-1 flex items-center">
              <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
                Customized insurance solutions for DPS and Fixed Deposits
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Banca;
