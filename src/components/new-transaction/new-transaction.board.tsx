import { createBoard } from "@wixc3/react-board";
import { NewTransaction } from "./new-transaction";

export default createBoard({
  name: "🧩 New Transaction",
  Board: () => <NewTransaction />,
});
