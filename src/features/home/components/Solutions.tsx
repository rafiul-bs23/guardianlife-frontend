import { useState } from 'react';
import { Shield, Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your images
import image1 from '../../../assets/images/home/Solutions/solutions1.png';
import image2 from '../../../assets/images/home/Solutions/solutions2.png';
import image3 from '../../../assets/images/home/Solutions/solutions3.png';
import image4 from '../../../assets/images/home/Solutions/solutions4.png';

const SolutionsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const solutions = [
    { id: 0, title: 'For You', image: image1 },
    { id: 1, title: 'For Your Family', image: image2 },
    { id: 2, title: 'Retirement', image: image3 },
    { id: 3, title: 'Islamic', image: image4 },
  ];

  // Get the display order for the stack
  // The active index should be at the front, others behind it
  const getStackOrder = () => {
    const order = [];
    for (let i = 0; i < solutions.length; i++) {
      const index = (activeIndex + i) % solutions.length;
      order.push(index);
    }
    return order;
  };

  const stackOrder = getStackOrder();

  return (
    <section className="bg-white py-24 overflow-hidden my-24 md:my-0">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left ">
          <h5 className="text-[#1E3161] text-lg font-bold tracking-[.2em] mb-8 uppercase">
            OUR SOLUTIONS
          </h5>

          <h2 className="text-[40px] lg:text-[40px] font-semibold leading-[1.2] text-[#333333] mb-12 max-w-[600px]">
            SECURE YOUR <span className="text-primary">FAMILY'S FUTURE</span>, <br />
            PLAN YOUR RETIREMENT, OR <br />
            PROTECT YOUR HEALTH—<span className="text-primary">WE'VE <br />
              GOT YOU COVERED.</span>
          </h2>

          {/* Tab Navigation */}
          <div className="flex flex-row items-center  gap-4 lg:gap-4 flex-wrap">
            <div className="w-[10%] lg:w-8 h-[2px] bg-[#1E3161]" />
            <div className="flex items-center gap-4 lg:gap-4 flex-wrap w-[80%] lg:w-auto  ">
              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-lg font-semibold transition-all duration-500 px-4 py-2 rounded-full ${activeIndex === index
                    ? 'bg-[#2E3192] text-white shadow-lg'
                    : 'text-[#1E3161]/60 hover:text-[#1E3161]'
                    }`}
                >
                  {solution.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center lg:justify-center pr-0 lg:pr-2 lg:mr-[-100px] ">
          <div className="relative w-[320px] h-[400px] md:w-[420px] md:h-[520px]">
            {solutions.map((solution, index) => {
              // Calculate position in the visible stack (0 is front)
              const position = stackOrder.indexOf(index);

              // Visual transformations based on position
              const zIndex = 40 - position * 10;
              const scale = 1 - position * 0.13;
              const translateX = position * 180;
              const translateY = position * 1;
              const opacity = 1;

              return (
                <div
                  key={solution.id}
                  onClick={() => setActiveIndex(index)}
                  className="absolute inset-0 transition-all duration-700 ease-in-out origin-center"
                  style={{
                    zIndex,
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                    opacity: position > 2 ? 0 : opacity,
                    pointerEvents: 'auto',
                  }}
                >
                  <div
                    className="relative w-full h-full shadow-2xl overflow-hidden   rounded-tr-[20px] rounded-bl-[20px]"
                    style={{
                      clipPath: 'polygon(80px 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%, 0 80px)'
                    }}
                  >

                    {/* Main Image */}
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover object-center select-none"
                    />

                    {/* Overlay Content */}
                    <div className={`absolute inset-0  transition-opacity duration-500 ${position === 0 ? 'opacity-100' : 'opacity-80'}`}>

                      {/* Top Right Arrow Icon - Only direct Link for front card */}
                      {position === 0 ? (
                        <Link
                          to="/category"
                          className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/20 transition-colors "
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight size={20} />
                        </Link>
                      ) : (
                        <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-colors">
                          <ArrowUpRight size={20} />
                        </div>
                      )}



                      {/* Bottom Label */}
                      <div className="absolute bottom-10 left-10">
                        <h3 className="text-white text-xl md:text-2xl uppercase tracking-wider">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsComponent;
