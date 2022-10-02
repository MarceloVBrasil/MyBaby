import React from "react";
import Board from "./Board";

export default function Boards() {
  return (
    <div className="flex">
      <Board word={"Love"} />
      <Board word={"Faith"} />
      <Board word={"Family"} />
      <Board word={"Daddy"} />
      <Board word={"mommy"} />
      <Board word={"Me"} />
    </div>
  );
}
