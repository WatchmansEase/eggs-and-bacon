import React from "react";
import { useNavigate } from "react-router-dom";

function IntroScreen() {
  const navigate = useNavigate();

  //Navigation screen for user to choose to play quiz or game
  return (
    <div className="intro-menu">
<<<<<<< HEAD
      <img className="logo" src="/real-or-no-real-logo_white.svg" alt="Real or No Real" />
=======
      <img className="logo" src="./RealorNotReal/src/components/images/real-or-no-real-logo_white.png" alt="Real or No Real"></img>
>>>>>>> a2a0e0616817eb7c6b0f2ae70c16cef3f24666bc
      <h1 className="tagline">Can <i>you</i> spot a deep fake?</h1>
      <container className="row">
        <container className="column">
          <button className="accent-button equal-button" onClick={() => navigate("/quiz")}>Take the knowledge quiz</button>
        </container>
        <container className="column">
          <button className="equal-button" onClick={() => navigate("/game")}>Play Real or No Real</button>
        </container>
      </container>
    </div>
  );
}

export default IntroScreen;


