import { Genre } from "../model/Genre";
import useUseQuery from "./useUseQuery";

function useGenre() {
    return useUseQuery<Genre> (["genres"], "/genres")
};

export default useGenre;