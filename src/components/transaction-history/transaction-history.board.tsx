import React from "react";
import { createBoard } from "@wixc3/react-board";
import { TransactionHistory } from "./transaction-history";

export default createBoard({
  name: "🧩 Transaction History Section",
  Board: () => <TransactionHistory />,
  environmentProps: {
    canvasWidth: 874,
  },
});
