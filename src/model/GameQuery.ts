import { Platform } from "./Platform";

export interface GameQuery {
    genre: string | null; // Genre slug or null if no genre is selected
    platform: Platform | null; // Platform or null if no platform is selected
    sortBy: string | null; // Sorting criteria, e.g., 'popularity', 'rating', etc.
    searchText: string | null;
}