import type { HeaderResponse } from "../../../shared/types/header";
import type { TaxRebateDataResponse } from "../types";

export const MOCK_TAX_REBATE_HEADER_DATA: HeaderResponse = {
    "status": true,
    "transaction_id": "GLIL-TR-TXN-ID",
    "data": {
        "badge": null,
        "title": [
            {
                "text": "",
                "color": "#FFFFFF"
            }
        ],
        "description": "",
        "background_image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3273&auto=format&fit=crop",
        "media": {
            "type": "image",
            "url": "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=3270&auto=format&fit=crop"
        }
    }
};

export const MOCK_TAX_REBATE_DETAILS: TaxRebateDataResponse = {
    "status": true,
    "transaction_id": "GLIL-TR-DETAILS-TXN-ID",
    "data": {
        "thingsToRemember": {
            "title": "",
            "image": "/assets/images/tax-rebate/tax.png",
            "descriptionPoints": [],
            "ctaText": ""
        },
        "profitableInvestment": {
            "title": "",
            "points": []
        }
    }
};
