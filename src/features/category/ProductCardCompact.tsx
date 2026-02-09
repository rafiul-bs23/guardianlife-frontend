import ActionButton from "../../shared/Components/BaseButton.tsx";

export interface ProductCardProps {
  thumbnailUrl: string;
  title: string;
  points?: string[];
  onViewDetails: () => void;
}

const ProductCardCompact = ({
                              thumbnailUrl,
                              title,
                              points = [],
                              onViewDetails,
                            }: ProductCardProps) => {
  return (
    <div className="w-[471px] h-[502px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg overflow-hidden flex flex-col">

      <div className="relative">
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-[213px] object-cover"
          />
        )}
      </div>

      <div className="flex-1 bg-white rounded-t-3xl px-8 pt-6 pb-6 flex flex-col">
        <p className="font-bold text-[28px] leading-[32px] tracking-[0.02em] mb-4 text-center">
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

        <div className="mt-auto flex justify-center">
          <ActionButton
            text="View Details"
            onClick={onViewDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardCompact;
