import { Platform } from "../model/Platform";
import useData from "./useData";

function usePlatform(): {data: Platform[], error: string, isLoading: boolean} {
    return useData<Platform>('/platforms/lists/parents');
};

export default usePlatform;