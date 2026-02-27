import { useRef } from 'react';
import WhyMicroMatters from './components/WhyMicroMatters';
import MicroSolutions from './components/MicroSolutions';
import WhyMicroinsurance from './components/WhyMicroinsurance';
import MicroImpact from './components/MicroImpact';
import PartnersSlider from '../../shared/Components/PartnersSlider';
import MicroContactForm from './components/MicroContactForm';
import AppDownloadSection from '../../shared/Components/AppDownloadSection';
import CashlessNetwork from '../../shared/Components/CashlessNetwork';
import { mockMicroData } from './api/mockData';
import MicroHeader from './components/MicroHeader';
import { useHeader } from './hooks/useHeader';
import FAQ from '../../shared/Components/Faq';

const Micro = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();
  const solutionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSolutions = () =>
    solutionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (isHeaderLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {headerData && (
        <MicroHeader
          data={headerData}
          onScrollToSolutions={scrollToSolutions}
          onScrollToContact={scrollToContact}
        />
      )}
      <WhyMicroMatters data={mockMicroData.whyMicroMatters} />
      <div ref={solutionsRef}>
        <MicroSolutions />
      </div>
      <WhyMicroinsurance data={mockMicroData.whyMicroinsurance} />
      <MicroImpact />
      <CashlessNetwork />
      <PartnersSlider channel="micro" />
      <AppDownloadSection />
      <div ref={contactRef}>
        <MicroContactForm />
      </div>
      <FAQ />
    </main>
  );
};

export default Micro;
