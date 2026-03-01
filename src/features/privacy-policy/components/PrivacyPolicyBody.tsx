import { privacyPolicyData } from '../api/mockData';

const PrivacyPolicyBody = () => {
    return (
        <section className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
            <div className="flex flex-col space-y-10">
                {privacyPolicyData.map((section, index) => (
                    <div key={index} className="flex flex-col space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-[#1f295b] tracking-wide uppercase">
                            {section.title}
                        </h2>
                        {section.content && (
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                {section.content}
                            </p>
                        )}
                        {section.paragraphs && (
                            <div className="flex flex-col space-y-4">
                                {section.paragraphs.map((para, pIndex) => (
                                    <p key={pIndex} className="text-gray-700 leading-relaxed text-sm md:text-base">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        )}
                        {section.list && section.list.length > 0 && (
                            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-gray-700 text-sm md:text-base">
                                {section.list.map((item, lIndex) => (
                                    <li key={lIndex} className="leading-relaxed">{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PrivacyPolicyBody;
