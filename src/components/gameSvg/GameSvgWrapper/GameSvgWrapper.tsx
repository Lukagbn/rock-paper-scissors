import { useState } from "react";
import Paper from "../Paper";
import Rock from "../Rock";
import Scissors from "../Scissors";
import "./GameSvgWrapper.sass";

interface GameProps {
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const GAME_RULES: Record<string, string> = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
};

function GameSvgWrapper({ setScore }: GameProps) {
  const [selected, setSelected] = useState<string>("");
  const [botSelected, setBotSelected] = useState<string>("");
  const [won, setWon] = useState<string>("");

  const handleUserChoice = (choice: string) => {
    setSelected(choice);

    const choices = ["paper", "scissors", "rock"];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setBotSelected(randomChoice);
    if (choice === randomChoice) {
      setWon("");
      return;
    }
    if (GAME_RULES[choice] === randomChoice) {
      setWon("player");
      setScore((prev) => prev + 1);
    } else {
      setWon("bot");
      setScore((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  const renderStaticSvg = (choice: string, label: string) => {
    const doNothing = () => {};
    return (
      <div className="choiceContainer">
        {choice === "paper" && <Paper setSelected={doNothing} />}
        {choice === "rock" && <Rock setSelected={doNothing} />}
        {choice === "scissors" && <Scissors setSelected={doNothing} />}
        <h4>{label}</h4>
      </div>
    );
  };

  const handleWinnerTitle = (won: string) => {
    switch (won) {
      case "player":
        return <h3>You Win</h3>;
      case "bot":
        return <h3>You lose</h3>;
      case "":
        return <h3>Tie</h3>;
    }
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
          <div className="buttonWrapper">
            {handleWinnerTitle(won)}
            <button onClick={handleReset} className="playAgainBtn">
              Play Again
            </button>
          </div>
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
