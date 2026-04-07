import { useTranslation } from "react-i18next";
import Button from "../../shared/Components/Button.tsx";
import Card from "../../shared/Components/Card.tsx";

export interface ProductCardProps {
  thumbnail_url: string;
  title: string;
  points?: string[];
  product_code: string;
}

const ProductCardCompact = ({
  thumbnail_url,
  title,
  points = [],
  product_code,
}: ProductCardProps) => {
  const { t } = useTranslation('category');

  return (
    <Card className="w-full max-w-[471px] h-full from-gray-50 to-gray-100 rounded-3xl shadow-lg overflow-hidden">
      <div className=" p-[3px]">
        {thumbnail_url && (
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-[213px] object-cover rounded-t-xl"
          />
        )}
      </div>

      <div className="flex-1 rounded-t-3xl px-8 pt-6 pb-6 flex flex-col">
        <p className="font-bold text-[28px] leading-[32px] tracking-[0.02em] mb-4 text-center min-h-[64px] flex items-center justify-center">
          {title}
        </p>
        {points.length > 0 && (
          <ul className="space-y-2 mb-6">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1 text-lg">▸</span>
                <span className="font-normal text-[16px] leading-[28px] tracking-[0.02em]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex justify-center pt-4">
          <Button
            label={t('product_card.view_details')}
            to={`/products/${product_code}`}
          />
        </div>
      </div>
    </Card>
  );
};

export default ProductCardCompact;
