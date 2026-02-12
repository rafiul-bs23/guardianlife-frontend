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

const ProductDetails = () => {
  const { data } = useProduct('1');

  return (
    <>
      <header className='bg-red-500 text-white p-4 text-center'>
        <h1>Header</h1>
      </header>
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
