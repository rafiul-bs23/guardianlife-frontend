export interface DirectorDetail {
    id?: string;
    name: string;
    designation: string;
    description?: string;
    image_url?: string;
}

export interface DirectorsData {
    directors: DirectorDetail[];
}

export interface DirectorApiResponse {
    transaction_id: string;
    status: boolean;
    data: DirectorDetail[];
}
