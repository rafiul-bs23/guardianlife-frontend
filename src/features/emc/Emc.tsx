import EmcHeader from "./components/EmcHeader";
import { MOCK_EMC_HEADER_DATA } from "./api/mockData";

const Emc = () => {
  return (
    <main className="min-h-screen bg-white">
      <EmcHeader data={MOCK_EMC_HEADER_DATA} />
      {/* Additional content can go here */}
    </main>
  );
};

export default Emc;
