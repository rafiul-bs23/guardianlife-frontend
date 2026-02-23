import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "success": true,
    "transaction_id": "GLIL-BAN-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "BANCASSURANCE SOLUTIONS BY ",
                "color": "#FFFFFF"
            },
            {
                "text": "GUARDIAN LIFE",
                "color": "#1E3161"
            }
        ],
        "description": "A SMARTER WAY TO PROTECT BANKING RELATIONSHIPS",
        "background_image_url": "/src/assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "/src/assets/images/category/headerImage.jpg"
        }
    }
};
