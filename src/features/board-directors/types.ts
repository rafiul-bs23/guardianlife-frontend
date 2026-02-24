export interface Director {
    id?: string;
    name: string;
    designation: string;
    image_url?: string;
}

export interface BoardDirectorsData {
    directors: Director[];
}

export interface BoardDirectorApiResponse {
    transaction_id: string;
    status: boolean;
    data: Director[];
}
