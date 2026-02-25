import PartnerChannelsHeader from "./components/PartnerChannelsHeader";
import PartnerChannelGrid from "./components/PartnerChannelGrid";

const PartnerChannels = () => {
    return (
        <main className="min-h-screen bg-white">
            <PartnerChannelsHeader />
            <PartnerChannelGrid />
        </main>
    );
};

export default PartnerChannels;
