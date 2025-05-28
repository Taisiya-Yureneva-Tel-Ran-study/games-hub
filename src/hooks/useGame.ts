import { Game } from "../model/FetchGamesTypes";
import { Platform } from "../model/Platform";
import useData from "./useData";

function useGame(genre: string | null, platform: Platform | null): {data: Game[], error: string, isLoading: boolean} {
    return useData<Game>('/games', {params: {genres: genre, parent_platforms: platform?.id}}, [genre, platform]); // useData is a custom hook that fetches data from the API
};

export default useGame;