import React, { useCallback, useEffect, useState } from "react";
import Board from "./Board";
import Header from "./Header";
import { checkWinner } from "./utils";

const Game = () => {
  const [winner, setWinner] = useState();
  const [gameState, setGameState] = useState({
    steps: [],
    tiles: Array(9).fill(null),
    userX: true,
    gameInPlay: true,
  });

  /**
   * Called after every tile is clicked to detect if we have a winner
   *
   */
  const checkForWinner = (boardState) => {
    const { steps } = gameState;
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
      setGameState((state) => {
        return {
          ...state,
          gameInPlay: false,
        };
      });
    }
  };

  /**
   * Called when a tile is clicked. It manages the state of tiles.
   *
   * @param {number} position - The position of the tile clicked.
   *
   */
  const onTileClick = (position) => {
    let tempTiles;
    setGameState((state) => {
      const { gameInPlay, tiles, steps, userX } = state;
      if (!tiles[position] && gameInPlay) {
        tempTiles = [...tiles];
        const charToInsert = userX ? "X" : "O";
        tempTiles[position] = charToInsert;
        return {
          ...state,
          tiles: [...tempTiles],
          userX: !userX,
          steps: [...steps, tiles],
        };
      } else {
        return { ...state };
      }
    });
  };
  const onTileClickCached = useCallback(onTileClick, []);

  /**
   * Called when a undo is clicked. It restores board's previous state.
   *
   */
  const undoLastAction = () => {
    setGameState((state) => {
      const { steps, userX } = state;
      const lastStep = steps.slice(-1);
      const otherSteps = steps.slice(0, -1);
      return {
        ...state,
        steps: otherSteps,
        tiles: lastStep[0],
        userX: !userX,
        gameInPlay: true,
      };
    });
  };

  /**
   * Called when a reset is clicked. It reset the board to be empty.
   *
   */
  const resetBoard = () => {
    setGameState({
      steps: [],
      tiles: Array(9).fill(null),
      userX: true,
      gameInPlay: true,
    });
  };

  /**
   * It generates the html for the undo button
   *
   * @returns - A button html or an empty string
   *
   */
  const generateFooterButton = () => {
    const { steps } = gameState;
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

  const { gameInPlay, userX, tiles } = gameState;

  useEffect(() => {
    const { tiles } = gameState;
    checkForWinner(tiles);
  }, [gameState.tiles]);

  return (
    <div id="game">
      <Header gameInPlay={gameInPlay} winner={winner} userX={userX} />
      <Board tiles={tiles} onTileClick={onTileClickCached} />
      <div id="footer">{generateFooterButton()}</div>
    </div>
  );
};

export default Game;
