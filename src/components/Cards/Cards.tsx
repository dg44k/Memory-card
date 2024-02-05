import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";
import { ICard } from "../../types/ICard";

type ICards = {
  cards: ICard[];
  onClick: (score: number) => void;
  updateBestScore: (bestScore: number) => void;
};

type ICardUnit = {
  click: number;
  id: number;
  title: string;
  src: string;
};

const Cards: React.FC<ICards> = ({ cards, onClick, updateBestScore }) => {
  const [cardsUnit, setCardsUnit] = useState<ICardUnit[]>(
    cards.map((card) => {
      return {
        ...card,
        click: 0,
      };
    })
  );
  const [click, setClick] = useState();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function handleClick(id: number): void {
    setCardsUnit((prevCardsUnit) =>
      prevCardsUnit.map((item) =>
        item.id === id ? { ...item, click: item.click + 1 } : item
      )
    );
  }

  function shuffleCard(): void {
    setCardsUnit((prevCardsUnit) =>
      prevCardsUnit.sort(() => Math.random() - 0.5)
    );
  }

  function handleClickCard(score: number): void {
    setScore((prevScore) => prevScore + 1);
    onClick(score);
  }

  function changeBestScore(bestScore: number): void {
    setBestScore(bestScore);
    updateBestScore(bestScore);
  }

  function resetDate(): void {
    setScore(0);
    onClick(0);
    setCardsUnit((prevCardsUnit) =>
      prevCardsUnit.map((item) => {
        return { ...item, click: 0 };
      })
    );
  }

  useEffect(() => {
    const lengthDoubleClick = cardsUnit.filter((card) => card.click > 1).length;
    const lengthClick = cardsUnit.filter((card) => card.click === 1).length;

    if (lengthDoubleClick >= 1) {
      alert("Last");

      if (score > bestScore) {
        // score - 1 потому что последний клик считается также
        changeBestScore(score - 1);
      }
      resetDate();
    } else if (lengthClick === cardsUnit.length) {
      alert("Win");
      changeBestScore(cardsUnit.length);
      resetDate();
    } else {
      handleClickCard(score);
    }

    shuffleCard();
  }, [cardsUnit]);

  return (
    <div className="cards">
      {cardsUnit.map((card) => (
        <Card
          id={card.id}
          src={card.src}
          title={card.title}
          key={card.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Cards;
