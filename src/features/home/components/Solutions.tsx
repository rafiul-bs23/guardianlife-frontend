import { useState } from 'react';
import { solutions } from '../api/mockData';

const SolutionsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen items-center px-4 xl:px-0">
      <div className="w-full lg:w-1/2 space-y-6 lg:ml-[200px] mt-12 lg:mt-0 text-center lg:text-left">
        <h2 className="text-gray-600 text-sm font-semibold tracking-wide">
          OUR SOLUTIONS
        </h2>

        <h1 className="text-4xl font-bold leading-tight">
          <span className="text-orange-500">SECURE YOUR FAMILY'S FUTURE.</span>
          <br />
          <span className="text-gray-800">PLAN YOUR RETIREMENT, OR</span>
          <br />
          <span className="text-gray-800">PROTECT YOUR HEALTH—WE'VE</span>
          <br />
          <span className="text-orange-500">GOT YOU COVERED.</span>
        </h1>

        <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeIndex === index
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-900'
                }`}
            >
              {solution.title}
            </button>
          ))}

        </div>
      </div>

      <div className="w-full lg:w-1/2 relative h-[500px] mt-12 lg:mt-0 px-4 md:px-0">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${activeIndex === index
                  ? 'col-span-2 row-span-2 z-10'
                  : 'opacity-60 hover:opacity-80'
                }`}
              style={{
                clipPath:
                  'polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%)',
              }}
            >
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover"
              />

              {activeIndex !== index && (
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SolutionsComponent;