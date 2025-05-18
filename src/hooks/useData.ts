import { useEffect, useState } from "react";
import api from "../services/api-client";
import FetchDataResponse from "../model/FetchDataResponse";

export default function useData<T>(endpoint: string): {data: T[], error: string} {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        api.get<FetchDataResponse<T>>(endpoint).then(res => {
            setData(res.data.results);
            setError("");
        }).catch(err => {
            setError("Error fetching games. " + err.message);
            setData([]);
        });
    }, []);

    return {data, error};
}