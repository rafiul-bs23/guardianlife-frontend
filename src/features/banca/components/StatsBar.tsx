import { mock_stats_data } from "../api/mockData";


export function StatsBar() {
  return (
    <div className="w-full bg-[#EAF0FB]  px-6 lg:px-12 py-8  relative z-10 transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-blue-200/50">
        {mock_stats_data?.map((item) => (
          <div key={item?.id} className="flex flex-col items-center text-center px-4 first:pt-0 pt-8 md:pt-0 last:pb-0 pb-0">
            <span className="text-2xl lg:text-3xl font-black text-[#3B6FD4] mb-2 tracking-tight">
              {item?.value}
            </span>
            <span className="text-sm lg:text-base font-medium text-[#555555] leading-snug max-w-[180px]">
              {item?.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
