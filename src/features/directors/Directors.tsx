
import { mockDirectorsData } from './api/mockData';
import DirectorDetailItem from './components/DirectorDetailItem';

const Directors = () => {
  return (
    <main className="min-h-screen bg-white py-12 md:py-20">
      <div className="w-full">
        <h1 className="text-center text-3xl md:text-5xl font-black mb-20 md:mb-32 tracking-wider text-[#111827] uppercase">
          BOARD OF DIRECTORS
        </h1>
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
