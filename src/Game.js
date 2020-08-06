import React from "react";
import Board from "./Board";

const Game = () => {
  const tiles = Array(9).fill(null);
  return (
    <div id="game">
      <Board tiles={tiles} />
    </div>
  );
};

export default Game;
