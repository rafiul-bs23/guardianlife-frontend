import WhyMicroMatters from './components/WhyMicroMatters';
import MicroSolutions from './components/MicroSolutions';
import WhyMicroinsurance from './components/WhyMicroinsurance';
import MicroImpact from './components/MicroImpact';
import MicroPartners from './components/MicroPartners';
import MicroContactForm from './components/MicroContactForm';
import AppDownloadSection from '../../shared/Components/AppDownloadSection';
import CashlessNetwork from '../../shared/Components/CashlessNetwork';
import { mockMicroData } from './api/mockData';
import MicroHeader from './components/MicroHeader';
import { useHeader } from './hooks/useHeader';

const Micro = () => {
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
      {headerData && <MicroHeader data={headerData} />}
      <WhyMicroMatters data={mockMicroData.whyMicroMatters} />
      <MicroSolutions />
      <WhyMicroinsurance data={mockMicroData.whyMicroinsurance} />
      <MicroImpact />
      <CashlessNetwork />
      <MicroPartners />
      <MicroContactForm data={mockMicroData.contactForm} />
      <AppDownloadSection />
    </main>
  );
};

export default Micro;
