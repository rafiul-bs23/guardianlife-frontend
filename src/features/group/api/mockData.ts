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
    image_url: "assets/images/group/why matters.png",
};

export const MOCK_COVERAGE_DATA = {
    imgUrl: "assets/images/group/Comprehensive Coverage.png",
};

export const MOCK_LIFE_COVERAGE_DATA = {
    imgUrl: "assets/images/group/life coverage.png",
};

export const MOCK_CRITICAL_ILLNESS_DATA = {
    imgUrl: "assets/images/group/protection.jpg",
};

export const MOCK_TREATMENT_PLAN_DATA = {
    imgUrl: "assets/images/group/health coverage.jpg",
};

export const MOCK_MATERNITY_DATA = {
    imgUrl: "assets/images/group/Supporting Employees.jpg",
};

export const MOCK_OUTPATIENT_DATA = [
    {
        "product_code": "NRB-SP",
        "thumbnail_url": "assets/images/group/dentist-s.jpg"
    },
    {
        "product_code": "JAYA-01",
        "thumbnail_url": "assets/images/group/optical.jpg"
    }
];
