import React from "react";

export default function Board({ word }) {
  return (
    <>
      <div className="board">
        <h2>{word}</h2>
      </div>
    </>
  );
}
