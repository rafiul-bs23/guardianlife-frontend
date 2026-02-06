import { useState } from 'react';

// Import your images
import image1 from '../../assets/images/home/Solutions/solutions1.png';
import image2 from '../../assets/images/home/Solutions/solutions2.png';
import image3 from '../../assets/images/home/Solutions/solutions3.png';
import image4 from '../../assets/images/home/Solutions/solutions4.png';

const SolutionsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const solutions = [
    { id: 0, title: 'For You', image: image1 },
    { id: 1, title: 'For Your Family', image: image2 },
    { id: 2, title: 'Retirement', image: image3 },
    { id: 3, title: 'Islamic', image: image4 },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen items-center">
      <div className="w-1/2 space-y-6 ml-[200px]">
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

        <div className="flex gap-3 flex-wrap">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-900'
              }`}
            >
              {solution.title}
            </button>
          ))}

        </div>
      </div>

      {/* Right Section - Image Grid */}
      <div className="w-1/2 relative h-[500px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                activeIndex === index
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