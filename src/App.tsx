import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "@fontsource/barlow-semi-condensed/400.css";
import "@fontsource/barlow-semi-condensed/600.css";
import "@fontsource/barlow-semi-condensed/700.css";
import GameSvgWrapper from "./components/gameSvg/GameSvgWrapper/GameSvgWrapper";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <GameSvgWrapper />
      </main>
    </div>
  );
}

export default App;
