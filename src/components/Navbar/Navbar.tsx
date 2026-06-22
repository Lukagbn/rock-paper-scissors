import "./Navbar.sass";

interface Score {
  score: number;
}

function Navbar({ score }: Score) {
  return (
    <header className="header">
      <h1 className="visuallyHidden">rps</h1>
      <h2>rock paper scissors</h2>
      <div className="score">
        <p>
          score <span>{score}</span>
        </p>
      </div>
    </header>
  );
}

export default Navbar;
