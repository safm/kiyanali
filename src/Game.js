import React, { useState } from "react";
import Board from "./Board";
import Header from "./Header";
import { checkWinner } from "./utils";

const Game = () => {
  const [steps, setSteps] = useState([]);
  const [tiles, setTile] = useState(Array(9).fill(null));
  const [userX, setUserX] = useState(true);
  const [gameInPlay, setGameInPlay] = useState(true);
  const [winner, setWinner] = useState();

  /**
   * Called after every tile is clicked to detect if we have a winner
   *
   */
  const checkForWinner = (boardState) => {
    let status;
    if (steps.length > 3) {
      status = checkWinner(boardState);
      if (status) {
        setWinner(status);
      }
    }
    if (steps.length === 8 && !status) {
      status = "tie";
    }
    if (status) {
      setGameInPlay(false);
    }
  };

  /**
   * Called when a tile is clicked. It manages the state of tiles.
   *
   * @param {number} position - The position of the tile clicked.
   *
   */
  const onTileClick = (position) => {
    if (!tiles[position] && gameInPlay) {
      const tempTiles = [...tiles];
      const charToInsert = userX ? "X" : "O";
      tempTiles[position] = charToInsert;
      setTile(tempTiles);
      setUserX(!userX);
      setSteps([...steps, tiles]);
      checkForWinner(tempTiles);
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
    setGameInPlay(true);
  };

  /**
   * Called when a reset is clicked. It reset the board to be empty.
   *
   */
  const resetBoard = () => {
    setSteps([]);
    setTile(Array(9).fill(null));
    setUserX(true);
    setGameInPlay(true);
  };

  /**
   * It generates the html for the undo button
   *
   * @returns - A button html or an empty string
   *
   */
  const generateFooterButton = () => {
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
      <Header gameInPlay={gameInPlay} winner={winner} userX={userX} />
      <Board tiles={tiles} onTileClick={onTileClick} />
      <div id="footer">{generateFooterButton()}</div>
    </div>
  );
};

export default Game;
