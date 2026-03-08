import { useTranslation } from "react-i18next";
import { usePopup } from "../context/PopupContext.tsx";
import Button from "./Button.tsx";

export interface ProductCardProps {
  thumbnail_url: string;
  title: string;
  points?: string[];
  description?: string | null;
  product_code: string;
}

const ProductCardWithActionButton = ({
  thumbnail_url,
  title,
  points = [],
  description,
  product_code,
}: ProductCardProps) => {
  const { showPopup } = usePopup();
  const { t } = useTranslation('shared');

  return (
    <div className="w-full max-w-[643px] h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg overflow-hidden flex flex-col">
      {/* Header Section with Quick Buy badge */}
      <div className="relative">
        <div className="absolute top-8 right-8 z-20">
          <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            {t('product_card.badge')}
          </span>
        </div>

        <div className="relative">
          {thumbnail_url && (
            <img
              src={thumbnail_url}
              alt={title}
              className="relative z-10 w-full h-[324px] object-cover"
            />
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 bg-white rounded-t-3xl pl-11 pr-[31px] pt-[27x] pb-[26px] flex flex-col">
        {/* Product Title */}
        <p className="font-bold text-[36px] leading-[32px] tracking-[0.02em] mt-8 mb-8">
          {title}
        </p>

        {/* Points */}
        {points && points.length > 0 && (
          <ul className="space-y-3 mb-6">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 text-lg">▸</span>
                <span className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Description */}
        {description && (
          <p className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
            {description}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8">
          <div className="flex-1">
            <Button
              label={t('product_card.view_details')}
              to={`/quick-buy-details/${product_code}`}
            />
          </div>
          <div className="flex-1">
            <Button
              label={t('product_card.buy_now')}
              onClick={() => showPopup({ title: "", message: t('product_card.popup_message') })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardWithActionButton;
