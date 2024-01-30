import { ICard } from "../../types/ICard";
import './Card.css'


const Card: React.FC<ICard> = (props) => {
    return (
        <div className="card" onClick={() => props.handleClick(props.id)}>
            <img src={props.src} className="pictureCard" />
            <h3 className="titleCard">{props.title}</h3>
        </div>
    );
}

export default Card;