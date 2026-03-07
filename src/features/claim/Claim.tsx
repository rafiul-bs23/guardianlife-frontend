import ClaimFeatures from './components/ClaimFeatures';
// import TrackClaim from './components/TrackClaim';
import CustomerStories from './components/CustomerStories';
import AppDownloadSection from '../../shared/Components/AppDownloadSection';
import CashlessNetwork from '../../shared/Components/CashlessNetwork';
import ClaimDocuments from './components/ClaimDocuments';
import { mockClaimData } from './api/mockData';
import { useClaimDocuments } from './hooks/useClaimDocuments';
import ClaimHeader from './components/ClaimHeader';
import FAQ from '../../shared/Components/Faq';
import { useHeader } from '../../shared/hooks/useHeader';

const Claim = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader("claim-info");
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
      <ClaimFeatures data={mockClaimData?.features_section} />
      {/* <TrackClaim data={mockClaimData?.claim_status} /> */}
      <CashlessNetwork />
      <CustomerStories data={mockClaimData?.customer_stories} />
      {data && <ClaimDocuments data={data} />}
      <AppDownloadSection />
      <FAQ />
    </main>
  );
};

export default Claim;
