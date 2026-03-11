import { useTranslation } from 'react-i18next';
import ProductCard from "../../shared/Components/ProductCard.tsx";
import FAQ from "../../shared/Components/Faq.tsx";
import { WhyChooseQuickBuy } from "../../shared/Components/WhyChooseQuickBuy.tsx";

import { useCategoryProducts } from "../category/hooks/useCategoryProducts.ts";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import { useHeader } from "../../shared/hooks/useHeader.ts";
import GenericHeader from "../../shared/Components/GenericHeader.tsx";

const QuickBuyCategory = () => {
  const { t } = useTranslation('quick_buy_category');
  const { data: headerData, isLoading: isHeaderLoading } = useHeader('easylife-products-list');

  // Fetching products for the three specific categories without passing channel since it breaks the endpoint
  const { data: termLifeProducts, isLoading: isTermLifeLoading } = useCategoryProducts('digital', 'term-life', null);
  const { data: savingsProducts, isLoading: isSavingsLoading } = useCategoryProducts('digital', 'savings', null);
  const { data: specialPlansProducts, isLoading: isSpecialPlansLoading } = useCategoryProducts('digital', 'special-plans', null);

  if (isHeaderLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {headerData && <GenericHeader
        data={headerData}
        variant="immersive"
        mediaClassName="md:rounded-tr-[120px] md:rounded-bl-[120px] rounded-[10px]"
        titleClassName="!text-3xl lg:!text-[42px] !leading-normal max-w-3xl"
      />}

      {/* Term Life Section */}
      {!isTermLifeLoading && termLifeProducts && termLifeProducts.length > 0 && (
        <div className="flex flex-col items-center mt-12 lg:mt-[84px] px-4 lg:px-0">
          <Contentheader
            title={t('sections.term_life.title')}
            description={t('sections.term_life.description')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
            {termLifeProducts?.map((product) => (
              <ProductCard
                key={product.product_code}
                thumbnail_url={product.thumbnail_url}
                title={product.title}
                points={product.points}
                description={product.description}
                product_code={product.product_code}
              />
            ))}
            {(!termLifeProducts || termLifeProducts.length === 0) && (
              <p className="col-span-1 md:col-span-2 text-gray-500 text-center py-10">{t('sections.term_life.empty')}</p>
            )}
          </div>
        </div>
      )}

      {/* Savings Plan Section */}
      {!isSavingsLoading && savingsProducts && savingsProducts.length > 0 && (
        <div className="flex flex-col items-center mt-16 lg:mt-[143px] px-4 lg:px-0">
          <Contentheader
            title={t('sections.savings.title')}
            description={t('sections.savings.description')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
            {savingsProducts?.map((product) => (
              <ProductCard
                key={product.product_code}
                thumbnail_url={product.thumbnail_url}
                title={product.title}
                points={product.points}
                description={product.description}
                product_code={product.product_code}
              />
            ))}
            {(!savingsProducts || savingsProducts.length === 0) && (
              <p className="col-span-1 md:col-span-2 text-gray-500 text-center py-10">{t('sections.savings.empty')}</p>
            )}
          </div>
        </div>
      )}

      {/* Special Plans Section */}
      {!isSpecialPlansLoading && specialPlansProducts && specialPlansProducts.length > 0 && (
        <div className="flex flex-col items-center mt-16 lg:mt-[143px] px-4 lg:px-0">
          <Contentheader
            title={t('sections.special_plans.title')}
            description={t('sections.special_plans.description')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
            {specialPlansProducts?.map((product) => (
              <ProductCard
                key={product.product_code}
                thumbnail_url={product.thumbnail_url}
                title={product.title}
                points={product.points}
                description={product.description}
                product_code={product.product_code}
              />
            ))}
            {(!specialPlansProducts || specialPlansProducts.length === 0) && (
              <p className="col-span-1 md:col-span-2 text-gray-500 text-center py-10">{t('sections.special_plans.empty')}</p>
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
