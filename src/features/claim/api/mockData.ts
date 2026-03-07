import type { ClaimData, ClaimDocumentsData } from '../types'; import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "CLAIMS SETTLED",
                "color": "#FFFFFF"
            },
            {
                "text": "WITH 98% SUCCESS RATE",
                "color": "#2E3192"
            }
        ],
        "description": "FAST, TRANSPARENT, AND RELIABLE CLAIM PROCESSING.",
        "background_image_url": "assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "assets/images/category/headerImage.jpg"
        }
    }
};

export const mockClaimData: ClaimData = {
    features_section: {
        title: "FEATURES",
        subtitle: "Discover how GLIL has revolutionized claims processing through strategic technology implementation and innovation-driven solutions.",
        items: [
            {
                image: "https://placehold.co/40x40",
                title: "Strategic Utilization of Digital Technology",
                description: "GLIL has effectively leveraged digital technology and its own resources to enhance its operations."
            },
            {
                image: "https://placehold.co/40x40",
                title: "Innovation-Driven Claims Processing System",
                description: "The implementation of an innovation-driven claims processing system has significantly improved the quality of claim processing."
            },
            {
                image: "https://placehold.co/40x40",
                title: "Overcoming Geographical Barriers",
                description: "Guardian Brac Bima (GBB), an agreement between Brac Microfinance and GLIL has successfully overcome geographical barriers."
            },
            {
                image: "https://placehold.co/40x40",
                title: "Enhanced Commitment to Claim Settlement",
                description: "GLIL has placed a strong emphasis on ensuring prompt and fair claim settlements, acknowledging the critical importance of fulfilling its responsibilities to policyholders."
            },
            {
                image: "https://placehold.co/40x40",
                title: "Enhanced Transparency",
                description: "Insured individuals can easily submit and track the status of their claims at any time."
            },
            {
                image: "https://placehold.co/40x40",
                title: "Simplified Claims and Data Capture",
                description: "GLIL's claim process is user-friendly, ensuring a seamless experience for customers."
            },
            {
                image: "https://placehold.co/40x40",
                title: "Streamlined Workflow and Efficiency",
                description: "Digitization in claim has streamlined workflows within GLIL, resulting in increased operational efficiency and optimized resource utilization."
            },
            {
                image: "https://placehold.co/40x40",
                title: "Breaking Records",
                description: "This ambitious endeavor has resulted in the settlement of 9,644 claims, marking a significant milestone."
            }
        ]
    },
    claim_status: {
        tracking_title: "TRACK YOUR CLAIM",
        tracking_subtitle: "Stay updated on your claim status with our transparent tracking system. Get instant notifications and estimated completion dates.",
        timeline: [
            { label: "Claim Submission", date: "01 Jan 2025", is_completed: true },
            { label: "HR Approval", date: "01 Jan 2025", is_completed: true },
            { label: "Claim Information", date: "01 Jan 2025", is_completed: true },
            { label: "Claim Review By Analyst", date: "01 Jan 2025", is_completed: true },
            { label: "Claim Approval", date: "03 Jan 2025", is_completed: true },
            { label: "Claim Is Settled", date: "03 Jan 2025", is_completed: true }
        ]
    },
    customer_stories: {
        title: "STORIES FROM OUR CUSTOMERS",
        subtitle: "See how we've helped thousands of families during their most challenging times. These are real experiences from real customers.",
        video_thumbnail: "assets/images/productDetails/videoOvarlay.png",
        video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
};

export const mockDocumentsData: { status: boolean; data: ClaimDocumentsData } = {
    status: true,
    data: {
        category: [
            {
                name: "General",
                documents: [
                    {
                        file_name: "Permanent Disability Claim Form",
                        pdf_download_link: "https://guardian-life-website-example.com/assets/docs/claimform-permanent-disability.pdf"
                    },
                    {
                        file_name: "Health Insurance Claim Form",
                        pdf_download_link: "https://guardian-life-website-example.com/assets/docs/claimform-health.pdf"
                    },
                    {
                        file_name: "Death Claim Form",
                        pdf_download_link: "https://guardian-life-website-example.com/assets/docs/death-claim.pdf"
                    },
                    {
                        file_name: "Critical Illness Claim Form",
                        pdf_download_link: "https://guardian-life-website-example.com/assets/docs/critical-illness.pdf"
                    },
                    {
                        file_name: "Manual on Claim Management System",
                        pdf_download_link: "https://guardian-life-website-example.com/assets/docs/claim-management-manual.pdf"
                    }
                ]
            },
            {
                name: "Statement(Updated)",
                documents: [
                    {
                        file_name: "Pending Claims",
                        pdf_download_link: "https://guardian-life-website-example.com/assets/docs/pending-claims.pdf"
                    },
                    {
                        file_name: "Claims Settlement",
                        pdf_download_link: "https://guardian-life-website-example.com/assets/docs/claimsettlement.pdf"
                    }
                ]
            }
        ]
    }
};
