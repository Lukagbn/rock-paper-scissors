import { useState } from "react";
import Paper from "../Paper";
import Rock from "../Rock";
import Scissors from "../Scissors";
import "./GameSvgWrapper.sass";

function GameSvgWrapper() {
  const [selected, setSelected] = useState<string>("");
  const [botSelected, setBotSelected] = useState<string>("");

  const handleUserChoice = (choice: string) => {
    setSelected(choice);

    const choices = ["paper", "scissors", "rock"];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setBotSelected(randomChoice);
  };

  const renderStaticSvg = (choice: string, label: string) => {
    const doNothing = () => {};

    return (
      <div className="choiceContainer">
        {choice === "paper" && <Paper setSelected={doNothing} />}
        {choice === "rock" && <Rock setSelected={doNothing} />}
        {choice === "scissors" && <Scissors setSelected={doNothing} />}
        <h3>{label}</h3>
      </div>
    );
  };

  const handleReset = () => {
    setSelected("");
    setBotSelected("");
  };

  return (
    <div className="toolContainer">
      {selected ? (
        <div className="resultsContainer">
          {renderStaticSvg(selected, "Your Choice")}
          {renderStaticSvg(botSelected, "Bot's Choice")}

          <button onClick={handleReset} className="playAgainBtn">
            Play Again
          </button>
        </div>
      ) : (
        <div className="selectionContainer">
          <Paper setSelected={handleUserChoice} />
          <Rock setSelected={handleUserChoice} />
          <Scissors setSelected={handleUserChoice} />
        </div>
      )}
    </div>
  );
}

export default GameSvgWrapper;
