import { useContext } from "react";
import ScoreContext from "../../Store/score-display";

const ScoreDisplay = (props) => {
  const scoreCtx = useContext(ScoreContext);

  return (
    <div className="score-display">
      <p>Current Score: {scoreCtx.currentScore}</p>
      <p>Max Score: {props.maxScore} </p>
    </div>
  );
};

export default ScoreDisplay;
