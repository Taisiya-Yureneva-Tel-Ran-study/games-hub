import { Game } from "../model/FetchGamesTypes";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { ErrorBox } from "./ErrorBox";
import useData from "../hooks/useData";

const GameGrid = () => {
    const {error, data} = useData<Game>('/games');
    const games = data;
    
    return error ? <ErrorBox error={error} /> :
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