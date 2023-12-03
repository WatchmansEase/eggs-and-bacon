import React from "react";
import { useNavigate } from "react-router-dom";

function IntroScreen() {
  const navigate = useNavigate();

  //Navigation screen for user to choose to play quiz or game
  return (
    <div className="intro-menu">
      <img className="logo" src="./RealorNotReal/src/components/images/real-or-no-real-logo_white.png" alt="Real or No Real"></img>
      <h1 className="tagline">Can <i>you</i> spot a deep fake?</h1>
      <container id="buttons">
        <button className="accent-button equal-button" onClick={() => navigate("/quiz")}>Take the knowledge quiz</button>
        <button className="equal-button" onClick={() => navigate("/game")}>Play Real or No Real</button>
      </container>
    </div>
  );
}

export default IntroScreen;
