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

import { useParams } from 'react-router-dom';
import FAQ from '../../shared/Components/Faq';
import { useHeader } from '../../shared/hooks/useHeader';

const ProductDetails = () => {
  const { product_code } = useParams();
  const { data: headerData, isLoading: isHeaderLoading } = useHeader(`product-${product_code}`);
  const { data, isLoading: isProductLoading } = useProduct(product_code as string);

  if (isHeaderLoading || isProductLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }

  return (
    <>
      {headerData && <ProductHeader data={headerData} planNumbers={data?.plan_numbers} supplementaryBenefits={data?.supplementary_benefits_section} />}
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
        <LocalAgent product_code={product_code as string} />
        <FAQ />
      </section>
    </>
  );
};

export default ProductDetails;
