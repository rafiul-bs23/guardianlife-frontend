import Card from "../../../shared/Components/Card";
import { useBancaProducts } from "../hooks/useBancaProducts";




export function BancassuranceProductSolutions() {
  const { data, loading, error } = useBancaProducts();

  if (loading) {
    return (
      <div className="w-full flex justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]"></div>
      </div>
    );
  }

  if (error || !data?.products) {
    return (
      <div className="w-full text-center py-10 text-red-500">
        {error || "No products found"}
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-stretch justify-center gap-8 lg:gap-[24px]">
      {data?.products?.map((product, index) => (
        <Card
          key={index}
          className="w-full max-w-[470px] h-full min-h-[680px] rounded-[35px] px-6 lg:px-[42px] py-10 lg:py-[40px] flex flex-col
          transition-all duration-300 ease-in-out
          !bg-primary/5
          group"
        >
          <div className="items-center gap-[10px] mb-[37px]">
            {
              product?.logo_url && (
                <div className="w-[56px] h-[56px] rounded-2xl bg-[#FDE2D3] flex items-center justify-center flex-shrink-0">
                  <img src={product?.logo_url} alt={product?.title} />
                </div>
              )
            }
            <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em] mt-7">
              {product?.title}
            </p>
          </div>

          <img
            src={product?.thumbnail_url || ''}
            alt={product?.title || ''}
            className="object-cover rounded-[20px] max-h-[257px] w-full"
          />

          <div className="flex flex-col gap-[12px] mt-[23px]">
            {product?.points?.map((point, p_index) => (
              <div key={p_index} className="flex items-start gap-[10px]">
                <span
                  className="w-[10px] h-[10px] rounded-full bg-[var(--color-primary)] flex-shrink-0 mt-3"
                />
                <span className="font-normal text-[16px] leading-[32px] tracking-[0.02em]">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
