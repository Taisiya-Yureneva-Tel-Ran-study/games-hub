import { SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { ErrorBox } from "./ErrorBox";
import useGame from "../hooks/useGame";

const GameGrid: React.FC = () => {

  const { error, data, isLoading } = useGame();
    const games = data;
    
    return isLoading ? <Spinner size="xl" color="green.100" /> :
        error ? <ErrorBox error={error} /> :
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