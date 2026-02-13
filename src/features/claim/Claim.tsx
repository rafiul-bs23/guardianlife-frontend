import ClaimFeatures from './components/ClaimFeatures';
import TrackClaim from './components/TrackClaim';
import CustomerStories from './components/CustomerStories';
import AppDownloadSection from '../../shared/Components/AppDownloadSection';
import CashlessNetwork from '../../shared/Components/CashlessNetwork';
import ClaimDocuments from './components/ClaimDocuments';
import { mockClaimData } from './api/mockData';
import { useClaimDocuments } from './hooks/useClaimDocuments';

const Claim = () => {
  const { data } = useClaimDocuments();
  return (
    <main className="min-h-screen bg-white">
      <ClaimFeatures data={mockClaimData.featuresSection} />
      <TrackClaim data={mockClaimData.claimStatus} />
      <CashlessNetwork />
      <CustomerStories data={mockClaimData.customerStories} />
      {data && <ClaimDocuments data={data} />}
      <AppDownloadSection />
    </main>
  );
};

export default Claim;
