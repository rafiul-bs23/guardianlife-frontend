import QuickBuyHeader from './components/QuickBuyHeader';
import { useHeader } from './hooks/useHeader';
import { useProductBuyDetails } from './hooks/useProductBuyDetails';
import PlanBenefitsSection from '../../shared/Components/PlanBenefitsSection';
import ProductSupport from '../../shared/Components/ProductSupport';
import QuickProductView from '../../shared/Components/QuickProductView';
import ProductCalculator from './components/ProductCalculator';

const QuickBuyDetails = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader('quick-buy-1');
  const { data, isLoading, error } = useProductBuyDetails('quick-buy-1');

  if (isLoading || isHeaderLoading) {
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
      {data && (
        <QuickProductView
          data={data.quickProductSection}
          title="QUICK PRODUCT VIEW"
          subtitle="Key Plan Details at a glance"
        />
      )}

      {/* Product Calculator - Interactive section from screenshot */}
      {data && <ProductCalculator data={data.productCalculatorSection} />}

      {/* Plan Benefits - Reused from product-details if structure matches */}
      {data && <PlanBenefitsSection data={data.planBenefitsSection as any} />}

      {/* Support & Learn More - Reused from product-details */}
      {data && (
        <ProductSupport
          documents={data.productDocumentsSection as any}
          learnMore={data.learnMoreSection as any}
        />
      )}


    </section>
  );
};

export default QuickBuyDetails;
