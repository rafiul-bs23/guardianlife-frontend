import QuickProductView from '../../shared/Components/QuickProductView';
import ProductJourney from './components/ProductJourney';
import KeyHighlights from './components/KeyHighlights';
import SupplementaryBenefits from './components/SupplementaryBenefits';
import PlanBreakdown from './components/PlanBreakdown';
import ProductSupport from '../../shared/Components/ProductSupport';
import LocalAgent from './components/LocalAgent';
import { useProduct } from './hooks/useProduct';
import PlanBenefitsSection from '../../shared/Components/PlanBenefitsSection';
import ProductHeader from './components/ProductHeader';
import { useHeader } from './hooks/useHeader';

import { useParams } from 'react-router-dom';
import FAQ from '../../shared/Components/Faq';

const ProductDetails = () => {
  const { product_code } = useParams();
  console.log("product_code:", product_code);

  const { data: headerData, isLoading: isHeaderLoading } = useHeader('1');
  const { data } = useProduct(product_code as string);

  return (
    <>
      {!isHeaderLoading && headerData && <ProductHeader data={headerData} />}
      <section>
        {data?.quick_product_section && <QuickProductView data={data.quick_product_section} />}
        {data?.product_journey_section && <ProductJourney data={data.product_journey_section} />}
        {data?.key_highlights_section && <KeyHighlights data={data.key_highlights_section} />}
        {data?.plan_benefits_section && <PlanBenefitsSection data={data.plan_benefits_section} />}
        {data?.supplementary_benefits_section && <SupplementaryBenefits data={data.supplementary_benefits_section} />}
        {data?.plan_breakdown_section && <PlanBreakdown data={data.plan_breakdown_section} />}
        {data?.product_documents_section && data?.learn_more_section && (
          <ProductSupport
            documents={data.product_documents_section}
            learnMore={data.learn_more_section}
          />
        )}
        <LocalAgent />
        <FAQ />
      </section>
    </>
  );
};

export default ProductDetails;
