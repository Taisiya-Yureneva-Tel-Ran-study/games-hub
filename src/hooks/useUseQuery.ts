import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import FetchDataResponse from "../model/FetchDataResponse";

export default function useUseQuery<T>(queryKey: string[], endpoint: string, params?: any) {
        return useQuery<T[], Error> ({
        queryKey: queryKey,
        queryFn: async () =>  apiClient.get<FetchDataResponse<T>>(endpoint, params).then(res => res.data.results),
        staleTime: 3600 * 1000 * 24
    });
}