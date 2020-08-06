import React from "react";
import Tile from "./Tile";

const Board = (props) => {
  const { tiles } = props;
  return (
    <div id="board">
      {tiles.map((value, index) => (
        <Tile key={`tile-${index}`} />
      ))}
    </div>
  );
};

export default Board;
