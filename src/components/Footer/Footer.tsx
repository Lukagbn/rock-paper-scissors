import "./Footer.sass";
import rules from "../../assets/rules.png";
import cross from "../../assets/cross.svg";
import { useState } from "react";

function Footer() {
  const [clicked, setClicked] = useState<boolean | false>(false);
  return (
    <footer className="footer">
      <button onClick={() => setClicked(true)}>Rules</button>
      {clicked && (
        <div className="overlay">
          <div className="rules">
            <div className="rulesHeader">
              <h4>RULES</h4>
              <img
                className="crossLg"
                src={cross}
                onClick={() => setClicked(false)}
              />
            </div>
            <img className="rulesImg" src={rules} />
            <img
              className="cross"
              src={cross}
              onClick={() => setClicked(false)}
            />
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
