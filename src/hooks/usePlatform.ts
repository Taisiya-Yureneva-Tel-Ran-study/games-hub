import { Platform } from "../model/Platform";
import useUseQuery from "./useUseQuery";

function usePlatform() {
    return useUseQuery<Platform> (["platforms"],"/platfoms/lists/parents");
};

export default usePlatform;