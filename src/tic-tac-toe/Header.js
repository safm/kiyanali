import React from "react";

const Header = ({ gameInPlay, winner, userX }) => {
  let msg = "";

  if (!gameInPlay) {
    msg = `Game Over! ${!winner ? "It's a tie" : `Player ${winner} is the winner`}`;
  } else {
    msg = `Next player: ${userX ? "X" : "O"}`;
  }

  return <div id="header">{msg}</div>;
};

export default Header;
