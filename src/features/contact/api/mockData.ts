import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "SECURE YOUR",
                "color": "#FFFFFF"
            },
            {
                "text": "FAMILY'S FUTURE,",
                "color": "#2E3192"
            },
            {
                "text": "PLAN YOUR RETIREMENT,",
                "color": "#FFFFFF"
            },
            {
                "text": "OR PROTECT YOUR HEALTH—",
                "color": "#FFFFFF"
            },
            {
                "text": "WE'VE GOT YOU COVERED.",
                "color": "#2E3192"
            }
        ],
        "description": undefined,
        "background_image_url": "assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "assets/images/category/headerImage.jpg"
        }
    }
};
