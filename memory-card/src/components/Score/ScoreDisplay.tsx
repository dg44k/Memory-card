import { useState } from 'react';
import './ScoreDisplay.css'



const ScoreDisplay: React.FC = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
 

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