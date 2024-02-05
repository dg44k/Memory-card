import "./Card.css";
import { ICard } from "../../types/ICard";


type TData = {
  handleClick: (id: number) => void;
} & ICard;

const Card: React.FC<TData> = (props) => {

  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <img src={props.src} className="pictureCard" />
      <h3 className="titleCard">{props.title}</h3>
    </div>
  );
};

export default Card;
