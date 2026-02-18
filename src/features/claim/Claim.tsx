import ClaimFeatures from './components/ClaimFeatures';
// import TrackClaim from './components/TrackClaim';
import CustomerStories from './components/CustomerStories';
import AppDownloadSection from '../../shared/Components/AppDownloadSection';
import CashlessNetwork from '../../shared/Components/CashlessNetwork';
import ClaimDocuments from './components/ClaimDocuments';
import { mockClaimData } from './api/mockData';
import { useClaimDocuments } from './hooks/useClaimDocuments';
import ClaimHeader from './components/ClaimHeader';
import { useHeader } from './hooks/useHeader';

const Claim = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();
  const { data } = useClaimDocuments();

  if (isHeaderLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {headerData && <ClaimHeader data={headerData} />}
      <ClaimFeatures data={mockClaimData.featuresSection} />
      {/* <TrackClaim data={mockClaimData.claimStatus} /> */}
      <CashlessNetwork />
      <CustomerStories data={mockClaimData.customerStories} />
      {data && <ClaimDocuments data={data} />}
      <AppDownloadSection />
    </main>
  );
};

export default Claim;
