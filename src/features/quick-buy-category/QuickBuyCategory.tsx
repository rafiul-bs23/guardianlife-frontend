import QuickBuyHeader from "./components/QuickBuyHeader.tsx";
import { useHeader } from "./hooks/useHeader.ts";
import ProductCard from "../../shared/Components/ProductCard.tsx";
import FAQ from "../../shared/Components/Faq.tsx";
import { WhyChooseQuickBuy } from "../../shared/Components/WhyChooseQuickBuy.tsx";

import { apiResponse } from "./api/mockData";

const QuickBuyCategory = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();

  const handleViewDetails = (productCode: string): void => {
    console.log(`View details clicked for: ${productCode}`);
  };

  const handleBuyNow = (productCode: string): void => {
    console.log(`Buy now clicked for: ${productCode}`);
  };

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

      <div className="flex flex-col items-center mt-12 lg:mt-[84px] px-4 lg:px-0">
        <p className="font-bold text-[28px] lg:text-[36px] leading-[32px] text-center tracking-[0.02em] uppercase">
          term life insurance
        </p>
        <p className="font-normal text-[18px] lg:text-[24px] leading-[32px] text-center tracking-[0.02em] text-black w-full max-w-[1039px] mt-8">
          Get instant coverage with our digital-first policies. Complete your purchase online in minutes with immediate
          policy issuance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
          {apiResponse.data.products.map((product) => (
            <ProductCard
              key={product.productCode}
              thumbnailUrl={product.thumbnailUrl}
              title={product.title}
              points={product.points}
              description={product.description}
              onViewDetails={() => handleViewDetails(product.productCode)}
              onBuyNow={() => handleBuyNow(product.productCode)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-16 lg:mt-[143px] px-4 lg:px-0">
        <p className="font-bold text-[28px] lg:text-[36px] leading-[32px] text-center tracking-[0.02em] uppercase">
          savings plan
        </p>
        <p className="font-normal text-[18px] lg:text-[24px] leading-[32px] text-center tracking-[0.02em] text-black w-full max-w-[1039px] mt-8">
          Offers a dual benefit of life insurance protection and a savings component. Typically, a policyholder pays monthly premiums.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
          {apiResponse.data.products.map((product) => (
            <ProductCard
              key={product.productCode}
              thumbnailUrl={product.thumbnailUrl}
              title={product.title}
              points={product.points}
              description={product.description}
              onViewDetails={() => handleViewDetails(product.productCode)}
              onBuyNow={() => handleBuyNow(product.productCode)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-16 lg:mt-[143px] px-4 lg:px-0">
        <p className="font-bold text-[28px] lg:text-[36px] leading-[32px] text-center tracking-[0.02em] uppercase">
          special insurance plans
        </p>
        <p className="font-normal text-[18px] lg:text-[24px] leading-[32px] text-center tracking-[0.02em] text-black w-full max-w-[1039px] mt-8">
          Special insurance plans are designed to cover the financial risks in accidental indemnity, personal accident coverage, critical illnesses like Cancer Care, Cardiac Insurance etc.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
          {apiResponse.data.products.map((product) => (
            <ProductCard
              key={product.productCode}
              thumbnailUrl={product.thumbnailUrl}
              title={product.title}
              points={product.points}
              description={product.description}
              onViewDetails={() => handleViewDetails(product.productCode)}
              onBuyNow={() => handleBuyNow(product.productCode)}
            />
          ))}
        </div>
      </div>
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
