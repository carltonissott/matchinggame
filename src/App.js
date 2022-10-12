import "./Components/UX/styles.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import ScoreProvider from "./Store/ScoreProvider";
import { useState } from "react";

function App() {
  const [maxScore, setMaxScore] = useState(0);

  const passMaxScoreHandler = (e) => {
    if (e > maxScore) {
      setMaxScore(e);
    }
  };
  return (
    <div className="app-main">
      <ScoreProvider>
        <Header maxScore={maxScore} />
        <Cards maxScore={passMaxScoreHandler} />
      </ScoreProvider>
    </div>
  );
}

export default App;
