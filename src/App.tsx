import { css } from "../styled-system/css";
import { Button } from "./shared/Button";
import "./env"

function App() {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
