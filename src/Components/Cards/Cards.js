import cardData from "./CardData";
import IndividualCard from "./IndividualCard";
import "../UX/styles.css";
import { useContext, useState } from "react";
import ScoreContext from "../../Store/score-display";

const Cards = (props) => {
  const scoreCtx = useContext(ScoreContext);

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
      scoreCtx.resetScore();
      setCurrentCard([]);
    } else {
      scoreCtx.updateScore();
    }
  };

  return (
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
  );
};

export default Cards;
