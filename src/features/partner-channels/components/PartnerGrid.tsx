import type { PartnerChannel } from '../types';

/* ─── Single partner card ─── */
const PartnerCard = ({ partner_name, logo_url, website_url }: PartnerChannel) => (
    <a
        href={website_url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl p-6 hover:border-primary hover:shadow-md transition-all duration-300"
    >
        {/* Logo */}
        <div className="flex items-center justify-center w-full h-[80px]">
            <img
                src={logo_url}
                alt={partner_name}
                className="max-h-[64px] max-w-[80%] w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
        </div>

        {/* Name */}
        <p className="text-center text-[12px] font-semibold text-gray-500 uppercase tracking-wide group-hover:text-primary transition-colors duration-300 leading-[1.4]">
            {partner_name}
        </p>
    </a>
);

/* ─── Loading skeleton ─── */
const SkeletonCard = () => (
    <div className="flex flex-col items-center gap-4 bg-white border border-gray-100 rounded-2xl p-6 animate-pulse">
        <div className="w-[80%] h-[64px] bg-gray-100 rounded-lg" />
        <div className="w-[60%] h-[12px] bg-gray-100 rounded" />
    </div>
);

/* ─── Partner grid ─── */
interface PartnerGridProps {
    partner_channels: PartnerChannel[];
    is_loading: boolean;
    error: string | null;
}

const PartnerGrid = ({ partner_channels, is_loading, error }: PartnerGridProps) => {
    if (error) {
        return (
            <div className="flex items-center justify-center py-24 text-gray-500 text-[14px]">
                {error}
            </div>
        );
    }

    return (
        <section className="bg-[#f4f4f4] py-16 lg:py-20">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

                {/* Section heading */}
                <div className="text-center mb-10 lg:mb-14">
                    <h2 className="font-extrabold text-[20px] lg:text-[26px] uppercase leading-[1.3] tracking-[0.01em] text-gray-900">
                        Our Corporate Partners
                    </h2>
                    <p className="mt-3 text-[14px] lg:text-[15px] text-gray-500 font-normal">
                        Trusted by leading organizations across industries
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {is_loading
                        ? Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)
                        : partner_channels?.map((partner) => (
                            <PartnerCard
                                key={partner?.partner_name}
                                partner_name={partner?.partner_name}
                                logo_url={partner?.logo_url}
                                website_url={partner?.website_url}
                            />
                        ))
                    }
                </div>

                {/* Empty state */}
                {!is_loading && partner_channels?.length === 0 && (
                    <div className="flex items-center justify-center py-16 text-gray-400 text-[14px]">
                        No partners found.
                    </div>
                )}
            </div>
        </section>
    );
};

export default PartnerGrid;
