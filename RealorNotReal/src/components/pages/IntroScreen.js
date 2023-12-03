import React from "react";
import { useNavigate } from "react-router-dom";

function IntroScreen() {
  const navigate = useNavigate();

  //Navigation screen for user to choose to play quiz or game
  return (
    <div className="intro-menu">
      <img className="logo" src="RealorNotReal/src/components/images/real-or-no-real-logo_white.svg" alt="Real or No Real"></img>
      <h1>Information</h1>
      <button className="accent-button" onClick={() => navigate("/quiz")}>Take the knowledge quiz</button>
      <button onClick={() => navigate("/game")}>Play Real or No Real</button>
    </div>
  );
}

export default IntroScreen;
