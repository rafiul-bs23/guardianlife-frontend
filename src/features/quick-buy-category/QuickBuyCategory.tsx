import QuickBuyHeader from "./components/QuickBuyHeader.tsx";
import { useHeader } from "./hooks/useHeader.ts";
import ProductCard from "../../shared/Components/ProductCard.tsx";
import WhyChooseQuickBuyImage from "../../assets/images/quickBuyCategory/whyChooseQuickBuy.png"
import FAQ from "../../shared/Components/Faq.tsx";

const QuickBuyCategory = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useHeader();
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
          "thumbnailUrl": "https://www.guardianlife.com.bd/static/media/WHO-WE-ARE.d1f9475da56d862b882a.jpg",
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
        }
      ]
    }
  };
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
      {headerData && <QuickBuyHeader data={headerData} />}

      <div className="flex flex-col items-center mt-[84px]">
        <p className="font-bold text-[36px] leading-[32px] text-center tracking-[0.02em] uppercase">
          term life insurance
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

      <div className="flex flex-col items-center mt-[143px]">
        <p className="font-bold text-[36px] leading-[32px] text-center tracking-[0.02em] uppercase">
          savings plan
        </p>
        <p className="font-normal text-[24px] leading-[32px] text-center tracking-[0.02em] text-black w-[1039px] mt-8">
          Offers a dual benefit of life insurance protection and a savings component. Typically, a policyholder pays monthly premiums.
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

      <div className="flex flex-col items-center mt-[143px]">
        <p className="font-bold text-[36px] leading-[32px] text-center tracking-[0.02em] uppercase">
          special insurance plans
        </p>
        <p className="font-normal text-[24px] leading-[32px] text-center tracking-[0.02em] text-black w-[1039px] mt-8">
          Special insurance plans are designed to cover the financial risks in accidental indemnity, personal accident coverage, critical illnesses like Cancer Care, Cardiac Insurance etc.
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
        <FAQ />
      </div>
    </main>
  );
};

export default QuickBuyCategory;
