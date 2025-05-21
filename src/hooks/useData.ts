import { useEffect, useState } from "react";
import api from "../services/api-client";
import FetchDataResponse from "../model/FetchDataResponse";

export default function useData<T>(endpoint: string): {data: T[], error: string, isLoading: boolean} {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        api.get<FetchDataResponse<T>>(endpoint).then(res => {
            setData(res.data.results);
            setError("");
        }).catch(err => {
            setError("Error fetching data. " + err.message);
            setData([]);
        }).finally(() => {
            setIsLoading(false);})
    }, []);

    return {data, error, isLoading};
}