import { Game } from "../model/FetchGamesTypes";
import useData from "./useData";
import { GameQuery } from "../model/GameQuery";

function useGame({ query }: { query: GameQuery; }): {data: Game[], error: string, isLoading: boolean} {
    console.log("useGame called with query:", query);
    return useData<Game>('/games', {params: {search: query.searchText, genres: query.genre, 
        parent_platforms: query.platform?.id,
        ordering: query.sortBy
        }}, [query]); 
};

export default useGame;