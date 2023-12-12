import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ResetButton from "../buttons/ResetButton";

function ResultScreen() {
  const navigate = useNavigate();
  const score = useSelector((state) => state.quiz.score); 
  
  //Result screen to display user quiz score and ask if they want to continue playing
  return (
    <div className="result-screen">
      <p className="tagline">You scored:</p>
      <p className="update">{score}%</p>
      <container className="row">
        <container className="column">
          <ResetButton />
        </container>
        <container className="column">
        <button className="submit-button" onClick={() => navigate("/game")}>Play Real or No Real</button>
        </container>
      </container>
    </div>
  );
}

export default ResultScreen;
