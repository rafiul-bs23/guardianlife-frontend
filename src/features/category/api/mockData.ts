import type { HeaderResponse } from "../../../shared/types/header";

export const MOCK_HEADER_DATA: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-CAT-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "SECURE YOUR ",
                "color": "#FFFFFF"
            },
            {
                "text": "FAMILY’S FUTURE,",
                "color": "#1E3161"
            },
            {
                "text": " PLAN YOUR RETIREMENT, OR PROTECT YOUR HEALTH—",
                "color": "#FFFFFF"
            },
            {
                "text": "WE’VE GOT YOU COVERED.",
                "color": "#1E3161"
            }
        ],
        "description": "",
        "background_image_url": "/src/assets/images/category/headerImage.jpg",
        "media": {
            "type": "image",
            "url": "/src/assets/images/category/headerImage.jpg"
        }
    }
};
