
import { mockDirectorsData, HEADER_DATA } from './api/mockData';
import DirectorDetailItem from './components/DirectorDetailItem';
import DirectorsHeader from './components/DirectorsHeader';

const Directors = () => {
  return (
    <main className="min-h-screen bg-white">
      <DirectorsHeader data={HEADER_DATA} />
      <div className="w-full mt-20">
        <div className="flex flex-col gap-0">
          {mockDirectorsData.directors.map((director, index) => (
            <DirectorDetailItem
              key={director.id}
              director={director}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Directors;
