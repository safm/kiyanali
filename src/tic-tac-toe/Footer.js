import React from "react";

const Footer = ({ gameInPlay, players, newGame }) => {
  return (
    <div id="footer">
      <p>
        {players.player1.name}: {players.player1.score}
      </p>
      <p>
        {players.player2.name}: {players.player2.score}
      </p>
      {!gameInPlay ? (
        <button id="reset" onClick={newGame}>
          New Game
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
