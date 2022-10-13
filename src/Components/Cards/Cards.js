import cardData from "./CardData";
import IndividualCard from "./IndividualCard";
import "../UX/styles.css";
import { useContext, useState } from "react";
import ScoreContext from "../../Store/score-display";
import Modal from "../Modal/Modal";

const Cards = (props) => {
  const scoreCtx = useContext(ScoreContext);

  const [gameStarted, setGameStarted] = useState(false);

  const [gameLost, setGameLost] = useState(false);

  const playAgainHandler = () => {
    setGameLost(false);
    scoreCtx.resetScore();
    setCurrentCard([]);
  };

  const startGameHandler = () => {
    setGameStarted(true);
  };

  const randomFunction = (cardData) => {
    const newArray = [];
    const randomNums = [];
    for (let i = 10; i > 0; ) {
      const random = Math.floor(Math.random() * cardData.length);
      if (!randomNums.includes(random)) {
        newArray.push(cardData[random]);
        randomNums.push(random);
        i--;
      }
    }
    return newArray;
  };

  const [currentCard, setCurrentCard] = useState([]);

  const cardOnClickHandler = (element) => {
    setCurrentCard([...currentCard, element.currentTarget.id]);
    if (currentCard.includes(element.currentTarget.id)) {
      props.maxScore(scoreCtx.currentScore);
      setGameLost(true);
    } else {
      scoreCtx.updateScore();
    }
  };

  return (
    <>
      {!gameStarted && (
        <Modal>
          <h3> Welcome!</h3>
          <p>Instructions: Don't click on the same image twice.</p>
          <button onClick={startGameHandler}>Let's Play</button>
        </Modal>
      )}
      {gameLost && (
        <Modal>
          <h3> You Lost!</h3>
          <p>Your score: {scoreCtx.currentScore}</p>
          <button onClick={playAgainHandler}>Play again!</button>
        </Modal>
      )}
      <div className="cards-container">
        {randomFunction(cardData).map((vegetable) => (
          <IndividualCard
            onClick={cardOnClickHandler}
            key={vegetable.id}
            id={vegetable.id}
            src={vegetable.src}
            object={vegetable.object}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
