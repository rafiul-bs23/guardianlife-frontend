import { useTranslation } from 'react-i18next';
import ClaimFeatures from './components/ClaimFeatures';
import CustomerStories from './components/CustomerStories';
import AppDownloadSection from '../../shared/Components/AppDownloadSection';
import CashlessNetwork from '../../shared/Components/CashlessNetwork';
import ClaimDocuments from './components/ClaimDocuments';
import { mockClaimData } from './api/mockData';
import { useClaimDocuments } from './hooks/useClaimDocuments';
import ClaimHeader from './components/ClaimHeader';
import FAQ from '../../shared/Components/Faq';
import { useHeader } from '../../shared/hooks/useHeader';
import type { FeaturesSection, CustomerStoriesData } from './types';

const Claim = () => {
  const { t } = useTranslation('claim');
  const { data: headerData, isLoading: isHeaderLoading } = useHeader("claim-info");
  const { data } = useClaimDocuments();

  // Get features and customer stories data from locale with fallback images from mockData
  const localizedFeatures = t('features', { returnObjects: true }) as FeaturesSection;
  const featuresData: FeaturesSection = {
    title: localizedFeatures?.title || mockClaimData?.features_section?.title,
    subtitle: localizedFeatures?.subtitle || mockClaimData?.features_section?.subtitle,
    items: Array.isArray(localizedFeatures?.items)
      ? (localizedFeatures.items as any[]).map((item, idx) => ({
          ...item,
          image: mockClaimData?.features_section?.items[idx]?.image || 'https://placehold.co/40x40',
        }))
      : mockClaimData?.features_section?.items || [],
  };

  const localizedStories = t('customer_stories', { returnObjects: true }) as CustomerStoriesData;
  const storiesData: CustomerStoriesData = {
    title: localizedStories?.title || mockClaimData?.customer_stories?.title,
    subtitle: localizedStories?.subtitle || mockClaimData?.customer_stories?.subtitle,
    video_thumbnail: mockClaimData?.customer_stories?.video_thumbnail || '',
    video_url: mockClaimData?.customer_stories?.video_url || '',
  };

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
      <ClaimFeatures data={featuresData} />
      {/* <TrackClaim data={mockClaimData?.claim_status} /> */}
      <CashlessNetwork />
      <CustomerStories data={storiesData} />
      {data && <ClaimDocuments data={data} />}
      <AppDownloadSection />
      <FAQ />
    </main>
  );
};

export default Claim;
