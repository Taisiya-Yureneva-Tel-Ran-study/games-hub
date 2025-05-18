import React from 'react';
import { Game } from '../model/FetchGamesTypes';
import { Badge, Box, Card, Float, Image, Text } from "@chakra-ui/react";

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
                <Card.Title justifyContent="flex-end" position={"relative"}>
                    {game.name}
                    <Float>
                        <Badge colorPalette={game.metacritic > 90 ? "green" : "gray"}
                            size='sm'
                            variant={game.metacritic > 90 ? "solid" : "subtle"}
                            borderRadius="full">
                            {game.metacritic}
                        </Badge>
                    </Float>
                </Card.Title>
                <Box h="12" overflow="auto" gap="2">
                    {game.platforms.map((p) => {
                        return <Badge key={p.platform.id}>{p.platform.name}</Badge>
                    })}
                </Box>
            </Card.Body>
        </Card.Root>)
}

export default GameCard;