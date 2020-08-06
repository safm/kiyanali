import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [steps, setSteps] = useState([]);
  const [tiles, setTile] = useState(Array(9).fill(null));
  const [userX, setUserX] = useState(true);

  /**
   * Called when a tile is clicked. It manages the state of tiles.
   *
   * @param {number} position - The position of the tile clicked.
   *
   */
  const onTileClick = (position) => {
    if (!tiles[position]) {
      const tempTiles = [...tiles];
      const charToInsert = userX ? "X" : "O";
      tempTiles[position] = charToInsert;
      setTile(tempTiles);
      setUserX(!userX);
      setSteps([...steps, tiles]);
    }
  };

  /**
   * Called when a undo is clicked. It restores board's previous state.
   *
   */
  const undoLastAction = () => {
    const lastStep = steps.slice(-1);
    const otherSteps = steps.slice(0, -1);
    setSteps(otherSteps);
    setTile(lastStep[0]);
    setUserX(!userX);
  };

  /**
   * Called when a reset is clicked. It reset the board to be empty.
   *
   */
  const resetBoard = () => {
    setSteps([]);
    setTile(Array(9).fill(null));
    setUserX(true);
  };

  /**
   * It generates the html for the undo button
   *
   * @returns - A button html or an empty string
   *
   */
  const generateUndoButton = () => {
    if (steps.length) {
      return (
        <>
          <button id="undo" onClick={undoLastAction}>
            Undo
          </button>

          <button id="reset" onClick={resetBoard}>
            Reset
          </button>
        </>
      );
    } else {
      return "";
    }
  };

  return (
    <div id="game">
      <Board tiles={tiles} onTileClick={onTileClick} />
      <div id="footer">{generateUndoButton()}</div>
    </div>
  );
};

export default Game;
