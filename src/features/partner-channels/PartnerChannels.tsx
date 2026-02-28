import PartnerChannelsHeader from './components/PartnerChannelsHeader';
import PartnerGrid from './components/PartnerGrid';
import usePartnerChannels from './hooks/usePartnerChannels';

const PartnerChannels = () => {
    const { partner_channels, is_loading, error } = usePartnerChannels();

    return (
        <main className="min-h-screen bg-white">
            <PartnerChannelsHeader />
            <PartnerGrid
                partner_channels={partner_channels}
                is_loading={is_loading}
                error={error}
            />
        </main>
    );
};

export default PartnerChannels;
