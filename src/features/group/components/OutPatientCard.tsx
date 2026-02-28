export interface ProductCardProps {
  thumbnailUrl: string;
  title: string;
  points?: string[];
  description?: string | null;
}

const ProductCardWithActionButton = ({
  thumbnailUrl,
  title,
  points = [],
  description,
}: ProductCardProps) => {
  return (
    <div
      className="w-full max-w-[643px] h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg overflow-hidden flex flex-col">
      {/* Header Section with Quick Buy badge */}
      <div className="relative">

        <div className="relative">
          {thumbnailUrl && (
            <img
              src={thumbnailUrl}
              alt={title}
              className="relative z-10 w-full h-[324px] object-cover"
            />
          )}
        </div>
      </div>

      <div className="flex-1 bg-white rounded-t-3xl pl-11 pr-[31px] pt-[27x] pb-[26px] flex flex-col">

        <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em] mt-[27px] mb-1">
          {title}
        </p>

        {description && (
          <p className="font-normal text-[20px] leading-[32px] tracking-[0.02em] mb-[14px]">
            {description}
          </p>
        )}

        {points && points.length > 0 && (
          <ul className="space-y-3 mb-6">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-3">
                  <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                    <path d="M0 0L8 6.5L0 13V0Z" fill="#F97316" />
                  </svg>
                </span>
                <span className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductCardWithActionButton;
