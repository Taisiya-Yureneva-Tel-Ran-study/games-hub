import React from 'react';
import { Game } from '../model/FetchGamesTypes';
import { Badge, Box, Card, Image } from "@chakra-ui/react";

interface GameCardProps {
    game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    return (
        <Card.Root maxW="sm" overflow="hidden">
            <Image
                src={game.background_image}
                alt={game.name}
                height={"100%"}
            />
            <Card.Body gap="2">
                <Card.Title justifyContent="flex-end">
                    <Badge colorPalette={game.metacritic > 90 ? "green" : "gray"}
                        size='sm'
                        variant={game.metacritic > 90 ? "solid" : "subtle"}
                        borderRadius="full">
                        {game.metacritic}
                    </Badge>
                    {game.name}
                </Card.Title>
                <Card.Description>
                    Game description
                    <Box>
                    {game.platforms.map((p) => {
                        return  <Badge>{p.platform.name}</Badge>
})}
</Box>
                </Card.Description>
            </Card.Body>
        </Card.Root>)
}

export default GameCard;