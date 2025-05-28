import { Game } from "../model/FetchGamesTypes";
import useData from "./useData";
import { GameQuery } from "../model/GameQuery";

function useGame(query: GameQuery): {data: Game[], error: string, isLoading: boolean} {
    return useData<Game>('/games', {params: {genres: query.genre, 
        parent_platforms: query.platform?.id,
        ordering: query.sortBy}}, [query]); 
};

export default useGame;