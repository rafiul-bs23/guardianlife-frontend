import { useRef, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductCard from "../../shared/Components/ProductCard.tsx";
import ProductCardCompact from "./ProductCardCompact.tsx";
import FAQ from "../../shared/Components/Faq.tsx";
import Contentheader from "../../shared/Components/Contentheader.tsx";
import { WhyChooseQuickBuy } from "../../shared/Components/WhyChooseQuickBuy.tsx";

import CategoryHeader from "./components/CategoryHeader.tsx";
import { useCategoryProducts } from "./hooks/useCategoryProducts.ts";
import { useHeader } from "../../shared/hooks/useHeader.ts";

const TAB_VALUES = [
  { id: 0, value: 'for-you' },
  { id: 1, value: 'for-your-family' },
  { id: 2, value: 'retirement' },
  { id: 3, value: 'islamic' },
];

const Category = () => {
  const { t } = useTranslation('category');
  const { categoryName } = useParams<{ categoryName: string }>();
  const activeIndex = useMemo(() => {
    if (!categoryName) return 0;
    const index = TAB_VALUES.findIndex(tab => tab.value === categoryName);
    return index >= 0 ? index : 0;
  }, [categoryName]);

  const activeSubcategory = useMemo(() => TAB_VALUES[activeIndex]?.value || 'for-you', [activeIndex]);
  const { data: headerData, isLoading: isHeaderLoading } = useHeader(`retail-products-list-${activeSubcategory}`);
  const navigate = useNavigate();
  const tabsRef = useRef<HTMLDivElement>(null);

  const TABS = [
    { ...TAB_VALUES[0], title: t('tabs.for_you') },
    { ...TAB_VALUES[1], title: t('tabs.for_your_family') },
    { ...TAB_VALUES[2], title: t('tabs.retirement') },
    { ...TAB_VALUES[3], title: t('tabs.islamic') },
  ];

  const handleTabClick = (index: number) => {
    navigate(`/category/${TAB_VALUES[index].value}`);
    tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Fetch Retail channel products (for ProductCardCompact)
  const {
    data: retailProducts,
    isLoading: isRetailLoading
  } = useCategoryProducts('retail', null, activeSubcategory);

  // Fetch Digital channel products (for ProductCard)
  const {
    data: digitalProducts,
    isLoading: isDigitalLoading
  } = useCategoryProducts('digital', null, activeSubcategory);

  if (isHeaderLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {headerData && <CategoryHeader data={headerData} onExploreClick={() => handleTabClick(0)} />}
      <div className="px-4" id="tabs" ref={tabsRef}>
        <div className="flex gap-3 flex-wrap justify-center mt-[14px]">
          {TABS.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(index)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeIndex === index
                ? 'bg-blue-900 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-900'
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center mt-12 lg:mt-[73px] px-4 lg:px-0">
          <Contentheader
            title={t('retail_section.title')}
            description={t('retail_section.description')}
          />

          {isRetailLoading ? (
            <div className="flex justify-center items-center py-20 w-full">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#EB6925]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
              {retailProducts?.map((product) => (
                <ProductCardCompact
                  key={product.product_code}
                  thumbnail_url={product.thumbnail_url}
                  title={product.title}
                  points={product.points}
                  product_code={product.product_code}
                />
              ))}
              {(!retailProducts || retailProducts.length === 0) && (
                <p className="col-span-1 md:col-span-2 xl:col-span-3 text-gray-500 text-center py-10">{t('retail_section.empty_state')}</p>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center mt-16 lg:mt-[143px] px-4 lg:px-0">
          <Contentheader
            title={t('digital_section.title')}
            description={t('digital_section.description')}
            isUpperCase={false}
          />

          {isDigitalLoading ? (
            <div className="flex justify-center items-center py-20 w-full">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#EB6925]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mt-12 lg:mt-[84px] w-full max-w-7xl">
              {digitalProducts?.map((product) => (
                <ProductCard
                  key={product.product_code}
                  thumbnail_url={product.thumbnail_url}
                  title={product.title}
                  points={product.points}
                  description={product.description}
                  product_code={product.product_code}
                />
              ))}
              {(!digitalProducts || digitalProducts.length === 0) && (
                <p className="col-span-1 md:col-span-2 text-gray-500 text-center py-10">{t('digital_section.empty_state')}</p>
              )}
            </div>
          )}
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
