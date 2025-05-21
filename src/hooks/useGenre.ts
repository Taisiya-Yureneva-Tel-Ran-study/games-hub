import { Genre } from "../model/Genre";
import useData from "./useData";

function useGenre(): {data: Genre[], error: string, isLoading: boolean} {
    return useData<Genre>('/genres');
};

export default useGenre;