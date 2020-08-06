import React from "react";
import Tile from "./Tile";

const Board = (props) => {
  const { tiles, onTileClick } = props;
  return (
    <div id="board">
      {tiles.map((value, index) => (
        <Tile onClick={onTileClick} position={index} key={`tile-${index}`} value={value} />
      ))}
    </div>
  );
};

export default Board;
