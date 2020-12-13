import React from "react";
import Tile from "./Tile";

const Board = (props) => {
  const { tiles, onTileClick, tilesToHighlight } = props;
  return (
    <div id="board">
      {tiles.map((value, index) => {
        let highlight = tilesToHighlight.includes(index);
        return (
          <Tile
            onClick={onTileClick}
            position={index}
            key={`tile-${index}`}
            value={value}
            highlight={highlight}
          />
        );
      })}
    </div>
  );
};

export default Board;
