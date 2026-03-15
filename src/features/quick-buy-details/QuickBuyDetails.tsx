import QuickBuyHeader from './components/QuickBuyHeader';

import { useProductBuyDetails } from './hooks/useProductBuyDetails';
import PlanBenefitsSection from '../../shared/Components/PlanBenefitsSection';
import ProductSupport from '../../shared/Components/ProductSupport';
import QuickProductView from '../../shared/Components/QuickProductView';
import ProductCalculator from './components/ProductCalculator';
import FAQ from '../../shared/Components/Faq';
import { useParams } from 'react-router-dom';
import { useHeader } from '../../shared/hooks/useHeader';
import { useProductInformation } from './hooks/useProductInformation.ts';

const QuickBuyDetails = () => {
  const { product_code } = useParams();
  const { data: headerData, isLoading: isHeaderLoading } = useHeader(`product-${product_code}`);
  const { data, isLoading, error } = useProductBuyDetails(product_code as string);
  const planId = data?.glil_plan_id;
  const planNo = data?.plan_numbers?.[0]?.plan_no;

  const isCalculatorRestricted = product_code === 'cancer-care-plan' || product_code === 'accident-care';

  const { data: calcData, isLoading: isCalcLoading } = useProductInformation(
    !isCalculatorRestricted ? planId : undefined,
    !isCalculatorRestricted ? planNo : undefined
  );

  if (isLoading || isHeaderLoading || (!isCalculatorRestricted && isCalcLoading)) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">Error loading details</h2>
        <p className="text-gray-500">{error}</p>
      </div>
    );
  }

  return (
    <section>
      {!isHeaderLoading && headerData && <QuickBuyHeader data={headerData} />}

      {/* Quick Product View - Use shared component with design-specific props */}
      {data?.quick_product_section && (
        <QuickProductView
          data={data?.quick_product_section}
          title="QUICK PRODUCT VIEW"
          subtitle="Key Plan Details at a glance"
        />
      )}

      {/* Product Calculator - Interactive section from screenshot */}
      {!isCalculatorRestricted && calcData && <ProductCalculator dynamicData={calcData} />}

      {/* Plan Benefits - Reused from product-details if structure matches */}
      {data?.plan_benefits_section && <PlanBenefitsSection data={data?.plan_benefits_section as any} />}

      {/* Support & Learn More - Reused from product-details */}
      {data?.product_documents_section && data?.learn_more_section && (
        <ProductSupport
          documents={data?.product_documents_section as any}
          learnMore={data?.learn_more_section as any}
        />
      )}

      <FAQ />

    </section>
  );
};

export default QuickBuyDetails;
