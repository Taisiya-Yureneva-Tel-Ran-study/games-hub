import { useEffect, useState } from "react";
import api from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { ErrorBox } from "./ErrorBox";
import { FetchGenresResponse, Genre } from "../model/GenreTypes";

const GenreList = () => {
    const [genre, setGenre] = useState<Genre[]>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api.get<FetchGenresResponse>('/genrs').then(res => {
            setGenre(res.data.results);
            setError(null);
        }).catch(err => {
            setError("Error fetching games. " + err.message);
            setGenre([]);
        });
    }, []);
    
    return error ? <ErrorBox error={error} /> :
        <ul>
                {genre?.map(g => <Text key={g.id}>{g.name} </Text>

            )}
        </ul> 
}

export default GenreList;