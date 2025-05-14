import React, { useEffect, useState } from "react";
import api from "../services/api-client";
import { Game, FetchGamesResponse } from "../model/FetchGamesTypes";

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>();

    useEffect(() => {
        api.get<FetchGamesResponse>('/games').then(res => {
            setGames(res.data.results);
            console.log(res.data.results);
        });
        
    }, [])

    return (
        <ul>
            {games?.map(g => <li key={g.id}>{g.name}</li>)}
        </ul>
    );
}

export default GameGrid;