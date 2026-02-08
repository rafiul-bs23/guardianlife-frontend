import ActionButton from "./BaseButton.tsx";

export interface ProductCardProps {
  thumbnailUrl: string;
  title: string;
  points?: string[];
  description?: string | null;
  onViewDetails: () => void;
  onBuyNow: () => void;
}

const ProductCardWithActionButton = ({
                                       thumbnailUrl,
                                       title,
                                       points = [],
                                       description,
                                       onViewDetails,
                                       onBuyNow
                                     }: ProductCardProps) => {
  return (
    <div className="w-[643px] h-[788px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg overflow-hidden flex flex-col">
      {/* Header Section with Quick Buy badge */}
      <div className="relative">
        <div className="absolute top-8 right-8 z-20">
          <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            Quick Buy
          </span>
        </div>

        <div className="relative">
          {thumbnailUrl && (
            <img
              src={thumbnailUrl}
              alt={title}
              className="relative z-10 w-full h-56 object-cover"
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

        {/*Points */}
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

        {/* Action Buttons - Using your ActionButton component */}
        <div className="flex gap-4 mt-auto">
          <div className="flex-1">
            <ActionButton
              text="View Details"
              onClick={onViewDetails}
            />
          </div>
          <div className="flex-1">
            <ActionButton
              text="Buy Now"
              onClick={onBuyNow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardWithActionButton;
