import MancomHeader from './components/MancomHeader';
import { HEADER_DATA, mockMancomData } from './api/mockData';
import MancomHero from './components/MancomHero';

const Mancom = () => {
  return (
    <main className="min-h-screen bg-white">
      <MancomHeader data={HEADER_DATA} />
      <MancomHero data={mockMancomData.hero} />
    </main>
  );
};

export default Mancom;
