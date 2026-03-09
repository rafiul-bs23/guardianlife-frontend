import type { HeaderResponse } from "../../../shared/types/header";

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

export const mockClaimData = {
    features_section: {
        items: [
            { image: "https://placehold.co/40x40" },
            { image: "https://placehold.co/40x40" },
            { image: "https://placehold.co/40x40" },
            { image: "https://placehold.co/40x40" },
            { image: "https://placehold.co/40x40" },
            { image: "https://placehold.co/40x40" },
            { image: "https://placehold.co/40x40" },
            { image: "https://placehold.co/40x40" }
        ]
    },
    claim_status: {},
    customer_stories: {
        video_thumbnail: "assets/images/productDetails/videoOvarlay.png",
        video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
};

export const mockDocumentsData: { status: boolean; data: { category: Array<{ name: string; documents: Array<{ file_name: string; pdf_download_link: string }> }> } } = {
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
