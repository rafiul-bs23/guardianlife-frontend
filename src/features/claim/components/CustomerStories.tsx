import type { CustomerStoriesData } from '../types';
import VideoSection from '../../../shared/Components/VideoSection';

interface CustomerStoriesProps {
    data: CustomerStoriesData;
}

const CustomerStories: React.FC<CustomerStoriesProps> = ({ data }) => {
    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="max-w-[1400px] mx-auto px-4 text-center">
                {/* Header */}
                <div className="mb-12 max-w-[900px] mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
                        {data.title}
                    </h2>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

                {/* Video Section */}
                <div className="max-w-[1000px] mx-auto border-8 border-white shadow-2xl rounded-[48px] overflow-hidden">
                    <VideoSection
                        thumbnail={data.videoThumbnail}
                        title={data.title}
                        aspectRatio="video"
                        rounded="rounded-[40px]"
                        url={data.videoUrl}
                    />
                </div>
            </div>
        </section>
    );
};

export default CustomerStories;
