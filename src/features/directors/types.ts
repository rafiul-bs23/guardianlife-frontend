export interface DirectorDetail {
    id: string;
    name: string;
    designation: string;
    biography: string;
    image: string;
}

export interface DirectorsData {
    directors: DirectorDetail[];
}
