import React, { useCallback, useEffect, useState } from "react";
import Board from "./Board";
import Header from "./Header";
import Footer from "./Footer";
import PlayerName from "../components/PlayerName";
import { checkWinner } from "./utils";

const Game = () => {
  const [winner, setWinner] = useState();
  const [gameState, setGameState] = useState({
    steps: [],
    tiles: Array(9).fill(null),
    highlightTiles: Array(3).fill(null),
    userX: true,
    startedWithX: true,
    gameInPlay: true,
  });
  const [players, setPlayers] = useState({
    player1: {
      name: undefined,
      char: "X",
      score: 0,
    },
    player2: {
      name: undefined,
      char: "O",
      score: 0,
    },
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
        setWinner(status.winner);
      }
    }
    if (steps.length === 9 && !status) {
      status = "tie";
    }
    if (status) {
      setGameState((state) => {
        return {
          ...state,
          gameInPlay: false,
          highlightTiles: status.winningTiles || [],
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
  const onTileClick = useCallback((position) => {
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
  }, []);

  /**
   * Called when player names are entered.
   *
   * @param {object} players - An object containing player1 and player2 names
   *
   */
  const onPlayerNameSave = useCallback((players) => {
    setPlayers((state) => {
      let newState = { ...state };
      newState.player1.name = players.player1;
      newState.player2.name = players.player2;

      return newState;
    });
  }, []);

  /**
   * Called when a undo is clicked. It restores board's previous state.
   *
   */
  // const undoLastAction = () => {
  //   setGameState((state) => {
  //     const { steps, userX } = state;
  //     const lastStep = steps.slice(-1);
  //     const otherSteps = steps.slice(0, -1);
  //     return {
  //       ...state,
  //       steps: otherSteps,
  //       tiles: lastStep[0],
  //       userX: !userX,
  //       gameInPlay: true,
  //     };
  //   });
  // };

  /**
   * Called when a reset is clicked. It reset the board to be empty.
   *
   */
  const newGame = useCallback(() => {
    setGameState((state) => {
      return {
        steps: [],
        tiles: Array(9).fill(null),
        highlightTiles: Array(3).fill(null),
        userX: !state.startedWithX,
        startedWithX: !state.startedWithX,
        gameInPlay: true,
      };
    });
    setWinner(null);
  }, []);

  // this is called every time a tile is clicked
  useEffect(() => {
    const { tiles } = gameState;
    checkForWinner(tiles);
  }, [gameState.tiles]);

  // this is called every time a winner wins to update the score
  useEffect(() => {
    let winingPlayer;
    if (winner === "X") {
      winingPlayer = "player1";
    } else if (winner === "O") {
      winingPlayer = "player2";
    }
    if (winingPlayer) {
      setPlayers((state) => {
        let newState = { ...state };
        newState[winingPlayer].score = state[winingPlayer].score + 1;
        return newState;
      });
    }
  }, [winner]);

  const { gameInPlay, userX, tiles, highlightTiles } = gameState;

  return (
    <>
      <h2>Tic Tac Toe</h2>
      <div id="game">
        {!players.player1.name ? (
          <PlayerName onSave={onPlayerNameSave} />
        ) : (
          <>
            <Header gameInPlay={gameInPlay} winner={winner} userX={userX} players={players} />
            <Board tiles={tiles} onTileClick={onTileClick} tilesToHighlight={highlightTiles} />
            <Footer gameInPlay={gameInPlay} players={players} newGame={newGame} />
          </>
        )}
      </div>
    </>
  );
};

export default Game;
