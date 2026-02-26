import { useState, useRef } from "react";
import ProductCard from "../../shared/Components/ProductCard.tsx";
import ProductCardCompact from "./ProductCardCompact.tsx";
import FAQ from "../../shared/Components/Faq.tsx";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import { WhyChooseQuickBuy } from "../../shared/Components/WhyChooseQuickBuy.tsx";

import { apiResponse } from "./api/mockData";
import CategoryHeader from "./components/CategoryHeader.tsx";
import { useHeader } from "./hooks/useHeader.ts";

const Category = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    setActiveIndex(0);
    tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const tabs = [
    { id: 0, title: 'For You' },
    { id: 1, title: 'For Your Family' },
    { id: 2, title: 'Retirement' },
    { id: 3, title: 'Islamic' },
  ];

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
    <div className="overflow-hidden">
      {headerData && <CategoryHeader data={headerData} onExploreClick={handleExploreClick} />}
      <div className="px-4" id="tabs" ref={tabsRef}>
        <div className="flex gap-3 flex-wrap justify-center mt-[14px]">
          {tabs.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeIndex === index
                ? 'bg-blue-900 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-900'
                }`}
            >
              {solution.title}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center mt-12 lg:mt-[73px] px-4 lg:px-0">
          <Contentheader
            title="for your insurance solutions"
            description="Working on guardianlife project:
          working on group page."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
            {apiResponse.data.products.map((product) => (
              <ProductCardCompact
                key={product.productCode}
                thumbnailUrl={product.thumbnailUrl}
                title={product.title}
                points={product.points}
                onViewDetails={() => handleViewDetails(product.productCode)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-16 lg:mt-[143px] px-4 lg:px-0">
          <Contentheader
            title="Buy Policy Instantly – No Waiting, No Hassle"
            description="Get instant coverage with our digital-first policies. Complete your purchase online in minutes with immediate
          policy issuance."
            isUpperCase={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
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
        <div className="mt-16 lg:mt-[80px]">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Category;

