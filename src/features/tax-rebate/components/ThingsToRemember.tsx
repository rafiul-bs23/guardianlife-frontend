import React, { useState } from 'react';
import { ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
import type { ThingsToRememberData } from '../types';
import Button from '../../../shared/Components/Button';

interface ThingsToRememberProps {
    data: ThingsToRememberData;
}

const ThingsToRemember: React.FC<ThingsToRememberProps> = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Calculate total word count
    const totalWords = data.descriptionPoints.reduce((acc, point) => {
        return acc + point.text.split(/\s+/).filter(word => word.length > 0).length;
    }, 0);

    const isLongContent = totalWords > 100;

    const renderPoints = () => {
        if (!isLongContent || isExpanded) {
            return data.descriptionPoints.map((point, index) => (
                <p
                    key={index}
                    className={`text-[17px] leading-relaxed ${point.isBold ? 'font-bold text-gray-900' :
                        point.isHighlighted ? 'text-[#F37021] font-medium' :
                            'text-gray-600 font-medium'
                        }`}
                >
                    {point.text}
                </p>
            ));
        }

        // Truncation logic (approximate 100 words)
        let wordAccumulator = 0;
        const truncatedPoints = [];

        for (const point of data.descriptionPoints) {
            const words = point.text.split(/\s+/).filter(word => word.length > 0);
            if (wordAccumulator + words.length <= 100) {
                truncatedPoints.push(point);
                wordAccumulator += words.length;
            } else {
                const remainingWords = 100 - wordAccumulator;
                if (remainingWords > 0) {
                    truncatedPoints.push({
                        ...point,
                        text: words.slice(0, remainingWords).join(' ') + '...'
                    });
                }
                break;
            }
        }

        return truncatedPoints.map((point, index) => (
            <p
                key={index}
                className={`text-[17px] leading-relaxed ${point.isBold ? 'font-bold text-gray-900' :
                    point.isHighlighted ? 'text-[#F37021] font-medium' :
                        'text-gray-600 font-medium'
                    }`}
            >
                {point.text}
            </p>
        ));
    };

    return (
        <section className="mb-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#212529] text-center uppercase mb-12 tracking-wide">
                    {data.title}
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Column: Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                            <img
                                src={data.image}
                                alt="Tax Rebate Tips"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div className="space-y-6">
                            {renderPoints()}
                        </div>

                        {isLongContent && (
                            <div className="mt-4">
                                <Button
                                    label={isExpanded ? 'Collapse' : 'Read More'}
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    icon={isExpanded ? ChevronUp : ChevronDown}
                                    iconClass="w-4 h-4"
                                    variant="outline-orange"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThingsToRemember;
