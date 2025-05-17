import { useEffect, useState } from "react";
import api from "../services/api-client";
import { Game, FetchGamesResponse } from "../model/FetchGamesTypes";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api.get<FetchGamesResponse>('/gaes').then(res => {
            setGames(res.data.results);
            setError(null);
        }).catch(err => {
            setError("Error fetching games. " + err.message);
            setGames([]);
        });
    }, []);
    
    return error ? <Text justifyItems={"center"}>{error}</Text> : 
         <SimpleGrid columns={{
            base: 1,
            sm: 2,
            md: 3}
        } gap="5" maxHeight="80vh" overflow="auto">
                {games?.map(g => <GameCard key={g.id} game={g} />

            )}
        </SimpleGrid> 
}

export default GameGrid;