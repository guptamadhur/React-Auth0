import React, { useState } from "react";
import "./index.scss";
import Game from "./Game";

const StarGame = () => {
  const [gameId, setGameId] = useState(1);
  const [startGame, toggleStartGame] = useState(false);
  return (
    <>
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars, You will get
          10 seconds.
        </div>
        {startGame ? (
          <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
        ) : (
          <div
            className="start-new"
            onClick={() => {
              setTimeout(() => toggleStartGame(true), 300);
            }}
          >
            Click to Start
          </div>
        )}
      </div>
    </>
  );
};

export default StarGame;
