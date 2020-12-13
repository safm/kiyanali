import React, { memo } from "react";

const Tile = (props) => {
  const { onClick: tileClicked, value, position, highlight } = props;
  return (
    <button
      className={"tile" + (highlight ? " highlight" : "")}
      onClick={() => {
        tileClicked(position);
      }}
    >
      {value}
    </button>
  );
};

export default memo(Tile);
