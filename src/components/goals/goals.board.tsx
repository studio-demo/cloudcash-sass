import { createBoard } from "@wixc3/react-board";
import { Goals } from "./goals";

export default createBoard({
  name: "🧩 Goals Section",
  Board: () => <Goals />,
  environmentProps: {
    canvasWidth: 874,
  },
});
