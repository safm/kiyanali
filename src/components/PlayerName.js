import React, { memo, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const PlayerName = (props) => {
  const { onSave } = props;
  const p1Input = useRef(null);
  const p2Input = useRef(null);
  const [storedPlayer1, setPlayer1] = useLocalStorage("player1", null);
  const [storedPlayer2, setPlayer2] = useLocalStorage("player2", null);

  const onSaveClicked = () => {
    const enteredPlayer1 = p1Input.current.value;
    const enteredPlayer2 = p2Input.current.value;
    if (enteredPlayer1 && enteredPlayer2) {
      setPlayer1(enteredPlayer1);
      setPlayer2(enteredPlayer2);

      if (typeof onSave === "function") {
        onSave({
          player1: enteredPlayer1,
          player2: enteredPlayer2,
        });
      }
    }
  };

  return (
    <div id="players">
      <h3>Enter player names to begin</h3>
      <div id="player1">
        <label htmlFor="playerName1">Player 1 Name:</label>
        <input type="text" id="playerName1" ref={p1Input} defaultValue={storedPlayer1} />
      </div>
      <div id="player1">
        <label htmlFor="playerName2">Player 2 Name:</label>
        <input type="text" id="playerName2" ref={p2Input} defaultValue={storedPlayer2} />
      </div>
      <button id="save" onClick={onSaveClicked}>
        Save
      </button>
    </div>
  );
};

export default memo(PlayerName);
