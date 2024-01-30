import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './Cards.css';
import { ICards } from "../../types/ICards";
import { ICardUnit } from "../../types/ICardUnit";




const Cards: React.FC<ICards> = ({cards}) => {
    const [cardsUnit, setCardsUnit] = useState<ICardUnit[]>(cards.map(card => {
        return {
            ...card,
            click: 0,
        }
    }));

    

    function handleClick (id: number): void {
        setCardsUnit(prevCardsUnit => prevCardsUnit
            .map(item => item.id === id ? {...item, click: item.click + 1} : item))
    }

    function shuffleCard (): void {
        setCardsUnit(prevCardsUnit => {
            let currentIndex: number = prevCardsUnit.length, 
                temporaryValue: ICardUnit, 
                randomIndex: number;

            while (currentIndex !== 0) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = prevCardsUnit[currentIndex];
                prevCardsUnit[currentIndex] = prevCardsUnit[randomIndex];
                prevCardsUnit[randomIndex] = temporaryValue;
            }
            return prevCardsUnit;
        }) 
    }
    
    useEffect(() => {
        const lengthDoubleClick = cardsUnit.filter(card => card.click > 1).length;
        const lengthClick = cardsUnit.filter(card => card.click === 1).length;

        if (lengthDoubleClick >= 1) {
            console.log('Last');
        } 
        else if (lengthClick === cardsUnit.length){
            console.log('Win');  
        }

        shuffleCard();
    }, [cardsUnit]);

    return (
        <div className="cards">
            {cardsUnit.map(card => <Card 
                id={card.id} 
                src={card.src} 
                title={card.title} 
                key={card.id} 
                handleClick={handleClick}
            />)}
        </div>
    );
}

export default Cards;