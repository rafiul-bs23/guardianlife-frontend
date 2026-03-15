export interface MancomHeroData {
    title: string;
    image_url: string;
}

export interface MancomMember {
    name: string;
    designation: string;
    image_url: string;
}

export interface MancomResponse {
    transaction_id: string;
    status: boolean;
    data: MancomMember[];
}

export interface MancomData {
    hero: MancomHeroData;
}
