import MancomHeader from './components/MancomHeader';
import { HEADER_DATA } from './api/mockData';
import MancomSection from './components/MancomSection';

const Mancom = () => {
  return (
    <main className="min-h-screen w-full bg-white">
      <MancomHeader data={HEADER_DATA} />
      <MancomSection />
    </main>
  );
};

export default Mancom;
