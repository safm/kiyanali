import React from "react";
import ReactDOM from "react-dom";
import TicTacToe from "./tic-tac-toe/Game";

const App = () => {
  return (
    <>
      <TicTacToe />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
