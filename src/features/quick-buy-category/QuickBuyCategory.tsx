import QuickBuyHeader from "./components/QuickBuyHeader.tsx";
import { useHeader } from "./hooks/useHeader.ts";
import ProductCard from "../../shared/Components/ProductCard.tsx";
import FAQ from "../../shared/Components/Faq.tsx";
import { WhyChooseQuickBuy } from "../../shared/Components/WhyChooseQuickBuy.tsx";

import { useCategoryProducts } from "../category/hooks/useCategoryProducts.ts";
import Contentheader from "../../shared/Components/Contentheader.tsx";

const QuickBuyCategory = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();

  // Fetching products for the three specific categories without passing channel since it breaks the endpoint
  const { data: termLifeProducts, isLoading: isTermLifeLoading } = useCategoryProducts(null, 'term-life', null);
  const { data: savingsProducts, isLoading: isSavingsLoading } = useCategoryProducts(null, 'savings', null);
  const { data: specialPlansProducts, isLoading: isSpecialPlansLoading } = useCategoryProducts(null, 'special-plans', null);

  if (isHeaderLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {headerData && <QuickBuyHeader data={headerData} />}

      {/* Term Life Section */}
      {!isTermLifeLoading && termLifeProducts && termLifeProducts.length > 0 && (
        <div className="flex flex-col items-center mt-12 lg:mt-[84px] px-4 lg:px-0">
          <Contentheader
            title="term life insurance"
            description="Get instant coverage with our digital-first policies. Complete your purchase online in minutes with immediate policy issuance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
            {termLifeProducts?.map((product) => (
              <ProductCard
                key={product.productCode}
                thumbnailUrl={product.thumbnailUrl}
                title={product.title}
                points={product.points}
                description={product.description}
                productCode={product.productCode}
              />
            ))}
            {(!termLifeProducts || termLifeProducts.length === 0) && (
              <p className="col-span-1 md:col-span-2 text-gray-500 text-center py-10">No term life products found.</p>
            )}
          </div>
        </div>
      )}

      {/* Savings Plan Section */}
      {!isSavingsLoading && savingsProducts && savingsProducts.length > 0 && (
        <div className="flex flex-col items-center mt-16 lg:mt-[143px] px-4 lg:px-0">
          <Contentheader
            title="savings plan"
            description="Offers a dual benefit of life insurance protection and a savings component. Typically, a policyholder pays monthly premiums."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
            {savingsProducts?.map((product) => (
              <ProductCard
                key={product.productCode}
                thumbnailUrl={product.thumbnailUrl}
                title={product.title}
                points={product.points}
                description={product.description}
                productCode={product.productCode}
              />
            ))}
            {(!savingsProducts || savingsProducts.length === 0) && (
              <p className="col-span-1 md:col-span-2 text-gray-500 text-center py-10">No savings products found.</p>
            )}
          </div>
        </div>
      )}

      {/* Special Plans Section */}
      {!isSpecialPlansLoading && specialPlansProducts && specialPlansProducts.length > 0 && (
        <div className="flex flex-col items-center mt-16 lg:mt-[143px] px-4 lg:px-0">
          <Contentheader
            title="special insurance plans"
            description="Special insurance plans are designed to cover the financial risks in accidental indemnity, personal accident coverage, critical illnesses like Cancer Care, Cardiac Insurance etc."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
            {specialPlansProducts?.map((product) => (
              <ProductCard
                key={product.productCode}
                thumbnailUrl={product.thumbnailUrl}
                title={product.title}
                points={product.points}
                description={product.description}
                productCode={product.productCode}
              />
            ))}
            {(!specialPlansProducts || specialPlansProducts.length === 0) && (
              <p className="col-span-1 md:col-span-2 text-gray-500 text-center py-10">No special insurance plans found.</p>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-center mt-16 lg:mt-[83px] px-4">
        <WhyChooseQuickBuy />
      </div>
      <div className="mt-16 lg:mt-[85px]">
        <FAQ />
      </div>
    </main>
  );
};

export default QuickBuyCategory;
