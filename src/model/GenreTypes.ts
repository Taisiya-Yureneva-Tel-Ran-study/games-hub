export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export interface FetchGenresResponse {
    count: number;
    results: Genre[];
}