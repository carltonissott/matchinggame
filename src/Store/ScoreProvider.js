import React, { useState } from "react";
import ScoreContext from "./score-display";

const ScoreProvider = (props) => {
  const [currentScore, setCurrentScore] = useState(0);

  const updateScore = () => {
    console.log("Updated!");
    setCurrentScore(currentScore + 1);
  };

  const resetScore = () => {
    console.log("Reset");
    setCurrentScore(0);
  };

  const scoreStateObject = {
    currentScore: currentScore,
    updateScore: updateScore,
    resetScore: resetScore,
  };

  return (
    <ScoreContext.Provider value={scoreStateObject}>
      {props.children}
    </ScoreContext.Provider>
  );
};

export default ScoreProvider;
