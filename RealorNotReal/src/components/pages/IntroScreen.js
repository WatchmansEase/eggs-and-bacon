import React from "react";
import { useNavigate } from "react-router-dom";

function IntroScreen() {
  const navigate = useNavigate();

  //Navigation screen for user to choose to play quiz or game
  return (
    <div className="intro-menu">
      
      <h1>Information</h1>
      <button className="accent-button" onClick={() => navigate("/quiz")}>Take the knowledge quiz</button>
      <button onClick={() => navigate("/game")}>Play Real or No Real</button>
    </div>
  );
}

export default IntroScreen;
