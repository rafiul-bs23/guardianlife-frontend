import ChairmanHeader from './components/ChairmanHeader';
import ChairmanMessage from './components/ChairmanMessage';
import { MOCK_CHAIRMAN_MESSAGE_DATA } from './api/mockData';

const Chairman = () => {
  return (
    <main className="min-h-screen bg-gray-150">
      <ChairmanHeader data={null} />
      <ChairmanMessage data={MOCK_CHAIRMAN_MESSAGE_DATA} />
    </main>
  );
};

export default Chairman;
