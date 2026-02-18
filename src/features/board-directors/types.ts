export interface Director {
    id: string;
    name: string;
    designation: string;
    image: string;
}

export interface BoardDirectorsData {
    title: string;
    directors: Director[];
}
