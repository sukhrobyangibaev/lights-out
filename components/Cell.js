/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./Cell.css";

export default function Cell({ flipCellsAroundMe, isLit }) {
  function handleClick() {
    // call up to the board to flip cells around this cell
    flipCellsAroundMe();
  }

  const classes = `Cell ${isLit ? " Cell-lit" : ""}`;
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  return <td className={classes} onClick={handleClick} />;
}
