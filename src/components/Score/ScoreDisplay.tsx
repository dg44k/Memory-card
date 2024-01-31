import './ScoreDisplay.css'
import { IScore } from '../../types/IScore';


const ScoreDisplay: React.FC<IScore> = ({score, bestScore}) => {

    return (
        <div className="scoreDisplay">
            <div className="score">
                Score: {score}
            </div>
            <div className="bestScore">
                Best Score: {bestScore}
            </div>
        </div>
    );
}

export default ScoreDisplay;