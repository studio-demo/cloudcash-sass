import React from "react";
import { createBoard } from "@wixc3/react-board";
import { IconButton } from "./icon-button";

export default createBoard({
  name: "Icon Button",
  Board: () => <IconButton glyph="add" />,
});
