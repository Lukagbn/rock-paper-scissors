import "./Navbar.sass";

function Navbar() {
  return (
    <header className="header">
      <h1 className="visuallyHidden">rps</h1>
      <h2>rock paper scissors</h2>
      <div className="score">
        <p>
          score <span>12</span>
        </p>
      </div>
    </header>
  );
}

export default Navbar;
