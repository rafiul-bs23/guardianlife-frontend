import usePartnerChannels from '../hooks/usePartnerChannels';
import PartnerChannelCard from './PartnerChannelCard';

const SkeletonCard = () => (
    <div className="flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border-2 border-gray-100 animate-pulse">
        <div className="w-full aspect-square rounded-xl bg-gray-200" />
        <div className="h-4 w-3/4 bg-gray-200 rounded" />
    </div>
);

const PartnerChannelGrid = () => {
    const {
        partner_channels,
        is_loading,
        error,
        selected_channel_id,
        set_selected_channel,
    } = usePartnerChannels();

    return (
        <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Section heading */}
            <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-blue uppercase tracking-wide">
                    Our Partner Channels
                </h2>
                <p className="mt-2 text-gray-500 text-sm md:text-base">
                    Pay your premium conveniently through any of our trusted partner channels.
                </p>
            </div>

            {/* Error state */}
            {error && (
                <div className="text-center py-10">
                    <p className="text-red-500 text-sm">{error}</p>
                </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {is_loading
                    ? Array.from({ length: 7 }).map((_, index) => (
                          <SkeletonCard key={index} />
                      ))
                    : partner_channels?.map((channel) => (
                          <PartnerChannelCard
                              key={channel?.id}
                              channel={channel}
                              is_selected={selected_channel_id === channel?.id}
                              on_select={set_selected_channel}
                          />
                      ))}
            </div>

            {/* Empty state */}
            {!is_loading && !error && partner_channels?.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-gray-400 text-sm">No partner channels available at the moment.</p>
                </div>
            )}

            {/* Results count */}
            {!is_loading && partner_channels?.length > 0 && (
                <p className="mt-6 text-xs text-gray-400 text-right">
                    Showing {partner_channels?.length} partner channel{partner_channels?.length !== 1 ? 's' : ''}
                </p>
            )}
        </section>
    );
};

export default PartnerChannelGrid;
