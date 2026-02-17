import QuickProductView from '../../shared/Components/QuickProductView';
import ProductJourney from './components/ProductJourney';
import KeyHighlights from './components/KeyHighlights';
import SupplementaryBenefits from './components/SupplementaryBenefits';
import PlanBreakdown from './components/PlanBreakdown';
import WhyChooseCoverage from './components/WhyChooseCoverage';
import ProductSupport from '../../shared/Components/ProductSupport';
import LocalAgent from './components/LocalAgent';
import { useProduct } from './hooks/useProduct';
import PlanBenefitsSection from '../../shared/Components/PlanBenefitsSection';
import ProductHeader from './components/ProductHeader';
import { useHeader } from './hooks/useHeader';

const ProductDetails = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader('1');
  const { data } = useProduct('1');

  return (
    <>
      {!isHeaderLoading && headerData && <ProductHeader data={headerData} />}
      <section>
        {data && <QuickProductView data={data.quickProductSection} />}
        {data && <ProductJourney data={data.productJourneySection} />}
        {data && <KeyHighlights data={data.keyHighlightsSection} />}
        {data && <PlanBenefitsSection data={data.planBenefitsSection} />}
        {data && <SupplementaryBenefits data={data.supplementaryBenefitsSection} />}
        {data && <PlanBreakdown data={data.planBreakdownSection} />}
        {data && (
          <ProductSupport
            documents={data.productDocumentsSection}
            learnMore={data.learnMoreSection}
          />
        )}
        {data && <WhyChooseCoverage data={data.whyChooseCoverageSection} />}
        <LocalAgent />
      </section>
    </>
  );
};

export default ProductDetails;
