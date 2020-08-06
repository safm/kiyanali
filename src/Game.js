import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [tiles, setTile] = useState(Array(9).fill(null));
  const [userX, setUserX] = useState(true);

  const onTileClick = (position) => {
    if (!tiles[position]) {
      const tempTiles = [...tiles];
      const charToInsert = userX ? "X" : "O";
      tempTiles[position] = charToInsert;
      setTile(tempTiles);
      setUserX(!userX);
    }
  };

  return (
    <div id="game">
      <Board tiles={tiles} onTileClick={onTileClick} />
    </div>
  );
};

export default Game;
