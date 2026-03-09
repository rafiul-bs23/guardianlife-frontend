import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_GROUP_HEADER_DATA: HeaderResponse = {
    "transaction_id": "ENZNIFR0NRA46N",
    "status": true,
    "data": {
        "badge": null,
        "title": [
            {
                "text": "A PROTECTED WORKFORCE",
                "color": "#FFFFFF"
            },
            {
                "text": "IS MORE PRODUCTIVE",
                "color": "#8B5CF6"
            },
            {
                "text": "SO GIVE YOUR TEAM",
                "color": "#FFFFFF"
            },
            {
                "text": "THE SECURITY THEY NEED TODAY",
                "color": "#8B5CF6"
            }
        ],
        "description": null,
        "background_image_url": "https://glil-website.s3.ap-southeast-1.amazonaws.com/guardian-website/products/shield.jpg",
        "media": {
            "type": "image",
            "url": "https://glil-website.s3.ap-southeast-1.amazonaws.com/guardian-website/products/shield.jpg"
        }
    }
}

export const MOCK_BENEFITS_DATA = {
    image_url: "https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg?semt=ais_hybrid",
};

export const MOCK_COVERAGE_DATA = {
    imgUrl: "https://glilapi.guardianlife.com.bd/images/1725268980177-483331562-Guardian%20Health%20Insurance.png",
};

export const MOCK_LIFE_COVERAGE_DATA = {
    imgUrl: "https://glilapi.guardianlife.com.bd/images/1725268980177-483331562-Guardian%20Health%20Insurance.png",
};

export const MOCK_CRITICAL_ILLNESS_DATA = {
    imgUrl: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
};

export const MOCK_TREATMENT_PLAN_DATA = {
    imgUrl: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
};

export const MOCK_MATERNITY_DATA = {
    imgUrl: "https://glilapi.guardianlife.com.bd/images/1725268160788-397856237-Children.jpg",
};

export const MOCK_OUTPATIENT_DATA = [
    {
        "product_code": "NRB-SP",
        "thumbnail_url": "https://i.ibb.co/hV3q6K9/term-life-insurance-2.png"
    },
    {
        "product_code": "JAYA-01",
        "thumbnail_url": "https://i.ibb.co/hV3q6K9/term-life-insurance-2.png"
    }
];
