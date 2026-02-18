import MancomHeader from './components/MancomHeader';
import { HEADER_DATA } from './api/mockData';

const Mancom = () => {
  return (
    <main className="min-h-screen bg-white">
      <MancomHeader data={HEADER_DATA} />
    </main>
  );
};

export default Mancom;
