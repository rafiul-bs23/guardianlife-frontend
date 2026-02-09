import Header from "../../shared/Components/Header.tsx";
import HeaderImage from "../../assets/images/category/headerImage.jpg"
import ProductCard from "../../shared/Components/ProductCard.tsx";
import ProductCardCompact from "./ProductCardCompact.tsx";
import WhyChooseQuickBuyImage from "../../assets/images/quickBuyCategory/whyChooseQuickBuy.png";
import FAQ from "../../shared/Components/Faq.tsx";
import {useState} from "react";

const Category = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const apiResponse = {
    "success": true,
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
    { id: 0, title: 'For You'},
    { id: 1, title: 'For Your Family'},
    { id: 2, title: 'Retirement'},
    { id: 3, title: 'Islamic'},
  ];
  const handleViewDetails = (productCode: string): void => {
    console.log(`View details clicked for: ${productCode}`);
  };

  const handleBuyNow = (productCode: string): void => {
    console.log(`Buy now clicked for: ${productCode}`);
  };
  return (
    <div>
      <Header
        backgroundImage={HeaderImage}
        title={
          <h1 className="text-4xl font-bold leading-tight">
            SECURE YOUR <span className="text-[#1E3161]">FAMILY’S FUTURE</span>, <br/>
            PLAN YOUR RETIREMENT, OR <br/>
            PROTECT YOUR HEALTH — <br/>
            <span className="text-[#1E3161]">WE’VE GOT YOU COVERED.</span>
          </h1>
        }
      />

      <div>
        <div className="flex gap-3 flex-wrap justify-center mt-[14px]">
          {tabs.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-900'
              }`}
            >
              {solution.title}
            </button>
          ))}

        </div>
      </div>

      <div className="flex flex-col items-center mt-[73px]">
        <p className="font-bold text-[36px] leading-[32px] text-center tracking-[0.02em] uppercase">
          for your insurance solutions
        </p>
        <p className="font-normal text-[24px] leading-[32px] text-center tracking-[0.02em] text-black w-[1039px] mt-8">
          Comprehensive protection plans tailored to your needs. Submit your application and let our experts guide you
          through the process.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-[84px]">
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

      <div className="flex flex-col items-center mt-[143px]">
        <p className="font-bold text-[36px] leading-[32px] text-center tracking-[0.02em] uppercase">
          Buy Policy Instantly – No Waiting, No Hassle
        </p>
        <p className="font-normal text-[24px] leading-[32px] text-center tracking-[0.02em] text-black w-[1039px] mt-8">
          Get instant coverage with our digital-first policies. Complete your purchase online in minutes with immediate
          policy issuance.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center mt-[84px]">
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
      <div className="flex justify-center">
        <div className="h-[257px] w-[903px] mt-[83px]">
          <img
            src={WhyChooseQuickBuyImage}
            alt="image"
            className="object-cover w-[903px]"
          />
        </div>
      </div>
      <div className="mt-[85px]">
        <FAQ/>
      </div>
    </div>
  );
};

export default Category;
