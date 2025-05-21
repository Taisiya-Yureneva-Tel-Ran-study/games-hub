import { Game } from "../model/FetchGamesTypes";
import useData from "./useData";

function useGame(genre: string | null): {data: Game[], error: string, isLoading: boolean} {
    return useData<Game>('/games', {params: {genres: genre}}, [genre]); // useData is a custom hook that fetches data from the API
};

export default useGame;