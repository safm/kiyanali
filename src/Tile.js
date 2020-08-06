import React from "react";

const Tile = (props) => {
  const { onClick: tileClicked, value, position } = props;
  return (
    <button
      className="tile"
      onClick={() => {
        tileClicked(position);
      }}
    >
      {value}
    </button>
  );
};

export default Tile;
