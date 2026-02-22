import EmcHeader from "./components/EmcHeader";
import EmcList from "./components/EmcList";
import { MOCK_EMC_HEADER_DATA } from "./api/mockData";

const Emc = () => {
  return (
    <main className="min-h-screen bg-gray-150">
      <EmcHeader data={MOCK_EMC_HEADER_DATA} />
      <EmcList />
    </main>
  );
};

export default Emc;
