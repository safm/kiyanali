import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";

const App = () => {
  return (
    <>
      <Game />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
