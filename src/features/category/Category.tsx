import { useState } from "react";
import ProductCard from "../../shared/Components/ProductCard.tsx";
import ProductCardCompact from "./ProductCardCompact.tsx";
import WhyChooseQuickBuyImage from "../../assets/images/quickBuyCategory/whyChooseQuickBuy.png";
import FAQ from "../../shared/Components/Faq.tsx";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import CategoryHeader from "./components/CategoryHeader.tsx";
import { useHeader } from "./hooks/useHeader.ts";

const Category = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();
  const [activeIndex, setActiveIndex] = useState(0);

  const apiResponse = {
    "status": true,
    "transactionId": "GLIL-TXN-ID",
    "data": {
      "channel": "retail",
      "category": null,
      "subcategory": null,
      "products": [
        {
          "title": "NRB Savings Plan",
          "productCode": "NRB-SP",
          "logoUrl": null,
          "thumbnailUrl": "https://www.guardianlife.com.bd/static/media/easylife-vission.0fcd42a6685561cf8eb4.jpg",
          "description": "Jaya offers monthly savings with a coverage & critical illness benefit specially designed for women. Start from 350 taka monthly deposit & get up to 5 lac taka critical illness coverage. To get maximum interest or bonus choose a longer period of the policy term.",
          "footer": null,
          "points": [
            "Comprehensive life coverage",
            "Flexible premium options",
            "Family financial security"
          ]
        },
        {
          "title": "Jaya",
          "productCode": "JAYA-01",
          "logoUrl": "https://guardian-life-website-example.com/assets/images/nrb-savingslogo.png",
          "thumbnailUrl": "https://www.guardianlife.com.bd/static/media/WHO-WE-ARE.d1f9475da56d862b882a.jpg",
          "description": "Jaya offers monthly savings with a coverage & critical illness benefit specially designed for women. Start from 350 taka monthly deposit & get up to 5 lac taka critical illness coverage. To get maximum interest or bonus choose a longer period of the policy term.",
          "footer": "Ideal for digital buyers",
          "points": [
            "Comprehensive life coverage",
            "Flexible premium options",
            "Family financial security"
          ]
        },
        {
          "title": "Jaya",
          "productCode": "JAYA-01",
          "logoUrl": "https://guardian-life-website-example.com/assets/images/nrb-savingslogo.png",
          "thumbnailUrl": "https://www.guardianlife.com.bd/static/media/easylife-vission.0fcd42a6685561cf8eb4.jpg",
          "description": "Jaya offers monthly savings with a coverage & critical illness benefit specially designed for women. Start from 350 taka monthly deposit & get up to 5 lac taka critical illness coverage. To get maximum interest or bonus choose a longer period of the policy term.",
          "footer": "Ideal for digital buyers",
          "points": [
            "Comprehensive life coverage",
            "Flexible premium options",
            "Family financial security"
          ]
        },
        {
          "title": "Jaya",
          "productCode": "JAYA-01",
          "logoUrl": "https://guardian-life-website-example.com/assets/images/nrb-savingslogo.png",
          "thumbnailUrl": "https://www.guardianlife.com.bd/static/media/WHO-WE-ARE.d1f9475da56d862b882a.jpg",
          "description": "Jaya offers monthly savings with a coverage & critical illness benefit specially designed for women. Start from 350 taka monthly deposit & get up to 5 lac taka critical illness coverage. To get maximum interest or bonus choose a longer period of the policy term.",
          "footer": "Ideal for digital buyers",
          "points": [
            "Comprehensive life coverage",
            "Flexible premium options",
            "Family financial security"
          ]
        },
        {
          "title": "Jaya",
          "productCode": "JAYA-01",
          "logoUrl": "https://guardian-life-website-example.com/assets/images/nrb-savingslogo.png",
          "thumbnailUrl": "https://www.guardianlife.com.bd/static/media/WHO-WE-ARE.d1f9475da56d862b882a.jpg",
          "description": "Jaya offers monthly savings with a coverage & critical illness benefit specially designed for women. Start from 350 taka monthly deposit & get up to 5 lac taka critical illness coverage. To get maximum interest or bonus choose a longer period of the policy term.",
          "footer": "Ideal for digital buyers",
          "points": [
            "Comprehensive life coverage",
            "Flexible premium options",
            "Family financial security"
          ]
        },
        {
          "title": "Jaya",
          "productCode": "JAYA-01",
          "logoUrl": "https://guardian-life-website-example.com/assets/images/nrb-savingslogo.png",
          "thumbnailUrl": "https://www.guardianlife.com.bd/static/media/easylife-vission.0fcd42a6685561cf8eb4.jpg",
          "description": "Jaya offers monthly savings with a coverage & critical illness benefit specially designed for women. Start from 350 taka monthly deposit & get up to 5 lac taka critical illness coverage. To get maximum interest or bonus choose a longer period of the policy term.",
          "footer": "Ideal for digital buyers",
          "points": [
            "Comprehensive life coverage",
            "Flexible premium options",
            "Family financial security"
          ]
        }
      ]
    }
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
    <main className="min-h-screen bg-white">
      {headerData && <CategoryHeader data={headerData} />}

      <div className="px-4 md:px-10 lg:px-20 py-10">
        <div className="flex gap-3 flex-wrap justify-center">
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

        <div className="flex flex-col items-center mt-12">
          <Contentheader
            title="for your insurance solutions"
            description="Explore our range of insurance products tailored to meet your unique needs and provide peace of mind."
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-12">
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

        <div className="flex flex-col items-center mt-20">
          <Contentheader
            title="Buy Policy Instantly – No Waiting, No Hassle"
            description="Get instant coverage with our digital-first policies. Complete your purchase online in minutes with immediate policy issuance."
            isUpperCase={false}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center mt-12">
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

        <div className="flex justify-center mt-20">
          <div className="w-full max-w-4xl">
            <img
              src={WhyChooseQuickBuyImage}
              alt="Why Choose Quick Buy"
              className="object-cover w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="mt-20">
          <FAQ />
        </div>
      </div>
    </main>
  );
};

export default Category;

