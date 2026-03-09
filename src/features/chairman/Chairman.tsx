import ChairmanHeader from './components/ChairmanHeader';
import ChairmanMessage from './components/ChairmanMessage';
import { MOCK_CHAIRMAN_ASSETS } from './api/mockData';

const Chairman = () => {
  return (
    <main className="min-h-screen bg-gray-150">
      <ChairmanHeader data={null} />
      <ChairmanMessage chairmanImageUrl={MOCK_CHAIRMAN_ASSETS.chairman_image_url} />
    </main>
  );
};

export default Chairman;
