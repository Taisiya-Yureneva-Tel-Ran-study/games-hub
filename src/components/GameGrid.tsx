import React, { useEffect, useState } from "react";
import api from "../services/api-client";
import { Game, FetchGamesResponse } from "../model/FetchGamesTypes";
import { SimpleGrid, Box, Card, Image, Text } from "@chakra-ui/react";

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
                {games?.map(g => <Box key={g.id}>
                    <Image src={g.background_image} alt={"Image of " + g.name} height="100%"/>
                    <Text>{g.name}</Text>
                </Box>)}
        </SimpleGrid>
    );
}

export default GameGrid;