import { StatsBar } from "./components/StatsBar.tsx";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import { WhatIsBancassurance } from "./components/WhatIsBancassurance.tsx";
import { FacilitiesOfBancassurance } from "./components/FacilitiesOfBancassurance.tsx";
import { BenefitsOfBancassurance } from "./components/BenefitsOfBancassurance.tsx";
import { BancassuranceProductSolutions } from "./components/BancassuranceProductSolutions.tsx";
import { BankPartners } from "./components/BankPartners.tsx";
import FAQ from "../../shared/Components/Faq.tsx";
import BancaHeader from "./components/BancaHeader.tsx";
import { useHeader } from "./hooks/useHeader.ts";

const Banca = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();

  if (isHeaderLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {headerData && <BancaHeader data={headerData} />}

      <StatsBar />

      <div className="mt-16 lg:mt-[77px] px-4 lg:px-0">
        <Contentheader
          title="Why Bancassurance Matters"
          description="In an evolving financial landscape, banks are increasingly exposed to credit risk while customers seek greater financial security. Bancassurance bridges this gap by integrating life insurance protection directly into banking products—ensuring continuity, protection, and long-term value for all stakeholders."
        />
        <div className="flex flex-col-reverse lg:flex-row mt-12 mb-12 lg:mt-[90px] gap-8 lg:gap-0 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 lg:pl-[50px] xl:pl-[210px] lg:pr-8">
            <WhatIsBancassurance />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 flex justify-center">
            <img
              src="https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg"
              alt="image"
              className="w-full max-w-[649px] h-auto lg:h-[505px] object-cover rounded-[35px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-[117px] px-4 lg:px-0">
        <Contentheader
          title="Facilities of Bancassurance with Guardian Life"
          description="We provide end-to-end Bancassurance support to ensure seamless integration and long-term success"
        />
        <div className="mt-12 lg:mt-[82px]">
          <FacilitiesOfBancassurance />
        </div>
      </div>

      <div className="mt-16 lg:mt-[129px] px-4 lg:px-0">
        <Contentheader
          title="Benefits of Bancassurance"
          description="Discover how Guardian Life's Bancassurance solutions create value for both customers and banking partners"
        />
        <div className="mt-12 lg:mt-[43px]">
          <BenefitsOfBancassurance />
        </div>
      </div>

      <div className="mt-16 lg:mt-[199px] px-4 lg:px-0">
        <Contentheader
          title="Bancassurance Product Solutions"
          description="Comprehensive protection solutions designed for diverse banking needs"
        />
        <div className="mt-12 lg:mt-[60px]">
          <BancassuranceProductSolutions />
        </div>
      </div>

      <div className="flex flex-col gap-[40px] w-full px-4 lg:px-[100px] xl:px-[214px] mt-16 md:mt-[80px]">
        <div className="flex flex-col lg:flex-row gap-[40px]">

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
          <div className="w-full bg-[#EEF1F8] rounded-[12px] px-6 py-6 flex flex-col lg:flex-row gap-6 lg:gap-[24px]">
            <div className="flex-1">
              <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
                Depository Insurance Products
              </p>
              <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em] mt-2">
                Cash assurance for current and savings accounts
              </p>
            </div>
            <div className="flex-1 flex items-start lg:items-center">
              <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
                Customized insurance solutions for DPS and Fixed Deposits
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-[100px] pt-16 lg:pt-[96px] bg-[#F6F6F6] px-4 lg:px-0">
        <Contentheader
          title="Our Bancassurance Partners"
          description="We are proud to collaborate with leading banks in Bangladesh"
        />
        <div className="mt-12 lg:mt-[199px] pb-12">
          <BankPartners />
        </div>
      </div>

      <div className="mt-16 lg:mt-[300px] px-4 lg:px-0">
        <FAQ />
      </div>

    </main>
  );
};

export default Banca;

