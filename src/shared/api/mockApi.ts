import type { FaqApiResult } from '../types/faq';
import type { PartnersApiResult } from '../types/partners';
import type { LeadRequest, LeadApiResult } from '../types/contact';
import { mockPartnersResponse } from './mockData';

export const getMockFaqData = async (): Promise<FaqApiResult> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                "transaction_id": "VAC28IKQWXBMF8",
                "status": true,
                "data": [
                    {
                        "question_number": 1,
                        "question": "What is life insurance? / জীবন বীমা কি?",
                        "answer": "Life insurance is a contract between the insurer and policyholder that guarantees a sum of money upon the death of the insured or after a set period."
                    },
                    {
                        "question_number": 2,
                        "question": "How do I file a claim? / দাবি কিভাবে করব?",
                        "answer": "You can file a claim by visiting our website, calling our customer service hotline, or through our mobile app. Required documents include the claim form, policy documents, and identification."
                    },
                    {
                        "question_number": 3,
                        "question": "What types of insurance does Guardian Life offer? / গার্ডিয়ান লাইফ কি ধরনের বীমা অফার করে?",
                        "answer": "বর্তমানে গার্ডিয়ানের ৪ ধরনের সহযোগী বীমা/ Rider/ Supplementary Insurance চালু আছে: ক) PDAB খ) DIAB গ) HI এবং ঘ) CI"
                    },
                    {
                        "question_number": 4,
                        "question": "What is the minimum age for life insurance? / জীবন বীমার ন্যূনতম বয়স কত?",
                        "answer": "The minimum entry age for most life insurance policies is 18 years. Some special plans may have different age requirements."
                    },
                    {
                        "question_number": 5,
                        "question": "What happens in case of suicide? / আত্মহত্যার ক্ষেত্রে কি হয়?",
                        "answer": "আত্মহত্যা: পলিসি শুরুর অথবা পূনর্বহালের তারিখ হতে ১ বছরের মধ্যে যদি বীমাকৃত ব্যাক্তি সুস্থ্য বা বিকৃত মস্তিষ্কে আত্মহত্যা করেন তবে পলিসি বাতিল বলে গন্য হবে।"
                    },
                    {
                        "question_number": 6,
                        "question": "How can I renew my policy? / আমার পলিসি কিভাবে নবায়ন করব?",
                        "answer": "You can renew your policy online through our website, via our mobile app, or by visiting any of our branch offices. Renewal notices are sent 30 days before expiry."
                    },
                    {
                        "question_number": 7,
                        "question": "What is a nominee? / নমিনী কি?",
                        "answer": "A nominee is a person designated by the policyholder to receive the insurance benefits in the event of the policyholder's death. You can update your nominee at any time by submitting a nomination form."
                    },
                    {
                        "question_number": 8,
                        "question": "How do I update my contact information? / আমার যোগাযোগের তথ্য কিভাবে আপডেট করব?",
                        "answer": "You can update your contact information by logging into your account on our website or mobile app, or by visiting your nearest branch with a valid national ID."
                    },
                    {
                        "question_number": 9,
                        "question": "What is a grace period? / গ্রেস পিরিয়ড কি?",
                        "answer": "A grace period is an additional time allowed after the premium due date during which the policy remains active. Guardian Life offers a grace period of 30 days for monthly premiums and 60 days for annual premiums."
                    },
                    {
                        "question_number": 10,
                        "question": "Can I take a loan against my policy? / আমি কি আমার পলিসির বিপরীতে ঋণ নিতে পারি?",
                        "answer": "Yes, you can take a loan against your life insurance policy after it has acquired a surrender value, typically after 3 years of premium payment. The loan amount can be up to 90% of the surrender value."
                    }
                ]
            });
        }, 500);
    });
};

export const get_mock_partners = async (_channel: string): Promise<PartnersApiResult> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                transaction_id: mockPartnersResponse.transaction_id,
                data: mockPartnersResponse.data,
            });
        }, 800);
    });
};

export const post_mock_lead = async (_payload: LeadRequest | FormData): Promise<LeadApiResult> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                transaction_id: 'GLIL-TXN-ID',
                data: {
                    status: 'Submitted',
                    received_at: new Date().toISOString(),
                },
            });
        }, 700);
    });
};
