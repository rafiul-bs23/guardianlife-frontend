import { StatsBar } from "./components/StatsBar.tsx";
import { WhyBancassuranceMattersSection } from "./components/WhyBancassuranceMattersSection.tsx";
import { FacilitiesOfBancassuranceSection } from "./components/FacilitiesOfBancassuranceSection.tsx";
import { BenefitsOfBancassuranceSection } from "./components/BenefitsOfBancassuranceSection.tsx";
import { BancassuranceProductSolutionsSection } from "./components/BancassuranceProductSolutionsSection.tsx";
import { AdditionalProductsSection } from "./components/AdditionalProductsSection.tsx";
import { BankPartnersSection } from "./components/BankPartnersSection.tsx";
import FAQ from "../../shared/Components/Faq.tsx";
import BancaHeader from "./components/BancaHeader.tsx";
import { useHeader } from "./hooks/useHeader.ts";
import { useRef } from "react";

const Banca = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();
  const bancassurancePartnersRef = useRef<HTMLDivElement>(null);
  const scrollTobancasurancePartners = () =>
    bancassurancePartnersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (isHeaderLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-white">
      {headerData && <BancaHeader data={headerData} onScrollToBancasurancePartners={scrollTobancasurancePartners} />}

      <StatsBar />

      <WhyBancassuranceMattersSection />

      <FacilitiesOfBancassuranceSection />

      <BenefitsOfBancassuranceSection />

      <BancassuranceProductSolutionsSection />

      <AdditionalProductsSection />
      <div ref={bancassurancePartnersRef}>
        <BankPartnersSection />
      </div>
      <FAQ />

    </main>
  );
};

export default Banca;

