import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "success": true,
    "transaction_id": "GLIL-BNC-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "SECURE TOMORROW, ",
                "color": "#FFFFFF"
            },
            {
                "text": "STARTING TODAY",
                "color": "#1E3161"
            }
        ],
        "description": "CITY BANK, IN PARTNERSHIP WITH GUARDIAN LIFE INSURANCE LIMITED, BRINGS YOU TRUSTED LIFE INSURANCE SOLUTIONS DESIGNED TO PROTECT YOUR SAVINGS, FAMILY, AND FUTURE.",
        "background_image_url": "/src/assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "/src/assets/images/category/headerImage.jpg"
        }
    }
};
