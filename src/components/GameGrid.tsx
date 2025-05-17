import { useEffect, useState } from "react";
import api from "../services/api-client";
import { Game, FetchGamesResponse } from "../model/FetchGamesTypes";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>();

    useEffect(() => {
        api.get<FetchGamesResponse>('/games').then(res => {
            setGames(res.data.results);
            console.log(res.data.results);
        });
    }, [])

    return (
        <SimpleGrid columns={{
            base: 1,
            sm: 2,
            md: 3}
        } gap="5" maxHeight="80vh" overflow="auto">
                {games?.map(g => <GameCard key={g.id} game={g} />

            )}
        </SimpleGrid>
    );
}

export default GameGrid;