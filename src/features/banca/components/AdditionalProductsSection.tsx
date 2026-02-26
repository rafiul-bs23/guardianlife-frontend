import { MOCK_ADDITIONAL_PRODUCTS_DATA, MOCK_DEPOSITORY_INSURANCE_DATA } from "../api/mockData";

export const AdditionalProductsSection = () => {
    return (
        <div className="flex flex-col gap-[40px] w-full px-4 lg:px-[100px] xl:px-[214px] mt-16 md:mt-[80px]">
            <div className="flex flex-col lg:flex-row gap-[40px]">
                {MOCK_ADDITIONAL_PRODUCTS_DATA.map((product, index) => (
                    <div
                        key={index}
                        className="flex-1 min-w-0 bg-white rounded-[12px] px-[20px] py-[20px] shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
                        <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
                            {product.title}
                        </p>
                        <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
                            {product.description1}
                        </p>
                        {product.description2 && (
                            <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
                                {product.description2}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex gap-[12px]">
                <div className="w-full bg-[#EEF1F8] rounded-[12px] px-6 py-6 flex flex-col lg:flex-row gap-6 lg:gap-[24px]">
                    <div className="flex-1">
                        <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
                            {MOCK_DEPOSITORY_INSURANCE_DATA.title}
                        </p>
                        <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em] mt-2">
                            {MOCK_DEPOSITORY_INSURANCE_DATA.description1}
                        </p>
                    </div>
                    <div className="flex-1 flex items-start lg:items-center">
                        <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
                            {MOCK_DEPOSITORY_INSURANCE_DATA.description2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
