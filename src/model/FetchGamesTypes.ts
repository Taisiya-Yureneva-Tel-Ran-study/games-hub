import { PlatformObject } from "./Platform";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    platforms: PlatformObject[];
}

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}