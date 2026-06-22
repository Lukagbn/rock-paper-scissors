import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "@fontsource/barlow-semi-condensed/400.css";
import "@fontsource/barlow-semi-condensed/600.css";
import "@fontsource/barlow-semi-condensed/700.css";
import GameSvgWrapper from "./components/gameSvg/GameSvgWrapper/GameSvgWrapper";
import { useState } from "react";

function App() {
  const [score, setScore] = useState<number | 0>(0);
  return (
    <div>
      <Navbar score={score ?? 0} />
      <main>
        <GameSvgWrapper setScore={setScore} />
      </main>
    </div>
  );
}

export default App;
