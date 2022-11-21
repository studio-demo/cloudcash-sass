import React from "react";
import { createBoard } from "@wixc3/react-board";
import { OutcomeStatistics } from "./outcome-statistics";

export default createBoard({
  name: "🧩 Outcome Statistics Section",
  Board: () => <OutcomeStatistics />,
  environmentProps: {
    canvasWidth: 874,
  },
});
