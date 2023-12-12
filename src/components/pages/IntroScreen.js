import React from "react";
import { useNavigate } from "react-router-dom";

function IntroScreen() {
  const navigate = useNavigate();

  //Navigation screen for user to choose to play quiz or game
  return (
    <div className="intro-menu">

      <img className="logo" src="/real-or-no-real-logo_white.svg" alt="Real or No Real" />
      <h1 className="tagline">Can <i>you</i> spot a deep fake?</h1>
      <container className="row">
        <container className="column">
          <button className="accent-button equal-button" onClick={() => navigate("/quiz")}>Take the knowledge quiz</button>
        </container>
        <container className="column">
          <button className="equal-button" onClick={() => navigate("/game")}>Play Real or No Real</button>
        </container>
        <container className="column">
          <button className="equal-button" onClick={() => navigate("/api2")}>Use Our Deep Fake Detector</button>
        </container>
      </container>
    </div>
  );
}

export default IntroScreen;


