import { Game } from "../model/FetchGamesTypes";
import useData from "./useData";

function useGame(): {data: Game[], error: string, isLoading: boolean} {
    return useData<Game>('/games');
};

export default useGame;