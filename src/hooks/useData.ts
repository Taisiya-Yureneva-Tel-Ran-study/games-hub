import { useEffect, useState } from "react";
import api from "../services/api-client";
import FetchDataResponse from "../model/FetchDataResponse";
import { AxiosRequestConfig } from "axios";

export default function useData<T>(endpoint: string, config?: AxiosRequestConfig, params?: any[]): {data: T[], error: string, isLoading: boolean} {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        api.get<FetchDataResponse<T>>(endpoint, config).then(res => {
            setData(res.data.results);
            setError("");
        }).catch(err => {
            setError("Error fetching data. " + err.message);
            setData([]);
        }).finally(() => {
            setIsLoading(false);})
    }, params || []); // If params is not passed, use an empty array

    return {data, error, isLoading};
}