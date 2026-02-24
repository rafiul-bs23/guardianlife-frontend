import React, { useState } from 'react';

// Types
interface FAQItem {
  id: string | number;
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

// Default FAQ Data
const defaultFAQData: FAQItem[] = [
  {
    id: 1,
    question: "What's the difference between Retail and Quick Buy policies?",
    answer: "Retail policies offer comprehensive customization with personalized advice from our agents, while Quick Buy policies provide a streamlined digital experience with pre-configured options for faster purchase. Both offer the same quality coverage, but differ in the purchase process and level of customization available."
  },
  {
    id: 2,
    question: "What's the difference between Retail and Quick Buy policies?",
    answer: "Retail policies offer comprehensive customization with personalized advice from our agents, while Quick Buy policies provide a streamlined digital experience with pre-configured options for faster purchase. Both offer the same quality coverage, but differ in the purchase process and level of customization available."
  },
  {
    id: 3,
    question: "What's the difference between Retail and Quick Buy policies?",
    answer: "Retail policies offer comprehensive customization with personalized advice from our agents, while Quick Buy policies provide a streamlined digital experience with pre-configured options for faster purchase. Both offer the same quality coverage, but differ in the purchase process and level of customization available."
  },
  {
    id: 4,
    question: "What's the difference between Retail and Quick Buy policies?",
    answer: "Retail policies offer comprehensive customization with personalized advice from our agents, while Quick Buy policies provide a streamlined digital experience with pre-configured options for faster purchase. Both offer the same quality coverage, but differ in the purchase process and level of customization available."
  },
  {
    id: 5,
    question: "What's the difference between Retail and Quick Buy policies?",
    answer: "Retail policies offer comprehensive customization with personalized advice from our agents, while Quick Buy policies provide a streamlined digital experience with pre-configured options for faster purchase. Both offer the same quality coverage, but differ in the purchase process and level of customization available."
  },
  {
    id: 6,
    question: "What's the difference between Retail and Quick Buy policies?",
    answer: "Retail policies offer comprehensive customization with personalized advice from our agents, while Quick Buy policies provide a streamlined digital experience with pre-configured options for faster purchase. Both offer the same quality coverage, but differ in the purchase process and level of customization available."
  }
];

// FAQ Component
const FAQ: React.FC<FAQProps> = ({
  title = "FREQUENTLY ASKED QUESTIONS",
  subtitle = "Get answers to common questions about Guardian Life insurance products and services.",
  faqs = defaultFAQData
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto px-4 py-16 bg-[#EFF0F1]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 text-lg">
          {subtitle}
        </p>
      </div>

      {/* FAQ Accordion Items */}
      <div className="space-y-4 flex flex-col items-center">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md w-full max-w-[1138px]"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <span className="text-lg font-medium text-gray-900 pr-8">
                {faq.question}
              </span>

              {/* Chevron Icon */}
              <svg
                className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Answer Panel */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="px-6 pb-5 pt-2">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

// Usage examples:
//
// 1. Use with default data:
// <FAQ />
//
// 2. Override title and subtitle:
// <FAQ title="Custom Title" subtitle="Custom subtitle" />
//
// 3. Use with custom FAQ data:
// <FAQ faqs={customFaqData} />
