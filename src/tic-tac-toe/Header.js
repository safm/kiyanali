import React from "react";

const Header = ({ gameInPlay, winner, userX, players }) => {
  let msg = "";

  if (!gameInPlay) {
    msg = `Game Over! ${
      !winner
        ? "It's a tie"
        : `${winner === "X" ? `${players.player1.name}` : `${players.player2.name}`} is the winner`
    }`;
  } else {
    msg = `Next player: ${userX ? `${players.player1.name} (X)` : `${players.player2.name} (O)`}`;
  }

  return <div id="header">{msg}</div>;
};

export default Header;
