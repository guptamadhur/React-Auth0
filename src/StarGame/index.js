import React, { useState } from 'react';
import "./index.scss";
import Game from "./Game";

const StarGame = () => {
    const [gameId, setGameId] = useState(1);
    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default StarGame;