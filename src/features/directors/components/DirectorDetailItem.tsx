import type { DirectorDetail } from '../types';

interface DirectorDetailItemProps {
    director: DirectorDetail;
    index: number;
}

const DirectorDetailItem = ({ director, index }: DirectorDetailItemProps) => {
    const isOdd = index % 2 !== 0;

    return (
        <div className="relative w-full overflow-hidden mb-0 lg:mb-20 md:mb-32 border lg:border-none border-2 border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className={`flex flex-col md:flex-row ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'} items-end relative`}>

                    {/* Image Container */}
                    <div className="w-full md:w-4/12 relative z-20 flex justify-center md:block">
                        <img
                            src={director.image}
                            alt={director.name}
                            className="w-full max-w-[200px] md:max-w-[400px] h-auto object-contain drop-shadow-2xl translate-y-6 md:translate-y-12"
                        />
                    </div>

                    {/* Text Content Container */}
                    <div className="w-full md:w-8/12 relative z-10 flex flex-col pt-12 md:pt-0">
                        {/* Name and Designation */}
                        <div className={`mb-6 md:mb-12 ${isOdd ? 'md:text-right text-center' : 'md:text-left text-center'}`}>
                            <h2 className="text-lg md:text-xl lg:text-2xl font-black text-primary leading-tight uppercase tracking-tight mb-2">
                                {director.name}
                            </h2>
                            <p className=" font-bold tracking-[0.15em] text-sm md:text-base lg:text-lg uppercase">
                                {director.designation}
                            </p>
                        </div>

                        {/* Bio Band */}
                        <div className="relative">
                            {/* Background extension that bleeds to the screen edge */}
                            <div
                                className={`hidden md:block absolute top-0 bottom-0 bg-[#F37021] z-0 ${isOdd ? '-left-[50vw] -right-[50vw]' : '-right-[50vw] -left-[50vw]'}`}
                            />

                            {/* Mobile background */}
                            <div className="md:hidden absolute inset-0 bg-[#F37021] z-0" />

                            {/* Bio Content */}
                            <div className="relative z-10 p-8 md:p-12 lg:py-16 lg:px-0 text-white">
                                <p className={`text-[15px] md:text-base lg:text-lg leading-relaxed font-normal ${isOdd ? 'md:text-right text-center' : 'md:text-left text-center'}`}>
                                    {director.biography}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectorDetailItem;
