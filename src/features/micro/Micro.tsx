import WhyMicroMatters from './components/WhyMicroMatters';
import MicroSolutions from './components/MicroSolutions';
import WhyMicroinsurance from './components/WhyMicroinsurance';
import MicroImpact from './components/MicroImpact';
import MicroPartners from './components/MicroPartners';
import MicroContactForm from './components/MicroContactForm';
import AppDownloadSection from '../../shared/Components/AppDownloadSection';
import CashlessNetwork from '../../shared/Components/CashlessNetwork';
import { mockMicroData } from './api/mockData';

const Micro = () => {
  return (
    <main className="min-h-screen bg-white pt-20">
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
