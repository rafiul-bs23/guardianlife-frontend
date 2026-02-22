import Header from "../../shared/Components/Header.tsx";
import HeaderImage from "../../assets/images/category/headerImage.jpg"
import ProductCard from "../../shared/Components/ProductCard.tsx";
import ProductCardCompact from "./ProductCardCompact.tsx";
import FAQ from "../../shared/Components/Faq.tsx";
import { useState } from "react";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import { WhyChooseQuickBuy } from "../../shared/Components/WhyChooseQuickBuy.tsx";

import { apiResponse } from "./api/mockData";

const Category = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <div className="overflow-hidden">
      <Header
        backgroundImage={HeaderImage}
        title={
          <h1 className="text-4xl font-bold leading-tight">
            SECURE YOUR <span className="text-[#1E3161]">FAMILY’S FUTURE</span>, <br />
            PLAN YOUR RETIREMENT, OR <br />
            PROTECT YOUR HEALTH — <br />
            <span className="text-[#1E3161]">WE’VE GOT YOU COVERED.</span>
          </h1>
        }
      />

      <div className="px-4">
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
  );
};

export default Category;
