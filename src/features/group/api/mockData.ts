import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "success": true,
    "transaction_id": "GLIL-GRP-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "GROUP INSURANCE ",
                "color": "#FFFFFF"
            },
            {
                "text": "SOLUTIONS",
                "color": "#FFFFFF"
            }
        ],
        "description": "GROUP INSURANCE IS MORE THAN JUST AN EMPLOYEE BENEFIT—IT IS A STRATEGIC INVESTMENT IN PEOPLE.",
        "background_image_url": "/src/assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "/src/assets/images/category/headerImage.jpg"
        }
    }
};
