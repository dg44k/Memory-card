import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import cardsDate from "../../api/cardsDate";
import ScoreDisplay from "../Score/ScoreDisplay";
import { useEffect, useState } from "react";

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
    <div className="root">
      <Header />
      <ScoreDisplay score={isClick} bestScore={bestScore} />
      <Cards
        cards={cardsDate}
        onClick={handleChangeScore}
        updateBestScore={handleChangeBestScore}
      />
      <Footer />
    </div>
  );
};

export default App;
