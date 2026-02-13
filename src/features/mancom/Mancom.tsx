import MancomHero from './components/MancomHero';
import { mockMancomData } from './api/mockData';

const Mancom = () => {
  return (
    <main className="min-h-screen bg-white">
      <MancomHero data={mockMancomData.hero} />
    </main>
  );
};

export default Mancom;
