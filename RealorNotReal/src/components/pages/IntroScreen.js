import React from "react";
import { useNavigate } from "react-router-dom";

function IntroScreen() {
  const navigate = useNavigate();

  //Navigation screen for user to choose to play quiz or game
  return (
    <div className="intro-menu">
      <h1>Information</h1>
      <button onClick={() => navigate("/quiz")}>Play Quiz</button>
      <button onClick={() => navigate("/game")}>Play Real or Not Real</button>
    </div>
  );
}

export default IntroScreen;
