import PrivacyPolicyHeader from "./components/PrivacyPolicyHeader";
import PrivacyPolicyBody from "./components/PrivacyPolicyBody";
import AppDownloadSection from "../../shared/Components/AppDownloadSection.tsx";

const PrivacyPolicy = () => {
    return (
        <main className="min-h-screen bg-white">
            <PrivacyPolicyHeader />
            <PrivacyPolicyBody />
            <AppDownloadSection />
        </main>
    );
};

export default PrivacyPolicy;
