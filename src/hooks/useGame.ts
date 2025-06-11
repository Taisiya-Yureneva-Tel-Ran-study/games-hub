import { Game } from "../model/FetchGamesTypes";
import useGameQueryStore from "../state-manager/store";
import useUseQuery from "./useUseQuery";


function useGame() {
    const gameQuery = useGameQueryStore();
    console.log("useGame called with query:", gameQuery);

    return useUseQuery<Game>(['games', gameQuery.genre || "", gameQuery.platform?.name || "", gameQuery.searchText || "",
         gameQuery.sortBy || ""], "/games", {params: {search: gameQuery.searchText, 
            genres: gameQuery.genre, 
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortBy
        }});

};

export default useGame;