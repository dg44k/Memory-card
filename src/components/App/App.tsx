import "./App.css";
import Cards from "../Cards/Cards";
import cardsDate from "../../api/cardsDate";
import ScoreDisplay from "../Score/ScoreDisplay";
import { useEffect, useState } from "react";
import LogoSVG from "../../assets/logoSvg.svg";

const App: React.FC = () => {
  const [isClick, setIsClick] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    alert("Welcome to the club body!");
  }, []);

  function handleChangeScore(score: number): void {
    setIsClick(score);
  }

  function handleChangeBestScore(bestScore: number): void {
    setBestScore(bestScore);
  }

  return (
    <>
      <header>
        <h1>Memory Card</h1>
      </header>
      <ScoreDisplay score={isClick} bestScore={bestScore} />
      <Cards
        cards={cardsDate}
        onClick={handleChangeScore}
        updateBestScore={handleChangeBestScore}
      />
      <footer>
        <a href="https://github.com/dg44k">
          <span>Best regards dg44k</span>
          <LogoSVG />
        </a>
      </footer>
    </>
  );
};

export default App;
